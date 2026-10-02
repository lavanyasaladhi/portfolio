import { useState } from 'react'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import LinkButton from './LinkButton.jsx'
import { profile } from '../data/portfolio.js'
import { submitContactMessage } from '../data/api.js'

export default function Contact() {
  const [status, setStatus] = useState({ type: 'idle', message: '' })

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    if (!form.reportValidity()) return
    const values = Object.fromEntries(new FormData(form))
    setStatus({ type: 'loading', message: 'Sending your message…' })
    try {
      await submitContactMessage(values)
      setStatus({ type: 'success', message: 'Thanks for reaching out. Your message has been sent.' })
      form.reset()
    } catch (error) {
      setStatus({ type: 'error', message: `Your message could not be sent. ${error.message} Please try again later.` })
    }
  }

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container">
        <Reveal>
          <SectionHeading id="contact-title" title="Let's Connect">
            Open to learning opportunities, meaningful collaboration, and conversations about technology.
          </SectionHeading>
          <div className="contact-grid">
            <div>
              <p className="contact-intro">Have an opportunity or a project idea? Send me a note or find me here:</p>
              <ul className="contact-list">
                <li className="glass-card contact-item">
                  <span className="contact-label">Email</span>
                  {profile.email && !profile.email.startsWith('YOUR_')
                    ? <a href={`mailto:${profile.email}`}>{profile.email}</a>
                    : <span className="muted">YOUR_EMAIL — replace in src/data/portfolio.js</span>}
                </li>
                <li className="glass-card contact-item">
                  <span className="contact-label">GitHub</span>
                  <LinkButton href={profile.github || 'YOUR_GITHUB_URL'} placeholderHint="Add your GitHub URL in src/data/portfolio.js">{profile.github || 'YOUR_GITHUB_URL'}</LinkButton>
                </li>
                <li className="glass-card contact-item">
                  <span className="contact-label">LinkedIn</span>
                  <LinkButton href={profile.linkedin || 'YOUR_LINKEDIN_URL'} placeholderHint="Add your LinkedIn URL in src/data/portfolio.js">{profile.linkedin || 'YOUR_LINKEDIN_URL'}</LinkButton>
                </li>
              </ul>
            </div>
            <form className="glass-card contact-form" onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" autoComplete="name" minLength="2" maxLength="100" required />
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" maxLength="254" required />
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" minLength="10" maxLength="5000" required />
              <button type="submit" className="btn btn-primary" disabled={status.type === 'loading'}>
                {status.type === 'loading' ? 'Sending…' : 'Send Message'}
              </button>
              <p className={`form-status status-${status.type}`} role={status.type === 'error' ? 'alert' : 'status'} aria-live="polite">{status.message}</p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
