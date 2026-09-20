import SEO from "../components/SEO.jsx";
import Hero from "../sections/Hero.jsx";
import BookingWidget from "../sections/BookingWidget.jsx";
import ServicesSection from "../sections/ServicesSection.jsx";
import WhyChoose from "../sections/WhyChoose.jsx";
import FleetSection from "../sections/FleetSection.jsx";
import PromoBanner from "../sections/PromoBanner.jsx";
import Testimonials from "../sections/Testimonials.jsx";
import Stats from "../sections/Stats.jsx";
import AirportBanner from "../sections/AirportBanner.jsx";
import MobileApp from "../sections/MobileApp.jsx";
import CTABanner from "../sections/CTABanner.jsx";

export default function Home() {
  return (
    <>
      <SEO path="/" />
      <Hero />
      <BookingWidget />
      <ServicesSection />
      <WhyChoose />
      <FleetSection />
      <PromoBanner />
      <Testimonials />
      <Stats />
      <AirportBanner />
      <MobileApp />
      <CTABanner />
    </>
  );
}
