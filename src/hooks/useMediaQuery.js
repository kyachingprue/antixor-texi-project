import { useSyncExternalStore } from "react";

/** Subscribes to a CSS media query, e.g. useMediaQuery("(min-width: 1024px)") */
export default function useMediaQuery(query) {
  return useSyncExternalStore(
    (notify) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", notify);
      return () => mq.removeEventListener("change", notify);
    },
    () => window.matchMedia(query).matches,
    () => false
  );
}
