import Link from "next/link";
import { FILMS, type Film } from "@/app/lib/data";

export default function MoreFilms({ currentSlug }: { currentSlug: string }) {
  const others = FILMS.filter((f) => f.slug !== currentSlug).slice(0, 3);
  return (
    <section className="more-films">
      <div className="wrap">
        <div className="section-head">
          <h2>
            More <em>films</em>
          </h2>
          <Link href="/#films" className="text-btn">
            View all
          </Link>
        </div>
        <div className="more-grid">
          {others.map((f) => {
            const [first, second] = f.names.split(" & ");
            return (
              <Link key={f.slug} href={`/${f.slug}`} className="more-card">
                <div
                  className="more-img"
                  style={{ backgroundImage: `url(${f.img})` }}
                />
                <div className="more-caption">
                  <h3>
                    {first} <em>&amp;</em> {second}
                  </h3>
                  <div className="meta">
                    {f.venue} · {f.year}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
