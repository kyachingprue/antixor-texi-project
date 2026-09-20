import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Plane } from "lucide-react";
import CarIllustration from "../components/CarIllustration.jsx";
import Skyline from "../components/Skyline.jsx";
import { Reveal } from "../components/Reveal.jsx";

export default function AirportBanner() {
  return (
    <section className="bg-white pb-16 sm:pb-20">
      <div className="container-x">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-3xl px-6 pb-16 pt-12 sm:px-10 sm:pt-14 lg:px-14 lg:pt-16">
            <div
              className="absolute inset-0 -z-20"
              style={{ background: "linear-gradient(180deg,#0f1e3a 0%,#4a3468 50%,#e58a3d 100%)" }}
            />
            <Skyline className="absolute inset-x-0 bottom-0 -z-10 h-3/4 w-full text-navy-900/80" seed={14} />
            <div className="absolute inset-x-0 bottom-0 -z-10 h-9 bg-navy-950">
              <div className="absolute inset-x-0 top-1/2 h-0.5 bg-[repeating-linear-gradient(90deg,#ffc82c_0_28px,transparent_28px_56px)]" />
            </div>

            {/* plane crossing the sky */}
            <motion.div
              className="absolute right-0 top-6 -z-10 text-white/80"
              animate={{ x: [60, -40, 60], y: [0, -6, 0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            >
              <Plane className="size-8 -rotate-12" />
            </motion.div>

            <div className="grid items-center gap-8 md:grid-cols-[1.1fr_1fr]">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-400">Airport transfer</p>
                <h2 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">Travel Without Worries</h2>
                <p className="mt-3 max-w-md text-sm text-slate-200 sm:text-base">
                  On-time pickups, real-time tracking and professional drivers for a smooth airport transfer
                  experience.
                </p>
                <Link to="/#booking" className="btn-primary mt-6">
                  Book Airport Ride <ArrowRight className="size-4" />
                </Link>
              </div>
              <CarIllustration
                type="suv"
                body="#1a2130"
                className="mx-auto -mb-6 w-full max-w-md drop-shadow-[0_25px_25px_rgba(0,0,0,.5)] md:translate-x-6"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
