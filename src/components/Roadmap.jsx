import AnimatedSection from './shared/AnimatedSection'

const items = [
  { icon: '📊', title: 'Akuntansi Sederhana', desc: 'Laporan laba rugi siap cetak, ringkasan pajak PPN — semua dari data yang sudah ada di toko kamu.' },
  { icon: '🏪', title: 'Multi-Toko', desc: 'Kelola dua lokasi dari satu dashboard. Stok, laporan, dan kasir per toko — terkoneksi.' },
  { icon: '📱', title: 'BetterPOS Lite', desc: 'Versi ringan yang berjalan langsung di tablet Android — tanpa perlu PC server sama sekali.' },
]

export default function Roadmap() {
  return (
    <section className="section section--dark" id="roadmap" style={{ borderTop: '1px solid var(--border-dark)' }}>
      <div className="container">
        <AnimatedSection className="text-center">
          <p className="label" style={{ color: 'var(--text-muted)' }}>Yang Akan Datang</p>
          <h2 className="heading-md" style={{ color: 'var(--text-light)', marginTop: 10 }}>
            BetterPOS terus berkembang.
          </h2>
          <p className="body-lg" style={{ color: 'var(--text-muted)', maxWidth: 500, margin: '16px auto 0' }}>
            Bukan janji — ini arah yang sedang kami bangun. Pengguna aktif yang pertama merasakan setiap update.
          </p>
        </AnimatedSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 52, maxWidth: 860, margin: '52px auto 0', alignItems: 'stretch' }} className="roadmap-grid">
          {items.map((item, i) => (
            <AnimatedSection key={item.title} delay={0.1 + i * 0.1} style={{ height: '100%' }}>
              <div style={{
                background: 'var(--bg-card-dark)', borderRadius: 16, padding: '24px',
                border: '1px solid var(--border-dark)', display: 'flex', gap: 16, alignItems: 'flex-start',
                height: '100%',
              }}>
                <span style={{ fontSize: '1.8rem', flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-light)' }}>{item.title}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: 6, lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 700px) { .roadmap-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
