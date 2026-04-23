"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function LandingNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={"landing-nav" + (scrolled ? " scrolled" : "")}>
      <Link className="mark" href="/">
        Forever <em>in</em> Frame
      </Link>
      <div className="landing-nav-right">
        <span className="tag">Brisbane · Australia-wide</span>
        <a href="#enquire" className="cta">
          Check availability
        </a>
      </div>
    </nav>
  );
}
