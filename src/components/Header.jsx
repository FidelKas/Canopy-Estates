import { useState } from 'react'

export default function Header({ name, links, current, onNavigate }) {
  const [open, setOpen] = useState(false) // mobile menu

  const go = (id) => {
    onNavigate(id)
    setOpen(false)
  }

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#" className="logo" onClick={(e) => { e.preventDefault(); go('home') }}>
          <span className="logo-mark">🌿</span> {name}
        </a>

        <button
          className="menu-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>

        <nav className={`nav ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <a
              key={l.id}
              href="#"
              className={current === l.id ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); go(l.id) }}
            >
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}