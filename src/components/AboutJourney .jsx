import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Briefcase, Flag, Globe, ShieldCheck, Smartphone, Trophy } from "lucide-react";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import SectionHeading from "../components/SectionHeading.jsx";
import { Item, Stagger } from "../components/Reveal.jsx";
import useMediaQuery from "../hooks/useMediaQuery.js";

/* ------------------------------------------------------------------ */
/*  EDIT YOUR CONTENT HERE                                             */
/* ------------------------------------------------------------------ */
const milestones = [
  {
    year: "2019",
    icon: Flag,
    title: "The first ride",
    text: "Antixor taxi.com starts with 20 drivers and one simple promise: arrive on time, every time.",
  },
  {
    year: "2020",
    icon: ShieldCheck,
    title: "Safety program launched",
    text: "Background checks, vehicle inspections and live trip sharing become standard for every driver.",
  },
  {
    year: "2022",
    icon: Smartphone,
    title: "Mobile app goes live",
    text: "Booking, live tracking and cashless payments arrive on iOS and Android.",
  },
  {
    year: "2024",
    icon: Trophy,
    title: "One million rides",
    text: "Our riders complete their 1,000,000th trip, with a 99% on-time rate.",
  },
  {
    year: "2025",
    icon: Briefcase,
    title: "Corporate & airport travel",
    text: "Business accounts with monthly invoicing and flight-tracked airport transfers open up.",
  },
  {
    year: "2026",
    icon: Globe,
    title: "100+ cities",
    text: "More than 500,000 happy customers now ride with us across 100+ cities.",
  },
];

const team = [
  { name: "Amara Okafor", role: "Founder & CEO", avatar: "from-amber-400 to-orange-500" },
  { name: "Daniel Reyes", role: "Head of Safety", avatar: "from-sky-400 to-indigo-500" },
  { name: "Mei Lin", role: "Chief Technology Officer", avatar: "from-emerald-400 to-teal-500" },
  { name: "Sofia Rossi", role: "Customer Care Lead", avatar: "from-fuchsia-400 to-rose-500" },
];

const initials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("");

/* ------------------------------------------------------------------ */
/*  Timeline                                                           */
/* ------------------------------------------------------------------ */
function Milestone({ year, title, text, icon: Icon, index }) {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const onLeft = index % 2 === 0;
  // desktop: cards fly in from their own side; mobile: from the right
  const fromX = isDesktop ? (onLeft ? -60 : 60) : 30;

  return (
    <li className="relative grid lg:grid-cols-2 lg:gap-20">
      {/* node on the line */}
      <motion.span
        className="absolute left-5 top-7 z-10 grid size-10 -translate-x-1/2 place-items-center rounded-full bg-brand-500 text-navy-900 shadow-lg shadow-brand-500/40 ring-8 ring-slate-50 lg:left-1/2"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.9 }}
        transition={{ type: "spring", stiffness: 420, damping: 18 }}
      >
        <Icon className="size-5" />
      </motion.span>

      <motion.article
        initial={{ opacity: 0, x: fromX }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`ml-14 rounded-2xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-200/70 lg:ml-0 ${
          onLeft ? "lg:col-start-1 lg:text-right" : "lg:col-start-2"
        }`}
      >
        <p className="text-3xl font-extrabold text-brand-600">{year}</p>
        <h3 className="mt-1 text-lg font-bold text-ink">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-500">{text}</p>
      </motion.article>
    </li>
  );
}

function Journey() {
  const ref = useRef(null);
  // the yellow line fills as you scroll through the timeline
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 65%", "end 55%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 22, restDelta: 0.001 });

  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our journey"
          title={
            <>
              From one city to <span className="text-royal">100+ cities</span>
            </>
          }
          subtitle="Every milestone started with a rider who needed a better way to get somewhere."
        />

        <div ref={ref} className="relative mx-auto mt-14 max-w-5xl">
          <div className="absolute bottom-0 left-5 top-0 w-0.5 -translate-x-1/2 rounded-full bg-slate-200 lg:left-1/2" />
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute bottom-0 left-5 top-0 w-0.5 -translate-x-1/2 rounded-full bg-brand-500 lg:left-1/2"
          />
          <ol className="space-y-10 lg:space-y-14">
            {milestones.map((m, i) => (
              <Milestone key={m.year} index={i} {...m} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Team                                                               */
/* ------------------------------------------------------------------ */
function Team() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container-x">
        <SectionHeading
          eyebrow="The people behind the ride"
          title={
            <>
              Meet Our <span className="text-royal">Leadership Team</span>
            </>
          }
          subtitle="A small, driven team that answers to one boss: the rider."
        />

        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.12}>
          {team.map(({ name, role, avatar }) => (
            <Item key={name}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group overflow-hidden rounded-2xl border border-slate-100 bg-white text-center shadow-md shadow-slate-200/60 transition-shadow hover:shadow-xl"
              >
                <div className={`relative grid h-40 place-items-center bg-linear-to-br ${avatar}`}>
                  <span className="grid size-20 place-items-center rounded-full bg-white/25 text-2xl font-extrabold text-white ring-4 ring-white/40 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110">
                    {initials(name)}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-ink">{name}</h3>
                  <p className="mt-0.5 text-sm text-slate-500">{role}</p>
                  <div className="mt-4 flex justify-center gap-2 sm:translate-y-2 sm:opacity-0 sm:transition sm:duration-300 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
                    {[
                      { icon: FaLinkedinIn, label: "LinkedIn" },
                      { icon: FaXTwitter, label: "X (Twitter)" },
                    ].map(({ icon: Icon, label }) => (
                      <a
                        key={label}
                        href="#"
                        aria-label={`${name} on ${label}`}
                        className="grid size-8 place-items-center rounded-full bg-slate-100 text-navy-800 transition hover:bg-brand-500"
                      >
                        <Icon className="size-3.5" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.article>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Default export: timeline + team, ready to drop into About.jsx      */
/* ------------------------------------------------------------------ */
export default function AboutJourney() {
  return (
    <>
      <Journey />
      <Team />
    </>
  );
}
