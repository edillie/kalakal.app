const A11Y = ["Readable type", "Strong contrast", "Plain language", "Clear states", "Captions", "Text alternatives"]
const LANGS = ["EN", "FIL", "한국어", "日本語", "中文", "العربية", "+"]

export function Inclusive() {
  return (
    <section className="open" id="inclusive">
      <div className="wrap">
        <div className="section-intro">
          <div className="eyebrow">Inclusive by Design</div>
          <h2>Open to everyone.</h2>
          <p className="muted">Different people. Different values. One open exchange.</p>
        </div>
        <div className="open-grid">
          <div className="open-card">
            <h3>Built for people.</h3>
            <div className="tag-grid">
              {A11Y.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
            <p style={{ marginTop: 30, fontWeight: 800 }}>Design for the person, not the assumption.</p>
          </div>
          <div className="open-card green">
            <h3>Made to travel.</h3>
            <p>Designed to adapt across languages, cultures, markets, and writing systems.</p>
            <div className="tag-grid">
              {LANGS.map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>
            <p style={{ marginTop: 30, fontWeight: 800 }}>Simple enough to translate. Warm enough to feel human.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
