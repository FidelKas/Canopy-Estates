import { useState } from 'react'
import PageBanner from '../components/PageBanner'
import Button from '../components/Button'
import ConfirmMessage from '../components/ConfirmMessage'
import { company } from '../data'

const initial = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  const reset = () => { setForm(initial); setSent(false) }

  const info = [
    { icon: '📍', label: 'Address', value: company.address },
    { icon: '📞', label: 'Phone', value: company.phone },
    { icon: '✉️', label: 'Email', value: company.email },
    { icon: '🕒', label: 'Office Hours', value: company.hours },
  ]

  return (
    <>
      <PageBanner title="Contact Us" subtitle="We'd love to hear from you." />
      <section className="container section contact">
        <div className="contact-info">
          {info.map((i) => (
            <div key={i.label} className="info-item">
              <span className="card-icon">{i.icon}</span>
              <div>
                <strong>{i.label}</strong>
                <p>{i.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div>
          {sent ? (
            <ConfirmMessage
              title="Message sent!"
              text={`Thanks ${form.name}, we've received your message and will reply to ${form.email} shortly.`}
              onReset={reset}
            />
          ) : (
            <form className="form" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Your Name</label>
                <input id="name" name="name" required value={form.name} onChange={handleChange} />
              </div>
              <div className="field">
                <label htmlFor="cemail">Email</label>
                <input id="cemail" type="email" name="email" required value={form.email} onChange={handleChange} />
              </div>
              <div className="field">
                <label htmlFor="subject">Subject</label>
                <input id="subject" name="subject" required value={form.subject} onChange={handleChange} />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required value={form.message} onChange={handleChange} />
              </div>
              <Button type="submit">Send Message</Button>
            </form>
          )}
        </div>
      </section>
    </>
  )
}