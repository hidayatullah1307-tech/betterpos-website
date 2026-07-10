import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AnimatedSection from '../components/shared/AnimatedSection'

const WA_NUMBER = '6282214918503'
const WA_PARTNER = `https://wa.me/${WA_NUMBER}?text=Halo, saya tertarik untuk daftar sebagai Sales Partner BetterPOS. Bisa info lebih lanjut?`
const WA_GENERAL = `https://wa.me/${WA_NUMBER}?text=Halo, saya ada pertanyaan tentang program kemitraan BetterPOS.`

// ── Affiliate section data ────────────────────────────────────────────────────

const affiliateSteps = [
  { n: '1', title: 'Cek kode kamu', desc: 'Buka BetterPOS → Settings → License. Kode affiliate kamu (format AFF-xxxx) ada di sana, sudah aktif sejak hari pertama.' },
  { n: '2', title: 'Bagikan ke kenalan', desc: 'Share kode ke teman, kerabat, atau sesama pemilik toko yang butuh kasir. Mereka cantumkan kode saat order.' },
  { n: '3', title: 'Terima komisi', desc: 'Begitu pembayaran dikonfirmasi, komisi ditransfer ke rekening kamu. Tidak ada batas waktu, tidak ada minimum.' },
]

const affiliateCommissions = [
  { plan: 'Essential', price: 'Rp 2.000.000', commission: 'Rp 300.000', pct: '15%' },
  { plan: 'Plus',      price: 'Rp 3.000.000', commission: 'Rp 450.000', pct: '15%', highlight: true },
]

// ── Sales Partner section data ────────────────────────────────────────────────

const partnerSteps = [
  { n: '1', title: 'Daftar via WhatsApp', desc: 'Hubungi kami, ceritakan sedikit tentang dirimu. Setelah disetujui, kamu dapat kode partner unik (SAL-xxxx).' },
  { n: '2', title: 'Referensikan ke calon pembeli', desc: 'Tunjukkan BetterPOS ke kenalan atau calon pelanggan. Mereka masukkan kode kamu saat order.' },
  { n: '3', title: 'Terima komisi', desc: 'Begitu pembayaran dikonfirmasi, komisi ditransfer langsung ke rekeningmu.' },
]

const partnerCommissions = [
  { plan: 'Essential', price: 'Rp 2.000.000', commission: 'Rp 400.000', pct: '20%' },
  { plan: 'Plus',      price: 'Rp 3.000.000', commission: 'Rp 600.000', pct: '20%', highlight: true },
]

const partnerPerks = [
  { icon: '💸', title: 'Tidak perlu modal',       desc: 'Tidak perlu beli atau berlangganan apapun untuk mulai.' },
  { icon: '🎯', title: 'Tidak ada target',         desc: 'Jual kapan mau. Tidak ada kewajiban minimum, tidak ada tekanan.' },
  { icon: '♾️', title: 'Kode berlaku selamanya',  desc: 'Daftar sekali, kode aktif terus. Tidak ada masa kedaluwarsa.' },
  { icon: '⚡', title: 'Bayar cepat',              desc: 'Komisi ditransfer setelah order dikonfirmasi — tidak perlu nunggu lama.' },
]

// ── Shared sub-components ─────────────────────────────────────────────────────

function CommissionCards({ items, dark }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, maxWidth: 580, margin: '40px auto 0' }} className="comm-grid">
      {items.map((c, i) => (
        <AnimatedSection key={c.plan} delay={0.1 + i * 0.1}>
          <motion.div
            whileHover={{ y: -4, boxShadow: dark ? '0 16px 48px rgba(0,0,0,0.35)' : '0 12px 36px rgba(83,74,183,0.15)' }}
            transition={{ duration: 0.2 }}
            style={{
              background: c.highlight
                ? dark ? 'linear-gradient(145deg,#1E1B3A,#16142E)' : 'var(--purple)'
                : dark ? 'var(--bg-card-dark)' : '#fff',
              borderRadius: 16, padding: '28px 24px',
              border: c.highlight
                ? dark ? '1.5px solid rgba(245,166,35,0.35)' : 'none'
                : dark ? '1px solid var(--border-dark)' : '1.5px solid var(--border-light)',
            }}>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: c.highlight ? 'var(--gold)' : dark ? 'var(--text-muted)' : 'var(--text-mid)' }}>{c.plan}</div>
            <div style={{ fontSize: '0.85rem', color: c.highlight ? (dark ? 'var(--text-muted)' : 'rgba(255,255,255,0.7)') : dark ? 'var(--text-muted)' : 'var(--text-mid)', marginTop: 4 }}>Harga jual: {c.price}</div>
            <div style={{ marginTop: 18 }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: c.highlight ? (dark ? 'var(--text-muted)' : 'rgba(255,255,255,0.6)') : dark ? 'var(--text-muted)' : 'var(--text-mid)' }}>Komisimu</div>
              <div style={{ fontSize: '1.9rem', fontWeight: 800, letterSpacing: '-0.02em', marginTop: 4, color: c.highlight ? 'var(--gold)' : dark ? 'var(--text-light)' : 'var(--purple)' }}>{c.commission}</div>
              <div style={{ fontSize: '0.82rem', marginTop: 4, color: c.highlight ? (dark ? 'var(--text-muted)' : 'rgba(255,255,255,0.6)') : dark ? 'var(--text-muted)' : 'var(--text-mid)' }}>per lisensi ({c.pct})</div>
            </div>
          </motion.div>
        </AnimatedSection>
      ))}
    </div>
  )
}

function StepsRow({ steps, dark }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 44 }} className="steps-grid">
      {steps.map((s, i) => (
        <AnimatedSection key={s.n} delay={0.1 + i * 0.1}>
          <div style={{ background: dark ? 'rgba(255,255,255,0.04)' : '#fff', borderRadius: 16, padding: '28px 24px', border: dark ? '1px solid var(--border-dark)' : '1.5px solid var(--border-light)', height: '100%' }}>
            <div style={{ width: 42, height: 42, borderRadius: '50%', background: dark ? 'var(--purple)' : 'var(--purple)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', fontWeight: 800, color: '#fff', marginBottom: 18 }}>{s.n}</div>
            <h3 style={{ fontSize: '1rem', fontWeight: 800, color: dark ? 'var(--text-light)' : 'var(--text-dark)' }}>{s.title}</h3>
            <p style={{ fontSize: '0.88rem', color: dark ? 'var(--text-muted)' : 'var(--text-mid)', marginTop: 8, lineHeight: 1.6 }}>{s.desc}</p>
          </div>
        </AnimatedSection>
      ))}
    </div>
  )
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function SalesPage() {
  return (
    <>
      <Helmet>
        <title>Program Kemitraan BetterPOS | Affiliate &amp; Sales Partner</title>
        <meta name="description" content="Dapat komisi 15–20% dari setiap penjualan BetterPOS. Program affiliate otomatis untuk semua pembeli, atau daftar jadi Sales Partner aktif." />
        <meta property="og:title" content="Program Kemitraan BetterPOS | Affiliate & Sales Partner" />
        <meta property="og:description" content="Dapat komisi 15–20% dari setiap penjualan BetterPOS. Program affiliate otomatis untuk semua pembeli, atau daftar jadi Sales Partner aktif." />
        <meta property="og:url" content="https://betterpos.my.id/kemitraan" />
        <link rel="canonical" href="https://betterpos.my.id/kemitraan" />
      </Helmet>
      <Navbar />

      {/* Hero */}
      <section style={{ background: 'var(--bg-dark)', paddingTop: 120, paddingBottom: 80 }}>
        <div className="container">
          <AnimatedSection className="text-center">
            <span style={{
              display: 'inline-block', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em',
              textTransform: 'uppercase', color: 'var(--gold)', background: 'rgba(245,166,35,0.12)',
              padding: '6px 16px', borderRadius: 999, marginBottom: 24,
            }}>Program Kemitraan</span>
            <h1 className="heading-lg" style={{ color: 'var(--text-light)' }}>
              Dapat Komisi dari BetterPOS
            </h1>
            <p className="body-lg" style={{ color: 'var(--text-muted)', maxWidth: 520, margin: '18px auto 0', lineHeight: 1.65 }}>
              Dua cara — pilih yang cocok buat kamu.
            </p>
            <div style={{ marginTop: 36, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#affiliate"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  padding: '13px 28px', borderRadius: 999, fontWeight: 700, fontSize: '0.95rem',
                  background: 'var(--purple)', color: '#fff',
                  boxShadow: '0 4px 20px rgba(83,74,183,0.4)',
                }}>
                Saya sudah pembeli →
              </a>
              <a href="#partner"
                className="btn btn-gold btn-lg">
                Saya mau jual →
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Comparison */}
      <section className="section section--light">
        <div className="container">
          <AnimatedSection className="text-center">
            <p className="label text-muted-dark">Dua Program</p>
            <h2 className="heading-md" style={{ color: 'var(--text-dark)', marginTop: 10 }}>Pilih yang cocok</h2>
          </AnimatedSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, marginTop: 48, maxWidth: 780, margin: '48px auto 0' }} className="compare-grid">
            {[
              {
                icon: '🏷️', title: 'Affiliate', sub: 'Untuk semua pembeli',
                tag: 'Otomatis', tagColor: '#534AB7', tagBg: '#EEEDFE',
                points: ['Kode AFF-xxxx aktif otomatis saat aktivasi lisensi', '15% dari setiap referral berhasil', 'Tidak perlu daftar — langsung bisa pakai'],
                cta: 'Lihat cara kerja →', href: '#affiliate', ctaBg: 'var(--purple)',
              },
              {
                icon: '🤝', title: 'Sales Partner', sub: 'Untuk yang mau jualan aktif',
                tag: 'Daftar dulu', tagColor: '#92400E', tagBg: '#FEF3C7',
                points: ['Kode SAL-xxxx setelah disetujui', '20% komisi + bonus Rp 500K per 5 customer', 'Cocok buat yang punya jaringan toko'],
                cta: 'Lihat cara daftar →', href: '#partner', ctaBg: 'var(--gold)',
              },
            ].map((card, i) => (
              <AnimatedSection key={card.title} delay={0.1 + i * 0.12}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(83,74,183,0.12)' }}
                  transition={{ duration: 0.2 }}
                  style={{ background: '#fff', borderRadius: 20, padding: '32px 28px', border: '1.5px solid var(--border-light)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                    <span style={{ fontSize: '1.8rem' }}>{card.icon}</span>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-dark)' }}>{card.title}</h3>
                        <span style={{ fontSize: '0.7rem', fontWeight: 700, background: card.tagBg, color: card.tagColor, padding: '2px 8px', borderRadius: 99 }}>{card.tag}</span>
                      </div>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-mid)', marginTop: 2 }}>{card.sub}</p>
                    </div>
                  </div>
                  <div style={{ height: 1, background: 'var(--border-light)', margin: '16px 0' }} />
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
                    {card.points.map(p => (
                      <li key={p} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: 3 }}><polyline points="20 6 9 17 4 12"/></svg>
                        <span style={{ fontSize: '0.88rem', color: 'var(--text-mid)', lineHeight: 1.55 }}>{p}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={card.href} style={{ display: 'inline-flex', alignItems: 'center', marginTop: 24, padding: '11px 24px', borderRadius: 999, fontWeight: 700, fontSize: '0.9rem', background: card.ctaBg, color: card.ctaBg === 'var(--gold)' ? '#1A1205' : '#fff', alignSelf: 'flex-start' }}>
                    {card.cta}
                  </a>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── AFFILIATE SECTION ── */}
      <section className="section section--light" id="affiliate" style={{ borderTop: '2px solid var(--border-light)' }}>
        <div className="container">
          <AnimatedSection className="text-center">
            <span style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--purple)', background: '#EEEDFE', padding: '5px 14px', borderRadius: 999, marginBottom: 20 }}>Program Affiliate</span>
            <h2 className="heading-md" style={{ color: 'var(--text-dark)', marginTop: 0 }}>
              Sudah beli BetterPOS?<br />Kamu sudah jadi affiliate.
            </h2>
            <p className="body-lg" style={{ color: 'var(--text-mid)', maxWidth: 540, margin: '16px auto 0', lineHeight: 1.65 }}>
              Setiap pembeli dapat kode unik (AFF-xxxx) saat aktivasi lisensi. Bagikan ke teman yang butuh kasir — kalau mereka beli pakai kode kamu, kamu dapat komisi.
            </p>
          </AnimatedSection>

          <StepsRow steps={affiliateSteps} dark={false} />

          <AnimatedSection delay={0.2} className="text-center" style={{ marginTop: 56 }}>
            <p className="label text-muted-dark">Komisi Affiliate (15%)</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-mid)', marginTop: 8 }}>Berlaku untuk semua paket yang dibeli referral kamu.</p>
          </AnimatedSection>
          <CommissionCards items={affiliateCommissions} dark={false} />

          <AnimatedSection delay={0.3} style={{ marginTop: 32 }}>
            <div style={{ background: '#F0EEFF', border: '1px solid #D9D7FB', borderRadius: 14, padding: '20px 28px', maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
              <span style={{ fontSize: '1.4rem' }}>📍</span>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-mid)', marginTop: 10, lineHeight: 1.6 }}>
                <strong style={{ color: 'var(--text-dark)' }}>Di mana kode affiliate kamu?</strong><br />
                Buka BetterPOS → <strong>Settings → License</strong>. Kode AFF-xxxx sudah ada di sana sejak hari pertama aktivasi.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SALES PARTNER SECTION ── */}
      <section className="section section--dark" id="partner">
        <div className="container">
          <AnimatedSection className="text-center">
            <span style={{ display: 'inline-block', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--gold)', background: 'rgba(245,166,35,0.12)', padding: '5px 14px', borderRadius: 999, marginBottom: 20 }}>Sales Partner</span>
            <h2 className="heading-md" style={{ color: 'var(--text-light)', marginTop: 0 }}>
              Mau jual lebih serius?<br />Daftar jadi Sales Partner.
            </h2>
            <p className="body-lg" style={{ color: 'var(--text-muted)', maxWidth: 520, margin: '16px auto 0', lineHeight: 1.65 }}>
              Tidak perlu beli. Tidak ada target. Daftar gratis — jual kapan mau, komisi lebih besar, ada bonus tiap 5 customer.
            </p>
          </AnimatedSection>

          <StepsRow steps={partnerSteps} dark={true} />

          <AnimatedSection delay={0.2} className="text-center" style={{ marginTop: 56 }}>
            <p className="label" style={{ color: 'var(--text-muted)' }}>Komisi Sales Partner (20%)</p>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: 8 }}>Komisi lebih besar — plus bonus untuk yang aktif.</p>
          </AnimatedSection>
          <CommissionCards items={partnerCommissions} dark={true} />

          {/* Bonus */}
          <AnimatedSection delay={0.35} style={{ marginTop: 28 }}>
            <div style={{ background: 'rgba(245,166,35,0.08)', border: '1px solid rgba(245,166,35,0.25)', borderRadius: 16, padding: '24px 32px', maxWidth: 580, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
              <span style={{ fontSize: '2.2rem' }}>🎁</span>
              <div>
                <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--gold)' }}>Bonus Rp 500.000 setiap 5 customer</div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: 6, lineHeight: 1.55 }}>
                  Kumpulkan 5 customer → dapat bonus Rp 500K. Berlaku kelipatannya — 10 customer dapat Rp 1 juta.
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Perks */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, marginTop: 48, maxWidth: 680, margin: '48px auto 0' }} className="perks-grid">
            {partnerPerks.map((p, i) => (
              <AnimatedSection key={p.title} delay={0.1 + i * 0.08}>
                <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 14, padding: '22px', border: '1px solid var(--border-dark)', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '1.7rem', flexShrink: 0 }}>{p.icon}</span>
                  <div>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-light)' }}>{p.title}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: 5, lineHeight: 1.55 }}>{p.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section--dark" style={{ borderTop: '1px solid var(--border-dark)', paddingTop: 64, paddingBottom: 80 }}>
        <div className="container">
          <AnimatedSection className="text-center">
            <h2 className="heading-md" style={{ color: 'var(--text-light)' }}>Siap mulai?</h2>
            <p style={{ color: 'var(--text-muted)', marginTop: 12, fontSize: '0.95rem', maxWidth: 460, margin: '12px auto 0', lineHeight: 1.6 }}>
              Ada pertanyaan atau mau daftar jadi Sales Partner? Hubungi kami via WhatsApp — biasanya balas dalam 1–2 jam.
            </p>
            <div style={{ marginTop: 32, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={WA_PARTNER} target="_blank" rel="noopener noreferrer"
                className="btn btn-gold btn-lg">
                Daftar Sales Partner →
              </a>
              <a href={WA_GENERAL} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', padding: '13px 28px', borderRadius: 999, fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-muted)', border: '1px solid var(--border-dark)' }}>
                Ada pertanyaan
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .steps-grid    { grid-template-columns: 1fr !important; }
          .comm-grid     { grid-template-columns: 1fr !important; }
          .compare-grid  { grid-template-columns: 1fr !important; }
          .perks-grid    { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
