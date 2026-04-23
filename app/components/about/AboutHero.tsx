import { IMG } from "@/app/lib/data";

export default function AboutHero() {
  return (
    <section className="about-hero">
      <div className="wrap">
        <div>
          <div className="eyebrow">
            <span className="bar" />
            <span>About — Behind the lens</span>
          </div>
          <h1>
            Hi, I&apos;m
            <br />
            <em>Matthew</em>.
          </h1>
        </div>
        <div
          className="portrait"
          style={{ backgroundImage: `url(${IMG.matthew3})` }}
        />
      </div>
    </section>
  );
}
