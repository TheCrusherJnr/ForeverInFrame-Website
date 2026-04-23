import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Marquee from "../components/Marquee";
import Closing from "../components/Closing";
import AboutHero from "../components/about/AboutHero";
import PortraitStrip from "../components/about/PortraitStrip";
import Story from "../components/about/Story";
import Values from "../components/about/Values";
import Process from "../components/about/Process";
import Facts from "../components/about/Facts";

export const metadata: Metadata = {
  title: "About Matthew — Forever In Frame",
  description:
    "Brisbane wedding videographer Matthew — behind Forever In Frame. Quiet on the day, honest on film.",
};

export default function AboutPage() {
  return (
    <>
      <Nav active="about" />
      <AboutHero />
      <PortraitStrip />
      <Story />
      <Marquee
        phrases={[
          "Brisbane Wedding Films",
          "Cinematic · Documentary · Honest",
          "Forever In Frame",
          "Est. 2023",
        ]}
      />
      <Values />
      <Process />
      <Facts />
      <Closing
        kicker="Ready when you are"
        title={
          <>
            Let&apos;s tell your <em>story</em>.
          </>
        }
        sub="Tell me about your day — what you're planning, what you're worried about, and what you want your film to feel like."
        ctaText="Start a conversation"
      />
      <Footer />
    </>
  );
}
