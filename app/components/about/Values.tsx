type Value = {
  n: string;
  firstWord: string;
  rest: string;
  body: string;
};

const items: Value[] = [
  {
    n: "i",
    firstWord: "Quiet",
    rest: " on the day",
    body:
      "I'm not the videographer waving people into position. I stay out of the way and let the day unfold — you'll barely notice I'm there, even when I'm right in front of you.",
  },
  {
    n: "ii",
    firstWord: "Honest",
    rest: ", not staged",
    body:
      "I'd rather catch something real than pose something perfect. Your film should look like you on your best day — not a stylised version of someone else's wedding.",
  },
  {
    n: "iii",
    firstWord: "Invested",
    rest: ", fully",
    body:
      "I only take on a limited number of weddings each year so I can give each one the attention it deserves. From first email to final delivery, you're not one of many.",
  },
];

export default function Values() {
  return (
    <section className="values">
      <div className="wrap">
        <div className="head">
          <div className="label">What to expect</div>
          <h2>
            Three things I&apos;ll always <em>get right</em>.
          </h2>
        </div>
        <div className="vals">
          {items.map((v) => (
            <div className="val" key={v.n}>
              <div className="num">{v.n}.</div>
              <h3>
                <em>{v.firstWord}</em>
                {v.rest}
              </h3>
              <p>{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
