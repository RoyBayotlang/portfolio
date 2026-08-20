import { experience } from '../../data/site.js'

export function Experience() {
  return (
    <section id="experience" className="experience">
      <div style={{ width: '100%', padding: '0 1rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h2 className="section-title">Experience</h2>
        <div className="exp-inner">
          <div className="exp-line" />
          <ul className="exp-list">
            {experience.map((item, i) => (
              <li key={i} className="exp-item">
                <span className="exp-dot" />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h3 className="exp-role" title={item.role}>{item.role}</h3>
                  <div className="exp-meta">
                    <span className="exp-company">{item.company}</span>
                    <span className="exp-year">{item.year}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
