import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  Baby,
  Briefcase,
  Car,
  Check,
  CreditCard,
  Crown,
  MessageCircle,
  Navigation,
  Phone,
  Plane,
  Plus,
  Timer,
  Users,
  Wallet,
  Wifi,
} from "lucide-react";
import CarIllustration from "../components/CarIllustration.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { Item, Reveal, Stagger } from "../components/Reveal.jsx";
import { contact } from "../data.js";

const EASE = [0.22, 1, 0.36, 1];

/* ------------------------------------------------------------------ */
/*  EDIT YOUR CONTENT HERE                                             */
/* ------------------------------------------------------------------ */
const showcase = [
  {
    id: "city",
    label: "City Ride",
    icon: Car,
    title: "Everyday rides, without the wait",
    text: "Quick, affordable trips across town. Tap, get matched with a nearby driver and be on your way in minutes.",
    price: "$1.20",
    pickup: "3 min",
    seats: 4,
    car: { type: "sedan", body: "#f4f6fa" },
    features: [
      "Instant booking, no waiting",
      "Upfront fixed fares",
      "Pay by card, wallet or cash",
      "Share your trip live with friends",
    ],
  },
  {
    id: "premium",
    label: "Premium Ride",
    icon: Crown,
    title: "Arrive in style and comfort",
    text: "Top-rated chauffeurs in late-model sedans, for the evenings and meetings where the details matter.",
    price: "$1.60",
    pickup: "5 min",
    seats: 4,
    car: { type: "sedan", body: "#48566f" },
    features: [
      "Top-rated professional chauffeurs",
      "Leather seats and climate control",
      "Complimentary water and phone chargers",
      "Quiet ride on request",
    ],
  },
  {
    id: "airport",
    label: "Airport Transfer",
    icon: Plane,
    title: "On time, even when your flight isn't",
    text: "We track your flight, adjust to delays and wait at arrivals, so the trip home starts the moment you land.",
    price: "$2.10",
    pickup: "Pre-booked",
    seats: 6,
    car: { type: "suv", body: "#4e5b75" },
    features: [
      "Flight tracking with automatic delay updates",
      "Meet and greet at arrivals",
      "60 minutes of free waiting time",
      "Fixed price, never surge pricing",
    ],
  },
  {
    id: "corporate",
    label: "Corporate Ride",
    icon: Briefcase,
    title: "Business travel, one invoice",
    text: "Give your team reliable rides and give finance a single monthly invoice with every trip itemised.",
    price: "$2.80",
    pickup: "5 min",
    seats: 10,
    car: { type: "van", body: "#4e5b75" },
    features: [
      "One consolidated monthly invoice",
      "Ride management dashboard for your team",
      "Priority support line",
      "Reports by employee or cost centre",
    ],
  },
];

const inclusions = [
  { icon: Navigation, title: "Live trip tracking", text: "Follow your driver on the map and share your ETA with anyone." },
  { icon: Wallet, title: "Upfront pricing", text: "See the fare before you book. No hidden fees, no surprises." },
  { icon: CreditCard, title: "Cashless payments", text: "Cards, digital wallets and corporate accounts, or pay cash." },
  { icon: Baby, title: "Child seats on request", text: "Add a child or booster seat when you book, at no extra cost." },
  { icon: Wifi, title: "Wi-Fi and chargers", text: "Stay connected in our Premium and Corporate vehicles." },
  { icon: Timer, title: "Free cancellation", text: "Change your mind within 2 minutes of booking and pay nothing." },
];

const faqs = [
  {
    q: "How do I book a ride?",
    a: "Enter your pickup and drop-off on the booking form at the top of the home page, or in our mobile app, pick a vehicle and confirm. You'll see your driver's name, photo and plate number straight away.",
  },
  {
    q: "Can I schedule a ride in advance?",
    a: "Yes. Choose Ride Later or Airport Transfer, set your date and time, and we'll assign a driver ahead of time. You can book up to 30 days in advance.",
  },
  {
    q: "How are fares calculated?",
    a: "Fares are based on distance, estimated travel time and the vehicle you choose. The total is shown before you confirm, and it doesn't change unless you change your route.",
  },
  {
    q: "What happens if my flight is delayed?",
    a: "For Airport Transfers we monitor your flight number and move your pickup automatically. Your driver waits up to 60 minutes after landing at no extra charge.",
  },
  {
    q: "Which payment methods do you accept?",
    a: "Credit and debit cards, Apple Pay, Google Pay, in-app wallet and cash. Corporate accounts can be billed monthly by invoice.",
  },
  {
    q: "Can I cancel a booking?",
    a: "Cancel free of charge within 2 minutes of booking, or any time up to 1 hour before a scheduled pickup. Later cancellations may include a small fee to compensate the driver.",
  },
];

/* ------------------------------------------------------------------ */
/*  1. Interactive service showcase (tabs)                             */
/* ------------------------------------------------------------------ */
export function ServiceShowcase() {
  const [activeId, setActiveId] = useState(showcase[0].id);
  const active = showcase.find((s) => s.id === activeId);
  const ActiveIcon = active.icon;

  return (
    <section className="relative isolate overflow-hidden bg-navy-900 py-16 sm:py-20 lg:py-24">
      <div className="absolute -left-32 top-10 -z-10 size-96 rounded-full bg-royal/25 blur-3xl" />
      <div className="absolute -right-24 bottom-0 -z-10 size-96 rounded-full bg-brand-500/15 blur-3xl" />

      <div className="container-x">
        <SectionHeading
          light
          eyebrow="Explore our services"
          title={
            <>
              Find the ride that <span className="text-brand-400">fits your day</span>
            </>
          }
          subtitle="Pick a service to see what's included, what it costs and how fast we can get to you."
        />

        {/* tabs (scroll sideways on small phones) */}
        <div
          role="tablist"
          aria-label="Services"
          className="-mx-4 mt-10 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:justify-center sm:px-0 [&::-webkit-scrollbar]:hidden"
        >
          {showcase.map(({ id, label, icon: Icon }) => {
            const isActive = id === activeId;
            return (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveId(id)}
                className={`relative flex shrink-0 items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-bold transition-colors ${
                  isActive
                    ? "border-transparent text-navy-900"
                    : "border-white/15 text-slate-200 hover:border-white/40 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="service-tab"
                    className="absolute inset-0 rounded-full bg-brand-500 shadow-lg shadow-brand-500/30"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <Icon className="relative size-4" />
                <span className="relative whitespace-nowrap">{label}</span>
              </button>
            );
          })}
        </div>

        {/* active panel */}
        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:p-8 lg:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              role="tabpanel"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4, ease: EASE }}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14"
            >
              {/* visual */}
              <div>
                <div className="relative">
                  <div className="absolute inset-x-8 top-1/2 h-40 -translate-y-1/2 rounded-full bg-brand-500/20 blur-3xl" />
                  <motion.div
                    initial={{ opacity: 0, x: -70 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
                  >
                    <CarIllustration
                      {...active.car}
                      className="relative mx-auto w-full max-w-md drop-shadow-[0_25px_25px_rgba(0,0,0,.55)]"
                    />
                  </motion.div>
                  <div className="mx-auto mt-1 h-1.5 max-w-md rounded-full bg-[repeating-linear-gradient(90deg,#ffc82c_0_24px,transparent_24px_48px)] opacity-50" />
                </div>

                <dl className="mx-auto mt-6 grid max-w-md grid-cols-3 gap-3 text-center">
                  {[
                    { label: "From, per km", value: active.price },
                    { label: "Pickup", value: active.pickup },
                    { label: "Seats", value: active.seats },
                  ].map((s) => (
                    <div key={s.label} className="rounded-2xl border border-white/10 bg-navy-900/60 px-2 py-3">
                      <dd className="text-lg font-extrabold text-brand-400">{s.value}</dd>
                      <dt className="text-[11px] text-slate-400">{s.label}</dt>
                    </div>
                  ))}
                </dl>
              </div>

              {/* details */}
              <div>
                <span className="grid size-12 place-items-center rounded-2xl bg-brand-500 text-navy-900">
                  <ActiveIcon className="size-6" />
                </span>
                <h3 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl">{active.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">{active.text}</p>

                <ul className="mt-6 space-y-3">
                  {active.features.map((f, i) => (
                    <motion.li
                      key={f}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + i * 0.07, duration: 0.45, ease: EASE }}
                      className="flex items-start gap-3 text-sm text-slate-100"
                    >
                      <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-500 text-navy-900">
                        <Check className="size-3" strokeWidth={3.5} />
                      </span>
                      {f}
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/#booking" className="btn-primary">
                    Book {active.label} <ArrowRight className="size-4" />
                  </Link>
                  <a
                    href={contact.phoneHref}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:border-brand-400 hover:text-brand-400"
                  >
                    <Phone className="size-4" /> Call us
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  2. What's included in every ride                                   */
/* ------------------------------------------------------------------ */
export function Inclusions() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="container-x grid gap-10 lg:grid-cols-[0.9fr_1.6fr] lg:gap-16">
        <Reveal x={-30} y={0} className="lg:sticky lg:top-28 lg:self-start">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-600">Included as standard</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Everything you need, <span className="text-royal">in every ride</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base">
            No add-ons and no small print. Whatever service you pick, these come with the ride.
          </p>
          <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-md shadow-slate-200/60">
            <span className="grid size-10 place-items-center rounded-full bg-brand-500 text-navy-900">
              <Users className="size-5" />
            </span>
            <p className="text-sm">
              <span className="block font-extrabold text-ink">500K+ riders</span>
              <span className="text-slate-500">trust us every month</span>
            </p>
          </div>
        </Reveal>

        <Stagger className="grid gap-5 sm:grid-cols-2" stagger={0.1}>
          {inclusions.map(({ icon: Icon, title, text }) => (
            <Item key={title}>
              <article className="group h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-md shadow-slate-200/60 transition duration-300 hover:-translate-y-1.5 hover:border-brand-500/60 hover:shadow-xl">
                <span className="grid size-12 place-items-center rounded-xl bg-brand-500/15 text-brand-600 transition duration-300 group-hover:rotate-6 group-hover:bg-brand-500 group-hover:text-navy-900">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-4 font-bold text-ink">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-500">{text}</p>
              </article>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  3. FAQ accordion                                                   */
/* ------------------------------------------------------------------ */
function FaqRow({ q, a, open, onToggle, id }) {
  return (
    <div
      className={`rounded-2xl border transition-colors duration-300 ${
        open ? "border-brand-500/70 bg-white shadow-lg shadow-slate-200/70" : "border-slate-200 bg-white"
      }`}
    >
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`faq-${id}`}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
        >
          <span className="font-bold text-ink">{q}</span>
          <motion.span
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className={`grid size-8 shrink-0 place-items-center rounded-full transition-colors ${
              open ? "bg-brand-500 text-navy-900" : "bg-slate-100 text-navy-800"
            }`}
          >
            <Plus className="size-4" />
          </motion.span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`faq-${id}`}
            role="region"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-sm leading-relaxed text-slate-500 sm:px-6 sm:pb-6">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ServiceFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container-x grid gap-10 lg:grid-cols-[0.9fr_1.6fr] lg:gap-16">
        <Reveal x={-30} y={0} className="lg:sticky lg:top-28 lg:self-start">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.22em] text-brand-600">Questions, answered</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Frequently asked <span className="text-royal">questions</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base">
            Can't find what you're looking for? Our support team replies day and night.
          </p>

          <div className="mt-6 rounded-2xl bg-navy-900 p-5 text-white">
            <span className="grid size-10 place-items-center rounded-full bg-brand-500 text-navy-900">
              <MessageCircle className="size-5" />
            </span>
            <p className="mt-3 font-bold">Still have questions?</p>
            <p className="mt-1 text-sm text-slate-300">Chat with us or call {contact.phone}.</p>
            <Link to="/contact" className="btn-primary mt-4 !py-2.5">
              Contact support <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>

        <Stagger className="space-y-3" stagger={0.08}>
          {faqs.map((f, i) => (
            <Item key={f.q}>
              <FaqRow
                id={i}
                {...f}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Default export: all three sections, ready to drop into Services    */
/* ------------------------------------------------------------------ */
export default function ServicesExtras() {
  return (
    <>
      <ServiceShowcase />
      <Inclusions />
      <ServiceFAQ />
    </>
  );
}
