import { motion } from "motion/react";
import { Check, MapPin, Star } from "lucide-react";
import CarIllustration from "../components/CarIllustration.jsx";
import { StoreButtons } from "../components/Footer.jsx";
import { Item, Reveal, Stagger } from "../components/Reveal.jsx";
import { appFeatures } from "../data.js";

function Phone({ className = "", children }) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border-[6px] border-navy-900 bg-white shadow-2xl shadow-navy-900/30 ${className}`}
    >
      <div className="absolute left-1/2 top-1.5 z-10 h-3.5 w-16 -translate-x-1/2 rounded-full bg-navy-900" />
      {children}
    </div>
  );
}

function MapScreen() {
  return (
    <div className="flex h-full flex-col pt-6">
      <div className="relative flex-1 bg-slate-100">
        <svg viewBox="0 0 160 200" className="absolute inset-0 size-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
          <g stroke="#fff" strokeWidth="6" fill="none" strokeLinecap="round">
            <path d="M-10 40 L170 60" /><path d="M-10 120 L170 100" /><path d="M40 -10 L60 210" /><path d="M120 -10 L100 210" />
          </g>
          <path d="M50 165 C52 130 110 130 108 90 S70 60 96 30" stroke="#2f6bff" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeDasharray="1 0" />
          <circle cx="96" cy="30" r="6" fill="#0a1428" />
          <circle cx="50" cy="165" r="7" fill="#ffb800" stroke="#fff" strokeWidth="2.5" />
        </svg>
      </div>
      <div className="space-y-2 bg-white p-3">
        <p className="text-[10px] font-bold text-ink">Where to?</p>
        <div className="flex items-center gap-1.5 rounded-lg bg-slate-100 px-2 py-1.5 text-[9px] text-slate-500">
          <MapPin className="size-3 text-brand-600" /> Downtown, New York
        </div>
        <div className="rounded-lg bg-brand-500 py-1.5 text-center text-[10px] font-bold text-navy-900">Confirm Ride</div>
      </div>
    </div>
  );
}

function RideScreen() {
  return (
    <div className="flex h-full flex-col bg-white pt-7">
      <p className="px-3 text-[10px] font-bold text-ink">Your Ride is Arriving</p>
      <div className="mx-3 mt-2 rounded-xl bg-slate-100 p-2">
        <CarIllustration type="sedan" body="#1d2636" className="h-14 w-full" />
      </div>
      <div className="mx-3 mt-3 flex items-center gap-2">
        <span className="grid size-7 place-items-center rounded-full bg-linear-to-br from-sky-400 to-indigo-500 text-[9px] font-bold text-white">JC</span>
        <div className="leading-tight">
          <p className="text-[9px] font-bold text-ink">James Carter</p>
          <p className="flex items-center gap-0.5 text-[8px] text-slate-500"><Star className="size-2 fill-brand-500 text-brand-500" /> 4.9 · ABC 1234</p>
        </div>
      </div>
      <div className="mx-3 mt-3 rounded-lg border border-slate-100 p-2 text-center">
        <p className="text-[8px] text-slate-400">Arriving in</p>
        <p className="text-sm font-extrabold text-ink">3 min</p>
      </div>
      <div className="mx-3 mb-3 mt-auto rounded-lg bg-brand-500 py-1.5 text-center text-[10px] font-bold text-navy-900">Track Ride</div>
    </div>
  );
}

export default function MobileApp() {
  return (
    <section className="overflow-hidden bg-white pb-16 sm:pb-20 lg:pb-24">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        {/* two overlapping phones */}
        <Reveal x={-50} y={0} className="relative mx-auto h-[26rem] w-full max-w-sm sm:h-[30rem]">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 top-0 z-10 sm:left-4"
          >
            <Phone className="h-[22rem] w-44 sm:h-[26rem] sm:w-48"><MapScreen /></Phone>
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 right-0 sm:right-4"
          >
            <Phone className="h-[19rem] w-40 sm:h-[22rem] sm:w-44"><RideScreen /></Phone>
          </motion.div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-600">Mobile app</p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">Book Rides on the Go</h2>
            <p className="mt-3 max-w-md text-sm text-slate-500 sm:text-base">
              Download the Antixor taxi.com app for a faster, easier and more convenient booking experience.
            </p>
            <StoreButtons className="mt-6" />
          </Reveal>
          <Stagger className="mt-8 grid gap-3 sm:grid-cols-2" stagger={0.1}>
            {appFeatures.map((f) => (
              <Item key={f} className="flex items-center gap-3 text-sm font-semibold text-ink">
                <span className="grid size-6 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                {f}
              </Item>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
