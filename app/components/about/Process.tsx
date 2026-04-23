const steps = [
  {
    n: "01",
    title: "Say hello",
    body: "Send through your date, venue, and a little about what you're imagining. I'll reply within 48 hours with availability and my full pricing guide.",
  },
  {
    n: "02",
    title: "Chat it through",
    body: "A quick phone or coffee catch-up — no pressure. We talk through your day, your vibe, and any specific moments or people you want me to be watching for.",
  },
  {
    n: "03",
    title: "Lock it in",
    body: "Once you're ready, a signed agreement and 20% deposit secures your date.",
  },
  {
    n: "04",
    title: "The day itself",
    body: "I arrive early, stay late, and shoot quietly alongside your photographer. You focus on getting married. I'll handle the rest.",
  },
  {
    n: "05",
    title: "The film",
    body: "Within 6–12 weeks, you'll receive a private link to your cinematic highlight and any longer edits included in your collection. Forever, in frame.",
  },
];

export default function Process() {
  return (
    <section className="process">
      <div className="head">
        <div className="label">How we&apos;ll work together</div>
        <h2>
          From first hello
          <br />
          to <em>final film</em>.
        </h2>
      </div>
      <div className="steps">
        {steps.map((s) => (
          <div className="step" key={s.n}>
            <div className="n">{s.n}</div>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
