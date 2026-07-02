import AnimatedSection from './shared/AnimatedSection'

const items = [
  { icon: '🖥️', title: 'Setup Remote', desc: 'Kami yang install dan konfigurasi via TeamViewer/AnyDesk. Kamu tinggal terima.' },
  { icon: '🔄', title: 'Update 12 Bulan', desc: 'Perbaikan bug dan fitur baru selama setahun pertama — gratis, otomatis.' },
  { icon: '💬', title: 'Support WhatsApp', desc: 'Ada pertanyaan? Chat langsung. Kami balas dalam 1–2 jam di jam kerja.' },
  { icon: '♻️', title: 'Reinstall Gratis', desc: 'Windows rusak? Install ulang di PC yang sama — gratis selamanya, tanpa batas.' },
]

export default function WhatsIncluded() {
  return (
    <section className="section section--light" id="termasuk">
      <div className="container">
        <AnimatedSection className="text-center">
          <p className="label text-muted-dark">Sudah Termasuk</p>
          <h2 className="heading-lg" style={{ color: 'var(--text-dark)', marginTop: 10 }}>
            Setiap pembelian sudah termasuk.
          </h2>
          <p className="body-lg text-muted-dark" style={{ maxWidth: 480, margin: '16px auto 0' }}>
            Kamu tidak beli software doang — kamu dapat setup, support, dan jaminan pakai jangka panjang.
          </p>
        </AnimatedSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginTop: 56, alignItems: 'stretch' }} className="included-grid">
          {items.map((item, i) => (
            <AnimatedSection key={item.title} delay={0.1 + i * 0.08} style={{ height: '100%' }}>
              <div style={{
                background: '#fff', borderRadius: 18, padding: '28px 24px',
                border: '1.5px solid var(--border-light)',
                height: '100%', textAlign: 'center',
                transition: 'border-color 0.2s, box-shadow 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--purple)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(83,74,183,0.12)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-light)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                <div style={{ fontSize: '2.4rem', marginBottom: 16 }}>{item.icon}</div>
                <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-dark)' }}>{item.title}</h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-mid)', marginTop: 8, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5} className="text-center" style={{ marginTop: 40 }}>
          <p style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--text-dark)' }}>
            Tidak ada biaya tersembunyi.{' '}
            <span style={{ color: 'var(--purple)' }}>Tidak ada surprise di akhir bulan.</span>
          </p>
        </AnimatedSection>
      </div>
      <style>{`
        @media (max-width: 900px) { .included-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 500px) { .included-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
