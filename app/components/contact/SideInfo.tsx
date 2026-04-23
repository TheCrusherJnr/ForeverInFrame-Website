import { IMG } from "@/app/lib/data";

export default function SideInfo() {
  return (
    <aside className="side-info">
      <div className="side-card">
        <h4>Or, the classic way</h4>
        <a className="link" href="mailto:matthew@foreverinframe.com.au">
          matthew@foreverinframe.com.au
        </a>
        <p>I read every email personally. No auto-responders, no booking middlemen.</p>
      </div>
      <div className="side-card">
        <h4>Where I&apos;m based</h4>
        <div className="val">
          Brisbane, <em>QLD</em>
        </div>
        <p>Available Australia-wide. Free travel within 50km of Brisbane CBD.</p>
      </div>
      <div className="side-card">
        <h4>Studio hours</h4>
        <div className="val">Tue — Fri</div>
        <p>Weekends are for shooting. I&apos;ll get back to weekend emails on Monday afternoon.</p>
      </div>
      <div className="side-card">
        <h4>Say hi elsewhere</h4>
        <div className="val">
          <a
            href="https://www.instagram.com/forever.in.frame/"
            style={{ borderBottom: "1px solid currentColor", paddingBottom: "2px" }}
          >
            @forever.in.frame
          </a>
        </div>
        <p>The best way to see recent work between portfolio updates.</p>
        <div
          className="side-img"
          style={{ backgroundImage: `url(${IMG.extra3})` }}
        />
      </div>
    </aside>
  );
}
