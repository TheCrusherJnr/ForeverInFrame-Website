import type { ReactNode } from "react";
import { IMG } from "@/app/lib/data";

const rows: [string, ReactNode][] = [
  [
    "Based in",
    <>
      Brisbane, <em>QLD</em>
    </>,
  ],
  ["Travels", "Australia-wide"],
  ["Shooting since", "2023"],
  [
    "Weddings a year",
    <>
      Up to <em>24</em>
    </>,
  ],
  ["Gear", "Sony cinema, prime glass"],
  [
    "Style",
    <>
      <em>Documentary</em>, cinematic
    </>,
  ],
  ["Turnaround", "6–12 weeks"],
  ["Music", "Fully licensed"],
];

export default function Facts() {
  return (
    <section className="facts">
      <div className="wrap">
        <div
          className="img"
          style={{ backgroundImage: `url(${IMG.extra4})` }}
        />
        <div>
          <h2>
            The <em>details</em>, for the curious.
          </h2>
          <dl>
            {rows.map(([k, v], i) => (
              <div className="row" key={i}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
