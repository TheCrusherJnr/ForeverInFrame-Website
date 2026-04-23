import type { Metadata } from "next";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";
import SideInfo from "../components/contact/SideInfo";
import Availability from "../components/contact/Availability";

export const metadata: Metadata = {
  title: "Contact — Forever In Frame",
  description:
    "Get in touch about your wedding film. Brisbane-based, available Australia-wide. Replies within 48 hours.",
};

export default function ContactPage() {
  return (
    <>
      <Nav active="" />
      <ContactHero />
      <section className="form-sec">
        <div className="wrap">
          <ContactForm />
          <SideInfo />
        </div>
      </section>
      <Availability />
      <Footer />
    </>
  );
}
