import { useId } from "react";

const SHAPES = {
  sedan: {
    body: "M14 88 C14 76 22 71 38 68 L80 60 C92 38 114 22 142 22 L184 22 C208 22 224 40 236 60 L264 66 C278 69 286 75 286 86 L286 96 L14 96 Z",
    windows: [
      "M94 60 L110 36 Q116 30 130 30 L156 30 L156 60 Z",
      "M164 30 L186 30 Q200 30 210 42 L224 60 L164 60 Z",
    ],
    wheels: [78, 226],
    r: 18,
    sign: [134, 22],
    door: 160,
  },
  suv: {
    body: "M14 86 C14 74 22 70 36 67 L68 61 L86 32 C90 24 96 20 104 20 L214 20 C224 20 230 24 236 34 L256 62 C272 65 286 70 286 84 L286 96 L14 96 Z",
    windows: [
      "M92 58 L104 30 L150 30 L150 58 Z",
      "M158 30 L212 30 L228 58 L158 58 Z",
    ],
    wheels: [76, 226],
    r: 20,
    sign: [138, 20],
    door: 154,
  },
  van: {
    body: "M12 90 L12 32 C12 22 18 16 26 16 L200 16 C210 16 216 20 222 30 L246 66 C264 68 288 72 288 84 L288 96 L12 96 Z",
    windows: [
      "M28 28 L86 28 L86 60 L28 60 Z",
      "M94 28 L150 28 L150 60 L94 60 Z",
      "M158 28 L198 28 Q206 28 210 34 L230 60 L158 60 Z",
    ],
    wheels: [72, 232],
    r: 19,
    sign: [120, 16],
    door: 90,
  },
};

/**
 * Self-contained side-view car drawn in SVG (no image files needed).
 * Swap it for real photos anytime: <img src="/images/car.png" />
 */
export default function CarIllustration({ type = "sedan", body = "#f4f6fa", taxi = false, className = "" }) {
  const uid = useId().replace(/:/g, "");
  const s = SHAPES[type];
  const light = ["#f4f6fa", "#ffffff"].includes(body);

  return (
    <svg viewBox="0 0 300 122" className={className} role="img" aria-label={`${type} car`}>
      <defs>
        <linearGradient id={`shine-${uid}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity=".45" />
          <stop offset=".55" stopColor="#fff" stopOpacity="0" />
          <stop offset="1" stopColor="#000" stopOpacity=".22" />
        </linearGradient>
        <linearGradient id={`glass-${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5f7aa8" />
          <stop offset="1" stopColor="#14213b" />
        </linearGradient>
        <pattern id={`check-${uid}`} width="8" height="8" patternUnits="userSpaceOnUse">
          <rect width="4" height="4" fill="#111827" />
          <rect x="4" y="4" width="4" height="4" fill="#111827" />
        </pattern>
      </defs>

      <ellipse cx="150" cy="115" rx="132" ry="5" fill="#000" opacity=".28" />

      {taxi && (
        <g>
          <rect x={s.sign[0]} y={s.sign[1] - 11} width="36" height="11" rx="2.5" fill="#111827" />
          <text x={s.sign[0] + 18} y={s.sign[1] - 3} textAnchor="middle" fontSize="7.5" fontWeight="800" fill="#ffc82c" fontFamily="sans-serif">
            TAXI
          </text>
        </g>
      )}

      <path d={s.body} fill={body} stroke={light ? "rgba(15,23,42,.18)" : "rgba(255,255,255,.08)"} />
      <path d={s.body} fill={`url(#shine-${uid})`} />
      {s.windows.map((d, i) => (
        <path key={i} d={d} fill={`url(#glass-${uid})`} />
      ))}

      {taxi && <rect x="28" y="76" width="232" height="8" fill={`url(#check-${uid})`} />}

      {/* door seam + handle */}
      <path d={`M${s.door} 62 V92`} stroke="rgba(0,0,0,.28)" strokeWidth="1.2" />
      <rect x={s.door + 8} y="68" width="10" height="2.4" rx="1.2" fill="rgba(0,0,0,.35)" />

      {/* lights */}
      <path d="M272 70 L287 75 L287 82 L270 80 Z" fill="#fff6cc" />
      <rect x="12" y="72" width="6" height="9" rx="2" fill="#ef4444" />

      {s.wheels.map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="96" r={s.r + 4} fill="#0a1020" />
          <circle cx={cx} cy="96" r={s.r} fill="#161c2a" />
          <circle cx={cx} cy="96" r={s.r * 0.58} fill="#cfd6e2" />
          <circle cx={cx} cy="96" r={s.r * 0.22} fill="#6b7689" />
        </g>
      ))}
    </svg>
  );
}
