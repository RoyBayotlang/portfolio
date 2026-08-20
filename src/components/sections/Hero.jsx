import { Link } from 'react-router-dom'
import { site, heroBadges } from '../../data/site.js'
import { ThemeToggle } from '../ThemeToggle.jsx'
import {
  Calendar, Mail, BookOpen, MapPin, Check,
  Trophy, ChevronDown, ArrowRight
} from 'lucide-react'

function Avatar() {
  const name = site.name.trim()
  const initials = name.split(/\s+/).map(w => w[0]).join('').toUpperCase().slice(0, 2)

  if (site.avatarUrl) {
    return (
      <div className="avatar">
        <img src={site.avatarUrl} alt={site.name} />
      </div>
    )
  }
  return (
    <div className="avatar">
      <div className="avatar-initials" aria-hidden>{initials || '?'}</div>
    </div>
  )
}

export function Hero() {
  const primaryBadge = heroBadges[0]

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-inner">
          <Avatar />
          <div className="hero-info">
            <div className="hero-name-row">
              <div className="hero-name-inner">
                <h1 className="hero-name">{site.name}</h1>
                {site.verified && (
                  site.facebookUrl ? (
                    <a href={site.facebookUrl} target="_blank" rel="noopener" aria-label="Verified on Facebook" className="verified-badge">
                      <Check size={10} strokeWidth={3} />
                    </a>
                  ) : (
                    <span className="verified-badge" aria-label="Verified">
                      <Check size={10} strokeWidth={3} />
                    </span>
                  )
                )}
              </div>
              <ThemeToggle />
            </div>

            <div className="hero-location">
              <MapPin size={16} className="icon" />
              <span>{site.location}</span>
            </div>

            <div style={{ marginTop: '0.5rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem' }}>
              <p className="hero-tagline">{site.tagline}</p>
              {primaryBadge && (
                <a
                  href={primaryBadge.href}
                  target="_blank"
                  rel="noopener"
                  className="btn btn-primary"
                  style={{ gap: '0.5rem' }}
                >
                  <Trophy size={16} />
                  <span>{primaryBadge.subtitle ?? primaryBadge.label}</span>
                  <ChevronDown size={16} />
                </a>
              )}
            </div>

            <div className="hero-actions">
              <a href={site.calendlyUrl} target="_blank" rel="noopener" className="btn btn-primary">
                <Calendar size={12} className="icon" />
                <span>Schedule a Call</span>
                <ArrowRight size={12} className="icon" />
              </a>
              <a href={`mailto:${site.email}`} className="btn btn-outline">
                <Mail size={12} className="icon" />
                <span>Send Email</span>
              </a>
              <a href={site.blogUrl} target="_blank" rel="noopener" className="btn btn-outline">
                <BookOpen size={12} className="icon" />
                <span>Read my blog</span>
                <ArrowRight size={12} className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
