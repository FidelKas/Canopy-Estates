import Button from '../components/Button'
import { company, images, services, stats } from '../data'

export default function Home({ onNavigate }) {
  return (
    <>
      <section className="hero" style={{ backgroundImage: `linear-gradient(rgba(16,24,21,.75), rgba(16,24,21,.9)), url(${images.hero})` }}>
        <div className="container hero-content">
          <p className="eyebrow">Welcome to</p>
          <h1>{company.name}</h1>
          <p className="hero-text">
            {company.tagline}. Discover premium apartments and properties in the
            neighbourhoods you'll love — guided by people who genuinely care.
          </p>
          <div className="btn-row">
            <Button onClick={() => onNavigate('gallery')}>Browse Properties</Button>
            <Button variant="outline" onClick={() => onNavigate('register')}>Register Interest</Button>
          </div>
        </div>
      </section>

      <section className="container stats">
        {stats.map((s) => (
          <div key={s.label} className="stat">
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </section>

      <section className="container section">
        <h2 className="section-title">What We Do</h2>
        <div className="grid">
          {services.slice(0, 3).map((s) => (
            <div key={s.title} className="card">
              <div className="card-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
        <div className="center">
          <Button variant="outline" onClick={() => onNavigate('services')}>View all services</Button>
        </div>
      </section>
    </>
  )
}