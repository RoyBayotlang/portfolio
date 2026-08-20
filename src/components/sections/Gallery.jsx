import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const PLACEHOLDER_COUNT = 15

export function Gallery() {
  const [startIndex, setStartIndex] = useState(0)
  const [activeIndex, setActiveIndex] = useState(null)
  const visibleCount = 5
  const maxStart = Math.max(0, PLACEHOLDER_COUNT - visibleCount)

  function prev() {
    setStartIndex(i => (i <= 0 ? maxStart : i - 1))
  }
  function next() {
    setStartIndex(i => (i >= maxStart ? 0 : i + 1))
  }

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        <div className="gallery-row">
          <button type="button" onClick={prev} aria-label="Previous gallery items" className="gallery-nav">
            <ChevronLeft size={16} />
          </button>
          <div className="gallery-grid">
            {Array.from({ length: visibleCount }, (_, offset) => {
              const i = startIndex + offset
              return (
                <div
                  key={i}
                  className={`gallery-cell${activeIndex === i ? ' active' : ''}`}
                  onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                >
                  {i === 2 ? (
                    <img src="/img/devfest.png" alt={`Gallery ${i + 1}`} />
                  ) : (
                    <div className="gallery-placeholder">
                      <span>{i + 1}</span>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
          <button type="button" onClick={next} aria-label="Next gallery items" className="gallery-nav">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}
