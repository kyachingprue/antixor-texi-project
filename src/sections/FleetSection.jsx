import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Luggage, Users } from "lucide-react";
import CarIllustration from "../components/CarIllustration.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { Item, Stagger } from "../components/Reveal.jsx";
import { fleet } from "../data.js";

export default function FleetSection({ showPrice = false, heading = true }) {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="container-x">
        {heading && (
          <SectionHeading
            eyebrow="Our fleet"
            title={
              <>
                Choose Your <span className="text-royal">Perfect Ride</span>
              </>
            }
            subtitle="From economy to luxury, we have the right vehicle for your journey."
          />
        )}

        <Stagger className={`grid gap-5 sm:grid-cols-2 lg:grid-cols-4 ${heading ? "mt-10" : ""}`} stagger={0.12}>
          {fleet.map(({ name, note, seats, bags, price, car }) => (
            <Item key={name}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group h-full rounded-2xl border border-slate-100 bg-white p-5 shadow-md shadow-slate-200/60 transition-shadow hover:shadow-xl"
              >
                <CarIllustration {...car} className="mx-auto h-24 w-full transition-transform duration-500 group-hover:scale-105" />
                <div className="mt-4 flex items-end justify-between gap-3">
                  <div>
                    <h3 className="text-base font-bold text-ink">{name}</h3>
                    <p className="text-xs text-slate-500">{note}</p>
                    <p className="mt-2 flex items-center gap-3 text-xs font-medium text-slate-600">
                      <span className="inline-flex items-center gap-1"><Users className="size-3.5" /> {seats}</span>
                      <span className="inline-flex items-center gap-1"><Luggage className="size-3.5" /> {bags}</span>
                    </p>
                    {showPrice && <p className="mt-2 text-sm font-bold text-royal">{price}</p>}
                  </div>
                  <Link
                    to="/#booking"
                    aria-label={`Book ${name}`}
                    className="grid size-9 shrink-0 place-items-center rounded-full bg-slate-100 text-navy-800 transition group-hover:bg-brand-500"
                  >
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </motion.article>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
