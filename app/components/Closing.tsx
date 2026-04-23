import Link from "next/link";
import type { ReactNode } from "react";

export default function Closing({
  kicker,
  title,
  sub,
  ctaText = "Start a conversation",
  href = "/contact",
}: {
  kicker: string;
  title: ReactNode;
  sub?: string;
  ctaText?: string;
  href?: string;
}) {
  return (
    <section className="closing">
      <div className="kicker">{kicker}</div>
      <h2>{title}</h2>
      {sub && <p className="sub">{sub}</p>}
      <Link className="cta" href={href}>
        {ctaText} <span className="arrow">↗</span>
      </Link>
    </section>
  );
}
