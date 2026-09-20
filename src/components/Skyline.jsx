/**
 * Procedural city skyline (SVG). Colour comes from `currentColor`,
 * so control it with Tailwind text-* classes.
 */
function makeCity(seed, width = 1200) {
  let s = seed;
  const rnd = () => (s = (s * 16807) % 2147483647) / 2147483647;
  const buildings = [];
  let x = -10;
  while (x < width) {
    const w = 26 + rnd() * 46;
    const h = 40 + rnd() * rnd() * 200 + rnd() * 40;
    buildings.push({ x, w, h });
    x += w - 1 + (rnd() < 0.3 ? rnd() * 6 : 0);
  }
  return buildings;
}

export default function Skyline({ className = "", seed = 5, spire = null }) {
  const buildings = makeCity(seed);
  return (
    <svg
      viewBox="0 0 1200 320"
      preserveAspectRatio="xMidYMax slice"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      {buildings.map((b, i) => (
        <rect key={i} x={b.x} y={320 - b.h} width={b.w} height={b.h} />
      ))}
      {spire !== null && (
        <path
          d={`M${spire - 18} 320 L${spire - 10} 190 L${spire - 4} 100 L${spire} 8 L${spire + 4} 100 L${spire + 10} 190 L${spire + 18} 320Z`}
        />
      )}
    </svg>
  );
}
