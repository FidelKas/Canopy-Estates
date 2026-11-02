import { useState } from 'react'
import PageBanner from '../components/PageBanner'
import { gallery } from '../data'

const categories = ['All', 'Apartments', 'Houses', 'Interiors']

export default function Gallery() {
  const [filter, setFilter] = useState('All')   // useState: filter
  const [selected, setSelected] = useState(null) // useState: lightbox

  const shown = filter === 'All' ? gallery : gallery.filter((g) => g.category === filter)

  return (
    <>
      <PageBanner title="Gallery" subtitle="A glimpse of our featured apartments and properties." />
      <section className="container section">
        <div className="filters">
          {categories.map((c) => (
            <button
              key={c}
              className={`chip ${filter === c ? 'active' : ''}`}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {shown.map((g) => (
            <figure key={g.title} className="photo" onClick={() => setSelected(g)}>
              <img
                src={g.src}
                alt={g.title}
                loading="lazy"
                onError={(e) => (e.currentTarget.style.visibility = 'hidden')}
              />
              <figcaption>
                <strong>{g.title}</strong>
                <span>{g.category}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {selected && (
        <div className="lightbox" onClick={() => setSelected(null)}>
          <button className="lightbox-close" aria-label="Close">✕</button>
          <img src={selected.src.replace('w=900', 'w=1400')} alt={selected.title} />
          <p>{selected.title}</p>
        </div>
      )}
    </>
  )
}