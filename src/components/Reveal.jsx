import { motion } from "motion/react";

export const EASE = [0.22, 1, 0.36, 1];

/** Fade + slide in when the element scrolls into view. */
export function Reveal({ children, className, delay = 0, y = 32, x = 0, amount = 0.2 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Parent that staggers its <Item> children as it scrolls into view. */
export function Stagger({ children, className, stagger = 0.1, delay = 0, amount = 0.15 }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
    >
      {children}
    </motion.div>
  );
}

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

export function Item({ children, className }) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
