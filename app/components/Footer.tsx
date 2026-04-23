import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="brand">
          <h3>
            Forever <em>in</em> Frame
          </h3>
          <p>Brisbane wedding films, made with care. Available Australia-wide.</p>
        </div>
        <div>
          <h4>Explore</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/#films">Recent films</Link></li>
            <li><Link href="/pricing">Collections</Link></li>
            <li><Link href="/about">About Matthew</Link></li>
          </ul>
        </div>
        <div>
          <h4>Follow</h4>
          <ul>
            <li><a href="https://www.instagram.com/forever.in.frame/">Instagram</a></li>
            <li><a href="#">TikTok</a></li>
            <li><a href="#">YouTube</a></li>
            <li><a href="#">Facebook</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li><Link href="/contact">Enquire now</Link></li>
            <li>
              <a href="mailto:matthew@foreverinframe.com.au">
                matthew@
                <br />
                foreverinframe.com.au
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="legal">
        <div>© 2026 Forever In Frame · Brisbane, QLD</div>
        <div>Made with care, from film to frame</div>
      </div>
    </footer>
  );
}
