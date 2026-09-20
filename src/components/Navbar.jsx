import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { ArrowRight, Mail, Menu, Phone, X } from "lucide-react";
import Logo from "./Logo.jsx";
import { contact, navLinks } from "../data.js";

const EASE = [0.32, 0.72, 0, 1];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Scroll down => hide the bar. Scroll up => show it again.
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 24);
    if (open) return;
    if (latest < 100) return setHidden(false);
    if (Math.abs(latest - previous) < 6) return; // ignore tiny jitters
    setHidden(latest > previous);
  });

  // Lock page scroll + close on Esc while the mobile drawer is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = original;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Close the drawer automatically if the screen grows to desktop size.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e) => e.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <motion.header
        variants={{ visible: { y: 0 }, hidden: { y: "-100%" } }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: EASE }}
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
          scrolled
            ? "border-white/10 bg-navy-900/90 shadow-lg shadow-black/20 backdrop-blur-xl"
            : "border-transparent bg-navy-900/60 backdrop-blur-md"
        }`}
      >
        <div className="container-x flex h-16 items-center justify-between gap-4 md:h-20">
          <Logo />

          {/* Desktop links */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `relative rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                    isActive ? "text-brand-400" : "text-slate-200 hover:text-white"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-brand-400"
                        transition={{ type: "spring", stiffness: 500, damping: 36 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={contact.phoneHref}
              className="hidden items-center gap-2 text-sm font-semibold text-slate-200 transition-colors hover:text-brand-400 xl:flex"
            >
              <Phone className="size-4 text-brand-400" />
              {contact.phone}
            </a>
            <Link to="/#booking" className="btn-primary hidden !px-5 !py-2.5 sm:inline-flex">
              Book a Ride
            </Link>

            {/* 3-bar menu (small & medium screens) */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="grid size-11 place-items-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10 lg:hidden"
            >
              <Menu className="size-6" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Drawer lives OUTSIDE the header: a transformed parent would break `position: fixed`. */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={close}
          />
        )}
        {open && (
          <motion.aside
            key="drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="fixed inset-y-0 right-0 z-[70] flex w-[85%] max-w-sm flex-col overflow-y-auto border-l border-white/10 bg-navy-900 px-6 pb-8 pt-5 shadow-2xl lg:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            <div className="flex items-center justify-between">
              <Logo onClick={close} />
              <button
                type="button"
                onClick={close}
                aria-label="Close menu"
                className="grid size-11 place-items-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10"
              >
                <X className="size-6" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col" aria-label="Mobile">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.45, ease: EASE }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    onClick={close}
                    className={({ isActive }) =>
                      `flex items-center justify-between border-b border-white/10 py-4 text-lg font-semibold transition-colors ${
                        isActive ? "text-brand-400" : "text-white hover:text-brand-300"
                      }`
                    }
                  >
                    {link.label}
                    <ArrowRight className="size-5 opacity-60" />
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <motion.div
              className="mt-auto space-y-4 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.5, ease: EASE }}
            >
              <Link to="/#booking" onClick={close} className="btn-primary w-full">
                Book a Ride
              </Link>
              <a href={contact.phoneHref} className="flex items-center gap-3 text-sm text-slate-300">
                <Phone className="size-4 text-brand-400" /> {contact.phone}
              </a>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-sm text-slate-300">
                <Mail className="size-4 text-brand-400" /> {contact.email}
              </a>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
