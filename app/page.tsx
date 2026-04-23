import Marquee from "./components/Marquee";
import Testimonials from "./components/home/Testimonials";
import LandingNav from "./components/landing/LandingNav";
import LandingHero from "./components/landing/LandingHero";
import WhyUs from "./components/landing/WhyUs";
import FilmsStrip from "./components/landing/FilmsStrip";
import Offer from "./components/landing/Offer";
import AboutBrief from "./components/landing/AboutBrief";
import LeadForm from "./components/landing/LeadForm";
import LandingFooter from "./components/landing/LandingFooter";

export default function Home() {
  return (
    <>
      <LandingNav />
      <LandingHero />
      <Marquee
        phrases={[
          "Brisbane Wedding Films",
          "2026 / 2027 dates booking now",
          "Cinematic · Documentary · Honest",
          "Limited availability",
          "Available Australia-wide",
        ]}
      />
      <WhyUs />
      <LeadForm />
      <FilmsStrip />
      <Testimonials />
      <Offer />
      <AboutBrief />
      <LandingFooter />
    </>
  );
}
