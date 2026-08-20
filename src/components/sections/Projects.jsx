import { Link } from 'react-router-dom'
import { projects } from '../../data/site.js'
import { ChevronRight, ExternalLink } from 'lucide-react'

export function Projects() {
  return (
    <section id="projects" className="projects">
      <div>
        <div className="section-header">
          <h2 className="section-title">Recent Projects</h2>
          <Link to="/projects" className="btn btn-ghost" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
            View All <ChevronRight size={12} />
          </Link>
        </div>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.name} className="card project-card">
              <a
                href={project.url}
                target="_blank"
                rel="noopener"
                className="project-link"
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 className="project-name">{project.name}</h3>
                  <p className="project-desc">{project.description}</p>
                  <p className="project-domain">{project.domain}</p>
                </div>
                <ExternalLink size={14} style={{ color: 'var(--muted-fg)', flexShrink: 0 }} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
