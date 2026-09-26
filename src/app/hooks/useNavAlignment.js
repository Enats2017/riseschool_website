"use client";
import { useState, useEffect } from "react";

/**
 * Measures the live nav's "Home" -> last-link span (desktop only, where the
 * links are visible) and returns left/right pixel offsets so page content
 * can align exactly under the nav links.
 *
 * On mobile/tablet, the desktop nav links are hidden ("hidden lg:flex"),
 * so their getBoundingClientRect() collapses to zero width/position.
 * In that case `aligned` is false and the caller should fall back to
 * normal responsive Tailwind padding instead of using left/right.
 */
export default function useNavAlignment() {
  const [state, setState] = useState({ left: 0, right: 0, aligned: false });

  useEffect(() => {
    function measure() {
      const home = document.getElementById("nav-home-link");
      const last = document.getElementById("nav-last-link");

      if (!home || !last) {
        setState({ left: 0, right: 0, aligned: false });
        return;
      }

      const homeRect = home.getBoundingClientRect();
      const lastRect = last.getBoundingClientRect();

      // Hidden elements (display: none under "hidden lg:flex") report
      // zero width — treat that as "nav links aren't visible right now".
      const linksAreVisible = homeRect.width > 0 && lastRect.width > 0;

      if (!linksAreVisible) {
        setState({ left: 0, right: 0, aligned: false });
        return;
      }

      setState({
        left: Math.max(homeRect.left, 16),
        right: Math.max(window.innerWidth - lastRect.right, 16),
        aligned: true,
      });
    }

    measure();
    window.addEventListener("resize", measure);
    // Re-check shortly after mount in case webfonts shift link widths
    // after first paint, and once more after typical font-swap timing.
    const t1 = setTimeout(measure, 150);
    const t2 = setTimeout(measure, 500);
    return () => {
      window.removeEventListener("resize", measure);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return state;
}