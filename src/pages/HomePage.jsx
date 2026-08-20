import { Hero } from '../components/sections/Hero.jsx'
import { About } from '../components/sections/About.jsx'
import { TechStack } from '../components/sections/TechStack.jsx'
import { Projects } from '../components/sections/Projects.jsx'
import { Experience } from '../components/sections/Experience.jsx'
import { Certifications } from '../components/sections/Certifications.jsx'
import { Recommendations } from '../components/sections/Recommendations.jsx'
import { Footer } from '../components/sections/Footer.jsx'
import { Gallery } from '../components/sections/Gallery.jsx'
import { Copyright } from '../components/sections/Copyright.jsx'

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <div className="container">
        <div className="mid-grid">
          <div style={{ display: 'flex', flexDirection: 'column', minHeight: 0 }}>
            <TechStack />
            <Projects />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Experience />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="certs-recs-grid">
          <Certifications />
          <Recommendations />
        </div>
      </div>
      <Footer />
      <Gallery />
      <Copyright />
    </>
  )
}
