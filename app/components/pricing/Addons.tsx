type Addon = {
  head: string;
  tail: string;
  price: string;
  note: string;
};

const items: Addon[] = [
  {
    head: "Extra hour of ",
    tail: "coverage",
    price: "$250 / hr",
    note: "Add time if you're worried about the edges of the day — getting ready, last dances, send-offs.",
  },
  {
    head: "Second ",
    tail: "shooter",
    price: "$850",
    note: "A second camera operator for the whole day. Included in The Keepsake.",
  },
  {
    head: "Raw footage ",
    tail: "drive",
    price: "$450",
    note: "Every clip from the day on a keepsake SSD, handed to you in person.",
  },
  {
    head: "Social ",
    tail: "teaser",
    price: "$350",
    note: "A 60-second vertical cut for Instagram. Delivered within 5 days of the wedding.",
  },
  {
    head: "Rehearsal dinner ",
    tail: "film",
    price: "$650",
    note: "A short film capturing the night before — speeches, welcomes, first toasts.",
  },
  {
    head: "Engagement ",
    tail: "film",
    price: "$950",
    note: "A cinematic portrait shoot of you two somewhere meaningful. Great for your save-the-dates.",
  },
];

export default function Addons() {
  return (
    <section className="addons">
      <div className="wrap">
        <div className="head">
          <h2>
            Tailor your <em>film</em>.
          </h2>
          <div className="meta">
            02 — Add-ons
            <br />
            Priced individually
          </div>
        </div>
        <div className="addons-grid">
          {items.map((a) => (
            <div className="addon" key={a.tail + a.head}>
              <div>
                <h3>
                  {a.head}
                  <em>{a.tail}</em>
                </h3>
                <p>{a.note}</p>
              </div>
              <div className="p">{a.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
