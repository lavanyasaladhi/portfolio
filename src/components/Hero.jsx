import { profile } from '../data/portfolio.js'
import LinkButton from './LinkButton.jsx'

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-glow hero-glow-a" aria-hidden="true" />
      <div className="hero-glow hero-glow-b" aria-hidden="true" />

      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-hello">Hi, I'm {profile.name}</p>
          <h1 id="hero-title">{profile.role}</h1>
          <p className="hero-text">{profile.intro}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">View Projects</a>
            <a className="btn btn-ghost" href="#contact">Contact Me</a>
          </div>
          <LinkButton href={profile.resume} className="resume-link" download placeholderHint="Replace YOUR_RESUME_URL in src/data/portfolio.js">
            Download Resume
          </LinkButton>
        </div>

        <div className="hero-visual" role="img" aria-label="Developer illustration showing Java, database, and web technologies">
          <div className="code-window">
            <div className="code-bar" aria-hidden="true">
              <span /><span /><span />
              <em>developer.java</em>
            </div>
            <pre className="code-body" aria-hidden="true">
<span className="c-key">public class</span> <span className="c-type">FullStackJourney</span> {'{'}{'\n'}
{'  '}<span className="c-type">String</span>[] focus = {'{'}{'\n'}
{'    '}<span className="c-str">"Java"</span>, <span className="c-str">"SQL"</span>, <span className="c-str">"React"</span>,{'\n'}
{'    '}<span className="c-str">"Backend"</span>, <span className="c-str">"Web development"</span>{'\n'}
{'  '}{'}'};{'\n'}
{'  '}<span className="c-type">boolean</span> keepLearning = <span className="c-key">true</span>;{'\n'}
{'\n'}
{'  '}<span className="c-key">void</span> <span className="c-fn">build</span>() {'{'}{'\n'}
{'    '}<span className="c-com">// learn, practice, repeat</span>{'\n'}
{'  '}{'}'}{'\n'}
{'}'}{'\n'}
            </pre>
          </div>
          <span className="float-chip chip-1" aria-hidden="true">Java</span>
          <span className="float-chip chip-2" aria-hidden="true">SQL</span>
          <span className="float-chip chip-3" aria-hidden="true">React</span>
        </div>
      </div>
    </section>
  )
}
