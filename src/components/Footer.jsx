export default function Footer({ company, links, onNavigate }) {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>🌿 {company.name}</h3>
          <p>{company.tagline}.</p>
        </div>
        <div>
          <h4>Quick Links</h4>
          {links.map((l) => (
            <a key={l.id} href="#" onClick={(e) => { e.preventDefault(); onNavigate(l.id) }}>
              {l.label}
            </a>
          ))}
        </div>
        <div>
          <h4>Contact</h4>
          <p>📍 {company.address}</p>
          <p>📞 {company.phone}</p>
          <p>✉️ {company.email}</p>
        </div>
      </div>
      <div className="footer-bottom">
        © {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  )
}