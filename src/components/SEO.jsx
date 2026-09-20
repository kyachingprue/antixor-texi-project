import { Helmet } from "react-helmet-async";

const SITE = "Antixor taxi.com";
const DEFAULT_DESC =
  "Book a fast, safe and reliable taxi in seconds. Professional drivers, modern vehicles and 24/7 support — anytime, anywhere.";

/** Per-route <title>, description, canonical and Open Graph tags. */
export default function SEO({ title, description = DEFAULT_DESC, path = "/" }) {
  const fullTitle = title ? `${title} | ${SITE}` : `${SITE} – Fast, Safe & Reliable Taxi Service`;
  const url = typeof window !== "undefined" ? `${window.location.origin}${path}` : path;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}
