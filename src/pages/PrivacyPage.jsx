import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const WA = 'https://wa.me/6282214918503'

const h2 = { fontSize: '0.95rem', fontWeight: 800, color: '#1A1830', marginTop: 40, marginBottom: 10, paddingBottom: 8, borderBottom: '2px solid #E8E4F8' }
const p  = { fontSize: '0.9rem', color: '#4B4770', lineHeight: 1.8, marginBottom: 10 }
const li = { fontSize: '0.9rem', color: '#4B4770', lineHeight: 1.8, marginBottom: 4 }

export default function PrivacyPage() {
  return (
    <>
      <Helmet>
        <title>Kebijakan Privasi | BetterPOS</title>
        <meta name="description" content="Kebijakan privasi BetterPOS — data apa yang kami kumpulkan, bagaimana kami menggunakannya, dan komitmen kami terhadap privasi data Anda." />
        <link rel="canonical" href="https://betterpos.my.id/privasi" />
      </Helmet>

      <Navbar />

      <div style={{ background: 'var(--bg-dark)', paddingTop: 100, paddingBottom: 72 }}>
        <div className="container" style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Legal</p>
          <h1 className="heading-lg" style={{ color: 'var(--text-light)', marginTop: 12 }}>Kebijakan Privasi</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: 10 }}>
            Terakhir diperbarui: Juli 2026 · Berlaku untuk semua pengguna BetterPOS
          </p>
        </div>
      </div>

      <div style={{ background: '#fff', padding: '56px 24px 80px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>

          <p style={p}>
            PT. Rimba Intan berkomitmen untuk melindungi privasi Anda. Dokumen ini menjelaskan data apa yang kami kumpulkan, bagaimana kami menggunakannya, dan apa yang kami <em>tidak</em> lakukan dengan data Anda.
          </p>

          <div style={{ background: '#F0FFF8', border: '1px solid #A7F3D0', borderRadius: 10, padding: '16px 20px', marginBottom: 24, marginTop: 8 }}>
            <p style={{ ...p, marginBottom: 0, color: '#065F46', fontWeight: 600 }}>
              Ringkasan singkat: BetterPOS adalah software offline. Data transaksi, produk, dan pelanggan Anda tersimpan 100% di PC Anda sendiri — kami tidak pernah mengaksesnya.
            </p>
          </div>

          <h2 style={h2}>1. Data yang Kami Kumpulkan</h2>
          <p style={p}>Saat pembelian dan aktivasi lisensi, kami mengumpulkan:</p>
          <ul style={{ paddingLeft: 20, margin: '0 0 12px' }}>
            <li style={li}><strong>Machine ID</strong> — nomor identifikasi unik perangkat Windows Anda, digunakan untuk mengunci lisensi ke perangkat.</li>
            <li style={li}><strong>Nomor telepon atau email</strong> — untuk komunikasi terkait support teknis, konfirmasi pembelian, dan informasi pembaruan penting.</li>
          </ul>

          <h2 style={h2}>2. Data yang TIDAK Kami Kumpulkan</h2>
          <p style={p}>BetterPOS beroperasi sepenuhnya offline. Kami tidak mengumpulkan, tidak menyimpan di server kami, dan tidak pernah mengakses:</p>
          <ul style={{ paddingLeft: 20, margin: '0 0 12px' }}>
            <li style={li}>Data transaksi penjualan Anda</li>
            <li style={li}>Data produk dan inventaris</li>
            <li style={li}>Data pelanggan toko</li>
            <li style={li}>Data keuangan, laporan, atau shift kasir</li>
          </ul>
          <p style={p}>Semua data tersebut tersimpan sepenuhnya di perangkat Anda sendiri.</p>

          <h2 style={h2}>3. Cara Penggunaan Data</h2>
          <ul style={{ paddingLeft: 20, margin: '0 0 12px' }}>
            <li style={li}><strong>Machine ID</strong>: digunakan semata-mata untuk validasi lisensi saat aktivasi dan perpindahan perangkat.</li>
            <li style={li}><strong>Nomor HP / email</strong>: digunakan untuk support teknis, konfirmasi pembelian, dan notifikasi pembaruan penting. Kami tidak mengirim promosi berlebihan.</li>
          </ul>

          <h2 style={h2}>4. Dukungan Teknis & Data Anda</h2>
          <p style={p}>
            Jika Anda mengirimkan file database BetterPOS kepada kami untuk keperluan troubleshooting:
          </p>
          <ul style={{ paddingLeft: 20, margin: '0 0 12px' }}>
            <li style={li}>File tersebut hanya digunakan untuk mendiagnosis masalah yang Anda laporkan.</li>
            <li style={li}>File akan dihapus setelah masalah terselesaikan.</li>
            <li style={li}>Data tidak akan dibagikan kepada pihak ketiga manapun dalam kondisi apapun.</li>
          </ul>

          <h2 style={h2}>5. Pihak Ketiga</h2>
          <p style={p}>
            Kami tidak menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga. Tidak ada layanan payment gateway pihak ketiga yang terlibat dalam transaksi pembelian — semua pembayaran dilakukan melalui transfer bank langsung.
          </p>

          <h2 style={h2}>6. Perubahan Kebijakan</h2>
          <p style={p}>
            Jika kami memperbarui kebijakan ini, kami akan menginformasikan perubahan tersebut melalui WhatsApp kepada pelanggan aktif. Penggunaan BetterPOS setelah pemberitahuan dianggap sebagai persetujuan terhadap kebijakan yang diperbarui.
          </p>

          <div style={{ marginTop: 48, padding: '20px 24px', background: '#F8F7FF', borderRadius: 12, border: '1px solid #E8E4F8' }}>
            <p style={{ ...p, marginBottom: 4 }}>Ada pertanyaan tentang kebijakan privasi ini?</p>
            <a href={WA} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '0.88rem', fontWeight: 700, color: '#534AB7' }}>
              Hubungi kami via WhatsApp →
            </a>
          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}
