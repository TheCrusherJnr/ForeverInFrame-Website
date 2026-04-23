import { IMG } from "@/app/lib/data";

const bullets = [
  "Up to 10 hours of coverage on your day",
  "5–10 minute cinematic highlight film",
  "Full ceremony and speeches delivered",
  "Drone coverage where permitted",
  "Free travel within 50km of Brisbane CBD",
  "Private online gallery — unlimited downloads",
  "Delivered in 6–12 weeks",
];

export default function Offer() {
  return (
    <section className="offer">
      <div className="wrap">
        <div className="offer-media">
          <div
            className="offer-img"
            style={{
              backgroundImage: `url(${IMG.extra2})`,
              backgroundPosition: "70% center",
            }}
          />
          <div className="offer-badge">
            <span>Most loved</span>
            <strong>The Feature</strong>
          </div>
        </div>

        <div className="offer-body">
          <div className="label">Limited offer — 2026 &amp; 2027 couples</div>
          <h2>
            Save <em>$600</em> on the
            <br />
            Feature collection.
          </h2>
          <p className="lead">
            Enquire this month and lock in our most popular collection for{" "}
            <strong>$3,199</strong> (normally $3,799). Only a handful of 2026
            dates remain — 2027 is filling fast.
          </p>

          <ul className="offer-list">
            {bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>

          <div className="offer-price">
            <div className="was">
              <span>Normally</span>
              <s>$3,799</s>
            </div>
            <div className="now">
              <span>This month</span>
              <strong>$3,199 AUD</strong>
            </div>
          </div>

          <a href="#enquire" className="offer-cta">
            Claim this offer <span className="arrow">↗</span>
          </a>
          <div className="offer-fine">
            No deposit required to check your date. Offer ends when spots fill.
          </div>
        </div>
      </div>
    </section>
  );
}
