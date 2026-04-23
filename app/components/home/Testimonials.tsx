"use client";

import { useCallback, useEffect, useState } from "react";
import { TESTIMONIALS } from "@/app/lib/data";

export default function Testimonials() {
  const [idx, setIdx] = useState(0);

  const next = useCallback(
    () => setIdx((i) => (i + 1) % TESTIMONIALS.length),
    []
  );
  const prev = () =>
    setIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  useEffect(() => {
    const id = setInterval(next, 8000);
    return () => clearInterval(id);
  }, [next]);

  const t = TESTIMONIALS[idx];
  const [first, second] = t.who.split(" & ");

  return (
    <section className="testimonials" id="testimonials">
      <div className="label">Kind words</div>
      <h2>
        Their <em>reaction</em>
        <br />
        says it all.
      </h2>
      <div className="tstage">
        <div
          className="tstage-img"
          style={{ backgroundImage: `url(${t.img})` }}
          key={idx}
        />
        <div className="tstage-body">
          <blockquote key={idx + "-q"}>{t.quote}</blockquote>
          <div className="attribution">
            <span className="divider" />
            <div>
              <div className="who">
                {first} <em>&amp;</em> {second}
              </div>
              <div className="role">Bride — Groom</div>
            </div>
          </div>
        </div>
      </div>
      <div className="tnav">
        <div className="tcount">
          <em>{String(idx + 1).padStart(2, "0")}</em> &nbsp;/&nbsp;{" "}
          {String(TESTIMONIALS.length).padStart(2, "0")}
        </div>
        <div className="tthumbs">
          {TESTIMONIALS.map((tm, i) => (
            <div
              key={i}
              className={"tthumb" + (i === idx ? " active" : "")}
              style={{ backgroundImage: `url(${tm.img})` }}
              onClick={() => setIdx(i)}
            />
          ))}
        </div>
        <div className="tbtns">
          <button className="tbtn" onClick={prev} aria-label="Previous">
            <svg
              viewBox="0 0 18 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path d="M12 3 L5 9 L12 15" />
            </svg>
          </button>
          <button className="tbtn" onClick={next} aria-label="Next">
            <svg
              viewBox="0 0 18 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path d="M6 3 L13 9 L6 15" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
