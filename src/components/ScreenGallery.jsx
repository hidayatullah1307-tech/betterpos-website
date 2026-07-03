import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import AnimatedSection from './shared/AnimatedSection'

const screens = [
  { src: '/screen_dashboard.png',  label: 'Dashboard' },
  { src: '/screen_kasir.png',      label: 'Kasir' },
  { src: '/screen-laporan.png',    label: 'Laporan' },
  { src: '/screen-inventory.png',  label: 'Inventaris' },
  { src: '/screen-shift.png',      label: 'Shift' },
]

function BrowserFrame({ src, label, rotate = 0 }) {
  return (
    <a href={src} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none' }}>
      <motion.div
        whileHover={{ scale: 1.03, boxShadow: '0 32px 80px rgba(83,74,183,0.35)' }}
        transition={{ duration: 0.25 }}
        style={{
          background: '#0A091A', borderRadius: 14,
          overflow: 'hidden', border: '1px solid rgba(255,255,255,0.12)',
          boxShadow: '0 16px 48px rgba(0,0,0,0.55)',
          transform: `rotate(${rotate}deg)`,
          cursor: 'zoom-in',
        }}
      >
        <div style={{ padding: '9px 14px', display: 'flex', alignItems: 'center', gap: 6, background: '#0D0C1D', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#FF5F57', display: 'inline-block', flexShrink: 0 }} />
          <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#FEBC2E', display: 'inline-block', flexShrink: 0 }} />
          <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#28C840', display: 'inline-block', flexShrink: 0 }} />
          <span style={{ flex: 1, textAlign: 'center', fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.02em' }}>BetterPOS — {label}</span>
        </div>
        <img src={src} alt={label} style={{ width: '100%', display: 'block' }} />
      </motion.div>
    </a>
  )
}

export default function ScreenGallery() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const y0 = useTransform(scrollYProgress, [0, 1], [80,  -40])
  const y1 = useTransform(scrollYProgress, [0, 1], [20,  -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [60,  -60])
  const y3 = useTransform(scrollYProgress, [0, 1], [100, -20])
  const y4 = useTransform(scrollYProgress, [0, 1], [40,  -80])

  return (
    <section ref={ref} className="section section--dark" style={{ overflow: 'hidden' }}>
      <div className="container">
        <AnimatedSection className="text-center">
          <p className="label" style={{ color: 'var(--text-muted)' }}>Lihat Langsung</p>
          <h2 className="heading-lg" style={{ color: 'var(--text-light)', marginTop: 10 }}>
            Tampilan yang bersih,<br />kerja yang serius.
          </h2>
          <p className="body-lg" style={{ color: 'var(--text-muted)', maxWidth: 460, margin: '16px auto 0' }}>
            Dari kasir harian sampai laporan laba — semua dalam satu sistem yang sama.
            <span style={{ display: 'block', fontSize: '0.82rem', marginTop: 8, color: 'var(--text-muted)', opacity: 0.6 }}>Klik gambar untuk melihat lebih dekat.</span>
          </p>
        </AnimatedSection>

        {/* Desktop: 2-row parallax */}
        <div className="gallery-desktop" style={{ position: 'relative', height: 680, marginTop: 72 }}>
          {/* Background glow */}
          <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(83,74,183,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

          {/* Row 1 — top 3 */}
          <motion.div style={{ y: y0, position: 'absolute', left: '0%', top: '0%', width: '31%', zIndex: 2 }}>
            <BrowserFrame src={screens[0].src} label={screens[0].label} rotate={-2.5} />
          </motion.div>

          <motion.div style={{ y: y1, position: 'absolute', left: '34.5%', top: '-2%', width: '31%', zIndex: 5 }}>
            <BrowserFrame src={screens[1].src} label={screens[1].label} rotate={0} />
          </motion.div>

          <motion.div style={{ y: y2, position: 'absolute', right: '0%', top: '1%', width: '31%', zIndex: 2 }}>
            <BrowserFrame src={screens[2].src} label={screens[2].label} rotate={2.5} />
          </motion.div>

          {/* Row 2 — bottom 2, centered between gaps */}
          <motion.div style={{ y: y3, position: 'absolute', left: '10%', top: '52%', width: '31%', zIndex: 3 }}>
            <BrowserFrame src={screens[3].src} label={screens[3].label} rotate={-1.5} />
          </motion.div>

          <motion.div style={{ y: y4, position: 'absolute', right: '10%', top: '55%', width: '31%', zIndex: 3 }}>
            <BrowserFrame src={screens[4].src} label={screens[4].label} rotate={1.5} />
          </motion.div>
        </div>

        {/* Mobile: stacked */}
        <div className="gallery-mobile" style={{ display: 'none', flexDirection: 'column', gap: 20, marginTop: 48 }}>
          {screens.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <BrowserFrame src={s.src} label={s.label} rotate={0} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3} className="text-center" style={{ marginTop: 48 }}>
          <a href="#trial" className="btn btn-purple btn-lg">Coba Gratis 14 Hari</a>
        </AnimatedSection>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .gallery-desktop { display: none !important; }
          .gallery-mobile  { display: flex !important; }
        }
      `}</style>
    </section>
  )
}
