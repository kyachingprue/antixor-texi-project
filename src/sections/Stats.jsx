import SectionHeading from "../components/SectionHeading.jsx";
import CountUp from "../components/CountUp.jsx";
import { Item, Stagger } from "../components/Reveal.jsx";
import { stats } from "../data.js";

export default function Stats() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-x">
        <SectionHeading eyebrow="Trusted by millions" title="Our Numbers Speak" />
        <Stagger className="mt-10 grid grid-cols-2 gap-y-10 lg:grid-cols-4 lg:divide-x lg:divide-slate-200" stagger={0.12}>
          {stats.map(({ icon: Icon, value, suffix, label }) => (
            <Item key={label} className="px-4 text-center">
              <span className="mx-auto grid size-12 place-items-center rounded-full bg-brand-500/15 text-brand-600">
                <Icon className="size-6" />
              </span>
              <p className="mt-3 text-3xl font-extrabold text-ink sm:text-4xl">
                <CountUp to={value} suffix={suffix} />
              </p>
              <p className="mt-1 text-sm text-slate-500">{label}</p>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
