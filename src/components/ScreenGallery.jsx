import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import AnimatedSection from './shared/AnimatedSection'

function ScreenDashboard() {
  return (
    <div style={{ background: '#0D0C1D', borderRadius: 12, overflow: 'hidden', width: '100%', userSelect: 'none', border: '1px solid rgba(255,255,255,0.08)' }}>
      <div style={{ background: '#0A091A', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 6, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#FF5F57', display: 'inline-block' }} />
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#FEBC2E', display: 'inline-block' }} />
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#28C840', display: 'inline-block' }} />
        <span style={{ flex: 1, textAlign: 'center', fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)' }}>Dashboard</span>
      </div>
      <div style={{ display: 'flex', minHeight: 220 }}>
        <div style={{ width: 140, background: '#080717', padding: '12px 8px', display: 'flex', flexDirection: 'column', gap: 4, borderRight: '1px solid rgba(255,255,255,0.05)' }}>
          {[['Dashboard', true], ['Transaksi', false], ['Produk', false], ['Inventaris', false], ['Laporan', false]].map(([item, active]) => (
            <div key={item} style={{ padding: '7px 10px', borderRadius: 6, background: active ? 'rgba(83,74,183,0.3)' : 'transparent', color: active ? '#A89FE8' : 'rgba(255,255,255,0.3)', fontSize: '0.72rem', fontWeight: 600 }}>{item}</div>
          ))}
        </div>
        <div style={{ flex: 1, padding: 12 }}>
          <div style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.3)', marginBottom: 10 }}>Ringkasan Hari Ini</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 12 }}>
            {[
              { label: 'Omzet', value: 'Rp 4.280.000', color: '#F5A623' },
              { label: 'Transaksi', value: '38', color: '#7B72D4' },
              { label: 'Rata-rata', value: 'Rp 112.600', color: '#2DC98A' },
              { label: 'Stok Menipis', value: '5 produk', color: '#F87171' },
            ].map(c => (
              <div key={c.label} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 8, padding: '8px 10px' }}>
                <div style={{ fontSize: '0.58rem', color: 'rgba(255,255,255,0.3)', marginBottom: 3 }}>{c.label}</div>
                <div style={{ fontSize: '0.78rem', fontWeight: 800, color: c.color }}>{c.value}</div>
              </div>
            ))}
          </div>
          <div style={{ background: 'rgba(83,74,183,0.08)', borderRadius: 8, padding: '8px 10px', border: '1px solid rgba(83,74,183,0.15)' }}>
            <div style={{ fontSize: '0.58rem', color: 'rgba(255,255,255,0.3)', marginBottom: 6 }}>Penjualan 7 Hari</div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 4, height: 36 }}>
              {[45, 70, 38, 85, 60, 100, 72].map((h, i) => (
                <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 5 ? '#534AB7' : 'rgba(83,74,183,0.3)', borderRadius: '3px 3px 0 0' }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ScreenKasir() {
  const products = [
    { name: 'Kopi Susu', price: 'Rp 25.000', qty: 2 },
    { name: 'Roti Bakar', price: 'Rp 18.000', qty: 1 },
    { name: 'Es Teh Manis', price: 'Rp 8.000', qty: 3 },
  ]
  const icons = ['☕', '🍞', '🧋', '🥑', '🍌', '💧']
  return (
    <div style={{ background: '#0D0C1D', borderRadius: 12, overflow: 'hidden', width: '100%', userSelect: 'none', border: '1px solid rgba(255,255,255,0.08)' }}>
      <div style={{ background: '#0A091A', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 6, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#FF5F57', display: 'inline-block' }} />
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#FEBC2E', display: 'inline-block' }} />
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#28C840', display: 'inline-block' }} />
        <span style={{ flex: 1, textAlign: 'center', fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)' }}>Kasir</span>
      </div>
      <div style={{ display: 'flex', minHeight: 220 }}>
        <div style={{ flex: 1, padding: 12, borderRight: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.3)', marginBottom: 8 }}>Produk</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6 }}>
            {['Kopi Susu', 'Roti Bakar', 'Es Teh', 'Jus Alpukat', 'Pisang Goreng', 'Air Mineral'].map((p, i) => (
              <div key={p} style={{ background: i === 0 ? 'rgba(83,74,183,0.25)' : 'rgba(255,255,255,0.04)', borderRadius: 8, padding: '8px 6px', textAlign: 'center', border: i === 0 ? '1px solid rgba(83,74,183,0.4)' : '1px solid rgba(255,255,255,0.05)', cursor: 'pointer' }}>
                <div style={{ fontSize: '1rem', marginBottom: 3 }}>{icons[i] || '🛒'}</div>
                <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.6)', fontWeight: 600 }}>{p}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ width: 150, padding: 12, display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.3)', marginBottom: 2 }}>Keranjang</div>
          {products.map(p => (
            <div key={p.name} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 6, padding: '6px 8px' }}>
              <div style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.7)', fontWeight: 600 }}>{p.name}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
                <span style={{ fontSize: '0.58rem', color: 'rgba(255,255,255,0.3)' }}>×{p.qty}</span>
                <span style={{ fontSize: '0.58rem', color: '#F5A623', fontWeight: 700 }}>{p.price}</span>
              </div>
            </div>
          ))}
          <div style={{ marginTop: 'auto', paddingTop: 8, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <span style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.4)' }}>Total</span>
              <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#fff' }}>Rp 82.000</span>
            </div>
            <div style={{ background: '#534AB7', borderRadius: 6, padding: '7px', textAlign: 'center', fontSize: '0.65rem', fontWeight: 800, color: '#fff' }}>Bayar</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ScreenLaporan() {
  return (
    <div style={{ background: '#0D0C1D', borderRadius: 12, overflow: 'hidden', width: '100%', userSelect: 'none', border: '1px solid rgba(255,255,255,0.08)' }}>
      <div style={{ background: '#0A091A', padding: '8px 14px', display: 'flex', alignItems: 'center', gap: 6, borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#FF5F57', display: 'inline-block' }} />
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#FEBC2E', display: 'inline-block' }} />
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#28C840', display: 'inline-block' }} />
        <span style={{ flex: 1, textAlign: 'center', fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)' }}>Laporan Keuangan</span>
      </div>
      <div style={{ padding: 12, minHeight: 220 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8, marginBottom: 12 }}>
          {[
            { label: 'Pendapatan', value: 'Rp 28,4 jt', color: '#2DC98A', sub: 'bulan ini' },
            { label: 'HPP', value: 'Rp 14,2 jt', color: '#F87171', sub: 'bulan ini' },
            { label: 'Laba Bersih', value: 'Rp 14,2 jt', color: '#F5A623', sub: 'bulan ini' },
          ].map(c => (
            <div key={c.label} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 8, padding: '8px 10px' }}>
              <div style={{ fontSize: '0.56rem', color: 'rgba(255,255,255,0.3)', marginBottom: 3 }}>{c.label}</div>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: c.color }}>{c.value}</div>
              <div style={{ fontSize: '0.52rem', color: 'rgba(255,255,255,0.2)', marginTop: 1 }}>{c.sub}</div>
            </div>
          ))}
        </div>
        <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 8, padding: '8px 10px', border: '1px solid rgba(255,255,255,0.05)' }}>
          <div style={{ fontSize: '0.58rem', color: 'rgba(255,255,255,0.3)', marginBottom: 8 }}>Produk Terlaris</div>
          {[['Kopi Susu', 142, '#534AB7'], ['Roti Bakar', 98, '#534AB7'], ['Es Teh Manis', 87, '#534AB7']].map(([name, pct, color]) => (
            <div key={name} style={{ marginBottom: 6 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.5)' }}>{name}</span>
                <span style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.3)' }}>{pct} terjual</span>
              </div>
              <div style={{ height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 2 }}>
                <div style={{ height: '100%', width: `${(pct / 142) * 100}%`, background: color, borderRadius: 2 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
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
            <ScreenDashboard />
          </motion.div>

          <motion.div style={{ y: y2, position: 'absolute', left: '31%', top: '0%', width: '40%', zIndex: 4, filter: 'drop-shadow(0 32px 64px rgba(83,74,183,0.3))' }}>
            <ScreenKasir />
          </motion.div>

          <motion.div style={{ y: y3, position: 'absolute', right: '2%', top: '8%', width: '38%', rotate: 3, zIndex: 3, filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.6))' }}>
            <ScreenLaporan />
          </motion.div>
        </div>

        {/* Mobile: stacked screens */}
        <div className="gallery-mobile" style={{ display: 'none', flexDirection: 'column', gap: 20, marginTop: 48 }}>
          {[<ScreenDashboard />, <ScreenKasir />, <ScreenLaporan />].map((screen, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div style={{ filter: 'drop-shadow(0 12px 32px rgba(83,74,183,0.25))' }}>
                {screen}
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
