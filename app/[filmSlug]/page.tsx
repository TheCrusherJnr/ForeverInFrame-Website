import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FILMS } from "@/app/lib/data";
import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";
import Closing from "@/app/components/Closing";
import FilmHero from "@/app/components/films/FilmHero";
import MoreFilms from "@/app/components/films/MoreFilms";

export const dynamicParams = false;

export function generateStaticParams() {
  return FILMS.map((f) => ({ filmSlug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ filmSlug: string }>;
}): Promise<Metadata> {
  const { filmSlug } = await params;
  const film = FILMS.find((f) => f.slug === filmSlug);
  if (!film) return {};
  return {
    title: `${film.names} — ${film.venue} · Forever In Frame`,
    description: film.note,
  };
}

export default async function FilmPage({
  params,
}: {
  params: Promise<{ filmSlug: string }>;
}) {
  const { filmSlug } = await params;
  const film = FILMS.find((f) => f.slug === filmSlug);
  if (!film) notFound();

  return (
    <>
      <Nav active="films" />
      <FilmHero film={film} />
      <section className="film-body">
        <div className="wrap-narrow">
          <div className="film-body-grid">
            <div className="side">
              <dl className="film-facts">
                <div>
                  <dt>Venue</dt>
                  <dd>{film.venue}</dd>
                </div>
                <div>
                  <dt>Year</dt>
                  <dd>{film.year}</dd>
                </div>
                <div>
                  <dt>Collection</dt>
                  <dd>
                    <em>The Feature</em>
                  </dd>
                </div>
              </dl>
              <Link href="/#films" className="text-btn">
                Back to all films
              </Link>
            </div>
            <div className="body">
              <p className="lead">{film.note}</p>
              <p>
                A short story about {film.names.split(" & ")[0]} &amp;{" "}
                {film.names.split(" & ")[1]}&apos;s day in {film.venue}. Get in
                touch to watch the full film — or enquire about your own.
              </p>
              <div className="film-frame">
                <div
                  className="film-frame-img"
                  style={{ backgroundImage: `url(${film.img})` }}
                />
                <div className="film-frame-note">Full film available on request</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MoreFilms currentSlug={film.slug} />
      <Closing
        kicker="Your turn"
        title={
          <>
            Tell me about <em>your</em> day.
          </>
        }
        sub="Send through your date, venue, and a little about what you're imagining. I'll reply within 48 hours."
        ctaText="Start a conversation"
      />
      <Footer />
    </>
  );
}
