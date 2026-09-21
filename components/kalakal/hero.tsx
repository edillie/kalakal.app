export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <img className="hero-logo" src="/kalakal-logo.png" alt="Kalakal.app orange heart logo" />
          <div className="eyebrow">New-Gen Barter</div>
          <h1>
            Trade <span className="orange">value.</span>
            <br />
            Build goodwill.
          </h1>
          <p className="lead">What do you have? What do you need?</p>
          <p>
            Exchange skills, services, products, time, knowledge, resources, and more with people who have something you
            need.
          </p>
          <div className="buttons">
            <a className="btn btn-primary" href="#start">
              Start Exchanging
            </a>
            <a className="btn btn-secondary" href="#exchange">
              Explore Exchanges
            </a>
          </div>
          <p style={{ marginTop: 24, fontSize: 14, fontWeight: 800 }}>Everyone has something of value.</p>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="orb one" />
          <div className="orb two" />
          <div className="orb three" />

          <div className="card small">
            <div className="eyebrow">You can offer</div>
            <span className="pill">Design</span>
            <span className="pill">Writing</span>
            <span className="pill">Time</span>
            <span className="pill">Skills</span>
          </div>

          <div className="card main">
            <div className="eyebrow">Find your trade</div>
            <div className="trade">
              <div className="box">Web Design</div>
              <div className="arrow">↔</div>
              <div className="box">Advertising</div>
            </div>
            <div className="trade">
              <div className="box">Photography</div>
              <div className="arrow">↔</div>
              <div className="box">Graphic Design</div>
            </div>
          </div>

          <div className="card bottom">
            <div className="eyebrow">Value in motion</div>
            <strong>Good things go around.</strong>
          </div>
        </div>
      </div>
    </section>
  )
}
