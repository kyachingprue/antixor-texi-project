import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import CarIllustration from "../components/CarIllustration.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { Item, Stagger } from "../components/Reveal.jsx";
import { services } from "../data.js";

export default function ServicesSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container-x">
        <SectionHeading
          align="left"
          eyebrow="Our services"
          title={
            <>
              Ride Options for <span className="text-royal">Every Need</span>
            </>
          }
          subtitle="From daily commutes to airport transfers, we've got you covered."
        />

        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" stagger={0.12}>
          {services.map(({ title, text, icon: Icon, tint, car }) => (
            <Item key={title}>
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group h-full rounded-2xl border border-slate-100 bg-white p-5 shadow-md shadow-slate-200/60 transition-shadow hover:shadow-xl hover:shadow-slate-300/50"
              >
                <CarIllustration {...car} className="mx-auto h-24 w-full transition-transform duration-500 group-hover:scale-105" />
                <span className={`mt-4 grid size-9 place-items-center rounded-full ${tint}`}>
                  <Icon className="size-4" />
                </span>
                <h3 className="mt-3 text-base font-bold text-ink">{title}</h3>
                <p className="mt-1 text-sm text-slate-500">{text}</p>
                <Link
                  to="/#booking"
                  className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-royal transition-all group-hover:gap-2.5"
                >
                  Book Now <ArrowRight className="size-3.5" />
                </Link>
              </motion.article>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
