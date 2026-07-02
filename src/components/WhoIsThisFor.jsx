import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const checks = [
  'Kamu masih catat transaksi manual atau pakai kalkulator, dan akhir hari harus hitung ulang semua.',
  'Kamu bayar langganan POS tiap bulan tapi setengah fiturnya tidak pernah kamu pakai.',
  'Internet di toko pernah mati dan kasir tidak bisa transaksi sama sekali — padahal pembeli sudah antre.',
  'Kamu tidak selalu ada di toko dan tidak tahu omzet hari ini berapa sampai kamu pulang.',
  'Kamu punya lebih dari 1 kasir, tapi tidak ada catatan resmi siapa dapat berapa dan kas-nya cocok atau tidak.',
  'Hutang supplier atau piutang pelanggan kamu catat di buku atau HP — dan sering tidak ketemu notanya.',
]

export default function WhoIsThisFor() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px 0px' })

  return (
    <section className="section section--dark" id="untuk-siapa">
      <div className="container">
        <div ref={ref}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center">
            <p className="label" style={{ color: 'var(--text-muted)' }}>Apakah ini untuk kamu?</p>
            <h2 className="heading-lg" style={{ color: 'var(--text-light)', marginTop: 10 }}>
              BetterPOS untuk siapa?
            </h2>
            <p className="body-lg" style={{ color: 'var(--text-muted)', marginTop: 16, maxWidth: 520, margin: '16px auto 0' }}>
              Cek mana yang cocok dengan kondisi toko kamu sekarang.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 56 }} className="checks-grid">
            {checks.map((text, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  display: 'flex', gap: 16, alignItems: 'flex-start',
                  background: 'var(--bg-card-dark)', borderRadius: 14,
                  padding: '20px 24px', border: '1px solid var(--border-dark)',
                  transition: 'border-color 0.2s, background 0.2s',
                }}
                whileHover={{ borderColor: 'rgba(83,74,183,0.4)', background: 'var(--bg-card-dark2)' }}
              >
                <div style={{ flexShrink: 0, width: 28, height: 28, borderRadius: '50%', background: 'rgba(83,74,183,0.2)', border: '1.5px solid rgba(83,74,183,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--purple-light)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                  {text}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.7 }}
            style={{ marginTop: 48, textAlign: 'center', padding: '28px 32px', background: 'rgba(83,74,183,0.12)', borderRadius: 16, border: '1px solid rgba(83,74,183,0.25)' }}>
            <p style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-light)' }}>
              Kalau 2 atau lebih cocok —{' '}
              <span style={{ color: 'var(--gold)' }}>BetterPOS dibuat untuk kamu.</span>
            </p>
            <a href="#trial" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 16, color: 'var(--purple-light)', fontWeight: 700, fontSize: '1rem' }}>
              Coba gratis 14 hari
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </motion.div>
        </div>
      </div>
      <style>{`
        @media (max-width: 700px) { .checks-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
