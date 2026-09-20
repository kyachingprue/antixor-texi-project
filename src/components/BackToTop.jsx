import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "motion/react";
import { ArrowUp } from "lucide-react";

/**
 * Fixed "back to top" indicator. It appears only after the hero/banner
 * (the element marked with `data-hero`) has scrolled out of view, and its
 * ring shows how far down the page you are.
 */
export default function BackToTop() {
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, restDelta: 0.001 });
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const hero = document.querySelector("[data-hero]");
    const threshold = hero ? hero.offsetHeight - 120 : window.innerHeight * 0.8;
    setVisible(y > threshold);
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0.5, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 24 }}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 380, damping: 26 }}
          className="fixed bottom-5 right-4 z-40 grid size-12 place-items-center rounded-full bg-brand-500 text-navy-900 shadow-xl shadow-black/30 hover:bg-brand-400 sm:bottom-7 sm:right-7 sm:size-14"
        >
          <svg viewBox="0 0 48 48" className="absolute inset-0 -rotate-90" aria-hidden="true">
            <circle cx="24" cy="24" r="21" fill="none" stroke="rgba(10,20,40,.18)" strokeWidth="3" />
            <motion.circle
              cx="24"
              cy="24"
              r="21"
              fill="none"
              stroke="#0a1428"
              strokeWidth="3"
              strokeLinecap="round"
              style={{ pathLength: progress }}
            />
          </svg>
          <ArrowUp className="relative size-5 sm:size-6" strokeWidth={2.75} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
