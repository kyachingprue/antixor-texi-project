import { motion } from "motion/react";

export default function PageLoader() {
  return (
    <div className="grid min-h-[60vh] place-items-center bg-white" role="status" aria-label="Loading">
      <motion.span
        className="size-10 rounded-full border-4 border-brand-500 border-t-transparent"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, ease: "linear", duration: 0.8 }}
      />
    </div>
  );
}
