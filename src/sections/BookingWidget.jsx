import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, CalendarClock, Car, CheckCircle2, MapPin, Plane, Search } from "lucide-react";
import { EASE } from "../components/Reveal.jsx";

const tabs = [
  { id: "now", label: "Ride Now", icon: Car },
  { id: "later", label: "Ride Later", icon: CalendarClock },
  { id: "airport", label: "Airport Transfer", icon: Plane },
];

const fieldClass =
  "w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-3 text-sm text-ink placeholder:text-slate-400 transition focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/15";

function Field({ label, icon: Icon, children }) {
  return (
    <label className="block">
      <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-slate-500">
        {label}
      </span>
      <span className="relative block">
        <Icon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-navy-700" />
        {children}
      </span>
    </label>
  );
}

export default function BookingWidget() {
  const [tab, setTab] = useState("now");
  const [form, setForm] = useState({ from: "", to: "", when: "" });
  const [sent, setSent] = useState(false);

  const set = (key) => (e) => {
    setSent(false);
    setForm((f) => ({ ...f, [key]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: replace with your real search / booking API call.
    setSent(true);
  };

  return (
    <div id="booking" className="container-x relative z-20 -mt-24 scroll-mt-28 sm:-mt-28 lg:-mt-32">
      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="rounded-3xl border border-slate-100 bg-white p-4 shadow-2xl shadow-navy-900/20 sm:p-6"
      >
        <div role="tablist" className="mb-5 grid grid-cols-3 gap-1.5 rounded-2xl bg-slate-100 p-1.5 sm:max-w-xl">
          {tabs.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              role="tab"
              aria-selected={tab === id}
              onClick={() => setTab(id)}
              className={`relative flex flex-col items-center justify-center gap-1 rounded-xl px-1.5 py-2 text-center text-[11px] font-bold leading-tight transition-colors sm:flex-row sm:gap-2 sm:px-2 sm:py-2.5 sm:text-sm ${
                tab === id ? "text-navy-900" : "text-slate-500 hover:text-navy-900"
              }`}
            >
              {tab === id && (
                <motion.span
                  layoutId="booking-tab"
                  className="absolute inset-0 rounded-xl bg-brand-500 shadow-md shadow-brand-500/30"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
              <Icon className="relative size-4 shrink-0" />
              <span className="relative">{label}</span>
            </button>
          ))}
        </div>

        <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-[1fr_1fr_1fr_auto] lg:items-end">
          <Field label="From" icon={MapPin}>
            <input required className={fieldClass} placeholder="Enter pickup location" value={form.from} onChange={set("from")} />
          </Field>
          <Field label="To" icon={MapPin}>
            <input
              required
              className={fieldClass}
              placeholder={tab === "airport" ? "Airport or terminal" : "Enter drop location"}
              value={form.to}
              onChange={set("to")}
            />
          </Field>
          <Field label="Date & Time" icon={CalendarClock}>
            {tab === "now" ? (
              <input readOnly className={`${fieldClass} bg-slate-50`} value="Leaving right now" />
            ) : (
              <input required type="datetime-local" className={fieldClass} value={form.when} onChange={set("when")} />
            )}
          </Field>
          <button type="submit" className="btn-primary h-[46px] w-full md:col-span-3 lg:col-span-1 lg:w-auto">
            <Search className="size-4" /> Find Ride <ArrowRight className="size-4" />
          </button>
        </div>

        <AnimatePresence>
          {sent && (
            <motion.p
              role="status"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 flex items-start gap-2 overflow-hidden rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700"
            >
              <CheckCircle2 className="mt-0.5 size-4 shrink-0" />
              Searching for nearby drivers from {form.from} to {form.to}…
            </motion.p>
          )}
        </AnimatePresence>
      </motion.form>
    </div>
  );
}
