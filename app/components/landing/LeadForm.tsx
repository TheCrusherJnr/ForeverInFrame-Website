"use client";

import { useEffect, useRef, useState } from "react";
import { format } from "date-fns";
import { IMG } from "@/app/lib/data";
import {
  MAKE_WEBHOOK_URL,
  getTrackingData,
  newEventId,
} from "@/app/lib/tracking";
import DatePicker from "@/app/components/ui/DatePicker";

const META_PIXEL_ID = "872020001001784";
const LEAD_VALUE_AUD = 3199;

const BOOKING_URL = "https://calendly.com/forever-in-frame";
const CALENDLY_SCRIPT_SRC =
  "https://assets.calendly.com/assets/external/widget.js";

type CalendlyGlobal = {
  initInlineWidget: (options: {
    url: string;
    parentElement: HTMLElement;
  }) => void;
};

type FbqAdvancedMatching = {
  em?: string;
  ph?: string;
  fn?: string;
  ln?: string;
};

type FbqEventOptions = {
  eventID?: string;
};

type FbqFunction = {
  (command: "init", pixelId: string, advancedMatching?: FbqAdvancedMatching): void;
  (
    command: "track" | "trackCustom",
    eventName: string,
    params?: Record<string, unknown>,
    options?: FbqEventOptions
  ): void;
  queue?: unknown[];
  loaded?: boolean;
  version?: string;
};

declare global {
  interface Window {
    Calendly?: CalendlyGlobal;
    fbq?: FbqFunction;
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
  const [weddingDate, setWeddingDate] = useState<Date | undefined>(undefined);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setSubmitError(null);

    const tracking = getTrackingData();
    const eventId = newEventId("lead");

    const payload = {
      // Form fields
      firstName: form.firstName.trim(),
      partnerName: form.partnerName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      weddingDate: form.date.trim(),
      weddingLocation: form.venue.trim(),
      message: form.message.trim(),
      consultation: form.consultation,
      foundUs: form.howHeard,

      // Lead metadata
      leadSource: "Forever In Frame landing page",
      submittedAt: new Date().toISOString(),
      pageUrl:
        typeof window !== "undefined" ? window.location.href : undefined,
      pageReferrer:
        typeof document !== "undefined" ? document.referrer : undefined,
      eventId, // match with Meta Lead event for future CAPI dedup

      // Attribution
      ...tracking,
    };

    try {
      const res = await fetch(MAKE_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        throw new Error(`Webhook returned ${res.status}`);
      }
    } catch (err) {
      console.error("Lead submission failed:", err);
      setSubmitError(
        "Something went wrong sending your enquiry. Please try again, or email matthew@foreverinframe.com.au directly."
      );
      setSubmitting(false);
      return;
    }

    // Fire Meta Pixel Lead with advanced matching + dedup ID
    if (typeof window !== "undefined" && window.fbq) {
      const email = form.email.toLowerCase().trim();
      const phoneDigits = form.phone.replace(/\D/g, "");
      const firstName = form.firstName.toLowerCase().trim();

      window.fbq("init", META_PIXEL_ID, {
        em: email || undefined,
        ph: phoneDigits || undefined,
        fn: firstName || undefined,
      });

      window.fbq(
        "track",
        "Lead",
        {
          content_name: "Wedding Film Enquiry",
          content_category: form.consultation
            ? "Consultation booked"
            : "Form only",
          value: LEAD_VALUE_AUD,
          currency: "AUD",
        },
        { eventID: eventId }
      );
    }

    setSubmitting(false);
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
            <form
              className="contact lead-form"
              onSubmit={onSubmit}
              autoComplete="on"
              noValidate={false}
            >
              <div className="row">
                <div>
                  <label htmlFor="lf-firstName">
                    Your first name <span className="req">*</span>
                  </label>
                  <input
                    id="lf-firstName"
                    name="firstName"
                    type="text"
                    required
                    autoComplete="given-name"
                    autoCapitalize="words"
                    autoCorrect="off"
                    spellCheck={false}
                    value={form.firstName}
                    onChange={(e) => set("firstName", e.target.value)}
                    placeholder="e.g. Sarah"
                  />
                </div>
                <div>
                  <label htmlFor="lf-partnerName">
                    Partner&apos;s first name
                  </label>
                  <input
                    id="lf-partnerName"
                    name="partnerFirstName"
                    type="text"
                    autoComplete="off"
                    autoCapitalize="words"
                    autoCorrect="off"
                    spellCheck={false}
                    value={form.partnerName}
                    onChange={(e) => set("partnerName", e.target.value)}
                    placeholder="e.g. Baden"
                  />
                </div>
              </div>

              <div className="row">
                <div>
                  <label htmlFor="lf-email">
                    Email <span className="req">*</span>
                  </label>
                  <input
                    id="lf-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    inputMode="email"
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck={false}
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                    placeholder="you@somewhere.com"
                  />
                </div>
                <div>
                  <label htmlFor="lf-phone">Phone</label>
                  <input
                    id="lf-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    inputMode="tel"
                    value={form.phone}
                    onChange={(e) => set("phone", e.target.value)}
                    placeholder="04XX XXX XXX"
                  />
                </div>
              </div>

              <div className="row">
                <div>
                  <label htmlFor="lf-weddingDate">
                    Wedding date (or approx.)
                  </label>
                  <DatePicker
                    id="lf-weddingDate"
                    name="weddingDate"
                    value={weddingDate}
                    onChange={(d) => {
                      setWeddingDate(d);
                      set("date", d ? format(d, "yyyy-MM-dd") : "");
                    }}
                    placeholder="Pick your wedding date"
                  />
                </div>
                <div>
                  <label htmlFor="lf-weddingLocation">Venue / location</label>
                  <input
                    id="lf-weddingLocation"
                    name="weddingLocation"
                    type="text"
                    autoComplete="address-level2"
                    autoCapitalize="words"
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
                  <label htmlFor="lf-message">
                    Anything else you&apos;d like me to know?
                  </label>
                  <textarea
                    id="lf-message"
                    name="message"
                    autoComplete="off"
                    value={form.message}
                    onChange={(e) => set("message", e.target.value)}
                    placeholder="What makes your wedding perfect for you? What do you want your film to feel like?"
                  />
                </div>
              </div>

              {submitError && (
                <div className="submit-error" role="alert">
                  {submitError}
                </div>
              )}

              <div className="submit-row">
                <div className="privacy">
                  Your details stay between us. I&apos;ll reply from my personal
                  inbox.
                </div>
                <button type="submit" disabled={submitting}>
                  {submitting ? "Sending…" : "Send enquiry"}{" "}
                  <span className="arrow">↗</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
