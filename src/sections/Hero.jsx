import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Star } from "lucide-react";
import CarIllustration from "../components/CarIllustration.jsx";
import Skyline from "../components/Skyline.jsx";
import { EASE } from "../components/Reveal.jsx";
import { heroHighlights } from "../data.js";

const up = (delay) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, delay, ease: EASE },
});

export default function Hero() {
  return (
    <section
      data-hero
      className="relative isolate overflow-hidden bg-navy-900 pb-36 pt-28 sm:pb-40 sm:pt-32 lg:pb-44 lg:pt-36"
    >
      {/* Dusk sky */}
      <div
        className="absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(180deg,#0a1428 0%,#141c47 38%,#3e2f68 66%,#b8583f 88%,#f0873a 100%)",
        }}
      />
      <div className="absolute -bottom-10 right-1/4 -z-10 size-[26rem] rounded-full bg-orange-400/30 blur-3xl" />
      <Skyline className="absolute inset-x-0 bottom-0 -z-10 h-[62%] w-full text-navy-800/70" seed={3} spire={1060} />
      <Skyline className="absolute inset-x-0 bottom-0 -z-10 h-[40%] w-full text-navy-950/80" seed={9} />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-28 bg-linear-to-t from-navy-950 to-transparent" />

      <div className="container-x grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-6">
        <div>
          <motion.p
            {...up(0.05)}
            className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-slate-200"
          >
            Your ride, our priority
          </motion.p>
          <motion.h1
            {...up(0.15)}
            className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl xl:text-[3.5rem]"
          >
            Fast. Safe. Reliable.
            <span className="mt-1 block text-brand-400">Anytime, Anywhere.</span>
          </motion.h1>
          <motion.p {...up(0.25)} className="mt-5 max-w-md text-sm leading-relaxed text-slate-300 sm:text-base">
            Book your taxi in seconds with Antixor taxi.com. Safe rides, professional drivers and comfortable
            journeys — always at your service.
          </motion.p>

          <motion.ul {...up(0.35)} className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
            {heroHighlights.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-sm font-semibold text-white">
                <span className="grid size-8 place-items-center rounded-full border border-brand-400/60 text-brand-400">
                  <Icon className="size-4" />
                </span>
                {label}
              </li>
            ))}
          </motion.ul>

          <motion.div {...up(0.45)} className="mt-8">
            <Link to="/#booking" className="btn-primary">
              Book Your Ride <ArrowRight className="size-4" />
            </Link>
          </motion.div>
        </div>

        {/* Taxi drives in, then gently floats */}
        <div className="relative mx-auto w-full max-w-xl lg:-mr-10 lg:max-w-none xl:-mr-20">
          <motion.div
            initial={{ opacity: 0, x: 140 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, delay: 0.3, ease: EASE }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            >
              <CarIllustration taxi type="sedan" body="#ffb800" className="w-full drop-shadow-[0_30px_35px_rgba(0,0,0,.45)]" />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="absolute bottom-0 right-4 hidden items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-3 py-2 text-white backdrop-blur-md sm:flex"
          >
            <Star className="size-4 fill-brand-400 text-brand-400" />
            <span className="text-sm font-bold">4.9</span>
            <span className="text-xs text-slate-300">rider rating</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="absolute left-2 top-4 hidden rounded-2xl border border-white/15 bg-white/10 px-3 py-2 text-white backdrop-blur-md sm:block"
          >
            <p className="text-[10px] uppercase tracking-wider text-slate-300">Driver arriving in</p>
            <p className="text-lg font-extrabold text-brand-400">3 min</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
