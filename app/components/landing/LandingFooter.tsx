export default function LandingFooter() {
  return (
    <footer className="landing-footer">
      <div className="wrap">
        <div className="brand">
          <h3>
            Forever <em>in</em> Frame
          </h3>
          <p>Brisbane wedding films, made with care. Available Australia-wide.</p>
        </div>
        <div className="contact-block">
          <div className="label">Contact</div>
          <a href="mailto:matthew@foreverinframe.com.au">
            matthew@foreverinframe.com.au
          </a>
          <a href="https://www.instagram.com/forever.in.frame/">
            @forever.in.frame
          </a>
        </div>
        <div className="cta-block">
          <a href="#enquire" className="btn-primary light">
            Check my date <span className="arrow">↗</span>
          </a>
        </div>
      </div>
      <div className="legal">
        <div>© 2026 Forever In Frame · Brisbane, QLD</div>
        <div>Made with care, from film to frame</div>
      </div>
    </footer>
  );
}
