import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaApple, FaFacebookF, FaGooglePlay, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Logo from "./Logo.jsx";
import { Item, Stagger } from "./Reveal.jsx";
import { contact, navLinks } from "../data.js";

const socials = [
  { icon: FaFacebookF, label: "Facebook" },
  { icon: FaXTwitter, label: "X (Twitter)" },
  { icon: FaInstagram, label: "Instagram" },
  { icon: FaLinkedinIn, label: "LinkedIn" },
];

export function StoreButtons({ className = "" }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a
        href="#"
        className="flex items-center gap-3 rounded-xl border border-white/20 bg-black px-4 py-2 text-white transition hover:-translate-y-0.5 hover:border-brand-400"
      >
        <FaApple className="size-6" />
        <span className="leading-tight">
          <span className="block text-[9px] uppercase tracking-wide text-slate-300">Download on the</span>
          <span className="block text-sm font-bold">App Store</span>
        </span>
      </a>
      <a
        href="#"
        className="flex items-center gap-3 rounded-xl border border-white/20 bg-black px-4 py-2 text-white transition hover:-translate-y-0.5 hover:border-brand-400"
      >
        <FaGooglePlay className="size-5" />
        <span className="leading-tight">
          <span className="block text-[9px] uppercase tracking-wide text-slate-300">Get it on</span>
          <span className="block text-sm font-bold">Google Play</span>
        </span>
      </a>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-slate-300">
      <div className="container-x py-14">
        <Stagger className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.4fr_1.2fr]" stagger={0.08}>
          <Item>
            <Logo />
            <p className="mt-4 max-w-xs text-sm">Safe rides. Better journeys.</p>
            <div className="mt-5 flex gap-2">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid size-9 place-items-center rounded-full bg-white/10 text-white transition hover:-translate-y-1 hover:bg-brand-500 hover:text-navy-900"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </Item>

          <Item>
            <h3 className="mb-4 text-sm font-bold text-white">Quick Links</h3>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition-colors hover:text-brand-400">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Item>

          <Item>
            <h3 className="mb-4 text-sm font-bold text-white">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-brand-400" />
                <a href={contact.phoneHref} className="hover:text-brand-400">{contact.phone}</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-brand-400" />
                <a href={`mailto:${contact.email}`} className="break-all hover:text-brand-400">{contact.email}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand-400" />
                <span>{contact.address}</span>
              </li>
            </ul>
          </Item>

          <Item>
            <h3 className="mb-4 text-sm font-bold text-white">Download Our App</h3>
            <StoreButtons className="flex-col items-start" />
          </Item>
        </Stagger>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-xs text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} Antixor taxi.com. All rights reserved.</p>
          <p className="flex gap-4">
            <a href="#" className="hover:text-brand-400">Privacy Policy</a>
            <a href="#" className="hover:text-brand-400">Terms & Conditions</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
