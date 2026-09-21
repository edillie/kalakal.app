const VALUES = ["Skills", "Services", "Products", "Ideas", "Time", "Knowledge", "Resources", "Connections"]

export function Idea() {
  return (
    <section className="idea" id="idea">
      <div className="wrap">
        <div className="section-intro">
          <div className="eyebrow">The Idea</div>
          <h2>Not everything valuable has a price.</h2>
          <p className="muted">
            You have something someone else needs. Someone else has something you need. Kalakal makes it easier to
            recognize, share, and exchange that value.
          </p>
        </div>
        <div className="idea-grid">
          <div className="idea-panel">
            <div className="bigline">You have something to give.</div>
            <div className="value-list">
              {VALUES.map((v) => (
                <span key={v}>{v}</span>
              ))}
            </div>
          </div>
          <div className="idea-panel dark">
            <div className="bigline">You have something you need.</div>
            <p style={{ marginTop: 24, color: "#dddddd" }}>Money is one way value moves. Kalakal explores the others.</p>
            <p style={{ fontSize: 20, fontWeight: 800 }}>You don&apos;t have to have money to have value.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
