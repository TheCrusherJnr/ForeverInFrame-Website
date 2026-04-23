import Link from "next/link";
import { FILMS, type Film as FilmType } from "@/app/lib/data";
import PlayIcon from "../PlayIcon";

const layouts = ["wide", "tall", "half", "half", "third", "third", "third"] as const;

function Film({ film, layout }: { film: FilmType; layout: (typeof layouts)[number] }) {
  const [first, second] = film.names.split(" & ");
  return (
    <Link href={`/${film.slug}`} className={"film " + layout}>
      <div className="film-img">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={film.img} alt={film.names} loading="lazy" />
        <div className="play">
          <PlayIcon />
        </div>
      </div>
      <div className="film-caption">
        <div>
          <h3>
            {first} <em>&amp;</em> {second}
          </h3>
          <p>
            {film.venue} · {film.year} — {film.note}
          </p>
        </div>
        <div className="num">{film.num}</div>
      </div>
    </Link>
  );
}

export default function Films() {
  return (
    <section className="films" id="films">
      <div className="wrap">
        <div className="section-head">
          <h2>
            Recent <em>films</em>
          </h2>
          <div className="meta">
            2023 — 2026
            <br />
            <span>{FILMS.length} selected stories</span>
          </div>
        </div>
        <div className="film-grid">
          {FILMS.map((film, i) => (
            <Film key={film.slug} film={film} layout={layouts[i]} />
          ))}
        </div>
      </div>
    </section>
  );
}
