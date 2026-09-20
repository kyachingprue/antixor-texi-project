import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Skyline from "../components/Skyline.jsx";
import { Reveal } from "../components/Reveal.jsx";

export default function PromoBanner() {
  return (
    <section className="relative isolate overflow-hidden py-14 sm:py-16">
      <div
        className="absolute inset-0 -z-20"
        style={{ background: "linear-gradient(180deg,#141c47 0%,#5b3a6a 55%,#e7803c 100%)" }}
      />
      <Skyline className="absolute inset-x-0 bottom-0 -z-10 h-full w-full text-navy-900/85" seed={21} spire={300} />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-linear-to-t from-navy-950/80 to-transparent" />
      <div className="container-x">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-brand-400">Ready for your next ride?</p>
            <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
              Book Your Taxi Now
              <span className="block">& Travel with Confidence</span>
            </h2>
            <p className="mt-2 text-sm text-slate-200">Fast booking. Safe drivers. Comfortable rides.</p>
          </div>
          <Link to="/#booking" className="btn-primary shrink-0">
            Book Now <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
