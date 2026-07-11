import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedSection from './shared/AnimatedSection'

const tabs = ['Essential', 'Plus']

const features = {
  Essential: [
    { icon: '🧾', title: 'Kasir Digital Lengkap', desc: 'Terima pembayaran cash, kartu, QRIS, dan transfer. Bisa tahan pesanan dan lanjutkan kapan saja.' },
    { icon: '📦', title: 'Produk & Kategori', desc: 'Atur katalog produk dan kelompokkannya. Stok berkurang otomatis setiap transaksi, dapat notifikasi kalau menipis.' },
    { icon: '📊', title: 'Ringkasan Harian', desc: 'Omzet hari ini, kondisi keuangan, dan hal-hal yang perlu ditindaklanjuti — semuanya di satu layar.' },
    { icon: '🧾', title: 'Riwayat & Retur', desc: 'Cari transaksi lama, cetak ulang struk, atau proses retur dan tukar barang langsung dari histori.' },
    { icon: '⏱️', title: 'Shift Kasir', desc: 'Buka dan tutup shift dengan rekonsiliasi kas. Histori pergerakan uang per shift tersimpan rapi.' },
    { icon: '💰', title: 'Pengeluaran Toko', desc: 'Catat biaya operasional harian dan lihat dampaknya ke laba bersih toko.' },
    { icon: '📊', title: 'Laporan Penjualan', desc: 'Ringkasan penjualan, produk terlaku, laba, dan kondisi stok — cukup untuk evaluasi harian.' },
    { icon: '👨‍💼', title: 'Tim & Data Aman', desc: '1 akun kasir & 1 akun manager, masing-masing dengan PIN terpisah. Bisa diakses dari device berbeda (tablet, laptop, HP) di jaringan yang sama. Backup data 1 klik.' },
  ],
  Plus: [
    { icon: '🏪', title: 'Multi-Kasir Bersamaan', desc: 'Akun kasir & manager tidak terbatas. Buka 2, 3, 4 meja kasir sekaligus dari device berbeda — semua terhubung real-time ke satu database.' },
    { icon: '🏷️', title: 'Diskon & Promosi', desc: 'Atur diskon otomatis dan promo. Diskon besar butuh PIN manajer — kasir tidak bisa sembarangan.' },
    { icon: '👥', title: 'Pelanggan & Piutang', desc: 'Catat data pelanggan, jual kredit (bayar nanti), dan lacak semua hutang dalam satu tempat.' },
    { icon: '🛒', title: 'Pembelian dari Supplier', desc: 'Buat purchase order, catat penerimaan barang, dan cicil pembayaran ke supplier dengan rapi.' },
    { icon: '🏭', title: 'Manajemen Supplier', desc: 'Profil dan riwayat tiap supplier, termasuk hutang yang belum terbayar.' },
    { icon: '📋', title: 'Audit Log Aktivitas', desc: 'Setiap perubahan di sistem tercatat — siapa yang ubah harga, siapa yang hapus transaksi.' },
    { icon: '📈', title: 'Laporan Lengkap', desc: 'Cash flow, laporan diskon, piutang pelanggan, performa supplier, dan lebih banyak lagi.' },
    { icon: '📱', title: 'Aplikasi Owner Android', desc: 'Pantau omzet, stok, dan laporan toko dari HP, dari mana saja. Sudah termasuk tanpa biaya tambahan.' },
  ],
}

const addons = [
  {
    icon: '📱',
    title: 'Aplikasi Owner Android',
    subtitle: 'untuk Essential',
    desc: 'Pantau toko dari HP. Laporan yang tersedia menyesuaikan paket Essential.',
    price: 'Rp 500.000',
  },
  {
    icon: '🖥️',
    title: 'Customer Display',
    subtitle: 'semua paket',
    desc: 'Tampilkan rincian pesanan ke layar kedua di depan pelanggan.',
    price: 'Rp 300.000',
  },
]

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
            Pilih paket sesuai kebutuhan — mulai dari yang simpel sampai kontrol penuh atas bisnis kamu.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15} style={{ marginTop: 48 }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 36 }}>
            {tabs.map(tab => (
              <button key={tab} onClick={() => setActive(tab)}
                style={{
                  padding: '10px 28px', borderRadius: 999,
                  fontWeight: 700, fontSize: '0.95rem',
                  background: active === tab ? 'var(--purple)' : 'transparent',
                  color: active === tab ? '#fff' : 'var(--text-mid)',
                  border: active === tab ? 'none' : '1.5px solid var(--border-light)',
                  transition: 'all 0.2s', cursor: 'pointer',
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
            >
              {active === 'Plus' && (
                <p style={{ textAlign: 'center', fontSize: '0.88rem', color: 'var(--purple)', fontWeight: 600, marginBottom: 24, background: '#f0eeff', display: 'inline-block', padding: '6px 16px', borderRadius: 99, width: '100%', boxSizing: 'border-box' }}>
                  ✓ Sudah termasuk semua fitur Essential
                </p>
              )}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }} className="features-grid">
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
              </div>
            </motion.div>
          </AnimatePresence>
        </AnimatedSection>

        <AnimatedSection delay={0.2} style={{ marginTop: 64 }}>
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--text-dark)' }}>Fitur Tambahan</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-mid)', marginTop: 6 }}>Bisa ditambahkan ke paket mana saja — sekali bayar.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, maxWidth: 700, margin: '0 auto' }} className="addons-grid">
            {addons.map((a, i) => (
              <motion.div key={a.title}
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.35 }}
                style={{
                  background: '#fff', borderRadius: 14, padding: '22px 24px',
                  border: '1.5px solid var(--border-light)',
                  display: 'flex', flexDirection: 'column', gap: 8,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
                  <div>
                    <span style={{ fontSize: '1.6rem' }}>{a.icon}</span>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--text-dark)', marginTop: 10 }}>{a.title}</h4>
                    <span style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-mid)', background: 'var(--border-light)', padding: '2px 8px', borderRadius: 99 }}>{a.subtitle}</span>
                  </div>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--purple)', whiteSpace: 'nowrap', marginTop: 4 }}>+ {a.price}</div>
                </div>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-mid)', lineHeight: 1.5, marginTop: 4 }}>{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>

      <style>{`
        @media (max-width: 900px) { .features-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 540px) { .features-grid { grid-template-columns: 1fr !important; } .addons-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
