import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  Baby,
  Check,
  Gauge,
  Luggage,
  Minus,
  Plus,
  ShieldCheck,
  Snowflake,
  Sparkles,
  Users,
  Wifi,
  Wrench,
} from "lucide-react";
import CarIllustration from "../components/CarIllustration.jsx";
import CountUp from "../components/CountUp.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { Item, Reveal, Stagger } from "../components/Reveal.jsx";
import { fleet } from "../data.js";

const EASE = [0.22, 1, 0.36, 1];

/* ------------------------------------------------------------------ */
/*  EDIT YOUR CONTENT HERE                                             */
/*  Vehicles come from src/data.js (`fleet`); these add the details.   */
/* ------------------------------------------------------------------ */
const details = {
  Economy: { bestFor: "Solo trips and couples", ac: true, wifi: false, childSeat: true },
  Sedan: { bestFor: "Business and airport runs", ac: true, wifi: true, childSeat: true, popular: true },
  SUV: { bestFor: "Families and extra luggage", ac: true, wifi: true, childSeat: true },
  Van: { bestFor: "Groups, events and tours", ac: true, wifi: true, childSeat: true },
};

const vehicles = fleet.map((v) => ({ ...v, ...details[v.name] }));
const MAX_PASSENGERS = Math.max(...vehicles.map((v) => v.seats));
const MAX_BAGS = Math.max(...vehicles.map((v) => v.bags));

const standards = [
  { value: 5, suffix: " yrs", title: "Maximum vehicle age", text: "Newer cars mean fewer breakdowns and a more comfortable ride." },
  { value: 25, suffix: "-point", title: "Monthly inspection", text: "Every vehicle is checked by a certified mechanic every month." },
  { value: 100, suffix: "%", title: "Tracked and insured", text: "GPS tracking and full passenger insurance on every trip." },
  { value: 24, suffix: "/7", title: "Cleaned between rides", text: "Surfaces are wiped and interiors refreshed after each passenger." },
];

const checklist = ["Brakes", "Tyres", "Lights", "Air conditioning", "Seat belts", "Interior", "Steering", "Engine"];

/* ------------------------------------------------------------------ */
/*  1. "Which vehicle is right for you?" picker                        */
/* ------------------------------------------------------------------ */
function Stepper({ icon: Icon, label, value, min, max, onChange, unit }) {
  const btn =
    "grid size-11 place-items-center rounded-full border border-white/20 text-white transition hover:border-brand-400 hover:text-brand-400 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-white/20 disabled:hover:text-white";
  return (
    <div className="rounded-2xl border border-white/10 bg-navy-900/60 p-4">
      <p className="flex items-center gap-2 text-sm font-semibold text-slate-200">
        <Icon className="size-4 text-brand-400" /> {label}
      </p>
      <div className="mt-3 flex items-center justify-between">
        <button type="button" className={btn} disabled={value <= min} onClick={() => onChange(value - 1)} aria-label={`Fewer ${unit}`}>
          <Minus className="size-4" />
        </button>
        <div className="text-center" aria-live="polite">
          <AnimatePresence mode="popLayout" initial={false}>
            <motion.span
              key={value}
              initial={{ y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -14, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="block text-4xl font-extrabold text-white"
            >
              {value}
            </motion.span>
          </AnimatePresence>
          <span className="text-xs text-slate-400">{unit}</span>
        </div>
        <button type="button" className={btn} disabled={value >= max} onClick={() => onChange(value + 1)} aria-label={`More ${unit}`}>
          <Plus className="size-4" />
        </button>
      </div>
    </div>
  );
}

export function VehiclePicker() {
  const [passengers, setPassengers] = useState(3);
  const [bags, setBags] = useState(2);

  // smallest vehicle that fits both people and luggage (fleet is sorted small to large)
  const pick = vehicles.find((v) => v.seats >= passengers && v.bags >= bags) ?? vehicles[vehicles.length - 1];

  return (
    <section className="relative isolate overflow-hidden bg-navy-900 py-16 sm:py-20 lg:py-24">
      <div className="absolute -right-24 top-0 -z-10 size-96 rounded-full bg-brand-500/15 blur-3xl" />
      <div className="absolute -left-32 bottom-0 -z-10 size-96 rounded-full bg-royal/25 blur-3xl" />

      <div className="container-x">
        <SectionHeading
          light
          eyebrow="Vehicle finder"
          title={
            <>
              Not sure which to <span className="text-brand-400">book?</span>
            </>
          }
          subtitle="Tell us how many people and bags are coming, and we'll suggest the right vehicle."
        />

        <Reveal className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:p-8 lg:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
            <div className="space-y-4">
              <Stepper icon={Users} label="Passengers" unit="people" min={1} max={MAX_PASSENGERS} value={passengers} onChange={setPassengers} />
              <Stepper icon={Luggage} label="Luggage" unit="bags" min={0} max={MAX_BAGS} value={bags} onChange={setBags} />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={pick.name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="grid items-center gap-6 sm:grid-cols-2"
              >
                <div className="relative">
                  <div className="absolute inset-x-6 top-1/2 h-28 -translate-y-1/2 rounded-full bg-brand-500/25 blur-3xl" />
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.05, ease: EASE }}
                  >
                    <CarIllustration
                      type={pick.car.type}
                      body={pick.name === "Economy" ? "#f4f6fa" : "#4e5b75"}
                      className="relative w-full drop-shadow-[0_22px_22px_rgba(0,0,0,.55)]"
                    />
                  </motion.div>
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-400">We recommend</p>
                  <h3 className="mt-1 text-3xl font-extrabold text-white">{pick.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    Fits {passengers} {passengers === 1 ? "passenger" : "passengers"} and {bags} {bags === 1 ? "bag" : "bags"}, with
                    room for up to {pick.seats} riders and {pick.bags} bags.
                  </p>
                  <p className="mt-3 text-lg font-extrabold text-brand-400">{pick.price}</p>
                  <Link to="/#booking" className="btn-primary mt-5">
                    Book {pick.name} <ArrowRight className="size-4" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* range indicator */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 border-t border-white/10 pt-6">
            {vehicles.map((v) => {
              const on = v.name === pick.name;
              return (
                <span
                  key={v.name}
                  className={`relative rounded-full px-4 py-1.5 text-xs font-bold transition-colors ${
                    on ? "text-navy-900" : "bg-white/10 text-slate-300"
                  }`}
                >
                  {on && (
                    <motion.span
                      layoutId="fleet-pick-chip"
                      className="absolute inset-0 rounded-full bg-brand-500"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  )}
                  <span className="relative">{v.name}</span>
                </span>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  2. Side-by-side comparison table                                   */
/* ------------------------------------------------------------------ */
function Tick({ on }) {
  return on ? (
    <span className="mx-auto grid size-6 place-items-center rounded-full bg-emerald-100 text-emerald-600" aria-label="Included">
      <Check className="size-3.5" strokeWidth={3} />
    </span>
  ) : (
    <span className="mx-auto grid size-6 place-items-center rounded-full bg-slate-100 text-slate-400" aria-label="Not included">
      <Minus className="size-3.5" />
    </span>
  );
}

const rows = [
  { label: "Passengers", icon: Users, render: (v) => <span className="font-bold text-ink">{v.seats}</span> },
  { label: "Luggage", icon: Luggage, render: (v) => <span className="font-bold text-ink">{v.bags} bags</span> },
  { label: "Air conditioning", icon: Snowflake, render: (v) => <Tick on={v.ac} /> },
  { label: "Free Wi-Fi & chargers", icon: Wifi, render: (v) => <Tick on={v.wifi} /> },
  { label: "Child seat on request", icon: Baby, render: (v) => <Tick on={v.childSeat} /> },
  { label: "Best for", icon: Sparkles, render: (v) => <span className="text-xs text-slate-600">{v.bestFor}</span> },
  { label: "Starting price", icon: Gauge, render: (v) => <span className="font-extrabold text-royal">{v.price.replace("From ", "")}</span> },
];

export function FleetComparison() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Compare vehicles"
          title={
            <>
              Side by side, <span className="text-royal">no guesswork</span>
            </>
          }
          subtitle="Everything that matters about each vehicle in one place."
        />

        <Reveal className="mt-10 overflow-x-auto rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/70">
          <table className="w-full min-w-[720px] border-collapse text-center text-sm">
            <caption className="sr-only">Comparison of Economy, Sedan, SUV and Van vehicles</caption>
            <thead>
              <tr>
                <th scope="col" className="sticky left-0 z-10 w-32 bg-white p-3 text-left text-xs sm:w-44 sm:p-4 font-bold uppercase tracking-wider text-slate-400">
                  Vehicle
                </th>
                {vehicles.map((v) => (
                  <th
                    key={v.name}
                    scope="col"
                    className={`relative p-4 align-bottom ${v.popular ? "bg-brand-500/10" : ""}`}
                  >
                    {v.popular && (
                      <span className="absolute inset-x-0 top-0 bg-brand-500 py-1 text-[10px] font-extrabold uppercase tracking-wider text-navy-900">
                        Most popular
                      </span>
                    )}
                    <CarIllustration {...v.car} className="mx-auto mt-4 h-16 w-full max-w-36" />
                    <span className="mt-2 block text-base font-extrabold text-ink">{v.name}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(({ label, icon: Icon, render }) => (
                <tr key={label} className="border-t border-slate-100">
                  <th scope="row" className="sticky left-0 z-10 bg-white p-3 text-left text-xs font-semibold text-slate-600 sm:p-4 sm:text-sm">
                    <span className="flex items-center gap-2">
                      <Icon className="hidden size-4 shrink-0 text-brand-600 sm:block" /> {label}
                    </span>
                  </th>
                  {vehicles.map((v) => (
                    <td key={v.name} className={`p-4 ${v.popular ? "bg-brand-500/10" : ""}`}>
                      {render(v)}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="border-t border-slate-100">
                <th scope="row" className="sticky left-0 z-10 bg-white p-4" />
                {vehicles.map((v) => (
                  <td key={v.name} className={`p-4 ${v.popular ? "bg-brand-500/10" : ""}`}>
                    <Link
                      to="/#booking"
                      className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold transition active:scale-95 ${
                        v.popular ? "bg-brand-500 text-navy-900 hover:bg-brand-400" : "bg-navy-900 text-white hover:bg-navy-700"
                      }`}
                    >
                      Book {v.name}
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </Reveal>
        <p className="mt-3 text-center text-xs text-slate-400 sm:hidden">Swipe the table sideways to see every vehicle.</p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  3. Fleet standards                                                 */
/* ------------------------------------------------------------------ */
export function FleetStandards() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Fleet standards"
          title={
            <>
              Built to a <span className="text-royal">higher standard</span>
            </>
          }
          subtitle="Before a vehicle carries a single passenger, it has to earn its place on the road."
        />

        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.12}>
          {standards.map(({ value, suffix, title, text }) => (
            <Item key={title}>
              <article className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-md shadow-slate-200/60 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                <p className="text-4xl font-extrabold text-brand-600">
                  <CountUp to={value} suffix={suffix} />
                </p>
                <h3 className="mt-2 font-bold text-ink">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{text}</p>
              </article>
            </Item>
          ))}
        </Stagger>

        <Reveal className="mt-10 rounded-3xl bg-navy-900 p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand-500 text-navy-900">
                <Wrench className="size-6" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-white">What our monthly inspection covers</h3>
                <p className="mt-1 text-sm text-slate-300">A vehicle that fails any check is taken off the road until it's fixed.</p>
              </div>
            </div>
            <Stagger className="flex flex-wrap gap-2 lg:max-w-xl lg:justify-end" stagger={0.05}>
              {checklist.map((c) => (
                <Item key={c}>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-slate-100">
                    <ShieldCheck className="size-3.5 text-brand-400" /> {c}
                  </span>
                </Item>
              ))}
            </Stagger>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Default export: all three sections, ready to drop into Fleet.jsx   */
/* ------------------------------------------------------------------ */
export default function FleetExtras() {
  return (
    <>
      <VehiclePicker />
      <FleetComparison />
      <FleetStandards />
    </>
  );
}
