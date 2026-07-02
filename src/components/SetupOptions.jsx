import AnimatedSection from './shared/AnimatedSection'

const WA_NUMBER = '6282214918503'

const options = [
  {
    title: 'Mandiri',
    price: 'Gratis',
    priceColor: '#2DC98A',
    desc: 'Ikuti panduan PDF langkah demi langkah. Bisa tanya via WhatsApp, balasan sesuai ketersediaan.',
    highlight: false,
    icon: '📖',
    cta: null,
  },
  {
    title: 'Remote',
    price: 'Sudah Termasuk',
    priceColor: 'var(--purple-light)',
    desc: 'Kami yang setup via TeamViewer atau AnyDesk. Kamu tinggal duduk dan terima — biasanya selesai dalam 1 jam.',
    highlight: true,
    icon: '🖥️',
    cta: null,
  },
  {
    title: 'On-site',
    price: '+ Biaya Kunjungan',
    priceColor: 'var(--gold)',
    desc: 'Developer datang langsung ke toko kamu. Harga tergantung lokasi — hubungi kami untuk detail.',
    highlight: false,
    icon: '🏪',
    cta: `https://wa.me/${WA_NUMBER}?text=Halo, saya ingin tanya biaya setup on-site BetterPOS`,
  },
]

export default function SetupOptions() {
  return (
    <section className="section section--dark" id="setup">
      <div className="container">
        <AnimatedSection className="text-center">
          <p className="label" style={{ color: 'var(--text-muted)' }}>Cara Setup</p>
          <h2 className="heading-lg" style={{ color: 'var(--text-light)', marginTop: 10 }}>
            Setup sesuai kenyamanan kamu.
          </h2>
          <p className="body-lg" style={{ color: 'var(--text-muted)', maxWidth: 480, margin: '16px auto 0' }}>
            Tiga pilihan — semuanya bisa menghasilkan BetterPOS yang berjalan sempurna di toko kamu.
          </p>
        </AnimatedSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 56, maxWidth: 860, margin: '56px auto 0', alignItems: 'stretch' }} className="setup-grid">
          {options.map((opt, i) => (
            <AnimatedSection key={opt.title} delay={0.1 + i * 0.1} style={{ height: '100%' }}>
              <div style={{
                background: opt.highlight ? 'linear-gradient(145deg, rgba(83,74,183,0.2) 0%, var(--bg-card-dark) 100%)' : 'var(--bg-card-dark)',
                borderRadius: 18, padding: '28px 24px',
                border: opt.highlight ? '1.5px solid rgba(83,74,183,0.5)' : '1px solid var(--border-dark)',
                height: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
              }}>
                <div style={{ fontSize: '2.2rem' }}>{opt.icon}</div>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-light)' }}>{opt.title}</h3>
                <div style={{ fontWeight: 800, fontSize: '0.9rem', color: opt.priceColor }}>{opt.price}</div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{opt.desc}</p>
                {opt.cta && (
                  <a href={opt.cta} target="_blank" rel="noopener noreferrer"
                    className="btn btn-outline-light" style={{ marginTop: 'auto', padding: '10px 20px', fontSize: '0.88rem' }}>
                    Tanya Biaya
                  </a>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 700px) { .setup-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
