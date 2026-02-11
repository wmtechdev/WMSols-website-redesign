import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { usePageTracking } from "@/hooks/usePageTracking";
import { useGlobalActivityTracker } from "@/hooks/useGlobalActivityTracker";

import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Careers from "./pages/Careers";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";

const queryClient = new QueryClient();

/** Inner component that lives inside BrowserRouter so hooks like useLocation work */
const AppRoutes = () => {
  // Track every route change in Google Analytics
  usePageTracking();

  // Track every user interaction globally (clicks, scrolls, forms, etc.)
  useGlobalActivityTracker();

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="" element={<Portfolio />} />
      <Route path="/services" element={<Services />} />
      {/* <Route path="/projects" element={<Projects />} /> */}
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/case-studies" element={<CaseStudies />} />
      <Route path="/case-studies/:slug" element={<CaseStudyDetail />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
