import './App.css'

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.13 6.13l1.32-1.32a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const BoltIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
)

const products = [
  {
    img: '/gen1.jpeg',
    name: 'Cummins Canopy Generator',
    desc: 'Fully enclosed, weather-resistant. Ideal for outdoor sites, hospitals, and factories.',
    tag: 'Silent · Commercial',
  },
  {
    img: '/gen2.jpeg',
    name: 'JCB Mobile Generator',
    desc: 'Towable unit for rapid deployment. Perfect for events and remote construction sites.',
    tag: 'Portable · Rental Ready',
  },
  {
    img: '/gen3.jpeg',
    name: 'Industrial Open Frame',
    desc: 'Robust open-set generator for warehouses, pumping stations and heavy-duty use.',
    tag: 'Open Set · Industrial',
  },
  {
    img: '/gen4.jpeg',
    name: 'Heavy-Duty Open Set',
    desc: 'High-capacity Cummins/Onan genset for large load requirements up to 2000 KVA.',
    tag: 'High Capacity · Heavy Duty',
  },
]

const services = [
  {
    title: 'On Rental Basis',
    subtitle: 'Short & Long Term',
    desc: 'Flexible rental solutions for events, construction sites, factories, hospitals, and emergency power backup across NCR.',
    tag: '5 KVA – 2000 KVA',
    accent: '#c4952a',
  },
  {
    title: 'Generator Sale',
    subtitle: 'New & Certified Units',
    desc: 'Purchase brand-new diesel generators with full warranty. Single units to bulk orders — all capacities available.',
    tag: 'All Capacities',
    accent: '#c4952a',
  },
  {
    title: 'Generator Purchase',
    subtitle: 'We Buy Yours',
    desc: 'Selling your old or decommissioned generator? We offer quick evaluation, fair market pricing, and instant deals.',
    tag: 'Any Condition',
    accent: '#c4952a',
  },
]

const whyUs = [
  { title: 'Complete Range', desc: '5 KVA to 2000 KVA inventory ready for immediate deployment' },
  { title: '24/7 Availability', desc: 'Round-the-clock service and emergency response, 365 days a year' },
  { title: 'Quick Deployment', desc: 'Fast logistics and on-site installation across Ghaziabad & NCR' },
  { title: 'Competitive Rates', desc: 'Best pricing in the market with zero hidden charges' },
  { title: 'Certified Technicians', desc: 'Expert team for installation, maintenance and repair' },
  { title: 'Trusted & Reliable', desc: 'Years of industry experience serving businesses of all scales' },
]

export default function App() {
  return (
    <div className="site">

      {/* ── NAV ── */}
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-logo">
            <img src="/logo.png" alt="Classic Generator Logo" className="nav-logo-img" />
            <div className="nav-name">
              <span className="nav-name-main">CLASSIC</span>
              <span className="nav-name-sub">GENERATOR &amp; POWER CO.</span>
            </div>
          </div>
          <a href="tel:9990065811" className="nav-cta">
            <span className="nav-cta-icon"><PhoneIcon /></span>
            <span>Call Now</span>
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-grid-bg" />
        <div className="hero-glow" />
        <div className="hero-content">
          <div className="hero-split">
            <div className="hero-text">
              <div className="hero-eyebrow">
                <span className="eyebrow-dot" />
                DIESEL GENERATOR SPECIALISTS · GHAZIABAD, NCR
              </div>
              <h1 className="hero-title">
                <span className="hero-title-line">POWER</span>
                <span className="hero-title-line hero-title-gold">WITHOUT</span>
                <span className="hero-title-line">LIMITS</span>
              </h1>
              <p className="hero-desc">
                Rental · Sale · Purchase of Diesel Generators<br />
                <strong>5 KVA to 2000 KVA</strong> — Ready for Immediate Deployment
              </p>
              <div className="hero-ctas">
                <a href="tel:9990065811" className="btn-primary">
                  <span className="btn-icon"><PhoneIcon /></span>
                  9990065811
                </a>
                <a href="tel:9910120328" className="btn-ghost">
                  <span className="btn-icon"><PhoneIcon /></span>
                  9910120328
                </a>
              </div>
            </div>
            <div className="hero-image-wrap">
              <div className="hero-image-border" />
              <img src="/gen4.jpeg" alt="Heavy duty diesel generator" className="hero-image" />
              <div className="hero-image-badge">
                <span className="hero-badge-kva">2000 KVA</span>
                <span className="hero-badge-label">Max Capacity</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-range-bar">
          <div className="range-bar-inner">
            <div className="range-end">
              <span className="range-kva">5 KVA</span>
              <span className="range-label">Minimum Capacity</span>
            </div>
            <div className="range-track">
              <div className="range-track-line" />
              <span className="range-track-label">FULL RANGE AVAILABLE</span>
              <div className="range-track-line" />
            </div>
            <div className="range-end">
              <span className="range-kva">2000 KVA</span>
              <span className="range-label">Maximum Capacity</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="services">
        <div className="section-container">
          <div className="section-header">
            <span className="section-eyebrow">WHAT WE OFFER</span>
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">
              Complete generator solutions — from short-term hire to outright purchase and buyback
            </p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div key={s.title} className="service-card" style={{ '--delay': `${i * 0.1}s` } as React.CSSProperties}>
                <div className="card-top-bar" />
                <div className="card-number">0{i + 1}</div>
                <h3 className="card-title">{s.title}</h3>
                <p className="card-subtitle">{s.subtitle}</p>
                <p className="card-desc">{s.desc}</p>
                <div className="card-tag">{s.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section className="products-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-eyebrow">OUR FLEET</span>
            <h2 className="section-title">Generator Range</h2>
            <p className="section-subtitle">
              A diverse inventory of diesel generators available for rent, sale or buyback — all capacities, all types
            </p>
          </div>
          <div className="products-grid">
            {products.map((p) => (
              <div key={p.name} className="product-card">
                <div className="product-img-wrap">
                  <img src={p.img} alt={p.name} className="product-img" />
                  <div className="product-img-overlay" />
                  <div className="product-tag">{p.tag}</div>
                </div>
                <div className="product-info">
                  <h3 className="product-name">{p.name}</h3>
                  <p className="product-desc">{p.desc}</p>
                  <a href="tel:9990065811" className="product-cta">
                    <span className="btn-icon"><PhoneIcon /></span>
                    Enquire Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="why-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-eyebrow">WHY CHOOSE US</span>
            <h2 className="section-title">Built on Trust &amp; Reliability</h2>
          </div>
          <div className="why-grid">
            {whyUs.map((w) => (
              <div key={w.title} className="why-card">
                <div className="why-check"><CheckIcon /></div>
                <div className="why-text">
                  <h4 className="why-title">{w.title}</h4>
                  <p className="why-desc">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="contact-section" id="contact">
        <div className="section-container">
          <div className="contact-grid">
            <div className="contact-info">
              <span className="section-eyebrow">GET IN TOUCH</span>
              <h2 className="section-title">Contact Us</h2>
              <p className="contact-intro">
                Available 24/7 for rentals, inquiries and emergencies.
                Call us anytime — we're ready to power your needs.
              </p>

              <div className="contact-detail">
                <div className="contact-icon-wrap"><MapPinIcon /></div>
                <div>
                  <div className="contact-detail-label">Our Location</div>
                  <address className="contact-detail-value">
                    KH No. 796, Prem Enclave<br />
                    Sadiq Nagar, Ghaziabad<br />
                    Uttar Pradesh — 201001
                  </address>
                </div>
              </div>

              <div className="contact-detail">
                <div className="contact-icon-wrap"><PhoneIcon /></div>
                <div>
                  <div className="contact-detail-label">Phone Numbers</div>
                  <a href="tel:9990065811" className="contact-phone">9990065811</a>
                  <a href="tel:9910120328" className="contact-phone">9910120328</a>
                </div>
              </div>
            </div>

            <div className="contact-cta-box">
              <div className="cta-box-glow" />
              <div className="cta-bolt"><BoltIcon /></div>
              <h3 className="cta-box-title">Ready to Power Up?</h3>
              <p className="cta-box-desc">
                Get instant pricing for generator rental, purchase or sale.
                From 5 KVA to 2000 KVA — we have the right solution for you.
              </p>
              <a href="tel:9990065811" className="btn-primary btn-large">
                <span className="btn-icon"><PhoneIcon /></span>
                Call 9990065811
              </a>
              <a href="tel:9910120328" className="btn-ghost btn-large">
                <span className="btn-icon"><PhoneIcon /></span>
                9910120328
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-logo">
            <img src="/logo.png" alt="CGP Logo" className="footer-logo-img" />
            <span>Classic Generator &amp; Power Co.</span>
          </div>
          <p className="footer-address">
            KH No. 796, Prem Enclave, Sadiq Nagar, Ghaziabad, UP — 201001
          </p>
          <div className="footer-phones">
            <a href="tel:9990065811">9990065811</a>
            <span className="footer-sep">·</span>
            <a href="tel:9910120328">9910120328</a>
          </div>
          <p className="footer-copy">© 2026 Classic Generator &amp; Power Co. All rights reserved.</p>
        </div>
      </footer>

    </div>
  )
}
