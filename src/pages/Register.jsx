import { useState } from 'react'
import PageBanner from '../components/PageBanner'
import Button from '../components/Button'
import ConfirmMessage from '../components/ConfirmMessage'

const initial = {
  fullName: '', email: '', phone: '', interest: '',
  propertyType: 'Apartment', bedrooms: '2', budget: 50000, notes: '', agree: false,
}

export default function Register() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value })
  }

  const validate = () => {
    const err = {}
    if (form.fullName.trim().length < 3) err.fullName = 'Please enter your full name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = 'Enter a valid email address.'
    if (!/^[+\d\s-]{9,15}$/.test(form.phone)) err.phone = 'Enter a valid phone number.'
    if (!form.interest) err.interest = 'Select what you are looking for.'
    if (!form.agree) err.agree = 'You must accept the terms to continue.'
    return err
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const err = validate()
    setErrors(err)
    if (Object.keys(err).length === 0) setSubmitted(true)
  }

  const reset = () => { setForm(initial); setErrors({}); setSubmitted(false) }

  return (
    <>
      <PageBanner title="Register" subtitle="Tell us what you're looking for and we'll match you with the right property." />
      <section className="container section narrow">
        {submitted ? (
          <ConfirmMessage
            title="Registration successful!"
            text={`Thank you, ${form.fullName}. An agent will contact you at ${form.email} within 24 hours.`}
            onReset={reset}
          />
        ) : (
          <form className="form" onSubmit={handleSubmit} noValidate>
            <div className="field">
              <label htmlFor="fullName">Full Name</label>
              <input id="fullName" name="fullName" value={form.fullName} onChange={handleChange} placeholder="Jane Wanjiku" />
              {errors.fullName && <small className="error">{errors.fullName}</small>}
            </div>

            <div className="row">
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
                {errors.email && <small className="error">{errors.email}</small>}
              </div>
              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+254 700 000 000" />
                {errors.phone && <small className="error">{errors.phone}</small>}
              </div>
            </div>

            <div className="row">
              <div className="field">
                <label htmlFor="interest">I want to…</label>
                <select id="interest" name="interest" value={form.interest} onChange={handleChange}>
                  <option value="">-- Select --</option>
                  <option>Rent</option>
                  <option>Buy</option>
                  <option>Sell</option>
                  <option>Invest</option>
                </select>
                {errors.interest && <small className="error">{errors.interest}</small>}
              </div>
              <div className="field">
                <label htmlFor="bedrooms">Bedrooms</label>
                <select id="bedrooms" name="bedrooms" value={form.bedrooms} onChange={handleChange}>
                  {['Studio', '1', '2', '3', '4', '5+'].map((b) => <option key={b}>{b}</option>)}
                </select>
              </div>
            </div>

            <div className="field">
              <label>Property Type</label>
              <div className="radios">
                {['Apartment', 'House', 'Land'].map((t) => (
                  <label key={t} className="radio">
                    <input type="radio" name="propertyType" value={t} checked={form.propertyType === t} onChange={handleChange} />
                    {t}
                  </label>
                ))}
              </div>
            </div>

            <div className="field">
              <label htmlFor="budget">Budget: <strong>KES {Number(form.budget).toLocaleString()}</strong></label>
              <input id="budget" type="range" name="budget" min="10000" max="500000" step="5000" value={form.budget} onChange={handleChange} />
            </div>

            <div className="field">
              <label htmlFor="notes">Additional Notes</label>
              <textarea id="notes" name="notes" rows="4" value={form.notes} onChange={handleChange} placeholder="Preferred location, move-in date, etc." />
            </div>

            <label className="check">
              <input type="checkbox" name="agree" checked={form.agree} onChange={handleChange} />
              I agree to be contacted about suitable properties.
            </label>
            {errors.agree && <small className="error">{errors.agree}</small>}

            <Button type="submit">Submit Registration</Button>
          </form>
        )}
      </section>
    </>
  )
}