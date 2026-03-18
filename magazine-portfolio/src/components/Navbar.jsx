import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/magazines', label: 'Magazines' },
    { to: '/articles', label: 'Articles' },
    { to: '/about', label: 'About' },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <Link to="/" className="navbar__logo">
        <img src="/logo.png" alt="Boss Magazine Ph" />
      </Link>

      <ul className="navbar__links">
        {links.map(({ to, label }) => (
          <li key={to}>
            <Link
              to={to}
              className={`navbar__link ${location.pathname === to ? 'navbar__link--active' : ''}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <Link to="/magazines" className="navbar__cta">View Issues</Link>

      <button
        className="navbar__burger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>

      {menuOpen && (
        <div className="navbar__mobile">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="navbar__mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
