"use client";

import { useEffect, useState } from "react";
import { IMG } from "@/app/lib/data";

const images = [IMG.heroVideo, IMG.heroAlt1, IMG.heroAlt2];

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIdx((i) => (i + 1) % images.length), 6500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero">
      {images.map((src, i) => (
        <div
          key={i}
          className="hero-media"
          style={{
            backgroundImage: `url(${src})`,
            opacity: i === idx ? 1 : 0,
            transition: "opacity 1.8s ease",
            position: "absolute",
            inset: 0,
          }}
        />
      ))}
      <div className="grain" />
      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="bar" />
          <span>Brisbane · Est. 2023 · Weddings & Elopements</span>
        </div>
        <h1>
          Films
          <br />
          that feel <em>like</em>
          <br />
          the day itself.
        </h1>
        <div className="hero-meta">
          <p className="tagline">
            I&apos;m Matthew — a Brisbane wedding videographer who shows up early,
            stays late, and cares about your day like it&apos;s my own.
          </p>
          <div className="loc">
            <span>Based in</span>
            Brisbane, QLD
            <br />
            <span>Available</span>
            Australia-wide
          </div>
        </div>
      </div>
      <div className="scroll-hint">
        <span>Scroll</span>
        <span className="line" />
      </div>
    </section>
  );
}
