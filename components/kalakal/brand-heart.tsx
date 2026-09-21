const PILLARS = [
  { word: "KALAKAL", meaning: "Exchange" },
  { word: "TIWALA", meaning: "Trust" },
  { word: "BAYANIHAN", meaning: "Collective contribution" },
]

export function BrandHeart() {
  return (
    <section className="brand-heart" id="story">
      <div className="wrap">
        <div className="section-intro">
          <img className="hero-logo" src="/kalakal-heart.png" alt="Kalakal.app orange heart logo" />
          <div className="eyebrow" style={{ color: "#fff" }}>
            The Brand Heart
          </div>
          <h2 style={{ color: "#fff" }}>The Exchange of Goodness</h2>
          <p style={{ color: "#fff" }}>
            Inspired by timeless ideas of exchange, trust, and collective contribution, Kalakal brings them into a
            contemporary, connected world.
          </p>
        </div>
        <div className="pillars">
          {PILLARS.map((p) => (
            <div className="pillar" key={p.word}>
              <div className="word">{p.word}</div>
              <p>{p.meaning}</p>
            </div>
          ))}
        </div>
        <p className="center" style={{ fontSize: 24, fontWeight: 900, marginTop: 55, color: "#fff" }}>
          Inspired by Filipino values. Open to everyone.
        </p>
      </div>
    </section>
  )
}
