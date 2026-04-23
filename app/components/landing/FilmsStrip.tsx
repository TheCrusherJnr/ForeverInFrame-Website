"use client";

import { useState } from "react";
import PlayIcon from "../PlayIcon";

type Film = {
  id: string;
  names: string;
  venue: string;
};

const FILMS: Film[] = [
  { id: "7gyiwHoAqR4", names: "Brad & Rachel", venue: "Braeside Estate" },
  { id: "pivvEoTZt4U", names: "Jenna & Josh", venue: "Goombungee" },
  { id: "E8GjFHFmjjc", names: "Brandon & Cloris", venue: "Gabbinbar Estate · Toowoomba" },
  { id: "T1_fBpchfiA", names: "Grace & Michael", venue: "InterContinental Sanctuary Cove" },
];

function FilmCard({ film }: { film: Film }) {
  const [playing, setPlaying] = useState(false);
  const [first, second] = film.names.split(" & ");

  return (
    <div className="lfilm">
      <div className="lfilm-img">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${film.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
            title={`${film.names} — wedding film`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className="lfilm-play-btn"
            onClick={() => setPlaying(true)}
            aria-label={`Play ${film.names} wedding film`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://i.ytimg.com/vi/${film.id}/maxresdefault.jpg`}
              alt={`${film.names} wedding film`}
              loading="lazy"
            />
            <span className="play" aria-hidden="true">
              <PlayIcon />
            </span>
          </button>
        )}
      </div>
      <div className="lfilm-caption">
        <h3>
          {first} <em>&amp;</em> {second}
        </h3>
        <div className="meta">{film.venue}</div>
      </div>
    </div>
  );
}

export default function FilmsStrip() {
  return (
    <section className="lfilms" id="films">
      <div className="wrap">
        <div className="lfilms-head">
          <div className="label">Recent work</div>
          <h2>
            Real couples.
            <br />
            <em>Real</em> films.
          </h2>
          <p>
            A handful of recent weddings — hit play and see how every day has
            its own feel.
          </p>
        </div>

        <div className="lfilms-grid">
          {FILMS.map((f) => (
            <FilmCard key={f.id} film={f} />
          ))}
        </div>

        <div className="lfilms-cta">
          <a href="#enquire" className="btn-primary">
            Check my date <span className="arrow">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
