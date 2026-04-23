"use client";

import { useState } from "react";

const services = [
  "Highlight film",
  "Full ceremony and speeches delivered",
  "Drone coverage",
  "Second shooter",
  "Engagement film",
  "Raw footage",
];
const howHeardOptions = [
  "Instagram",
  "A friend",
  "Google",
  "My photographer",
  "My venue",
  "Other",
];

type FormState = {
  firstName: string;
  partnerName: string;
  email: string;
  phone: string;
  date: string;
  venue: string;
  guests: string;
  collection: string;
  services: string[];
  howHeard: string;
  message: string;
};

const empty: FormState = {
  firstName: "",
  partnerName: "",
  email: "",
  phone: "",
  date: "",
  venue: "",
  guests: "",
  collection: "",
  services: [],
  howHeard: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [submitted, setSubmitted] = useState(false);

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const toggleService = (s: string) =>
    setForm((f) => ({
      ...f,
      services: f.services.includes(s)
        ? f.services.filter((x) => x !== s)
        : [...f.services, s],
    }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 400, behavior: "smooth" });
  };

  if (submitted) {
    return (
      <div className="form-success">
        <h3>
          Thank you, <em>{form.firstName || "friend"}</em>.
        </h3>
        <p>
          Your message is in. I&apos;ll get back to you within 48 hours with
          availability and the full pricing guide — from Matthew directly.
        </p>
      </div>
    );
  }

  return (
    <form className="contact" onSubmit={onSubmit}>
      <div className="row">
        <div>
          <label>
            Your first name <span className="req">*</span>
          </label>
          <input
            required
            value={form.firstName}
            onChange={(e) => set("firstName", e.target.value)}
            placeholder="e.g. Sarah"
          />
        </div>
        <div>
          <label>Partner&apos;s first name</label>
          <input
            value={form.partnerName}
            onChange={(e) => set("partnerName", e.target.value)}
            placeholder="e.g. Baden"
          />
        </div>
      </div>

      <div className="row">
        <div>
          <label>
            Email <span className="req">*</span>
          </label>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            placeholder="you@somewhere.com"
          />
        </div>
        <div>
          <label>Phone</label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => set("phone", e.target.value)}
            placeholder="04XX XXX XXX"
          />
        </div>
      </div>

      <div className="row">
        <div>
          <label>Wedding date (or approx.)</label>
          <input
            type="text"
            value={form.date}
            onChange={(e) => set("date", e.target.value)}
            placeholder="March 14, 2027 — or TBC"
          />
        </div>
        <div>
          <label>Venue / location</label>
          <input
            value={form.venue}
            onChange={(e) => set("venue", e.target.value)}
            placeholder="Venue, suburb, or 'still deciding'"
          />
        </div>
      </div>

      <div className="row">
        <div>
          <label>Approximate guest count</label>
          <select
            value={form.guests}
            onChange={(e) => set("guests", e.target.value)}
          >
            <option value="">Select...</option>
            <option>Elopement · under 20</option>
            <option>Intimate · 20 to 60</option>
            <option>Medium · 60 to 120</option>
            <option>Large · 120 to 200</option>
            <option>200+</option>
            <option>Not sure yet</option>
          </select>
        </div>
        <div>
          <label>Collection you&apos;re drawn to</label>
          <select
            value={form.collection}
            onChange={(e) => set("collection", e.target.value)}
          >
            <option value="">Open to suggestions</option>
            <option>The Highlight — from $2,400</option>
            <option>The Feature — from $3,799</option>
            <option>The Keepsake — from $4,800</option>
            <option>A custom mix</option>
          </select>
        </div>
      </div>

      <div className="row single">
        <div>
          <label>What would you like captured?</label>
          <div className="pill-group">
            {services.map((s) => (
              <button
                type="button"
                key={s}
                className={
                  "pill" + (form.services.includes(s) ? " active" : "")
                }
                onClick={() => toggleService(s)}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="row single">
        <div>
          <label>Tell me about your day</label>
          <textarea
            value={form.message}
            onChange={(e) => set("message", e.target.value)}
            placeholder="What are your plans? What makes your wedding perfect for you? What do you want your film to feel like?"
          />
        </div>
      </div>

      <div className="row single">
        <div>
          <label>How did you hear about me?</label>
          <div className="pill-group">
            {howHeardOptions.map((h) => (
              <button
                type="button"
                key={h}
                className={"pill" + (form.howHeard === h ? " active" : "")}
                onClick={() => set("howHeard", h)}
              >
                {h}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="submit-row">
        <div className="privacy">
          Your details stay between us. I&apos;ll reply from my personal inbox.
        </div>
        <button type="submit">
          Send enquiry <span className="arrow">↗</span>
        </button>
      </div>
    </form>
  );
}
