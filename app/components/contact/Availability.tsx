type Month = {
  name: string;
  y: string;
  status: string;
  cls: "booked" | "limited" | "open";
};

const months: Month[] = [
  { name: "Jan", y: "'26", status: "Booked", cls: "booked" },
  { name: "Feb", y: "'26", status: "1 spot", cls: "limited" },
  { name: "Mar", y: "'26", status: "Open", cls: "open" },
  { name: "Apr", y: "'26", status: "Booked", cls: "booked" },
  { name: "May", y: "'26", status: "2 spots", cls: "limited" },
  { name: "Jun", y: "'26", status: "Open", cls: "open" },
  { name: "Jul", y: "'26", status: "Open", cls: "open" },
  { name: "Aug", y: "'26", status: "1 spot", cls: "limited" },
  { name: "Sep", y: "'26", status: "Booked", cls: "booked" },
  { name: "Oct", y: "'26", status: "2 spots", cls: "limited" },
  { name: "Nov", y: "'26", status: "Open", cls: "open" },
  { name: "Dec", y: "'26", status: "Open", cls: "open" },
];

export default function Availability() {
  return (
    <section className="avail">
      <div className="wrap">
        <div className="head">
          <div>
            <div className="label">Availability — 2026</div>
            <h2>
              Dates still <em>open</em>.
            </h2>
          </div>
          <div className="note">
            A snapshot only — I&apos;ll confirm exact availability in my reply.
          </div>
        </div>
        <div className="months">
          {months.map((m, i) => (
            <div key={i} className={"month " + m.cls}>
              <div className="name">
                {m.name} <em>{m.y}</em>
              </div>
              <div className="status">{m.status}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
