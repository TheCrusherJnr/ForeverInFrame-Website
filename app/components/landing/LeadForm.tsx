"use client";

import { useEffect, useRef, useState } from "react";
import { IMG } from "@/app/lib/data";

const BOOKING_URL = "https://calendly.com/forever-in-frame";
const CALENDLY_SCRIPT_SRC =
  "https://assets.calendly.com/assets/external/widget.js";

type CalendlyGlobal = {
  initInlineWidget: (options: {
    url: string;
    parentElement: HTMLElement;
  }) => void;
};

declare global {
  interface Window {
    Calendly?: CalendlyGlobal;
  }
}

const howHeardOptions = [
  "Facebook",
  "Instagram",
  "Google",
  "A friend",
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
  consultation: boolean;
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
  consultation: false,
  howHeard: "",
  message: "",
};

export default function LeadForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [submitted, setSubmitted] = useState(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    document
      .getElementById("enquire")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    if (!submitted || !calendarRef.current) return;

    const mountWidget = () => {
      const el = calendarRef.current;
      if (!el || !window.Calendly) return;
      el.innerHTML = "";
      window.Calendly.initInlineWidget({
        url: BOOKING_URL,
        parentElement: el,
      });
    };

    if (window.Calendly) {
      mountWidget();
      return;
    }

    let script = document.querySelector<HTMLScriptElement>(
      `script[src="${CALENDLY_SCRIPT_SRC}"]`
    );
    if (!script) {
      script = document.createElement("script");
      script.src = CALENDLY_SCRIPT_SRC;
      script.async = true;
      document.body.appendChild(script);
    }
    script.addEventListener("load", mountWidget);
    return () => script?.removeEventListener("load", mountWidget);
  }, [submitted]);

  return (
    <section className="lead" id="enquire">
      <div
        className="lead-bg"
        style={{ backgroundImage: `url(${IMG.extra4})` }}
      />
      <div className="wrap">
        <div className="lead-head">
          <div className="label">Start a conversation</div>
          <h2>
            Let&apos;s see if your <em>date</em>
            <br />
            is still open.
          </h2>
          <p>
            Tell me a little about your day and I&apos;ll reply within 48 hours
            with availability and the full pricing guide — from Matthew,
            directly.
          </p>
          <ul className="lead-points">
            <li>Free, no-pressure consultation call</li>
            <li>Full pricing guide sent to your inbox</li>
            <li>No deposit required to check availability</li>
          </ul>
        </div>

        <div className="lead-form-wrap">
          {submitted ? (
            <div className="form-success">
              <h3>
                Thank you, <em>{form.firstName || "friend"}</em>.
              </h3>
              <p>
                {form.consultation
                  ? "Your enquiry is in. Pick a 15-minute slot below and we'll jump on a quick call — your $200 discount is locked in."
                  : "Your message is in. I'll reply within 48 hours. Want $200 off on top of the Feature offer? Grab a 15-minute call below."}
              </p>

              <div className="calendar-embed">
                <div className="calendar-head">
                  <div className="label">Book your 15-min call</div>
                  <h4>
                    Pick a time that <em>suits</em> you.
                  </h4>
                </div>
                <div className="calendar-frame">
                  <div
                    ref={calendarRef}
                    className="calendly-inline-widget"
                    data-url={BOOKING_URL}
                    style={{ minWidth: "320px", height: "700px" }}
                  />
                </div>
                <p className="calendar-fine">
                  Can&apos;t see a time that works? Reply to my email and
                  we&apos;ll find one.
                </p>
              </div>
            </div>
          ) : (
            <form className="contact lead-form" onSubmit={onSubmit}>
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
                    placeholder="e.g. October 2027 — or TBC"
                  />
                </div>
                <div>
                  <label>Venue / location</label>
                  <input
                    value={form.venue}
                    onChange={(e) => set("venue", e.target.value)}
                    placeholder="Venue or suburb"
                  />
                </div>
              </div>

              <div className="row single">
                <div>
                  <label>Want an extra $200 off?</label>
                  <button
                    type="button"
                    className={
                      "consult-box" + (form.consultation ? " active" : "")
                    }
                    onClick={() =>
                      set("consultation", !form.consultation)
                    }
                    aria-pressed={form.consultation}
                  >
                    <span className="consult-check" aria-hidden="true">
                      {form.consultation ? "✓" : ""}
                    </span>
                    <span className="consult-body">
                      <strong>
                        Yes — book me in for a 15-minute consultation call
                      </strong>
                      <span className="consult-note">
                        Take another <em>$200 off</em> any collection when you
                        jump on a quick Zoom with me — on top of the Feature
                        offer.
                      </span>
                    </span>
                    <span className="consult-badge">Save $200</span>
                  </button>
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
                        className={
                          "pill" + (form.howHeard === h ? " active" : "")
                        }
                        onClick={() => set("howHeard", h)}
                      >
                        {h}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="row single">
                <div>
                  <label>Anything else you&apos;d like me to know?</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => set("message", e.target.value)}
                    placeholder="What makes your wedding perfect for you? What do you want your film to feel like?"
                  />
                </div>
              </div>

              <div className="submit-row">
                <div className="privacy">
                  Your details stay between us. I&apos;ll reply from my personal
                  inbox.
                </div>
                <button type="submit">
                  Send enquiry <span className="arrow">↗</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
