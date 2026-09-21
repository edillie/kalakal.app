const CATS = [
  { title: "Skills", text: "Design · Coding · Tutoring · Consulting" },
  { title: "Services", text: "Marketing · Writing · Photography · Development" },
  { title: "Products", text: "Goods · Handmade items · Food · Equipment" },
  { title: "Time", text: "Help · Assistance · Collaboration" },
  { title: "Knowledge", text: "Lessons · Advice · Expertise" },
  { title: "Resources", text: "Space · Tools · Connections · Opportunities" },
]

export function Categories() {
  return (
    <section className="categories" id="exchange">
      <div className="wrap">
        <div className="section-intro">
          <div className="eyebrow" style={{ color: "var(--orange-bright)" }}>
            What Can You Trade?
          </div>
          <h2>Your value. Your way.</h2>
          <p className="muted">If it has value, it can move.</p>
        </div>
        <div className="cat-grid">
          {CATS.map((c) => (
            <div className="cat" key={c.title}>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
