import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'

export function ThemeToggle() {
  const [dark, setDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const isDark = stored === 'dark' || (stored !== 'light' && prefersDark)
    setDark(isDark)
  }, [])

  useEffect(() => {
    if (!mounted) return
    if (dark) {
      document.documentElement.classList.add('dark')
      try { localStorage.setItem('theme', 'dark') } catch {}
    } else {
      document.documentElement.classList.remove('dark')
      try { localStorage.setItem('theme', 'light') } catch {}
    }
  }, [dark, mounted])

  if (!mounted) return null

  return (
    <button
      type="button"
      onClick={() => setDark(d => !d)}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`theme-toggle${dark ? ' dark-mode' : ''}`}
    >
      <span className="theme-toggle-thumb">
        {dark ? <Moon size={14} /> : <Sun size={14} />}
      </span>
    </button>
  )
}
