import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const screens = [
  { src: '/screen_dashboard.png',  label: 'Dashboard' },
  { src: '/screen_kasir.png',      label: 'Kasir' },
  { src: '/screen-laporan.png',    label: 'Laporan' },
  { src: '/screen-inventory.png',  label: 'Inventaris' },
  { src: '/screen-shift.png',      label: 'Shift' },
]

function BrowserFrame({ src, label }) {
  return (
    <div style={{
      flexShrink: 0, width: 380,
      background: '#0A091A', borderRadius: 14,
      overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)',
      userSelect: 'none',
      boxShadow: '0 16px 48px rgba(0,0,0,0.5)',
    }}>
      <div style={{ padding: '9px 14px', display: 'flex', alignItems: 'center', gap: 6, background: '#0D0C1D', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#FF5F57', display: 'inline-block', flexShrink: 0 }} />
        <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#FEBC2E', display: 'inline-block', flexShrink: 0 }} />
        <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#28C840', display: 'inline-block', flexShrink: 0 }} />
        <span style={{ flex: 1, textAlign: 'center', fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.02em' }}>BetterPOS — {label}</span>
      </div>
      <img src={src} alt={label} style={{ width: '100%', display: 'block' }} />
    </div>
  )
}

function MarqueeRow({ items, direction = 'left', speed = 35 }) {
  const list = [...items, ...items]
  return (
    <div style={{
      overflow: 'hidden',
      maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
      WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
    }}>
      <div
        className={`marquee-track marquee-${direction}`}
        style={{
          display: 'flex', gap: 20,
          animationDuration: `${speed}s`,
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
          animationName: direction === 'left' ? 'marquee-left' : 'marquee-right',
          width: 'max-content',
        }}
      >
        {list.map((s, i) => <BrowserFrame key={i} src={s.src} label={s.label} />)}
      </div>
    </div>
  )
}

export default function ScreenGallery() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px 0px' })

  return (
    <section ref={ref} className="section section--dark" style={{ overflow: 'hidden', paddingBottom: 'var(--section-pad)' }}>
      <div className="container">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="label" style={{ color: 'var(--text-muted)' }}>Lihat Langsung</p>
          <h2 className="heading-lg" style={{ color: 'var(--text-light)', marginTop: 10 }}>
            Tampilan yang bersih,<br />kerja yang serius.
          </h2>
          <p className="body-lg" style={{ color: 'var(--text-muted)', maxWidth: 460, margin: '16px auto 0' }}>
            Dari kasir harian sampai laporan laba — semua dalam satu sistem yang sama.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 48 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        style={{ marginTop: 64, display: 'flex', flexDirection: 'column', gap: 20 }}
      >
        <MarqueeRow items={screens} direction="left" speed={40} />
        <MarqueeRow items={[...screens].reverse()} direction="right" speed={32} />
      </motion.div>

      <div className="container">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.45 }}
          style={{ marginTop: 56 }}
        >
          <a href="#trial" className="btn btn-purple btn-lg">
            Coba Gratis 14 Hari
          </a>
        </motion.div>
      </div>

      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        .marquee-track:hover { animation-play-state: paused; }

        @media (max-width: 640px) {
          .marquee-track { animation-duration: 22s !important; }
        }
      `}</style>
    </section>
  )
}
