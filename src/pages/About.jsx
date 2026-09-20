import { Link } from "react-router-dom";
import { ArrowRight, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";
import SEO from "../components/SEO.jsx";
import PageHeader from "../components/PageHeader.jsx";
import { Item, Reveal, Stagger } from "../components/Reveal.jsx";
import Stats from "../sections/Stats.jsx";
import WhyChoose from "../sections/WhyChoose.jsx";
import CTABanner from "../sections/CTABanner.jsx";
import AboutJourney from "../components/AboutJourney .jsx";

const values = [
  { icon: ShieldCheck, title: "Safety first", text: "Every driver is verified and every vehicle inspected before it joins the platform." },
  { icon: HeartHandshake, title: "Respect for riders", text: "Clear fares, polite drivers and support that answers when you need it." },
  { icon: Sparkles, title: "Always improving", text: "We listen to feedback and ship improvements to the app every month." },
];

export default function About() {
  return (
    <>
      <SEO title="About Us" path="/about" description="Learn how Antixor taxi.com is making city travel safer, simpler and more reliable for over 500,000 riders." />
      <PageHeader title="About Us" text="We started with one simple idea: getting a taxi should be easy, safe and predictable." />

      <section className="bg-white py-16 sm:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal x={-30} y={0}>
            <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Moving cities, one <span className="text-royal">safe ride</span> at a time
            </h2>
            <p className="mt-4 leading-relaxed">
              Antixor taxi.com connects riders with professional, verified drivers in over 100 cities. Whether it's a
              daily commute, an early-morning airport run or a corporate event, we focus on the same three things:
              punctuality, safety and comfort.
            </p>
            <p className="mt-4 leading-relaxed">
              Today more than half a million riders rely on us, and our drivers arrive on time 99% of the time. We're
              just getting started.
            </p>
            <Link to="/contact" className="btn-primary mt-7">
              Talk to us <ArrowRight className="size-4" />
            </Link>
          </Reveal>

          <Stagger className="grid gap-4" stagger={0.12}>
            {values.map(({ icon: Icon, title, text }) => (
              <Item key={title} className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-500 text-navy-900">
                  <Icon className="size-6" />
                </span>
                <div>
                  <h3 className="font-bold text-ink">{title}</h3>
                  <p className="mt-1 text-sm text-slate-500">{text}</p>
                </div>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      <Stats />
      <AboutJourney/>
      <WhyChoose />
      <CTABanner />
    </>
  );
}
