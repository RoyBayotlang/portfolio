import { Link } from 'react-router-dom'
import { certifications } from '../../data/site.js'
import { ChevronRight } from 'lucide-react'

export function Certifications() {
  return (
    <section id="certifications" className="certs-section">
      <div className="section-header">
        <h2 className="section-title" style={{ fontSize: '0.875rem' }}>Recent Certifications</h2>
        <Link to="/certifications" className="view-all-link">
          View All <ChevronRight size={14} style={{ display: 'inline', verticalAlign: 'middle' }} />
        </Link>
      </div>
      <div className="cert-list">
        {certifications.map(cert => (
          <a
            key={cert.name}
            href={cert.href}
            target="_blank"
            rel="noopener"
            className="cert-link"
          >
            <p className="cert-name">{cert.name}</p>
            <p className="cert-issuer">
              {cert.year ? `${cert.issuer} · ${cert.year}` : cert.issuer}
            </p>
          </a>
        ))}
      </div>
    </section>
  )
}
