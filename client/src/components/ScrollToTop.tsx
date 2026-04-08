import { useEffect } from "react";
import { useLocation } from "wouter";

export default function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    // Scroll to top instantly on route change
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    // Fallback for mobile browsers
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location]);

  return null;
}
