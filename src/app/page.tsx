'use client'

import { useState } from 'react'
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'


const helpCards = [
  {
    title: 'Anxiety & Panic Therapy',
    text: "For the constant worry, racing thoughts, and tension that never quite switches off — we'll build practical tools to help you feel more regulated in daily life.",
    image: "/img-1.png",
  },
  {
    title: 'Trauma Therapy (EMDR)',
    text: 'Whether from a single event or long-standing patterns, EMDR helps you process the past at a careful, safe pace — so you can feel grounded in the present.',
    image: "/img-2.png",
  },
  {
    title: 'Burnout & Stress Therapy',
    text: 'For entrepreneurs, creatives, and professionals who feel disconnected after years of pushing through — a space to slow down and reconnect.',
    image: "/img-3.png",
  },
]

const specialties = ['Anxiety', 'Panic', 'Trauma & EMDR', 'Burnout', 'Stress Management', 'Perfectionism', 'Overthinking', 'Emotional Regulation']

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Dr. Maya Reynolds, PsyD home">
          <span className="brand-mark">MR</span>
          <span className="brand-name">Dr. Maya Reynolds<br />PsyD</span>
        </a>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#who-we-help" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#expertise" onClick={() => setMenuOpen(false)}>Approach</a>
          <a href="#office" onClick={() => setMenuOpen(false)}>Office</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Get started <ArrowRight size={16} /></a>
        </nav>
        <button className="menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Anxiety, Trauma & Burnout Therapy in Santa Monica, CA</p>
          <h1>Feel steady,<br /><em>not overwhelmed.</em></h1>
          <p className="hero-text">Dr. Maya Reynolds, PsyD, helps high-achieving adults quiet the overthinking and process what's weighing on them — in-person in Santa Monica or via telehealth across California.</p>
          <a className="button button-dark" href="#contact">Schedule a Consultation <ArrowRight size={16} /></a>
        </div>
        <div className="hero-art" aria-label="A peaceful, sunlit room with a chair and plants" role="img">
          <div className="sun-shape" />
          <div className="plant plant-left"><i /><i /><i /><i /></div>
          <div className="chair"><span /><b /></div>
          <div className="side-table"><span /></div>
          <div className="art-frame"><span /></div>
        </div>
        <div className="hero-note">Therapy rooted in<br />safety and self-trust <span>✦</span></div>
      </section>

      <section className="intro-section about-section" id="about">
        <div className="section-label">01 / About Dr. Reynolds</div>
        <div className="intro-content about-grid">
          <img
            src="/office-1.jpg"
            alt="Dr. Maya Reynolds, PsyD"
            className="about-photo"
          />
          <div>
            <h2 style={{ marginBottom: '1.25rem' }}>Warm, grounded,<br /><em>evidence-based care.</em></h2>
            <p style={{ lineHeight: 1.75, marginBottom: '1.5rem' }}>
              I'm a licensed clinical psychologist based in Santa Monica, working with adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences — often while appearing "functional" on the outside. I integrate CBT, EMDR, mindfulness-based practices, and body-oriented techniques to help you feel more regulated, resilient, and like yourself again.
            </p>
            <a className="text-link" href="#contact">Learn more about my approach <ArrowRight size={15} /></a>
          </div>
        </div>
      </section>

      <section className="help-section" id="who-we-help">
        <div className="section-heading">
          <div className="section-label">02 / How I Can Help</div>
          <h2>Support for what<br /><em>you're carrying.</em></h2>
        </div>
        <div className="help-grid">
          {helpCards.map((card) => (
            <a className="help-card" href="#contact" key={card.title}>
              <div className="card-image"><img src={card.image} alt="" /></div>
              <div className="card-body"><h3>{card.title}</h3><p>{card.text}</p><span className="circle-arrow"><ArrowRight size={16} /></span></div>
            </a>
          ))}
        </div>
      </section>

      <section className="expertise-section" id="expertise">
        <div className="section-label">03 / My Approach</div>
        <div className="expertise-layout">
          <h2>Practical tools,<br /><em>real depth.</em></h2>
          <div className="expertise-copy"><p>Sessions are structured enough to feel supportive, while leaving space for reflection. My goal isn't just symptom relief — it's helping you build real insight, resilience, and a stronger relationship with yourself over time.</p><a className="text-link" href="#specialties">Explore areas of focus <ArrowRight size={15} /></a></div>
        </div>
        <div className="tag-list" aria-label="Areas of expertise"><span>Anxiety & Panic</span><span>Trauma & EMDR</span><span>Burnout Recovery</span><span>Telehealth (CA)</span><span>In-person (Santa Monica)</span></div>
      </section>

      <section className="specialties-section" id="specialties">
        <div className="section-label">04 / Areas of Focus</div>
        <div className="specialties-layout"><h2>A place to begin<br />again.</h2><div className="specialty-grid">{specialties.map((item, index) => <a href="#contact" key={item}><span>0{index + 1}</span>{item}<ArrowRight size={15} /></a>)}</div></div>
      </section>

      <section id="office" className="office-section">
        <div className="office-heading">
          <div className="section-label">05 / Our Office</div>
          <h2>A calm space<br /><em>to begin.</em></h2>
          <p className="office-desc">
            My Santa Monica office is a quiet, private space designed to feel calming and grounded — with natural light and an uncluttered environment. Clients often share that the space itself helps them feel more at ease the moment they arrive.
          </p>
          <p style={{ marginTop: '1rem' }}>
            <strong>123 W 45th Street, Santa Monica, CA 90401</strong><br />
            In-person & telehealth sessions available across California.
          </p>
        </div>

        <div className="office-grid">
          <img src="/office-2.jpg" alt="Calm, private therapy space in Santa Monica" className="office-img" />
          <img src="/office-3.jpg" alt="Natural light and comfortable seating in the office" className="office-img" />
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-flower">✦</div><p className="eyebrow">Take the next step</p><h2>Ready to feel more<br /><em>like yourself again?</em></h2><p className="contact-text">Reaching out is often the hardest step. I offer a space where you're respected, understood, and actively involved in your own healing process.</p><a className="button button-light" href="mailto:info@mayareynoldspsyd.com">Book a Consultation <ArrowRight size={16} /></a>
      </section>

      <footer className="site-footer"><div><a className="brand footer-brand" href="#top"><span className="brand-mark">MR</span><span className="brand-name">Dr. Maya Reynolds<br />PsyD</span></a><p className="footer-note">Anxiety, trauma & burnout<br />therapy in Santa Monica, CA.</p></div><div className="footer-links"><div><p className="footer-heading">Explore</p><a href="#about">About</a><a href="#who-we-help">Services</a><a href="#office">Office</a></div><div><p className="footer-heading">Connect</p><a href="#contact">Contact</a><a href="mailto:info@mayareynoldspsyd.com">Email</a><a href="#top">Instagram</a></div></div><div className="footer-bottom"><span>© 2026 Dr. Maya Reynolds, PsyD</span><span>Santa Monica, California</span></div></footer>
    </main>
  )
}