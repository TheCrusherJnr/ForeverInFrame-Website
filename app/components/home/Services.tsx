import Link from "next/link";

type Pkg = {
  tier: string;
  flag: string;
  name: string;
  price: string;
  bullets: string[];
};

const pkgs: Pkg[] = [
  {
    tier: "Shortform",
    flag: "",
    name: "The Highlight",
    price: "From $2,400",
    bullets: [
      "Up to 8 hours of coverage",
      "5–10 minute cinematic highlight film",
      "Licensed music",
      "Delivered in 6–12 weeks",
      "Private online gallery",
    ],
  },
  {
    tier: "Most Loved",
    flag: "Most popular",
    name: "The Feature",
    price: "From $3,799",
    bullets: [
      "Up to 10 hours of coverage",
      "5–10 minute cinematic highlight",
      "Full ceremony and speeches delivered",
      "Drone coverage where permitted",
      "Free travel within 50km of Brisbane CBD",
      "Delivered in 6–12 weeks",
    ],
  },
  {
    tier: "Everything",
    flag: "",
    name: "The Keepsake",
    price: "From $4,800",
    bullets: [
      "Up to 12 hours of coverage",
      "5–10 minute cinematic film",
      "Full ceremony, speeches and reception",
      "60-sec social teaser",
      "Second shooter",
      "Raw footage on request",
      "Delivered in 6–12 weeks",
    ],
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <div className="wrap">
        <div className="head">
          <div className="label">Collections</div>
          <h2>
            Three ways
            <br />
            to <em>remember</em> it.
          </h2>
        </div>
        <div className="pkg-grid">
          {pkgs.map((p) => (
            <div className="pkg" key={p.name}>
              <div className="tier">
                <span>{p.tier}</span>
                {p.flag && <span className="flag">✦ {p.flag}</span>}
              </div>
              <h3>
                The <em>{p.name.replace("The ", "")}</em>
              </h3>
              <div className="price">{p.price} AUD</div>
              <ul>
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <Link href="/contact" className="pkg-cta">
                Enquire about this
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
