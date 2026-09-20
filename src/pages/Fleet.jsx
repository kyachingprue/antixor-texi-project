import SEO from "../components/SEO.jsx";
import PageHeader from "../components/PageHeader.jsx";
import FleetSection from "../sections/FleetSection.jsx";
import PromoBanner from "../sections/PromoBanner.jsx";

export default function Fleet() {
  return (
    <>
      <SEO title="Our Fleet" path="/fleet" description="Economy, Sedan, SUV and Van — choose the right vehicle for your group size, luggage and budget." />
      <PageHeader title="Our Fleet" text="From economy to luxury, we have the right vehicle for your journey." />
      <FleetSection showPrice heading={false} />
      <PromoBanner />
    </>
  );
}
