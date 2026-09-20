import { Suspense, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import BackToTop from "./BackToTop.jsx";
import PageLoader from "./PageLoader.jsx";

export default function Layout() {
  const { pathname, hash } = useLocation();

  // New page => jump to top. Link with #hash => smooth-scroll to that section.
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <Navbar />
      <motion.main
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="flex-1"
      >
        <Suspense fallback={<PageLoader />}>
          <Outlet />
        </Suspense>
      </motion.main>
      <Footer />
      <BackToTop />
    </div>
  );
}
