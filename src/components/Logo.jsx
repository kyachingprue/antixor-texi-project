import { Link } from "react-router-dom";

export function LogoMark({ className = "h-9 w-10" }) {
  return (
    <svg viewBox="0 0 52 46" className={className} aria-hidden="true">
      <path d="M2 44 21 4h9L11 44Z" fill="#ffb800" />
      <path d="M27 4h7l17 40H38l-6-14Z" fill="#ffc82c" />
      <path d="M20 34h14l3 8H17Z" fill="#e6a200" opacity=".85" />
    </svg>
  );
}

export default function Logo({ onClick, className = "" }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="Antixor taxi.com – home"
      className={`flex items-center gap-2 ${className}`}
    >
      <LogoMark />
      <span className="leading-none">
        <span className="block text-xl font-extrabold tracking-tight text-white">Antixor</span>
        <span className="block text-sm font-semibold text-brand-400">taxi.com</span>
      </span>
    </Link>
  );
}
