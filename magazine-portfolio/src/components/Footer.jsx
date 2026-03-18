import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="footer__brand">
          <img src="/logo.png" alt="Boss Magazine Ph" className="footer__logo" />
          <p className="footer__tagline">
            Showcasing Filipino excellence —<br />in print and beyond.
          </p>
        </div>

        <div className="footer__nav">
          <div className="footer__col">
            <span className="footer__col-title">Explore</span>
            <Link to="/magazines">Magazines</Link>
            <Link to="/articles">Articles</Link>
            <Link to="/about">About</Link>
          </div>
          <div className="footer__col">
            <span className="footer__col-title">Connect</span>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            <a href="mailto:hello@bossmagazineph.com">Contact</a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <span className="footer__copy">© {new Date().getFullYear()} Boss Magazine Ph. All rights reserved.</span>
        <div className="footer__bottom-links">
          <Link to="/about">About</Link>
          <Link to="/articles">Articles</Link>
        </div>
      </div>
    </footer>
  )
}
