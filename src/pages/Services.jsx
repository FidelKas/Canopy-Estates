import PageBanner from '../components/PageBanner'
import Button from '../components/Button'
import { services } from '../data'

export default function Services({ onNavigate }) {
  return (
    <>
      <PageBanner title="Our Services" subtitle="Everything you need, from first viewing to final handover." />
      <section className="container section">
        <div className="grid">
          {services.map((s) => (
            <div key={s.title} className="card">
              <div className="card-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          ))}
        </div>
        <div className="center">
          <Button onClick={() => onNavigate('contact')}>Talk to an Agent</Button>
        </div>
      </section>
    </>
  )
}