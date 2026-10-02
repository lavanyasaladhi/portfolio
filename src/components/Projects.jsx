import { useEffect, useMemo, useState } from 'react'
import Reveal from './Reveal.jsx'
import SectionHeading from './SectionHeading.jsx'
import LinkButton from './LinkButton.jsx'
import ProjectPreview from './ProjectPreview.jsx'
import { projects as configuredProjects } from '../data/portfolio.js'
import { getPortfolioResource } from '../data/api.js'

function isRealUrl(value) {
  return Boolean(value && !value.startsWith('YOUR_'))
}

function ProjectDetails({ project, onClose }) {
  useEffect(() => {
    const closeOnEscape = (event) => event.key === 'Escape' && onClose()
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [onClose])

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="project-modal glass-card" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
        <button className="modal-close" type="button" onClick={onClose} aria-label="Close project details">×</button>
        <ProjectPreview id={project.id} image={project.image} />
        <p className="eyebrow">PROJECT DETAILS</p>
        <h3 id="project-modal-title">{project.title}</h3>
        <p>{project.description}</p>
        <ul className="tags">{project.tech.map((tag) => <li key={tag}>{tag}</li>)}</ul>
        <ul className="feature-list">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
        <div className="card-actions">
          <LinkButton href={project.github} placeholderHint="Add this project's GitHub URL in src/data/portfolio.js">GitHub</LinkButton>
          <LinkButton href={project.demo} variant="primary" placeholderHint="Add this project's deployed URL in src/data/portfolio.js">Live Demo</LinkButton>
        </div>
      </section>
    </div>
  )
}

export default function Projects() {
  const [projects, setProjects] = useState(configuredProjects)
  const [activeFilter, setActiveFilter] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)
  const [apiNotice, setApiNotice] = useState('')

  useEffect(() => {
    const controller = new AbortController()
    getPortfolioResource('/projects', controller.signal)
      .then((items) => {
        if (Array.isArray(items) && items.length) {
          setProjects(items.map((item) => {
            const configured = configuredProjects.find((project) => project.id === item.id)
            return configured
              ? {
                  ...item,
                  ...configured,
                  github: isRealUrl(configured.github) ? configured.github : item.github,
                  demo: isRealUrl(configured.demo) ? configured.demo : item.demo,
                  image: isRealUrl(configured.image) ? configured.image : item.image,
                }
              : item
          }))
        }
      })
      .catch((error) => {
        if (error.name !== 'AbortError') setApiNotice('Showing the editable portfolio configuration while the API is unavailable.')
      })
    return () => controller.abort()
  }, [])

  const filters = useMemo(() => ['All', ...new Set(projects.flatMap((project) => project.tech || []))], [projects])
  const visibleProjects = activeFilter === 'All' ? projects : projects.filter((project) => project.tech?.includes(activeFilter))

  return (
    <section id="projects" className="section" aria-labelledby="projects-title">
      <div className="container">
        <Reveal>
          <SectionHeading id="projects-title" title="Selected Projects">
            Learning through building — these projects are works in progress in my developer journey.
          </SectionHeading>
          <div className="filter-row" aria-label="Filter projects by technology">
            {filters.map((filter) => (
              <button key={filter} type="button" className={`filter-button ${filter === activeFilter ? 'is-selected' : ''}`} aria-pressed={filter === activeFilter} onClick={() => setActiveFilter(filter)}>
                {filter}
              </button>
            ))}
          </div>
          {apiNotice && <p className="api-notice" role="status">{apiNotice}</p>}
          <div className="projects-grid">
            {visibleProjects.map((project) => (
              <article key={project.id} className="glass-card project-card">
                <ProjectPreview id={project.id} image={project.image} />
                <div className="project-body">
                  <p className="eyebrow">PERSONAL PROJECT</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="tags" aria-label="Technologies used">{project.tech?.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                  <div className="card-actions">
                    <LinkButton href={project.github} placeholderHint="Add this project's GitHub URL in src/data/portfolio.js">GitHub</LinkButton>
                    <LinkButton href={project.demo} variant="primary" placeholderHint="Add this project's deployed URL in src/data/portfolio.js">Live Demo</LinkButton>
                    <button className="btn btn-text" type="button" onClick={() => setSelectedProject(project)}>View Project <span aria-hidden="true">↗</span></button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
      {selectedProject && <ProjectDetails project={selectedProject} onClose={() => setSelectedProject(null)} />}
    </section>
  )
}
