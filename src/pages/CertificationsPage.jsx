import { Link } from 'react-router-dom'
import { certifications } from '../data/site.js'
import { ArrowLeft } from 'lucide-react'

export default function CertificationsPage() {
  return (
    <div className="page-wrap">
      <Link to="/" className="btn btn-ghost" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
        <ArrowLeft size={16} /> Back
      </Link>
      <h1 className="page-h1">Certifications</h1>
      <p className="page-subtitle">Professional certifications.</p>
      <div className="certs-page-grid">
        {certifications.map(cert => (
          <a
            key={cert.name}
            href={cert.href}
            target="_blank"
            rel="noopener"
            className="cert-page-link"
          >
            <h2 className="cert-page-name">{cert.name}</h2>
            <p className="cert-page-issuer">
              {cert.year ? `${cert.issuer} · ${cert.year}` : cert.issuer}
            </p>
          </a>
        ))}
      </div>
    </div>
  )
}
