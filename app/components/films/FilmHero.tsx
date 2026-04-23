import type { Film } from "@/app/lib/data";

export default function FilmHero({ film }: { film: Film }) {
  const [first, second] = film.names.split(" & ");
  return (
    <section className="film-hero">
      <div
        className="film-hero-img"
        style={{ backgroundImage: `url(${film.img})` }}
      />
      <div className="film-hero-content wrap">
        <div className="eyebrow">
          <span className="bar" />
          <span>
            {film.venue} · {film.year} · Film № {film.num}
          </span>
        </div>
        <h1>
          {first} <em>&amp;</em>
          <br />
          {second}
        </h1>
      </div>
    </section>
  );
}
