import { useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import Badge from './shared/Badge'

const WA_NUMBER = '6282214918503'

const stagger = {
  container: { animate: { transition: { staggerChildren: 0.12 } } },
  item: {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
  }
}

function MockScreen() {
  return (
    <div style={{
      background: 'var(--bg-card-dark)', borderRadius: 16,
      border: '1px solid var(--border-dark)',
      overflow: 'hidden', width: '100%', userSelect: 'none',
    }}>
      <div style={{ background: '#0F0E22', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5F57', display: 'inline-block' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#FEBC2E', display: 'inline-block' }} />
        <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28C840', display: 'inline-block' }} />
        <span style={{ flex: 1, textAlign: 'center', fontSize: '0.72rem', color: 'var(--text-muted)' }}>BetterPOS — Kasir</span>
      </div>
      <div style={{ display: 'flex', minHeight: 280 }}>
        <div style={{ width: 180, background: '#0D0C1D', borderRight: '1px solid var(--border-dark)', padding: '16px 12px', display: 'flex', flexDirection: 'column', gap: 6 }}>
          {['Dashboard','Transaksi','Produk','Inventaris','Laporan','Pengaturan'].map((item, i) => (
            <div key={item} style={{
              padding: '8px 12px', borderRadius: 8,
              background: i === 0 ? 'rgba(83,74,183,0.25)' : 'transparent',
              color: i === 0 ? 'var(--purple-light)' : 'var(--text-muted)',
              fontSize: '0.8rem', fontWeight: 600,
            }}>{item}</div>
          ))}
        </div>
        <div style={{ flex: 1, padding: 16 }}>
          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: 12 }}>Hari ini, 2 Juli 2026</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 14 }}>
            {[
              { label: 'Omzet Hari Ini', value: 'Rp 4.280.000', color: 'var(--gold)' },
              { label: 'Transaksi', value: '38', color: 'var(--purple-light)' },
              { label: 'Rata-rata Belanja', value: 'Rp 112.600', color: '#2DC98A' },
              { label: 'Stok Menipis', value: '5 produk', color: '#F87171' },
            ].map(card => (
              <div key={card.label} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 10, padding: '10px 12px', border: '1px solid var(--border-dark)' }}>
                <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginBottom: 4 }}>{card.label}</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 800, color: card.color }}>{card.value}</div>
              </div>
            ))}
          </div>
          <div style={{ background: 'rgba(83,74,183,0.1)', borderRadius: 10, padding: '10px 12px', border: '1px solid rgba(83,74,183,0.2)' }}>
            <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginBottom: 6 }}>Penjualan 7 Hari</div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, height: 48 }}>
              {[55, 80, 45, 90, 70, 100, 68].map((h, i) => (
                <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 5 ? 'var(--purple)' : 'rgba(83,74,183,0.35)', borderRadius: '4px 4px 0 0' }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const containerRef = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [6, -6]), { stiffness: 80, damping: 20 })
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-8, 8]), { stiffness: 80, damping: 20 })

  const handleMouse = (e) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set(e.clientX - rect.left - rect.width / 2)
    mouseY.set(e.clientY - rect.top - rect.height / 2)
  }
  const resetMouse = () => { mouseX.set(0); mouseY.set(0) }

  return (
    <section style={{ background: 'var(--bg-dark)', minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 80, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: '20%', left: '5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(83,74,183,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '40%', right: '0%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,166,35,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }} className="hero-grid">
          <motion.div variants={stagger.container} initial="initial" animate="animate">
            <motion.div variants={stagger.item}>
              <Badge variant="gold">✦ Offline · Sekali Bayar · Milik Kamu</Badge>
            </motion.div>

            <motion.h1 variants={stagger.item} className="display" style={{ color: 'var(--text-light)', marginTop: 24 }}>
              Sistem Kasir{' '}
              <span style={{ color: 'var(--gold)' }}>Profesional</span>
              {' '}—{' '}Sekali Beli,{' '}
              <span style={{ color: 'var(--purple-light)' }}>Selamanya</span>{' '}Milik Kamu.
            </motion.h1>

            <motion.p variants={stagger.item} className="body-lg" style={{ color: 'var(--text-muted)', marginTop: 24, maxWidth: 480 }}>
              Tidak perlu internet. Tidak ada biaya bulanan. Sekelas aplikasi kasir online — harga yang jauh lebih bersahabat.
            </motion.p>

            <motion.div variants={stagger.item} style={{ display: 'flex', gap: 16, marginTop: 40, flexWrap: 'wrap' }}>
              <a href="#trial" className="btn btn-gold btn-shimmer btn-lg">
                Download Gratis
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              </a>
              <a href="#harga" className="btn btn-outline-light btn-lg">
                Lihat Harga
              </a>
            </motion.div>

            <motion.div variants={stagger.item} style={{ display: 'flex', gap: 32, marginTop: 48, flexWrap: 'wrap' }}>
              {[
                { num: '100%', label: 'Offline' },
                { num: '0', label: 'Biaya bulanan' },
                { num: '14 hari', label: 'Trial gratis' },
              ].map(stat => (
                <div key={stat.label}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-light)' }}>{stat.num}</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: 2 }}>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            ref={containerRef}
            onMouseMove={handleMouse}
            onMouseLeave={resetMouse}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ perspective: 1000 }}
            className="hero-mockscreen"
          >
            <motion.div style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', inset: -20, borderRadius: 32, background: 'var(--purple-glow)', filter: 'blur(40px)', zIndex: 0 }} />
                <div style={{ position: 'relative', zIndex: 1, transform: 'rotate(-2deg)', filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.5))' }}>
                  <MockScreen />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
        @media (max-width: 640px) {
          .hero-mockscreen { display: none !important; }
          .hero-grid { min-height: unset !important; }
        }
      `}</style>
    </section>
  )
}
