export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <img className="footer-logo" src="/kalakal-heart.png" alt="Kalakal.app orange heart logo" />
            <div className="footer-brand">
              kalakal<span className="dot">.app</span>
            </div>
            <div style={{ marginTop: 8, color: "#bbbbbb" }}>New-Gen Barter</div>
          </div>
          <div className="footer-links">
            <a href="#how">How It Works</a>
            <a href="#exchange">Exchange</a>
            <a href="#story">Our Story</a>
            <a href="#inclusive">Accessibility</a>
            <a href="#top">Help</a>
            <a href="#top">Terms</a>
            <a href="#top">Privacy</a>
          </div>
        </div>
        <div className="footer-note">
          © Kalakal.app · Trade Value. Build Goodwill. · The Exchange of Goodness.
        </div>
      </div>
    </footer>
  )
}
