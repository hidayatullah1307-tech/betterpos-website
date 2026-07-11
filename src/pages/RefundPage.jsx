import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const WA = 'https://wa.me/6282214918503?text=Halo%2C%20saya%20ingin%20mengajukan%20klaim%20terkait%20kebijakan%20pengembalian%20dana%20BetterPOS.'

const h2 = { fontSize: '0.95rem', fontWeight: 800, color: '#1A1830', marginTop: 40, marginBottom: 10, paddingBottom: 8, borderBottom: '2px solid #E8E4F8' }
const p  = { fontSize: '0.9rem', color: '#4B4770', lineHeight: 1.8, marginBottom: 10 }
const li = { fontSize: '0.9rem', color: '#4B4770', lineHeight: 1.8, marginBottom: 4 }

export default function RefundPage() {
  return (
    <>
      <Helmet>
        <title>Kebijakan Pengembalian Dana | BetterPOS</title>
        <meta name="description" content="Kebijakan pengembalian dana BetterPOS — trial 14 hari gratis, kondisi refund, dan pengecualian." />
        <link rel="canonical" href="https://betterpos.my.id/pengembalian-dana" />
      </Helmet>

      <Navbar />

      <div style={{ background: 'var(--bg-dark)', paddingTop: 100, paddingBottom: 72 }}>
        <div className="container" style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Legal</p>
          <h1 className="heading-lg" style={{ color: 'var(--text-light)', marginTop: 12 }}>Kebijakan Pengembalian Dana</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: 10 }}>
            Terakhir diperbarui: Juli 2026 · Berlaku untuk semua pembelian BetterPOS
          </p>
        </div>
      </div>

      <div style={{ background: '#fff', padding: '56px 24px 80px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>

          <p style={p}>
            Kami memahami bahwa membeli perangkat lunak adalah keputusan penting. Itulah mengapa kami menyediakan trial gratis 14 hari agar Anda dapat mencoba BetterPOS secara menyeluruh sebelum memutuskan untuk membeli.
          </p>

          <h2 style={h2}>1. Trial 14 Hari Gratis</h2>
          <p style={p}>
            BetterPOS tersedia untuk dicoba secara gratis selama <strong>14 (empat belas) hari</strong> penuh. Selama periode ini Anda dapat menggunakan semua fitur sesuai paket yang Anda pilih — tanpa batasan, tanpa memerlukan kartu kredit.
          </p>
          <p style={p}>
            Kami sangat menganjurkan Anda memanfaatkan masa trial ini sepenuhnya: jalankan transaksi nyata, coba laporan, uji shift kasir, dan pastikan BetterPOS sesuai dengan kebutuhan toko Anda sebelum melakukan pembelian.
          </p>

          <h2 style={h2}>2. Kebijakan Setelah Pembelian</h2>
          <p style={p}>
            Setelah lisensi diaktifkan, <strong>kami tidak menerima permintaan pengembalian dana</strong>. Alasannya:
          </p>
          <ul style={{ paddingLeft: 20, margin: '0 0 12px' }}>
            <li style={li}>Lisensi BetterPOS bersifat digital dan telah terkunci secara permanen ke perangkat Anda sejak aktivasi.</li>
            <li style={li}>Periode trial 14 hari telah disediakan khusus agar Anda dapat mengevaluasi software sebelum membeli.</li>
          </ul>

          <h2 style={h2}>3. Pengecualian</h2>
          <p style={p}>Kami akan memberikan <strong>pengembalian dana penuh</strong> jika semua kondisi berikut terpenuhi:</p>
          <ul style={{ paddingLeft: 20, margin: '0 0 16px' }}>
            <li style={li}>Terdapat bug kritis yang menyebabkan fungsi utama kasir (pencatatan transaksi) tidak dapat berjalan sama sekali, <strong>dan</strong></li>
            <li style={li}>Bug tersebut telah dilaporkan secara resmi kepada kami via WhatsApp, <strong>dan</strong></li>
            <li style={li}>Kami tidak dapat memperbaiki bug tersebut dalam <strong>30 (tiga puluh) hari kalender</strong> sejak laporan resmi diterima.</li>
          </ul>
          <p style={p}>
            Masalah yang disebabkan oleh konfigurasi perangkat, sistem operasi, atau koneksi jaringan lokal tidak termasuk dalam pengecualian ini.
          </p>

          <h2 style={h2}>4. Perpindahan Perangkat</h2>
          <p style={p}>
            Biaya perpindahan lisensi ke perangkat baru (<strong>Rp 300.000</strong>) bukan merupakan pengembalian dana — ini adalah biaya layanan transfer lisensi. Perpindahan tidak membatalkan lisensi yang sudah ada.
          </p>

          <h2 style={h2}>5. Cara Mengajukan Klaim</h2>
          <p style={p}>Jika Anda merasa memenuhi syarat pengecualian di Poin 3, hubungi kami via WhatsApp dengan menyertakan:</p>
          <ul style={{ paddingLeft: 20, margin: '0 0 12px' }}>
            <li style={li}>Deskripsi lengkap masalah yang dialami.</li>
            <li style={li}>Bukti pelaporan bug sebelumnya (screenshot percakapan WA).</li>
            <li style={li}>Nomor lisensi Anda (tersedia di Settings → License di dalam aplikasi).</li>
          </ul>
          <p style={p}>Kami akan meninjau klaim dalam 3 hari kerja dan memberikan keputusan tertulis.</p>

          <div style={{ marginTop: 48, padding: '20px 24px', background: '#F8F7FF', borderRadius: 12, border: '1px solid #E8E4F8' }}>
            <p style={{ ...p, marginBottom: 8 }}>
              Sebelum membeli, manfaatkan trial 14 hari gratis untuk memastikan BetterPOS sesuai kebutuhan toko Anda.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '0.88rem', fontWeight: 700, color: '#534AB7' }}>
              Ada pertanyaan? Hubungi kami via WhatsApp →
            </a>
          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}
