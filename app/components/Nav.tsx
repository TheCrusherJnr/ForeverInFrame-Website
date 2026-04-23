"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type NavKey = "films" | "about" | "pricing" | "couples" | "";

export default function Nav({ active = "" }: { active?: NavKey }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items: { label: string; href: string; key: NavKey }[] = [
    { label: "Films", href: "/#films", key: "films" },
    { label: "About", href: "/about", key: "about" },
    { label: "Pricing", href: "/pricing", key: "pricing" },
    { label: "Couples", href: "/#testimonials", key: "couples" },
  ];

  return (
    <nav className={"top" + (scrolled ? " scrolled" : "")}>
      <Link className="mark" href="/">
        Forever <em>in</em> Frame
      </Link>
      <ul>
        {items.map((it) => (
          <li key={it.key}>
            <Link className={active === it.key ? "active" : ""} href={it.href}>
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
      <Link className="cta" href="/contact">
        Enquire
      </Link>
    </nav>
  );
}
