import { useState, useEffect } from 'react'
import { recommendations } from '../../data/site.js'

const AUTO_ADVANCE_DELAY_MS = 6000

export function Recommendations() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex(i => (i + 1) % recommendations.length)
    }, AUTO_ADVANCE_DELAY_MS)
    return () => clearInterval(id)
  }, [])

  const rec = recommendations[activeIndex]
  if (!rec) return null

  return (
    <section id="recommendations" className="recs-section">
      <h2 className="section-title">Recommendations</h2>
      <div>
        <p className="rec-quote">"{rec.quote}"</p>
        <div className="rec-author-block">
          <p className="rec-author">{rec.author}</p>
          <p className="rec-title">{rec.title}</p>
        </div>
      </div>
      <div className="rec-dots">
        {recommendations.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to recommendation ${i + 1}`}
            onClick={() => setActiveIndex(i)}
            className={`rec-dot${i === activeIndex ? ' active' : ''}`}
          />
        ))}
      </div>
    </section>
  )
}
