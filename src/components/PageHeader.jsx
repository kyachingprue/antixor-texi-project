import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import Skyline from "./Skyline.jsx";
import { EASE } from "./Reveal.jsx";

/** Compact dark banner used at the top of every inner page. */
export default function PageHeader({ title, text, crumb }) {
  return (
    <section
      data-hero
      className="relative isolate overflow-hidden bg-navy-900 pb-16 pt-32 sm:pb-20 sm:pt-36"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "linear-gradient(180deg,#0a1428 0%,#1a2050 60%,#57376a 100%)" }}
      />
      <Skyline className="absolute inset-x-0 bottom-0 -z-10 h-2/3 w-full text-navy-800/80" seed={11} spire={980} />
      <div className="container-x">
        <motion.nav
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          aria-label="Breadcrumb"
          className="mb-4 flex items-center gap-1 text-sm text-slate-300"
        >
          <Link to="/" className="hover:text-brand-400">Home</Link>
          <ChevronRight className="size-4" />
          <span className="text-brand-400">{crumb ?? title}</span>
        </motion.nav>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl"
        >
          {title}
        </motion.h1>
        {text && (
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            className="mt-4 max-w-2xl text-base text-slate-300"
          >
            {text}
          </motion.p>
        )}
      </div>
    </section>
  );
}
