import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from './shared/AnimatedSection'

const WA_NUMBER = '6282214918503'

const plans = [
  {
    name: 'Essential',
    tagline: 'Cukup untuk jualan dengan rapi. Catatan lain? Bisa pakai Excel.',
    lifetime: 2000000,
    annual: 800000,
    badge: null,
    features: [
      '1 akun kasir & 1 akun manager',
      'Bisa diakses dari device berbeda (owner, manager, kasir)',
      'Kasir (cash, kartu, QRIS, transfer)',
      'Produk, kategori & stok otomatis',
      'Riwayat transaksi & retur',
      'Shift kasir & rekonsiliasi kas',
      'Catatan pengeluaran toko',
      'Laporan penjualan & keuangan',
      'Backup & restore database',
    ],
  },
  {
    name: 'Plus',
    tagline: 'Semua cara jualan dan kontrol penuh atas bisnis kamu.',
    lifetime: 3000000,
    annual: 1300000,
    badge: 'Paling Lengkap',
    badgeVariant: 'gold',
    featured: true,
    features: [
      'Akun kasir & manager tidak terbatas',
      'Multi-meja kasir bersamaan — 2, 3, 4 kasir aktif sekaligus',
      'Semua fitur Essential',
      'Diskon & promosi dengan PIN approval',
      'Pelanggan, kredit & lacak piutang',
      'Purchase Order & manajemen supplier',
      'Laporan lengkap (cash flow, diskon, piutang)',
      'Activity Log & import produk CSV',
      'Aplikasi Owner Android (sudah termasuk)',
    ],
  },
  {
    name: 'Pro',
    tagline: 'Fitur lanjutan sedang dalam pengembangan.',
    lifetime: null,
    annual: null,
    badge: 'Segera Hadir',
    badgeVariant: 'muted',
    comingSoon: true,
    features: [
      'Semua fitur Plus',
      'Akuntansi sederhana (P&L)',
      'Multi-toko beda lokasi',
      'Dan fitur lanjutan lainnya...',
    ],
  },
]

function formatRp(n) {
  return 'Rp ' + n.toLocaleString('id-ID')
}

const badgeStyles = {
  gold:  { background: 'var(--gold)', color: '#1A1205' },
  muted: { background: 'rgba(255,255,255,0.1)', color: 'var(--text-muted)', border: '1px solid rgba(255,255,255,0.15)' },
}

export default function Pricing() {
  const [billing, setBilling] = useState('lifetime')

  return (
    <section className="section section--dark" id="harga">
      <div className="container">
        <AnimatedSection className="text-center">
          <p className="label" style={{ color: 'var(--text-muted)' }}>Paket Harga</p>
          <h2 className="heading-lg" style={{ color: 'var(--text-light)', marginTop: 10 }}>
            Pilih paket yang sesuai.
          </h2>
          <p className="body-lg" style={{ color: 'var(--text-muted)', maxWidth: 480, margin: '16px auto 0' }}>
            Semua paket termasuk setup, support WA, dan update selama 12 bulan.
          </p>

          <div style={{ display: 'inline-flex', background: 'var(--bg-card-dark)', borderRadius: 999, padding: 4, gap: 4, marginTop: 36, border: '1px solid var(--border-dark)' }}>
            {[['lifetime', 'Sekali Bayar'], ['annual', 'Tahunan']].map(([key, label]) => (
              <button key={key} onClick={() => setBilling(key)}
                style={{
                  padding: '9px 24px', borderRadius: 999, fontWeight: 700, fontSize: '0.9rem',
                  background: billing === key ? 'var(--purple)' : 'transparent',
                  color: billing === key ? '#fff' : 'var(--text-muted)',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}>
                {label}
                {key === 'lifetime' && <span style={{ marginLeft: 7, fontSize: '0.7rem', background: 'var(--gold)', color: '#1A1205', padding: '2px 8px', borderRadius: 999 }}>Hemat</span>}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 56, alignItems: 'stretch' }} className="pricing-grid">
          {plans.map((plan, i) => (
            <AnimatedSection key={plan.name} delay={0.1 + i * 0.1} style={{ height: '100%' }}>
              <motion.div
                whileHover={!plan.comingSoon ? { y: -6, boxShadow: '0 24px 64px rgba(0,0,0,0.45)' } : {}}
                transition={{ duration: 0.2 }}
                style={{
                  background: plan.featured ? 'linear-gradient(145deg, #1E1B3A 0%, #16142E 100%)' : 'var(--bg-card-dark)',
                  borderRadius: 20,
                  border: plan.featured
                    ? '1.5px solid rgba(245,166,35,0.4)'
                    : plan.comingSoon
                      ? '1px solid var(--border-dark)'
                      : '1.5px solid rgba(83,74,183,0.25)',
                  height: '100%', display: 'flex', flexDirection: 'column',
                  opacity: plan.comingSoon ? 0.72 : 1,
                  position: 'relative', overflow: 'hidden',
                }}
              >
                {/* Badge ribbon across top */}
                {plan.badge && (
                  <div style={{
                    background: badgeStyles[plan.badgeVariant].background,
                    color: badgeStyles[plan.badgeVariant].color,
                    border: badgeStyles[plan.badgeVariant].border,
                    textAlign: 'center', padding: '8px 16px',
                    fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.06em',
                    textTransform: 'uppercase', whiteSpace: 'nowrap',
                  }}>
                    {plan.badge}
                  </div>
                )}

                <div style={{ padding: '28px 28px 0' }}>
                  {/* Decorative glow for Plus */}
                  {plan.featured && (
                    <div style={{ position: 'absolute', top: 40, right: -20, width: 140, height: 140, borderRadius: '50%', background: 'rgba(245,166,35,0.07)', pointerEvents: 'none' }} />
                  )}

                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-light)' }}>{plan.name}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: 6, lineHeight: 1.5 }}>{plan.tagline}</p>

                  <div style={{ marginTop: 28 }}>
                    {plan.comingSoon ? (
                      <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-muted)', letterSpacing: '-0.02em' }}>Harga menyusul</div>
                    ) : (
                      <AnimatePresence mode="wait">
                        <motion.div key={billing} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.2 }}>
                          <div style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--text-light)', letterSpacing: '-0.03em' }}>
                            {formatRp(billing === 'lifetime' ? plan.lifetime : plan.annual)}
                          </div>
                          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: 6 }}>
                            {billing === 'lifetime' ? 'Bayar sekali, pakai selamanya' : 'per tahun · perpanjang kapan saja'}
                          </div>
                        </motion.div>
                      </AnimatePresence>
                    )}
                  </div>

                  <div style={{ height: 1, background: 'var(--border-dark)', margin: '24px 0' }} />
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 13, flex: 1, padding: '0 28px' }}>
                  {plan.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                        stroke={plan.comingSoon ? 'var(--text-muted)' : plan.featured ? 'var(--gold)' : 'var(--purple-light)'}
                        strokeWidth="2.5" style={{ flexShrink: 0, marginTop: 3 }}>
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      <span style={{ fontSize: '0.9rem', color: plan.comingSoon ? 'var(--text-muted)' : 'var(--text-light)', lineHeight: 1.55 }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <div style={{ padding: '28px 28px 28px' }}>
                  {plan.comingSoon ? (
                    <button disabled style={{
                      width: '100%', padding: '14px', borderRadius: 999,
                      background: 'rgba(255,255,255,0.06)', color: 'var(--text-muted)',
                      fontWeight: 700, fontSize: '0.95rem', cursor: 'not-allowed',
                      border: '1px solid rgba(255,255,255,0.1)',
                    }}>
                      Daftar Notifikasi →
                    </button>
                  ) : (
                    <a href={`https://wa.me/${WA_NUMBER}?text=Halo, saya tertarik dengan BetterPOS ${plan.name}. Bisa bantu proses pembelian?`}
                      target="_blank" rel="noopener noreferrer"
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        width: '100%', padding: '14px', borderRadius: 999,
                        background: plan.featured ? 'var(--gold)' : 'var(--purple)',
                        color: plan.featured ? '#1A1205' : '#fff',
                        fontWeight: 700, fontSize: '0.95rem',
                        transition: 'opacity 0.2s, transform 0.2s',
                        boxShadow: plan.featured
                          ? '0 4px 20px rgba(245,166,35,0.35)'
                          : '0 4px 20px rgba(83,74,183,0.35)',
                      }}
                      onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
                      onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                      Mulai dengan {plan.name}
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4} style={{ marginTop: 32 }}>
          <div style={{
            background: 'var(--bg-card-dark)', borderRadius: 16, padding: '20px 32px',
            border: '1px solid var(--border-dark)',
            display: 'flex', flexWrap: 'wrap', gap: 20,
            justifyContent: 'center', alignItems: 'center', textAlign: 'center',
          }}>
            {[
              { icon: '🔁', text: 'Perpanjang update & support: Rp 1.000.000/tahun (opsional)' },
              { icon: '💻', text: 'Pindah perangkat baru: Rp 300.000 (transfer Machine ID)' },
              { icon: '🏢', text: 'Setup on-site: hubungi kami untuk info biaya kunjungan' },
            ].map(item => (
              <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{item.text}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .pricing-grid { grid-template-columns: 1fr !important; }
          .pricing-grid > * { max-width: 460px; margin: 0 auto; width: 100%; }
        }
      `}</style>
    </section>
  )
}
