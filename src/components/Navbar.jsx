import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const WA_NUMBER = '6282214918503'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'Fitur Lengkap', href: '/fitur' },
    { label: 'Harga', href: '/#harga' },
    { label: 'Trial', href: '/#trial' },
    { label: 'Blog', href: '/blog' },
    { label: 'Kontak', href: '/#kontak' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          transition: 'background 0.3s ease, box-shadow 0.3s ease, backdrop-filter 0.3s ease',
          background: scrolled ? 'rgba(13,12,29,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          boxShadow: scrolled ? '0 1px 0 rgba(255,255,255,0.06)' : 'none',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
          <a href="/" style={{ fontWeight: 800, fontSize: '1.3rem', color: 'var(--text-light)', letterSpacing: '-0.02em' }}>
            Better<span style={{ color: 'var(--gold)' }}>POS</span>
          </a>

          <nav style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="nav-links">
            {links.map(l => (
              <a key={l.href} href={l.href}
                {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: 600, transition: 'color 0.15s' }}
                onMouseEnter={e => e.target.style.color = 'var(--text-light)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>
                {l.label}
              </a>
            ))}
            <a href={`https://wa.me/${WA_NUMBER}?text=Halo, saya ingin tahu lebih lanjut tentang BetterPOS`}
              target="_blank" rel="noopener noreferrer"
              className="btn btn-purple"
              style={{ padding: '10px 22px', fontSize: '0.9rem' }}>
              Download Gratis
            </a>
          </nav>

          <button onClick={() => setOpen(o => !o)} className="hamburger" aria-label="Menu"
            style={{ display: 'none', flexDirection: 'column', gap: 5, padding: 8 }}>
            <span style={{ width: 24, height: 2, background: 'var(--text-light)', display: 'block', borderRadius: 2, transition: 'transform 0.2s', transform: open ? 'translateY(7px) rotate(45deg)' : 'none' }} />
            <span style={{ width: 24, height: 2, background: 'var(--text-light)', display: 'block', borderRadius: 2, opacity: open ? 0 : 1, transition: 'opacity 0.2s' }} />
            <span style={{ width: 24, height: 2, background: 'var(--text-light)', display: 'block', borderRadius: 2, transition: 'transform 0.2s', transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none' }} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, zIndex: 99, background: 'var(--bg-dark)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 32 }}>
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                style={{ color: 'var(--text-light)', fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.02em' }}>
                {l.label}
              </a>
            ))}
            <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer"
              className="btn btn-gold btn-lg" onClick={() => setOpen(false)}>
              Download Gratis
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </>
  )
}
