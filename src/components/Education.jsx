import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { education } from '../data/portfolio.js'

export default function Education() {
  return (
    <section id="education" className="section" aria-labelledby="education-title">
      <div className="container">
        <Reveal>
          <SectionHeading id="education-title" title="Education" />
          <div className="timeline">
            <article className="glass-card timeline-card">
              <span className="timeline-dot" aria-hidden="true" />
              <p className="status-pill">{education.status}</p>
              <h3>{education.degree}</h3>
              <p className="institution">{education.institution}</p>
              <p className="education-years">{education.startYear || 'Start year'} — {education.endYear || 'Expected completion year'}</p>
              <p>{education.description}</p>
            </article>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
