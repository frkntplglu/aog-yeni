"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(max-width: 767px), (prefers-reduced-motion: reduce)";

function subscribe(cb: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", cb);
  return () => mql.removeEventListener("change", cb);
}

/**
 * True on small screens or when the user prefers reduced motion.
 * Used to switch off scroll-linked parallax, which is costly on mobile.
 */
export function useLiteMotion() {
  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(QUERY).matches,
    () => false,
  );
}
