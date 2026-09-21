const STEPS = [
  { no: "01", title: "Offer", text: "Share what you have." },
  { no: "02", title: "Discover", text: "Find what you need." },
  { no: "03", title: "Connect", text: "Find a complementary offer." },
  { no: "04", title: "Exchange", text: "Agree on a trade that works for both sides." },
  { no: "05", title: "Grow", text: "Turn one exchange into another connection or opportunity." },
]

export function Steps() {
  return (
    <section className="steps" id="how">
      <div className="wrap">
        <div className="section-intro">
          <div className="eyebrow" style={{ color: "#fff" }}>
            How It Works
          </div>
          <h2 style={{ color: "#fff" }}>Value moves when people connect.</h2>
          <p style={{ color: "#fff" }}>Simple enough to understand. Flexible enough for many kinds of exchange.</p>
        </div>
        <div className="steps-grid">
          {STEPS.map((s) => (
            <div className="step" key={s.no}>
              <div className="step-no">{s.no}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
