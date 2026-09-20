import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Item, Reveal, Stagger } from "../components/Reveal.jsx";
import { whyChoose } from "../data.js";

export default function WhyChoose() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900 py-16 sm:py-20 lg:py-24">
      {/* decorative taxi stripe + glow */}
      <div className="absolute -left-24 -top-20 -z-10 h-56 w-[30rem] -rotate-12 bg-brand-500">
        <div
          className="absolute inset-x-0 bottom-0 h-6"
          style={{
            backgroundImage:
              "linear-gradient(45deg,#0a1428 25%,transparent 25%,transparent 75%,#0a1428 75%),linear-gradient(45deg,#0a1428 25%,transparent 25%,transparent 75%,#0a1428 75%)",
            backgroundSize: "24px 24px",
            backgroundPosition: "0 0,12px 12px",
          }}
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-navy-900/60 via-navy-900/90 to-navy-900" />
      <div className="absolute -bottom-32 left-1/4 -z-10 size-96 rounded-full bg-royal/20 blur-3xl" />

      <div className="container-x grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal x={-40} y={0}>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Why Choose
            <span className="block text-brand-400">Antixor taxi.com?</span>
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-300 sm:text-base">
            We make your journey simple, safe and stress-free. With professional drivers, modern vehicles and 24/7
            support, you're always in good hands.
          </p>
          <Link to="/about" className="btn-primary mt-7">
            Learn More <ArrowRight className="size-4" />
          </Link>
        </Reveal>

        <Stagger className="grid gap-6 sm:grid-cols-2" stagger={0.12}>
          {whyChoose.map(({ icon: Icon, title, text }) => (
            <Item key={title} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <span className="grid size-12 shrink-0 place-items-center rounded-xl border border-brand-400/50 bg-brand-500/10 text-brand-400">
                <Icon className="size-6" />
              </span>
              <div>
                <h3 className="font-bold text-white">{title}</h3>
                <p className="mt-1 text-sm text-slate-400">{text}</p>
              </div>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
