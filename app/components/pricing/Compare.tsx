type Cell = string;
type Row = [string, Cell, Cell, Cell];

const rows: Row[] = [
  ["Hours of coverage", "Up to 8", "Up to 10", "Up to 12"],
  ["Highlight film length", "5–10 min", "5–10 min", "5–10 min"],
  ["Full ceremony and speeches delivered", "—", "✓", "✓"],
  ["Drone coverage", "—", "✓", "✓"],
  ["Free travel (50km of CBD)", "✓", "✓", "✓"],
  ["Social teaser", "—", "—", "✓"],
  ["Second shooter", "—", "—", "✓"],
  ["Raw footage", "—", "—", "✓"],
  ["Licensed music", "✓", "✓", "✓"],
  ["Private online gallery", "✓", "✓", "✓"],
  ["Delivery", "6–12 weeks", "6–12 weeks", "6–12 weeks"],
];

function Cell({ v }: { v: string }) {
  if (v === "✓") return <td className="check">✓</td>;
  if (v === "—") return <td className="dash">—</td>;
  return <td className="center">{v}</td>;
}

export default function Compare() {
  return (
    <section className="compare">
      <div className="wrap-narrow">
        <div className="head">
          <div className="label">03 — Side by side</div>
          <h2>
            Compare the <em>collections</em>.
          </h2>
        </div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th className="name">
                The <em>Highlight</em>
              </th>
              <th className="name">
                The <em>Feature</em>
              </th>
              <th className="name">
                The <em>Keepsake</em>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i}>
                <td className="row-label">{r[0]}</td>
                <Cell v={r[1]} />
                <Cell v={r[2]} />
                <Cell v={r[3]} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
