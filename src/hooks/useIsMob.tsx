import { useEffect, useState } from "react";

const BREAKPOINTS = {
  xs: 375,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export function useViewportLookUp() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const handler = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => setWidth(window.innerWidth), 150);
    };

    window.addEventListener("resize", handler);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", handler);
    };
  }, []);

  return {
    isMobile: width < BREAKPOINTS.sm,
    isTablet: width >= BREAKPOINTS.sm && width < BREAKPOINTS.lg,
    isDesktop: width >= BREAKPOINTS.lg,

    lessXS: width < BREAKPOINTS.xs,
    lessSM: width < BREAKPOINTS.sm,
    lessMD: width < BREAKPOINTS.md,
    lessLG: width < BREAKPOINTS.lg,
    lessXL: width < BREAKPOINTS.xl,
    less2XL: width < BREAKPOINTS["2xl"],

    moreXS: width >= BREAKPOINTS.xs,
    moreSM: width >= BREAKPOINTS.sm,
    moreMD: width >= BREAKPOINTS.md,
    moreLG: width >= BREAKPOINTS.lg,
    moreXL: width >= BREAKPOINTS.xl,
    more2XL: width >= BREAKPOINTS["2xl"],
  };
}
