import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import useMediaQuery from "../hooks/useMediaQuery.js";
import { testimonials } from "../data.js";

const initials = (name) => name.split(" ").map((n) => n[0]).join("");

export default function Testimonials() {
  // 1 card on phones, 2 on tablets, 3 on desktop
  const isLg = useMediaQuery("(min-width: 1024px)");
  const isMd = useMediaQuery("(min-width: 640px)");
  const perView = isLg ? 3 : isMd ? 2 : 1;
  const pages = Math.ceil(testimonials.length / perView);

  const [state, setState] = useState({ page: 0, dir: 1 });
  const page = Math.min(state.page, pages - 1);
  const [paused, setPaused] = useState(false);

  const go = (next) =>
    setState((s) => ({ page: (next + pages) % pages, dir: next > Math.min(s.page, pages - 1) ? 1 : -1 }));

  // auto-play
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(page + 1), 6000);
    return () => clearInterval(id);
  });

  const visible = testimonials.slice(page * perView, page * perView + perView);

  return (
    <section className="bg-navy-900 py-16 sm:py-20 lg:py-24">
      <div className="container-x">
        <SectionHeading
          light
          eyebrow="What our clients say"
          title={
            <>
              Real People. <span className="text-brand-400">Real Journeys.</span>
            </>
          }
          subtitle="Thousands of happy customers trust Antixor taxi.com for their daily rides."
        />

        <div
          className="mt-10 overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait" initial={false} custom={state.dir}>
            <motion.div
              key={`${page}-${perView}`}
              custom={state.dir}
              variants={{
                enter: (d) => ({ opacity: 0, x: d * 60 }),
                center: { opacity: 1, x: 0 },
                exit: (d) => ({ opacity: 0, x: d * -60 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {visible.map((t) => (
                <figure key={t.name} className="flex flex-col rounded-2xl bg-white p-6 shadow-xl">
                  <div className="flex items-center gap-3">
                    <span
                      className={`grid size-12 place-items-center rounded-full bg-linear-to-br ${t.avatar} text-sm font-extrabold text-white`}
                      aria-hidden="true"
                    >
                      {initials(t.name)}
                    </span>
                    <div className="flex" aria-label="5 out of 5 stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="size-4 fill-brand-500 text-brand-500" />
                      ))}
                    </div>
                  </div>
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">“{t.quote}”</blockquote>
                  <figcaption className="mt-5 border-t border-slate-100 pt-4">
                    <p className="font-bold text-ink">{t.name}</p>
                    <p className="text-xs text-slate-500">{t.role}</p>
                  </figcaption>
                </figure>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous reviews"
            onClick={() => go(page - 1)}
            className="grid size-10 place-items-center rounded-full border border-white/20 text-white transition hover:bg-brand-500 hover:text-navy-900"
          >
            <ChevronLeft className="size-5" />
          </button>
          <div className="flex gap-2">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to reviews ${i + 1}`}
                aria-current={i === page}
                onClick={() => go(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === page ? "w-6 bg-brand-500" : "w-2 bg-white/30 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next reviews"
            onClick={() => go(page + 1)}
            className="grid size-10 place-items-center rounded-full border border-white/20 text-white transition hover:bg-brand-500 hover:text-navy-900"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
