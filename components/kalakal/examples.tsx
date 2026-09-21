const EXCHANGES = [
  ["Web Design", "Advertising"],
  ["Photography", "Graphic Design"],
  ["Korean Lessons", "Digital Services"],
  ["Venue", "Equipment"],
  ["Consulting", "Development"],
  ["Products", "Skills"],
]

export function Examples() {
  return (
    <section className="examples" id="examples">
      <div className="wrap">
        <div className="section-intro">
          <div className="eyebrow" style={{ color: "var(--orange-bright)" }}>
            What&apos;s Your Trade?
          </div>
          <h2>There&apos;s more than one way to make a deal.</h2>
        </div>
        <div className="examples-grid">
          {EXCHANGES.map(([a, b]) => (
            <div className="exchange" key={`${a}-${b}`}>
              <strong>{a}</strong>
              <span className="mini-arrow">↔</span>
              <strong>{b}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
