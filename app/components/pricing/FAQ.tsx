"use client";

import { useState } from "react";

const faqs = [
  {
    q: "When should I book?",
    a: "Most couples book 8–14 months out. For peak dates (April–June, September–November), I'd recommend reaching out as soon as you have your venue locked in.",
  },
  {
    q: "Do you travel outside Brisbane?",
    a: "Yes. Travel within 50km of Brisbane CBD is included. Beyond that, I charge at cost — accommodation if it's over 2 hours, plus a travel day rate for destination weddings. Happy to put together a custom quote.",
  },
  {
    q: "Can we see a full wedding film?",
    a: "Absolutely. The films on my homepage and portfolio are highlights, but I'm happy to send you a full ceremony and speeches edit on request — it's the best way to get a feel for how I cut longer pieces.",
  },
  {
    q: "Do you work with our photographer?",
    a: "Always. I stay out of frame, coordinate with your photographer before the day, and move around them. If you don't have one booked yet, I can recommend a handful I've worked with and trust.",
  },
  {
    q: "What's the booking process?",
    a: "Send an enquiry, we'll jump on a short call to make sure we're a fit, and then a signed agreement + 20% deposit locks in your date. The balance is due 14 days before the wedding.",
  },
  {
    q: "How do we receive the film?",
    a: "A private online gallery where you can stream, download, and share with family. You get unlimited downloads forever — no expiring links. A keepsake drive is available as an add-on.",
  },
  {
    q: "Can you match our photographer's style?",
    a: "My style is warm, documentary, cinematic. I won't try to replicate your photographer — but I will absolutely take their lead when it comes to portraits, sequences, and timing. The goal is always that your photos and film feel like the same day.",
  },
  {
    q: "What if it rains?",
    a: "Then it rains! Some of my favourite footage has been shot in the rain. We'll have a conversation in the lead-up about wet-weather plans, but either way your film will still feel like your day — probably more so.",
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number>(0);

  return (
    <section className="faq">
      <div className="wrap">
        <div className="side">
          <div className="label">04 — Questions</div>
          <h2>
            Good to <em>know</em>.
          </h2>
        </div>
        <div className="items">
          {faqs.map((f, i) => (
            <div
              key={i}
              className={"item" + (openIdx === i ? " open" : "")}
              onClick={() => setOpenIdx(openIdx === i ? -1 : i)}
            >
              <div className="q">
                <span>{f.q}</span>
                <span className="plus">+</span>
              </div>
              <div className="a">{f.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
