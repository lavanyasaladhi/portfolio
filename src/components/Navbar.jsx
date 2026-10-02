import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/portfolio.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map(({ id }) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.2, 0.5] }
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="navbar-inner" aria-label="Main navigation">
        <a className="logo" href="#home" onClick={() => setOpen(false)}>
          <span className="logo-mark" aria-hidden="true">{'</>'}</span>
          {profile.name}
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="nav-links"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`burger ${open ? 'is-open' : ''}`} aria-hidden="true" />
        </button>

        <ul id="nav-links" className={`nav-links ${open ? 'is-open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a className={active === link.id ? 'is-active' : ''} aria-current={active === link.id ? 'location' : undefined} href={`#${link.id}`} onClick={() => setOpen(false)}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
