import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { skillGroups } from '../data/portfolio.js'

export default function Skills() {
  return (
    <section id="skills" className="section section-soft" aria-labelledby="skills-title">
      <div className="container">
        <Reveal>
          <SectionHeading id="skills-title" title="Skills & Technologies">
            A growing toolkit across the frontend, backend, databases, and everyday developer tools.
          </SectionHeading>
          <div className="skill-groups">
            {skillGroups.map((group) => (
              <section className="skill-group" key={group.category} aria-label={`${group.category} skills`}>
                <h3 className="group-title">{group.category}</h3>
                <div className="skills-grid">
                  {group.skills.map((skill) => (
                    <article className="glass-card skill-card" key={skill.name}>
                      <span className="skill-icon" aria-hidden="true">{skill.icon}</span>
                      <div>
                        <h4>{skill.name}</h4>
                        <p>{skill.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
