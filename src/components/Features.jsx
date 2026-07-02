import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from './shared/AnimatedSection'

const tabs = ['Essential', 'Plus']

const features = {
  Essential: [
    { icon: '🧾', title: 'Kasir Lengkap', desc: 'Cash, kartu, QRIS, transfer — semua metode pembayaran didukung.' },
    { icon: '📦', title: 'Stok Otomatis', desc: 'Stok berkurang otomatis setiap transaksi. Alert jika menipis atau habis.' },
    { icon: '👥', title: 'Manajemen Pelanggan', desc: 'Catat data pelanggan, lacak piutang, dan riwayat pembelian lengkap.' },
    { icon: '🛒', title: 'Purchase Order', desc: 'Buat PO ke supplier, terima barang per item, cicil pembayaran.' },
    { icon: '📊', title: 'Laporan Keuangan', desc: 'Laba kotor, laba bersih, HPP, pajak — semua dalam satu layar.' },
    { icon: '🔄', title: 'Multi Kasir & Shift', desc: 'Beberapa kasir bergantian shift, rekonsiliasi kas otomatis per shift.' },
    { icon: '↩️', title: 'Retur Pelanggan', desc: 'Proses refund atau tukar barang langsung dari riwayat transaksi.' },
    { icon: '🏷️', title: 'Diskon dengan PIN', desc: 'Diskon besar butuh PIN manajer atau owner — kasir tidak bisa sembarangan.' },
    { icon: '💰', title: 'Catatan Pengeluaran', desc: 'Catat biaya operasional toko dan lihat dampaknya ke laba bersih.' },
    { icon: '💾', title: 'Backup & Restore', desc: 'Download database dengan 1 klik. Simpan di mana saja.' },
    { icon: '📱', title: 'Pantau dari HP', desc: 'Android Owner App untuk lihat omzet dan stok dari mana saja.' },
    { icon: '🌙', title: 'Tahan Mati Internet', desc: '100% offline — transaksi tetap berjalan walau internet padam.' },
  ],
  Plus: [
    { icon: '🏭', title: 'Manajemen Supplier', desc: 'Profil supplier lengkap — performa, riwayat pengiriman, hutang per supplier.' },
    { icon: '⏱️', title: 'Timeline Supplier', desc: 'Lacak on-time, terlambat, substitusi — per PO, per supplier.' },
    { icon: '📈', title: 'Laporan Produk', desc: 'Produk mana yang paling laku, marginnya berapa, trennya bagaimana.' },
    { icon: '💵', title: 'Laporan Cash Flow', desc: 'Uang masuk dan keluar per hari, per metode pembayaran.' },
    { icon: '🎯', title: 'Laporan Diskon', desc: 'Total diskon diberikan, rata-rata %, dan breakdown per alasan.' },
    { icon: '📋', title: 'Activity Log', desc: 'Setiap aksi tercatat — siapa, kapan, apa yang dilakukan di sistem.' },
    { icon: '📤', title: 'Import Produk CSV', desc: 'Upload ratusan produk sekaligus dari spreadsheet Excel.' },
    { icon: '🗂️', title: 'Manajemen Kategori', desc: 'Kelompokkan produk ke dalam kategori untuk navigasi kasir yang lebih cepat.' },
    { icon: '🔍', title: 'Laporan Supplier', desc: 'Skor reliabilitas per supplier — mana yang konsisten, mana yang sering telat.' },
    { icon: '💳', title: 'Refund dari Kasir', desc: 'Kasir bisa proses refund langsung tanpa harus ke menu admin.' },
  ],
}

export default function Features() {
  const [active, setActive] = useState('Essential')

  return (
    <section className="section section--light" id="fitur">
      <div className="container">
        <AnimatedSection className="text-center">
          <p className="label text-muted-dark">Fitur Lengkap</p>
          <h2 className="heading-lg" style={{ color: 'var(--text-dark)', marginTop: 10 }}>
            Semua yang kamu butuhkan,<br />sudah ada.
          </h2>
          <p className="body-lg text-muted-dark" style={{ maxWidth: 500, margin: '16px auto 0' }}>
            Bukan sekadar kasir — BetterPOS adalah sistem manajemen toko yang lengkap.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15} style={{ marginTop: 48 }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 48 }}>
            {tabs.map(tab => (
              <button key={tab} onClick={() => setActive(tab)}
                style={{
                  padding: '10px 28px', borderRadius: 999,
                  fontWeight: 700, fontSize: '0.95rem',
                  background: active === tab ? 'var(--purple)' : 'transparent',
                  color: active === tab ? '#fff' : 'var(--text-mid)',
                  border: active === tab ? 'none' : '1.5px solid var(--border-light)',
                  transition: 'all 0.2s',
                }}>
                {tab}
                {tab === 'Plus' && <span style={{ marginLeft: 8, fontSize: '0.72rem', background: 'var(--gold)', color: '#1A1205', padding: '2px 7px', borderRadius: 999 }}>Lebih Lengkap</span>}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={active}
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}
              className="features-grid"
            >
              {features[active].map((f, i) => (
                <motion.div key={f.title}
                  initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.35 }}
                  style={{
                    background: '#fff', borderRadius: 14, padding: '22px 24px',
                    border: '1.5px solid var(--border-light)',
                    transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
                  }}
                  whileHover={{ borderColor: 'var(--purple)', boxShadow: '0 4px 20px rgba(83,74,183,0.12)', y: -2 }}
                >
                  <span style={{ fontSize: '1.8rem' }}>{f.icon}</span>
                  <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--text-dark)', marginTop: 12 }}>{f.title}</h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-mid)', marginTop: 6, lineHeight: 1.55 }}>{f.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </AnimatedSection>
      </div>
      <style>{`
        @media (max-width: 900px) { .features-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 540px) { .features-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
