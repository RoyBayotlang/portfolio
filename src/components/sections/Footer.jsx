import { site, memberships } from '../../data/site.js'
import {
  Mail, Calendar, BookOpen,
  Linkedin, Github, Instagram,
  ExternalLink, ChevronRight
} from 'lucide-react'

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="card">
          <div className="card-content">
            <div className="footer-grid">
              {/* Memberships */}
              <div style={{ gridColumn: 'span 1' }}>
                <h3 className="footer-section-title">A member of</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {memberships.map(m => (
                    <li key={m.name}>
                      <a href={m.href} target="_blank" rel="noopener" className="membership-link">
                        <span style={{ flex: 1, minWidth: 0, overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                          {m.name}
                        </span>
                        <ExternalLink size={14} style={{ color: 'var(--muted-fg)', flexShrink: 0, marginTop: '0.125rem' }} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="footer-section-title" style={{ fontSize: '0.875rem' }}>Social Links</h3>
                <div className="social-links">
                  <a href={site.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn" className="social-btn">
                    <Linkedin size={20} />
                  </a>
                  <a href={site.github} target="_blank" rel="noopener" aria-label="GitHub" className="social-btn">
                    <Github size={20} />
                  </a>
                  <a href={site.instagram} target="_blank" rel="noopener" aria-label="Instagram" className="social-btn">
                    <Instagram size={20} />
                  </a>
                </div>
              </div>

              {/* Get in touch */}
              <div>
                <h3 className="footer-section-title">Get in touch</h3>
                <div className="contact-list">
                  <a href={`mailto:${site.email}`} className="contact-item">
                    <div style={{ minWidth: 0 }}>
                      <p className="contact-label"><Mail size={14} style={{ color: 'var(--muted-fg)' }} /> Email</p>
                      <p className="contact-sub">{site.email}</p>
                    </div>
                  </a>
                  <a href={site.calendlyUrl} target="_blank" rel="noopener" className="contact-item">
                    <div style={{ minWidth: 0 }}>
                      <p className="contact-label"><Calendar size={14} style={{ color: 'var(--muted-fg)' }} /> Let's Talk</p>
                      <p className="contact-sub">Schedule a Call</p>
                    </div>
                    <ChevronRight size={14} style={{ color: 'var(--muted-fg)', flexShrink: 0, marginTop: '0.375rem' }} />
                  </a>
                  <a href={site.blogUrl} target="_blank" rel="noopener" className="contact-item">
                    <div style={{ minWidth: 0 }}>
                      <p className="contact-label"><BookOpen size={14} style={{ color: 'var(--muted-fg)' }} /> Blog</p>
                      <p className="contact-sub">Read my blog</p>
                    </div>
                    <ChevronRight size={14} style={{ color: 'var(--muted-fg)', flexShrink: 0, marginTop: '0.375rem' }} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
