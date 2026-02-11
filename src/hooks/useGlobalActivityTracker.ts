import { useEffect, useRef, useCallback } from "react";
import { useLocation } from "react-router-dom";
import { trackEvent } from "@/lib/analytics";

// ─── Helpers ────────────────────────────────────────────────

/** Get a readable descriptor for any DOM element */
const getElementDescriptor = (el: HTMLElement): Record<string, string> => {
  const tag = el.tagName.toLowerCase();
  const text = (el.textContent || "").trim().slice(0, 100);
  const id = el.id || undefined;
  const className =
    typeof el.className === "string"
      ? el.className.split(" ").slice(0, 3).join(" ")
      : undefined;
  const href = (el as HTMLAnchorElement).href || undefined;
  const name = el.getAttribute("name") || undefined;
  const ariaLabel = el.getAttribute("aria-label") || undefined;

  const descriptor: Record<string, string> = { tag };
  if (id) descriptor.element_id = id;
  if (className) descriptor.element_class = className;
  if (text) descriptor.element_text = text;
  if (href) descriptor.link_url = href;
  if (name) descriptor.element_name = name;
  if (ariaLabel) descriptor.aria_label = ariaLabel;

  return descriptor;
};

/** Walk up the DOM to find the closest meaningful element */
const findMeaningfulTarget = (el: HTMLElement): HTMLElement => {
  let current: HTMLElement | null = el;
  const interactiveTags = ["A", "BUTTON", "INPUT", "SELECT", "TEXTAREA"];
  const interactiveRoles = ["button", "link", "tab", "menuitem", "checkbox", "radio"];

  while (current && current !== document.body) {
    if (
      interactiveTags.includes(current.tagName) ||
      interactiveRoles.includes(current.getAttribute("role") || "") ||
      current.hasAttribute("data-track")
    ) {
      return current;
    }
    current = current.parentElement;
  }
  return el;
};

// ─── The Hook ───────────────────────────────────────────────

/**
 * Global activity tracker that captures every meaningful user interaction
 * and sends it to GA4 — no per-component code needed.
 *
 * Tracked events:
 * - Every click (buttons, links, images, cards, anything)
 * - Form submissions
 * - Input field focus & blur
 * - Text selection / copy
 * - Scroll depth milestones (25%, 50%, 75%, 100%)
 * - Tab visibility (user leaves / returns to tab)
 * - Right-clicks (context menu)
 * - Keyboard shortcuts (Ctrl+C, Ctrl+V, Ctrl+P, etc.)
 */
export const useGlobalActivityTracker = () => {
  const location = useLocation();
  const scrollMilestones = useRef(new Set<number>());
  const page = location.pathname;

  // Reset scroll milestones on route change
  useEffect(() => {
    scrollMilestones.current.clear();
  }, [page]);

  // ── Click Tracking ──────────────────────────────────────
  const handleClick = useCallback(
    (e: MouseEvent) => {
      const raw = e.target as HTMLElement;
      if (!raw) return;

      const el = findMeaningfulTarget(raw);
      const desc = getElementDescriptor(el);

      // Determine click type
      const isExternal =
        el.tagName === "A" &&
        (el as HTMLAnchorElement).hostname !== window.location.hostname;

      trackEvent(isExternal ? "outbound_click" : "click", {
        ...desc,
        page,
        x: e.clientX,
        y: e.clientY,
      });
    },
    [page]
  );

  // ── Right-click / Context Menu ──────────────────────────
  const handleContextMenu = useCallback(
    (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      if (!el) return;

      trackEvent("right_click", {
        ...getElementDescriptor(el),
        page,
      });
    },
    [page]
  );

  // ── Form Submit ─────────────────────────────────────────
  const handleSubmit = useCallback(
    (e: Event) => {
      const form = e.target as HTMLFormElement;
      if (!form || form.tagName !== "FORM") return;

      trackEvent("form_submit", {
        form_id: form.id || undefined,
        form_name: form.getAttribute("name") || undefined,
        form_action: form.action || undefined,
        page,
      });
    },
    [page]
  );

  // ── Input Focus / Blur ──────────────────────────────────
  const handleFocus = useCallback(
    (e: FocusEvent) => {
      const el = e.target as HTMLElement;
      if (!el) return;
      const tag = el.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") {
        trackEvent("field_focus", {
          ...getElementDescriptor(el),
          field_type: (el as HTMLInputElement).type || tag.toLowerCase(),
          page,
        });
      }
    },
    [page]
  );

  const handleBlur = useCallback(
    (e: FocusEvent) => {
      const el = e.target as HTMLElement;
      if (!el) return;
      const tag = el.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") {
        const value = (el as HTMLInputElement).value;
        trackEvent("field_blur", {
          ...getElementDescriptor(el),
          field_type: (el as HTMLInputElement).type || tag.toLowerCase(),
          has_value: value ? "yes" : "no",
          page,
        });
      }
    },
    [page]
  );

  // ── Text Selection / Copy ───────────────────────────────
  const handleCopy = useCallback(
    () => {
      const selectedText = window.getSelection()?.toString().trim();
      if (!selectedText) return;

      trackEvent("text_copy", {
        copied_text: selectedText.slice(0, 200),
        page,
      });
    },
    [page]
  );

  // ── Scroll Depth ────────────────────────────────────────
  const handleScroll = useCallback(() => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    if (docHeight <= 0) return;

    const percent = Math.round((scrollTop / docHeight) * 100);
    const milestones = [25, 50, 75, 100];

    for (const milestone of milestones) {
      if (percent >= milestone && !scrollMilestones.current.has(milestone)) {
        scrollMilestones.current.add(milestone);
        trackEvent("scroll_depth", {
          depth: `${milestone}%`,
          page,
        });
      }
    }
  }, [page]);

  // ── Tab Visibility ──────────────────────────────────────
  const handleVisibilityChange = useCallback(() => {
    trackEvent("visibility_change", {
      state: document.visibilityState, // "visible" or "hidden"
      page,
    });
  }, [page]);

  // ── Keyboard Shortcuts ──────────────────────────────────
  const handleKeydown = useCallback(
    (e: KeyboardEvent) => {
      if (!e.ctrlKey && !e.metaKey) return; // only track Ctrl/Cmd combos

      const keyMap: Record<string, string> = {
        c: "copy",
        v: "paste",
        a: "select_all",
        p: "print",
        s: "save",
        f: "find",
      };

      const action = keyMap[e.key.toLowerCase()];
      if (action) {
        trackEvent("keyboard_shortcut", {
          shortcut: `Ctrl+${e.key.toUpperCase()}`,
          action,
          page,
        });
      }
    },
    [page]
  );

  // ── Attach all listeners ────────────────────────────────
  useEffect(() => {
    // Use { capture: true } so we catch events even if stopPropagation is called
    document.addEventListener("click", handleClick, { capture: true });
    document.addEventListener("contextmenu", handleContextMenu, { capture: true });
    document.addEventListener("submit", handleSubmit, { capture: true });
    document.addEventListener("focusin", handleFocus, { capture: true });
    document.addEventListener("focusout", handleBlur, { capture: true });
    document.addEventListener("copy", handleCopy);
    document.addEventListener("keydown", handleKeydown, { capture: true });
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Throttle scroll to fire at most once every 500ms
    let scrollTimeout: ReturnType<typeof setTimeout> | null = null;
    const throttledScroll = () => {
      if (scrollTimeout) return;
      scrollTimeout = setTimeout(() => {
        handleScroll();
        scrollTimeout = null;
      }, 500);
    };
    window.addEventListener("scroll", throttledScroll, { passive: true });

    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
      document.removeEventListener("contextmenu", handleContextMenu, { capture: true });
      document.removeEventListener("submit", handleSubmit, { capture: true });
      document.removeEventListener("focusin", handleFocus, { capture: true });
      document.removeEventListener("focusout", handleBlur, { capture: true });
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("keydown", handleKeydown, { capture: true });
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("scroll", throttledScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [
    handleClick,
    handleContextMenu,
    handleSubmit,
    handleFocus,
    handleBlur,
    handleCopy,
    handleScroll,
    handleVisibilityChange,
    handleKeydown,
  ]);
};
