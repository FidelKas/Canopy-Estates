import PageBanner from '../components/PageBanner'
import { images, company } from '../data'

const values = [
  { icon: '🤝', title: 'Integrity', text: 'Honest advice and transparent pricing, always.' },
  { icon: '🌱', title: 'Sustainability', text: 'We favour green, energy-efficient developments.' },
  { icon: '🏆', title: 'Excellence', text: 'High standards in every viewing, contract and handover.' },
]

export default function About() {
  return (
    <>
      <PageBanner title="About Us" subtitle="Rooted in community. Built on trust." />
      <section className="container section about">
        <img
          src={images.about}
          alt="Our team at a property viewing"
          onError={(e) => (e.currentTarget.style.visibility = 'hidden')}
        />
        <div>
          <h2>Who We Are</h2>
          <p>
            {company.name} is a full-service real estate company founded in 2011.
            We help families, professionals and investors buy, sell, rent and
            manage apartments and properties across Nairobi and beyond.
          </p>
          <p>
            Our <strong>mission</strong> is to make property transactions simple,
            transparent and stress-free. Our <strong>vision</strong> is to be the
            most trusted name in East African real estate.
          </p>
        </div>
      </section>

      <section className="container section">
        <h2 className="section-title">Our Values</h2>
        <div className="grid">
          {values.map((v) => (
            <div key={v.title} className="card">
              <div className="card-icon">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}