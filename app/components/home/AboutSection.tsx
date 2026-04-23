import Link from "next/link";
import { IMG } from "@/app/lib/data";

export default function AboutSection() {
  return (
    <section className="about" id="about">
      <div className="wrap">
        <div className="about-images">
          <div
            className="a1"
            style={{ backgroundImage: `url(${IMG.matthew2})` }}
          />
          <div
            className="a2"
            style={{ backgroundImage: `url(${IMG.matthew3})` }}
          />
          <div className="tag">Matthew — Lead Videographer</div>
        </div>
        <div className="about-body">
          <div className="label">Behind the lens</div>
          <h2>
            I can&apos;t wait to shoot <em>your</em> wedding.
          </h2>
          <div className="body">
            <p>
              Finding the perfect Brisbane wedding videographer is about more
              than the technical details. It&apos;s about finding someone who
              understands your vision, who shares your excitement, and who is as
              invested in your day as you are.
            </p>
            <p>
              It&apos;s always a privilege to be the one who gets to capture your
              day — and that feeling shines through, both in how I show up on the
              day and in the film I create for you to keep.
            </p>
          </div>
          <div className="sig">— Matthew</div>
          <Link href="/about" className="cta">
            Read my full story
          </Link>
        </div>
      </div>
    </section>
  );
}
