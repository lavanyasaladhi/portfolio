import { profile } from '../data/portfolio.js'

function FooterLink({ href, children }) {
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
  ) : (
    <span className="muted" title="Add this link in src/data/portfolio.js">{children}</span>
  )
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© 2026 {profile.name}. Built with React.</p>
        <p className="footer-links">
          <FooterLink href={profile.github}>GitHub</FooterLink>
          <FooterLink href={profile.linkedin}>LinkedIn</FooterLink>
        </p>
      </div>
    </footer>
  )
}
