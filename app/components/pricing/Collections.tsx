import Link from "next/link";

type Pkg = {
  tier: string;
  flag: string | null;
  name: string;
  featured?: boolean;
  desc: string;
  price: string;
  bullets: string[];
};

const pkgs: Pkg[] = [
  {
    tier: "Shortform",
    flag: null,
    name: "The Highlight",
    desc: "The essential film — the best of your day, distilled into something you'll rewatch.",
    price: "2,400",
    bullets: [
      "Up to 8 hours of coverage",
      "5–10 minute cinematic highlight film",
      "Licensed music",
      "Private online gallery",
      "6–12 week delivery",
      "Personal pre-wedding call",
    ],
  },
  {
    tier: "Most chosen",
    flag: "Most loved",
    name: "The Feature",
    featured: true,
    desc: "The complete film. Ceremony in full, speeches in full, and a highlight to share.",
    price: "3,799",
    bullets: [
      "Up to 10 hours of coverage",
      "5–10 minute cinematic highlight",
      "Full ceremony and speeches delivered",
      "Drone coverage where permitted",
      "Licensed music · Private gallery",
      "6–12 week delivery",
    ],
  },
  {
    tier: "Everything",
    flag: null,
    name: "The Keepsake",
    desc: "Every moment held. Two shooters, a longer film, and raw footage for the archive.",
    price: "4,800",
    bullets: [
      "Up to 12 hours of coverage",
      "5–10 minute cinematic feature film",
      "Full ceremony, speeches and reception",
      "60-second social teaser (vertical)",
      "Second shooter for the whole day",
      "Raw footage on a keepsake drive",
      "Licensed music · Private gallery",
      "6–12 week delivery",
    ],
  },
];

export default function Collections() {
  return (
    <section className="collections">
      <div className="wrap">
        <div className="head">
          <div className="label">01 — Collections</div>
          <h2>
            Choose how much you want <em>held onto</em>.
          </h2>
        </div>
        <div className="c-grid">
          {pkgs.map((p) => (
            <div
              className={"c-row" + (p.featured ? " featured" : "")}
              key={p.name}
            >
              <div className="c-left">
                <div className="tier-tag">
                  <span className="dot" />
                  <span>{p.tier}</span>
                  {p.flag && <span className="flag">✦ {p.flag}</span>}
                </div>
                <h3>
                  The <em>{p.name.replace("The ", "")}</em>
                </h3>
                <div className="desc">{p.desc}</div>
                <div className="price">
                  <span className="num">
                    <em>$</em>
                    {p.price}
                  </span>
                  <span className="from">AUD · from</span>
                </div>
                <Link className="cta" href="/contact">
                  Enquire about this →
                </Link>
              </div>
              <div className="c-right">
                <h4>What&apos;s included</h4>
                <ul>
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
