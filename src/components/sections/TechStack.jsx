import { Link } from 'react-router-dom'
import { techStack } from '../../data/site.js'
import { ChevronRight } from 'lucide-react'

export function TechStack() {
  const groups = [
    { label: 'Frontend', items: techStack.frontend },
    { label: 'Backend', items: techStack.backend },
    { label: 'DevOps & Cloud', items: techStack.devops },
    { label: '', items: techStack.modeling },
  ].filter(g => g.items.length > 0)

  return (
    <section id="tech-stack" className="tech-stack">
      <div>
        <div className="section-header">
          <h2 className="section-title">Tech Stack</h2>
          <Link to="/tech-stack" className="btn btn-ghost" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
            View All <ChevronRight size={12} />
          </Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {groups.map(group => (
            <div key={group.label} className="tech-group">
              {group.label && <p className="tech-label">{group.label}</p>}
              <div className="tech-badges">
                {group.items.map(tech => (
                  <span key={tech} className="badge">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
