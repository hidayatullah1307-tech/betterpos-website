import AnimatedSection from './shared/AnimatedSection'

const WA_NUMBER = '6282214918503'

const steps = [
  { num: '01', title: 'Download', desc: 'Klik tombol di bawah, download file ZIP installer BetterPOS.' },
  { num: '02', title: 'Install', desc: 'Ekstrak ZIP, klik start.bat — browser otomatis terbuka.' },
  { num: '03', title: 'Salin Machine ID', desc: 'Layar aktivasi menampilkan Machine ID unik perangkat kamu.' },
  { num: '04', title: 'Aktifkan Trial', desc: 'WhatsApp kami dengan Machine ID — trial license dikirim dalam hitungan menit.' },
]

export default function Trial() {
  return (
    <section className="section section--light" id="trial">
      <div className="container">
        <AnimatedSection className="text-center">
          <p className="label text-muted-dark">Trial Gratis</p>
          <h2 className="heading-lg" style={{ color: 'var(--text-dark)', marginTop: 10 }}>
            Coba dulu 14 hari —{' '}
            <span style={{ color: 'var(--purple)' }}>gratis.</span>
          </h2>
          <p className="body-lg text-muted-dark" style={{ maxWidth: 500, margin: '16px auto 0' }}>
            Full akses Essential selama 14 hari. Tidak ada kartu kredit, tidak ada kewajiban. Kalau cocok, baru beli.
          </p>
        </AnimatedSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, marginTop: 64, position: 'relative' }} className="steps-grid">
          <div style={{ position: 'absolute', top: 36, left: '12.5%', right: '12.5%', height: 2, background: 'linear-gradient(90deg, var(--purple) 0%, var(--gold) 100%)', opacity: 0.3 }} className="steps-line" />
          {steps.map((step, i) => (
            <AnimatedSection key={step.num} delay={0.1 + i * 0.1}>
              <div style={{ textAlign: 'center', padding: '0 16px', position: 'relative' }}>
                <div style={{
                  width: 72, height: 72, borderRadius: '50%', margin: '0 auto 20px',
                  background: i === 3 ? 'var(--purple)' : '#fff',
                  border: `2px solid ${i === 3 ? 'var(--purple)' : 'var(--border-light)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1rem', fontWeight: 800,
                  color: i === 3 ? '#fff' : 'var(--purple)',
                  boxShadow: i === 3 ? '0 4px 20px rgba(83,74,183,0.3)' : '0 2px 12px rgba(0,0,0,0.08)',
                  position: 'relative', zIndex: 1,
                }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-dark)' }}>{step.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-mid)', marginTop: 8, lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.5} className="text-center" style={{ marginTop: 56 }}>
          <a href={`https://wa.me/${WA_NUMBER}?text=Halo, saya ingin coba trial BetterPOS 14 hari. Bisa bantu aktivasi?`}
            target="_blank" rel="noopener noreferrer"
            className="btn btn-gold btn-shimmer btn-lg"
            style={{ fontSize: '1.1rem', padding: '18px 48px' }}>
            Download & Mulai Trial
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
          </a>
          <p className="body-sm text-muted-dark" style={{ marginTop: 16 }}>
            Tidak perlu kartu kredit · Tidak ada kewajiban · Hapus kapan saja
          </p>
        </AnimatedSection>
      </div>
      <style>{`
        @media (max-width: 780px) {
          .steps-grid { grid-template-columns: repeat(2,1fr) !important; gap: 32px !important; }
          .steps-line { display: none; }
        }
        @media (max-width: 460px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
