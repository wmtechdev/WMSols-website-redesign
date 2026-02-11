import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "@/lib/analytics";

/**
 * Hook that tracks page views on every route change.
 * Must be used inside a <BrowserRouter> component.
 *
 * This fixes the SPA issue where GA4 only records the initial page load
 * and misses all subsequent client-side navigations.
 */
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Send a page view to GA4 every time the route changes
    trackPageView(location.pathname + location.search);
  }, [location]);
};
