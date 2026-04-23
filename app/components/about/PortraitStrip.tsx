import { IMG } from "@/app/lib/data";

export default function PortraitStrip() {
  return (
    <section className="portrait-strip">
      <div className="wrap">
        <div className="grid">
          <div
            className="cell"
            style={{ backgroundImage: `url(${IMG.matthew2})` }}
          />
          <div
            className="cell wide"
            style={{ backgroundImage: `url(${IMG.extra2})` }}
          />
          <div
            className="cell tall"
            style={{ backgroundImage: `url(${IMG.matthew1})` }}
          />
        </div>
      </div>
    </section>
  );
}
