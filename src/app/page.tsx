'use client'

import { useState } from 'react'
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'

const helpCards = [
  {
    title: 'Individuals',
    text: 'Create space for yourself, work through what feels heavy, and move toward a life that feels more like your own.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Couples',
    text: 'Reconnect, communicate with more honesty, and build a relationship grounded in understanding and care.',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=900&q=85',
  },
  {
    title: 'Families',
    text: 'Find new ways to listen, support one another, and make room for meaningful change together.',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=900&q=85',
  },
]

const specialties = ['Anxiety', 'Depression', 'Life transitions', 'Relationship concerns', 'Trauma & healing', 'Self-esteem', 'Grief & loss', 'Parenting support']

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Conejo Valley Counseling home">
          <span className="brand-mark">CVC</span>
          <span className="brand-name">Conejo Valley<br />Counseling</span>
        </a>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#who-we-help" onClick={() => setMenuOpen(false)}>Who we help</a>
          <a href="#expertise" onClick={() => setMenuOpen(false)}>Expertise</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Get started <ArrowRight size={16} /></a>
        </nav>
        <button className="menu-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">A softer place to land</p>
          <h1>Make room for<br /><em>what matters.</em></h1>
          <p className="hero-text">Thoughtful, compassionate therapy for individuals, couples, and families in the Conejo Valley and beyond.</p>
          <a className="button button-dark" href="#contact">Begin your journey <ArrowRight size={16} /></a>
        </div>
        <div className="hero-art" aria-label="A peaceful, sunlit room with a chair and plants" role="img">
          <div className="sun-shape" />
          <div className="plant plant-left"><i /><i /><i /><i /></div>
          <div className="chair"><span /><b /></div>
          <div className="side-table"><span /></div>
          <div className="art-frame"><span /></div>
        </div>
        <div className="hero-note">Therapy rooted in<br />presence and possibility <span>✦</span></div>
      </section>

      <section className="intro-section" id="about">
        <div className="section-label">01 / Our approach</div>
        <div className="intro-content">
          <h2>There is no one right way<br />to <em>feel better.</em></h2>
          <div>
            <p>Therapy is a collaborative process. Together, we’ll create a space where you can slow down, feel understood, and explore the parts of your story that are asking for attention.</p>
            <a className="text-link" href="#contact">Learn more about our approach <ArrowRight size={15} /></a>
          </div>
        </div>
      </section>

      <section className="help-section" id="who-we-help">
        <div className="section-heading">
          <div className="section-label">02 / Who we help</div>
          <h2>Support for the<br /><em>whole picture.</em></h2>
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
        <div className="section-label">03 / Our expertise</div>
        <div className="expertise-layout">
          <h2>Care that meets<br />you <em>where you are.</em></h2>
          <div className="expertise-copy"><p>Whether you’re navigating a season of change or simply want to understand yourself more deeply, our work is grounded in curiosity, warmth, and practical tools for moving forward.</p><a className="text-link" href="#specialties">Explore specialties <ArrowRight size={15} /></a></div>
        </div>
        <div className="tag-list" aria-label="Areas of expertise"><span>Individual therapy</span><span>Couples therapy</span><span>Family therapy</span><span>Telehealth</span><span>In-person care</span></div>
      </section>

      <section className="specialties-section" id="specialties">
        <div className="section-label">04 / Specialties</div>
        <div className="specialties-layout"><h2>A place to begin<br />again.</h2><div className="specialty-grid">{specialties.map((item, index) => <a href="#contact" key={item}><span>0{index + 1}</span>{item}<ArrowRight size={15} /></a>)}</div></div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-flower">✦</div><p className="eyebrow">Take the next step</p><h2>You don’t have to<br /><em>figure it out alone.</em></h2><p className="contact-text">Reach out for a complimentary consultation. We’d love to learn more about you and how we can help.</p><a className="button button-light" href="mailto:hello@conejovalleycounseling.com">Get in touch <ArrowRight size={16} /></a>
      </section>

      <footer className="site-footer"><div><a className="brand footer-brand" href="#top"><span className="brand-mark">CVC</span><span className="brand-name">Conejo Valley<br />Counseling</span></a><p className="footer-note">A thoughtful space for<br />meaningful change.</p></div><div className="footer-links"><div><p className="footer-heading">Explore</p><a href="#about">About</a><a href="#who-we-help">Who we help</a><a href="#expertise">Expertise</a></div><div><p className="footer-heading">Connect</p><a href="#contact">Contact us</a><a href="mailto:hello@conejovalleycounseling.com">Email us</a><a href="#top">Instagram</a></div></div><div className="footer-bottom"><span>© 2026 Conejo Valley Counseling</span><span>Made with care in California</span></div></footer>
    </main>
  )
}
