import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, MapPin } from "lucide-react";
import CarIllustration from "../components/CarIllustration.jsx";
import Skyline from "../components/Skyline.jsx";
import { Reveal } from "../components/Reveal.jsx";

export default function CTABanner() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-500 py-14 sm:py-16 lg:py-20">
      <Skyline className="absolute inset-x-0 bottom-0 -z-10 h-full w-full text-brand-600/45" seed={33} />
      <div className="container-x grid items-center gap-8 md:grid-cols-2">
        <Reveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-navy-900/70">Let's ride</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl">Ready to Book Your Ride?</h2>
          <p className="mt-3 max-w-md text-sm text-navy-900/80 sm:text-base">
            It only takes a few seconds. Your next ride is just a click away.
          </p>
          <Link to="/#booking" className="btn-dark mt-6">
            Book Now <ArrowRight className="size-4" />
          </Link>
        </Reveal>

        <div className="relative mx-auto w-full max-w-md md:max-w-none">
          <motion.div
            className="absolute -top-6 right-6 text-navy-900"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <MapPin className="size-12 fill-navy-900/10" strokeWidth={2.2} />
          </motion.div>
          <div className="pt-10">
            <CarIllustration taxi type="sedan" body="#ffd23f" className="relative z-10 mx-auto w-4/5 drop-shadow-[0_20px_20px_rgba(10,20,40,.35)]" />
            <div className="-mt-3 h-6 rounded-full bg-navy-900" />
          </div>
        </div>
      </div>
    </section>
  );
}
