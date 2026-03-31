import { useState, useEffect } from 'react'
import './css/Navbar.css'

const links = ['Home', 'About', 'Projects', 'Contact', '☀︎']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const handleNav = (e, id) => {
    e.preventDefault()
    setMenuOpen(false)
    if (id === '☀︎') {
      setDarkMode(v => !v)
    } else {
      document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a className="nav-logo" href="#home" onClick={e => handleNav(e, 'home')}>
        Raven Neil Verdon
      </a>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map(link => (
          <li key={link}>
            <a 
              href={link === '☀︎' ? '#' : `#${link.toLowerCase()}`} 
              onClick={e => handleNav(e, link)}
              className={link === '☀︎' ? 'theme-link' : ''}
            >
              {link === '☀︎' ? (darkMode ? '☀︎' : '☾') : link}
            </a>
          </li>
        ))}
      </ul>

      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(v => !v)}
        aria-label="Toggle menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  )
}