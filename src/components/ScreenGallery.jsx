import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import AnimatedSection from './shared/AnimatedSection'

function BrowserFrame({ src, label }) {
  return (
    <div style={{ background: '#0A091A', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', userSelect: 'none' }}>
      <div style={{ padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 6, borderBottom: '1px solid rgba(255,255,255,0.06)', background: '#0D0C1D' }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#FF5F57', display: 'inline-block', flexShrink: 0 }} />
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#FEBC2E', display: 'inline-block', flexShrink: 0 }} />
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#28C840', display: 'inline-block', flexShrink: 0 }} />
        <span style={{ flex: 1, textAlign: 'center', fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)' }}>{label}</span>
      </div>
      <img src={src} alt={label} style={{ width: '100%', display: 'block' }} />
    </div>
  )
}

export default function ScreenGallery() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60])
  const y2 = useTransform(scrollYProgress, [0, 1], [20, -100])
  const y3 = useTransform(scrollYProgress, [0, 1], [100, -20])

  return (
    <section ref={ref} className="section section--dark" style={{ overflow: 'hidden' }}>
      <div className="container">
        <AnimatedSection className="text-center">
          <p className="label" style={{ color: 'var(--text-muted)' }}>Lihat Langsung</p>
          <h2 className="heading-lg" style={{ color: 'var(--text-light)', marginTop: 10 }}>
            Tampilan yang bersih,<br />kerja yang serius.
          </h2>
          <p className="body-lg" style={{ color: 'var(--text-muted)', maxWidth: 460, margin: '16px auto 0' }}>
            Dirancang untuk kasir yang sibuk — semua informasi penting terlihat sekilas pandang.
          </p>
        </AnimatedSection>

        {/* Desktop: parallax floating screens */}
        <div className="gallery-desktop" style={{ position: 'relative', height: 480, marginTop: 72 }}>
          <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: 700, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(83,74,183,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />

          <motion.div style={{ y: y1, position: 'absolute', left: '2%', top: '5%', width: '38%', rotate: -3, zIndex: 3, filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.6))' }}>
            <BrowserFrame src="/screen_dashboard.png" label="Dashboard" />
          </motion.div>

          <motion.div style={{ y: y2, position: 'absolute', left: '31%', top: '0%', width: '40%', zIndex: 4, filter: 'drop-shadow(0 32px 64px rgba(83,74,183,0.3))' }}>
            <BrowserFrame src="/screen_kasir.png" label="Kasir" />
          </motion.div>

          <motion.div style={{ y: y3, position: 'absolute', right: '2%', top: '8%', width: '38%', rotate: 3, zIndex: 3, filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.6))' }}>
            <BrowserFrame src="/screen-laporan.png" label="Laporan" />
          </motion.div>
        </div>

        {/* Mobile: stacked screens */}
        <div className="gallery-mobile" style={{ display: 'none', flexDirection: 'column', gap: 20, marginTop: 48 }}>
          {[
            { src: '/screen_dashboard.png', label: 'Dashboard' },
            { src: '/screen_kasir.png', label: 'Kasir' },
            { src: '/screen-laporan.png', label: 'Laporan' },
          ].map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div style={{ filter: 'drop-shadow(0 12px 32px rgba(83,74,183,0.25))' }}>
                <BrowserFrame src={s.src} label={s.label} />
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3} className="text-center" style={{ marginTop: 48 }}>
          <a href="#trial" className="btn btn-purple btn-lg">
            Coba Gratis 14 Hari
          </a>
        </AnimatedSection>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .gallery-desktop { display: none !important; }
          .gallery-mobile { display: flex !important; }
        }
      `}</style>
    </section>
  )
}
