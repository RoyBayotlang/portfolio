import { site } from '../../data/site.js'

export function Copyright() {
  const year = new Date().getFullYear()
  return (
    <section className="copyright">
      <p>© {year} {site.name}. All rights reserved.</p>
    </section>
  )
}
