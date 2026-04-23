"use client";

import { useState } from "react";
import { IMG } from "@/app/lib/data";

const VIDEO_ID = "alq6woLfMlo";
const VIDEO_SRC =
  `https://www.youtube-nocookie.com/embed/${VIDEO_ID}` +
  `?autoplay=1&mute=1&loop=1&playlist=${VIDEO_ID}` +
  `&controls=0&modestbranding=1&playsinline=1&rel=0&iv_load_policy=3&disablekb=1&fs=0&showinfo=0`;

export default function LandingHero() {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section className="lhero">
      <div className="lhero-video" aria-hidden="true">
        <iframe
          src={VIDEO_SRC}
          title="Forever In Frame — Wedding films showreel"
          allow="autoplay; encrypted-media; picture-in-picture"
          frameBorder={0}
          onLoad={() => window.setTimeout(() => setVideoReady(true), 1400)}
        />
      </div>
      <div
        className={"lhero-poster" + (videoReady ? " hidden" : "")}
        style={{ backgroundImage: `url(${IMG.heroVideo})` }}
      />
      <div className="lhero-tint" />
      <div className="grain" />

      <div className="lhero-content">
        <div className="lhero-badge">
          <span className="pulse" />
          <span>2026 / 2027 dates now booking · Limited availability</span>
        </div>

        <h1>
          Your wedding,
          <br />
          as a <em>film</em> you&apos;ll
          <br />
          watch forever.
        </h1>

        <p className="lhero-sub">
          Cinematic, documentary-style Brisbane wedding films that feel
          like the day itself — not a showreel. Book a free consultation today.
        </p>

        <div className="lhero-ctas">
          <a href="#enquire" className="btn-primary">
            Check my date <span className="arrow">↗</span>
          </a>
          <a href="#films" className="btn-secondary">
            Watch recent films
          </a>
        </div>

        <div className="lhero-trust">
          <div className="trust-item">
            <div className="num">50+</div>
            <div className="lbl">Weddings filmed</div>
          </div>
          <div className="trust-item">
            <div className="num">
              5.0<span>★</span>
            </div>
            <div className="lbl">From every couple</div>
          </div>
          <div className="trust-item">
            <div className="num">2023</div>
            <div className="lbl">Est. Brisbane</div>
          </div>
          <div className="trust-item">
            <div className="num">48hr</div>
            <div className="lbl">Reply time</div>
          </div>
        </div>
      </div>
    </section>
  );
}
