import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CheckCircle2, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import SEO from "../components/SEO.jsx";
import PageHeader from "../components/PageHeader.jsx";
import { Item, Reveal, Stagger } from "../components/Reveal.jsx";
import { contact } from "../data.js";

const info = [
  { icon: Phone, label: "Call us", value: contact.phone, href: contact.phoneHref },
  { icon: Mail, label: "Email us", value: contact.email, href: `mailto:${contact.email}` },
  { icon: MapPin, label: "Visit us", value: contact.address },
  { icon: Clock, label: "Support hours", value: "24 hours a day, 7 days a week" },
];

const input =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink placeholder:text-slate-400 transition focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/15";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: send the form to your backend / email service here.
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <>
      <SEO title="Contact" path="/contact" description="Questions about a ride, a booking or a partnership? Our support team is here 24/7." />
      <PageHeader title="Contact Us" text="Questions about a ride, a booking or a partnership? We're here 24/7." />

      <section className="bg-white py-16 sm:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
          <Stagger className="space-y-4" stagger={0.1}>
            {info.map(({ icon: Icon, label, value, href }) => (
              <Item key={label} className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5">
                <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-brand-500 text-navy-900">
                  <Icon className="size-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{label}</p>
                  {href ? (
                    <a href={href} className="break-words font-semibold text-ink hover:text-royal">{value}</a>
                  ) : (
                    <p className="font-semibold text-ink">{value}</p>
                  )}
                </div>
              </Item>
            ))}
          </Stagger>

          <Reveal x={30} y={0}>
            <form onSubmit={onSubmit} onChange={() => setSent(false)} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl shadow-slate-200/70 sm:p-8">
              <h2 className="text-2xl font-extrabold text-ink">Send us a message</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <input required name="name" className={input} placeholder="Full name" aria-label="Full name" />
                <input required type="email" name="email" className={input} placeholder="Email address" aria-label="Email address" />
                <input name="phone" className={`${input} sm:col-span-2`} placeholder="Phone (optional)" aria-label="Phone" />
                <textarea required name="message" rows={5} className={`${input} resize-none sm:col-span-2`} placeholder="How can we help?" aria-label="Message" />
              </div>
              <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
                <Send className="size-4" /> Send message
              </button>
              <AnimatePresence>
                {sent && (
                  <motion.p
                    role="status"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 flex items-center gap-2 overflow-hidden rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700"
                  >
                    <CheckCircle2 className="size-4 shrink-0" /> Message sent. We'll reply within a few hours.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
