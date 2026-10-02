import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'

const foundations = ['Java', 'Object-Oriented Programming', 'SQL', 'JDBC', 'Servlets', 'HTML', 'CSS', 'JavaScript', 'React']
const strengths = ['Discipline', 'Time management', 'Continuous learning', 'Problem solving', 'Curiosity for new technologies']

export default function About() {
  return (
    <section id="about" className="section" aria-labelledby="about-title">
      <div className="container">
        <Reveal>
          <SectionHeading id="about-title" title="About Me">
            Building a thoughtful foundation in full-stack development, one practical step at a time.
          </SectionHeading>
          <div className="about-grid">
            <div className="about-text">
              <p>
                I am a learner developing strong foundations in Java, object-oriented programming, SQL, JDBC,
                Servlets, and modern frontend development. I enjoy turning what I learn into practical web
                applications and understanding how each part of a full-stack product works together.
              </p>
              <p>
                I bring discipline, time management, a problem-solving mindset, and a commitment to continuous
                learning. I am eager to keep growing, collaborate with others, and explore new technologies.
              </p>
              <h3 className="list-title">Current learning focus</h3>
              <ul className="pill-list">
                {foundations.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <aside className="about-aside glass-card">
              <span className="eyebrow">HOW I WORK</span>
              <ul className="strength-list">
                {strengths.map((item) => <li key={item}><span aria-hidden="true">+</span>{item}</li>)}
              </ul>
            </aside>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
