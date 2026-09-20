import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Bell,
  CalendarDays,
  Check,
  Clock,
  Flame,
  Luggage,
  Mail,
  RotateCw,
  Send,
  Share2,
  ShieldCheck,
} from "lucide-react";
import CarIllustration from "../components/CarIllustration.jsx";
import Skyline from "../components/Skyline.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { Item, Reveal, Stagger } from "../components/Reveal.jsx";
import { posts } from "../data.js";

const EASE = [0.22, 1, 0.36, 1];

/* ------------------------------------------------------------------ */
/*  EDIT YOUR CONTENT HERE                                             */
/* ------------------------------------------------------------------ */
const featured = {
  category: "Featured story",
  title: "How we make every ride safer, one check at a time",
  excerpt:
    "From verified drivers to live trip sharing, here is a behind-the-scenes look at the safety systems that protect over half a million riders, and the people who run them.",
  author: "Daniel Reyes",
  role: "Head of Safety",
  date: "Sep 15, 2026",
  read: "7 min read",
};

// view counts shown next to the "Most read" list (top 5 posts from data.js)
const reads = ["12.4K", "9.8K", "8.1K", "6.7K", "5.2K"];

const tips = [
  {
    icon: ShieldCheck,
    title: "Check the plate",
    back: "Match the plate number and driver photo in the app before you get in.",
  },
  {
    icon: Share2,
    title: "Share your trip",
    back: "Send your live location and ETA to a friend with a single tap.",
  },
  {
    icon: Clock,
    title: "Book ahead at peak times",
    back: "Mornings and 5 to 7 PM are busiest. Schedule 30 minutes early.",
  },
  {
    icon: Luggage,
    title: "Tell us about luggage",
    back: "Add your bags when booking so we send a vehicle with enough space.",
  },
];

const initials = (name) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("");

/* ------------------------------------------------------------------ */
/*  1. Featured story (place ABOVE your post grid)                     */
/* ------------------------------------------------------------------ */
export function BlogFeatured() {
  return (
    <section className="bg-slate-50 pb-4 pt-14 sm:pt-16">
      <div className="container-x">
        <Reveal>
          <article className="group grid overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xl shadow-slate-200/70 lg:grid-cols-[1.1fr_1fr]">
            {/* cover */}
            <div className="relative isolate min-h-64 overflow-hidden sm:min-h-80 lg:min-h-[26rem]">
              <div
                className="absolute inset-0 -z-20"
                style={{ background: "linear-gradient(180deg,#0f1e3a 0%,#4a3468 55%,#e58a3d 100%)" }}
              />
              <Skyline className="absolute inset-x-0 bottom-0 -z-10 h-3/4 w-full text-navy-900/80" seed={27} spire={820} />
              <div className="absolute inset-x-0 bottom-0 -z-10 h-10 bg-navy-950">
                <div className="absolute inset-x-0 top-1/2 h-0.5 bg-[repeating-linear-gradient(90deg,#ffc82c_0_28px,transparent_28px_56px)] opacity-70" />
              </div>
              <span className="absolute left-5 top-5 inline-flex items-center gap-1.5 rounded-full bg-brand-500 px-3.5 py-1.5 text-xs font-extrabold text-navy-900">
                <Flame className="size-3.5" /> Featured
              </span>
              <motion.div
                initial={{ x: -120, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2, ease: EASE }}
                className="absolute inset-x-0 bottom-1 px-8 sm:px-14"
              >
                <CarIllustration
                  taxi
                  type="sedan"
                  body="#ffb800"
                  className="w-full max-w-sm drop-shadow-[0_18px_18px_rgba(0,0,0,.5)] transition-transform duration-700 group-hover:translate-x-6 sm:max-w-md"
                />
              </motion.div>
            </div>

            {/* text */}
            <div className="flex flex-col justify-center p-6 sm:p-10">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">{featured.category}</p>
              <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-ink sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-500 sm:text-base">{featured.excerpt}</p>

              <div className="mt-6 flex items-center gap-3">
                <span className="grid size-11 place-items-center rounded-full bg-linear-to-br from-sky-400 to-indigo-500 text-sm font-extrabold text-white">
                  {initials(featured.author)}
                </span>
                <p className="text-sm leading-tight">
                  <span className="block font-bold text-ink">{featured.author}</span>
                  <span className="text-slate-500">{featured.role}</span>
                </p>
              </div>

              <p className="mt-4 flex items-center gap-4 text-xs text-slate-400">
                <span className="inline-flex items-center gap-1.5"><CalendarDays className="size-3.5" /> {featured.date}</span>
                <span className="inline-flex items-center gap-1.5"><Clock className="size-3.5" /> {featured.read}</span>
              </p>

              {/* TODO: point this at your real article route */}
              <a href="#" onClick={(e) => e.preventDefault()} className="btn-primary mt-6 self-start">
                Read the story <ArrowRight className="size-4" />
              </a>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  2. Most read + flip-card ride tips (place BELOW your post grid)    */
/* ------------------------------------------------------------------ */
function TipCard({ icon: Icon, title, back }) {
  const [flipped, setFlipped] = useState(false);
  const face = { backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" };

  return (
    <button
      type="button"
      onClick={() => setFlipped((f) => !f)}
      aria-pressed={flipped}
      aria-label={`${title}. Tap to ${flipped ? "hide" : "show"} the tip.`}
      className="h-44 w-full text-left [perspective:1000px]"
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative size-full"
      >
        {/* front */}
        <div
          style={face}
          className="absolute inset-0 flex flex-col justify-between rounded-2xl border border-slate-100 bg-white p-5 shadow-md shadow-slate-200/60"
        >
          <span className="grid size-11 place-items-center rounded-xl bg-brand-500/15 text-brand-600">
            <Icon className="size-5" />
          </span>
          <div>
            <p className="font-bold text-ink">{title}</p>
            <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-slate-400">
              <RotateCw className="size-3" /> Tap to flip
            </p>
          </div>
        </div>
        {/* back */}
        <div
          style={{ ...face, transform: "rotateY(180deg)" }}
          className="absolute inset-0 flex flex-col justify-center rounded-2xl bg-navy-900 p-5 text-white shadow-md shadow-slate-300/60"
        >
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-400">Quick tip</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-200">{back}</p>
        </div>
      </motion.div>
    </button>
  );
}

export function BlogInsights() {
  const top = posts.slice(0, 5);

  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="container-x grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        {/* most read */}
        <div>
          <SectionHeading
            align="left"
            eyebrow="Trending now"
            title={
              <>
                Most read <span className="text-royal">this month</span>
              </>
            }
          />
          <Stagger className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white shadow-md shadow-slate-200/60" stagger={0.09}>
            {top.map(({ title, category, read }, i) => (
              <Item key={title}>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="group flex items-center gap-4 px-4 py-4 transition-colors hover:bg-slate-50 sm:gap-5 sm:px-6"
                >
                  <span className="w-10 shrink-0 text-4xl font-extrabold leading-none text-slate-200 transition-colors group-hover:text-brand-500">
                    {i + 1}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-semibold text-brand-600">{category}</span>
                    <span className="mt-0.5 block font-bold leading-snug text-ink">{title}</span>
                    <span className="mt-1 block text-xs text-slate-400">
                      {reads[i]} reads · {read}
                    </span>
                  </span>
                  <ArrowUpRight className="size-5 shrink-0 text-slate-300 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-navy-900" />
                </a>
              </Item>
            ))}
          </Stagger>
        </div>

        {/* flip tips */}
        <div>
          <SectionHeading
            align="left"
            eyebrow="Ride smarter"
            title={
              <>
                4 tips for a <span className="text-royal">better ride</span>
              </>
            }
          />
          <Stagger className="mt-8 grid gap-4 sm:grid-cols-2" stagger={0.1}>
            {tips.map((t) => (
              <Item key={t.title}>
                <TipCard {...t} />
              </Item>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  3. Newsletter                                                      */
/* ------------------------------------------------------------------ */
export function BlogNewsletter() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) {
      setError("Enter a valid email address, like name@example.com.");
      return;
    }
    setError("");
    // TODO: send `email` to your newsletter service (Mailchimp, Resend, your API...)
    setDone(true);
  };

  return (
    <section className="relative isolate overflow-hidden bg-navy-900 py-16 sm:py-20 lg:py-24">
      <Skyline className="absolute inset-x-0 bottom-0 -z-10 h-2/3 w-full text-navy-800/70" seed={41} spire={200} />
      <div className="absolute -left-24 top-0 -z-10 size-96 rounded-full bg-brand-500/15 blur-3xl" />

      <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal x={-30} y={0}>
          <motion.span
            animate={{ y: [0, -8, 0], rotate: [0, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="grid size-14 place-items-center rounded-2xl bg-brand-500 text-navy-900 shadow-lg shadow-brand-500/30"
          >
            <Mail className="size-7" />
          </motion.span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ride tips and offers, <span className="text-brand-400">straight to your inbox</span>
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-300 sm:text-base">
            One short email a month with travel tips, new features and rider-only discounts.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {["Monthly, never spammy", "Rider-only discounts", "Unsubscribe anytime"].map((t) => (
              <li key={t} className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-slate-100">
                <Check className="size-3.5 text-brand-400" strokeWidth={3} /> {t}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal x={30} y={0}>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md sm:p-8">
            <AnimatePresence mode="wait" initial={false}>
              {done ? (
                <motion.div
                  key="done"
                  role="status"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="py-6 text-center"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 360, damping: 14, delay: 0.1 }}
                    className="mx-auto grid size-16 place-items-center rounded-full bg-emerald-500 text-white"
                  >
                    <Check className="size-8" strokeWidth={3} />
                  </motion.span>
                  <p className="mt-4 text-xl font-extrabold text-white">You're subscribed!</p>
                  <p className="mt-1 text-sm text-slate-300">We'll send your first email to {email}.</p>
                  <button
                    type="button"
                    onClick={() => {
                      setDone(false);
                      setEmail("");
                    }}
                    className="mt-5 text-sm font-semibold text-brand-400 hover:text-brand-300"
                  >
                    Use a different email
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={onSubmit}
                  noValidate
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <label htmlFor="newsletter-email" className="flex items-center gap-2 text-sm font-bold text-white">
                    <Bell className="size-4 text-brand-400" /> Join 20,000+ subscribers
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError("");
                    }}
                    placeholder="you@example.com"
                    autoComplete="email"
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? "newsletter-error" : undefined}
                    className="mt-3 w-full rounded-xl border border-white/15 bg-navy-900/70 px-4 py-3.5 text-sm text-white placeholder:text-slate-500 transition focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/20"
                  />
                  <AnimatePresence>
                    {error && (
                      <motion.p
                        id="newsletter-error"
                        role="alert"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden pt-2 text-sm text-rose-300"
                      >
                        {error}
                      </motion.p>
                    )}
                  </AnimatePresence>
                  <button type="submit" className="btn-primary mt-4 w-full">
                    <Send className="size-4" /> Subscribe
                  </button>
                  <p className="mt-3 text-center text-xs text-slate-400">We'll never share your email with anyone.</p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Default export: everything that goes BELOW the post grid           */
/* ------------------------------------------------------------------ */
export default function BlogExtras() {
  return (
    <>
      <BlogInsights />
      <BlogNewsletter />
    </>
  );
}
