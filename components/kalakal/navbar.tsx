export function Navbar() {
  return (
    <nav>
      <div className="wrap nav-inner">
        <a className="logo" href="#top">
          <img src="/kalakal-heart.png" alt="Kalakal.app orange heart logo" />
          <span className="brand">
            kalakal<span className="dot">.app</span>
          </span>
        </a>
        <div className="navlinks">
          <a href="#how">How It Works</a>
          <a href="#exchange">Exchange</a>
          <a href="#story">Our Story</a>
          <a href="#inclusive">Inclusive Design</a>
          <a className="nav-cta" href="#start">
            Start Exchanging
          </a>
        </div>
      </div>
    </nav>
  )
}
