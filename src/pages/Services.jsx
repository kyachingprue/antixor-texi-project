import SEO from "../components/SEO.jsx";
import PageHeader from "../components/PageHeader.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import { Item, Stagger } from "../components/Reveal.jsx";
import ServicesSection from "../sections/ServicesSection.jsx";
import MobileApp from "../sections/MobileApp.jsx";
import CTABanner from "../sections/CTABanner.jsx";
import { steps } from "../data.js";
import ServicesExtras from "../components/ServicesExtras.jsx";

export default function Services() {
  return (
    <>
      <SEO title="Services" path="/services" description="City rides, premium rides, airport transfers and corporate travel — pick the ride that fits your day." />
      <PageHeader title="Our Services" text="From daily commutes to airport transfers, we've got you covered." />
      <ServicesSection />

      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading title="How it works" subtitle="Three simple steps from tap to destination." />
          <Stagger className="mt-10 grid gap-6 md:grid-cols-3" stagger={0.15}>
            {steps.map(({ icon: Icon, title, text }, i) => (
              <Item key={title} className="relative rounded-2xl border border-slate-100 bg-white p-6 shadow-md shadow-slate-200/60">
                <span className="absolute right-5 top-4 text-5xl font-extrabold text-slate-100">{i + 1}</span>
                <span className="grid size-12 place-items-center rounded-xl bg-brand-500 text-navy-900">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-ink">{title}</h3>
                <p className="mt-1 text-sm text-slate-500">{text}</p>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>

      <div className="pt-16 sm:pt-20">
        <MobileApp />
      </div>
      <ServicesExtras/>
      <CTABanner />
    </>
  );
}
