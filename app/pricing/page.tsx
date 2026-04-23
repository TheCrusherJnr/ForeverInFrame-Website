import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Closing from "../components/Closing";
import PricingHero from "../components/pricing/PricingHero";
import PricingIntro from "../components/pricing/PricingIntro";
import Collections from "../components/pricing/Collections";
import Addons from "../components/pricing/Addons";
import Compare from "../components/pricing/Compare";
import FAQ from "../components/pricing/FAQ";

export const metadata: Metadata = {
  title: "Collections & Pricing — Forever In Frame",
  description:
    "Brisbane wedding film collections from $2,400 AUD. The Highlight, The Feature, and The Keepsake.",
};

export default function PricingPage() {
  return (
    <>
      <Nav active="pricing" />
      <PricingHero />
      <PricingIntro />
      <Collections />
      <Addons />
      <Compare />
      <FAQ />
      <Closing
        kicker="Next step"
        title={
          <>
            Let&apos;s make <em>your</em> film.
          </>
        }
        sub="If one of these feels right — or if you'd like to mix and match — send through the details of your day and I'll reply with a full pricing guide."
        ctaText="Check my date"
      />
      <Footer />
    </>
  );
}
