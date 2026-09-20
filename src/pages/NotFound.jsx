import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SEO from "../components/SEO.jsx";

export default function NotFound() {
  return (
    <>
      <SEO title="Page not found" path="/404" />
      <section data-hero className="grid min-h-screen place-items-center bg-navy-900 px-4 text-center">
        <div>
          <p className="text-8xl font-extrabold text-brand-400 sm:text-9xl">404</p>
          <h1 className="mt-4 text-2xl font-bold text-white sm:text-3xl">This road doesn't lead anywhere</h1>
          <p className="mt-2 text-slate-300">The page you're looking for was moved or never existed.</p>
          <Link to="/" className="btn-primary mt-8">
            <ArrowLeft className="size-4" /> Back to home
          </Link>
        </div>
      </section>
    </>
  );
}
