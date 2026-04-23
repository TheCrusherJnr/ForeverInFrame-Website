import { IMG } from "@/app/lib/data";

export default function AboutBrief() {
  return (
    <section className="about-brief">
      <div className="wrap">
        <div
          className="about-brief-img"
          style={{ backgroundImage: `url(${IMG.matthew3})` }}
        />
        <div className="about-brief-body">
          <div className="label">Behind the lens</div>
          <h2>
            Hi, I&apos;m <em>Matthew</em>.
          </h2>
          <p>
            I believe that finding the perfect Brisbane Wedding Videographer is
            about more than just the technical details. It&apos;s about finding
            someone who understands your vision, who shares your excitement,
            and who is just as invested in your day as you are. It&apos;s
            always such a privilege to be the one who gets to capture your day
            and that feeling shines in both my enthusiasm on the day and in the
            video I create.
          </p>
          <div className="sig">— Matthew</div>
          <div className="about-brief-stats">
            <div>
              <div className="num">50+</div>
              <div className="lbl">Weddings filmed since 2023</div>
            </div>
            <div>
              <div className="num">100%</div>
              <div className="lbl">Five-star couples</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
