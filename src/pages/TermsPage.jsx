import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const WA = 'https://wa.me/6282214918503'

const h2 = { fontSize: '0.95rem', fontWeight: 800, color: '#1A1830', marginTop: 40, marginBottom: 10, paddingBottom: 8, borderBottom: '2px solid #E8E4F8' }
const h3 = { fontSize: '0.88rem', fontWeight: 700, color: '#1A1830', marginTop: 20, marginBottom: 6 }
const p  = { fontSize: '0.9rem', color: '#4B4770', lineHeight: 1.8, marginBottom: 10 }
const li = { fontSize: '0.9rem', color: '#4B4770', lineHeight: 1.8, marginBottom: 4 }

export default function TermsPage() {
  return (
    <>
      <Helmet>
        <title>Syarat & Ketentuan | BetterPOS</title>
        <meta name="description" content="Syarat dan ketentuan penggunaan perangkat lunak BetterPOS — lisensi, hak pengguna, pembaruan, dan kebijakan perpindahan perangkat." />
        <link rel="canonical" href="https://betterpos.my.id/syarat-ketentuan" />
      </Helmet>

      <Navbar />

      <div style={{ background: 'var(--bg-dark)', paddingTop: 100, paddingBottom: 72 }}>
        <div className="container" style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Legal</p>
          <h1 className="heading-lg" style={{ color: 'var(--text-light)', marginTop: 12 }}>Syarat & Ketentuan</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: 10 }}>
            Terakhir diperbarui: Juli 2026 · Berlaku untuk semua pengguna BetterPOS
          </p>
        </div>
      </div>

      <div style={{ background: '#fff', padding: '56px 24px 80px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>

          <p style={p}>
            Dengan mengunduh, menginstal, atau menggunakan perangkat lunak BetterPOS, Anda menyetujui syarat dan ketentuan berikut. Jika Anda tidak menyetujuinya, harap hentikan penggunaan dan hubungi kami untuk pertanyaan lebih lanjut.
          </p>

          <h2 style={h2}>Pasal 1 — Definisi</h2>
          <ul style={{ paddingLeft: 20, margin: '0 0 12px' }}>
            <li style={li}><strong>BetterPOS</strong> — perangkat lunak Point of Sale yang dikembangkan oleh PT. Rimba Intan.</li>
            <li style={li}><strong>Lisensi</strong> — hak non-eksklusif yang diberikan kepada Pengguna untuk menggunakan BetterPOS.</li>
            <li style={li}><strong>Perangkat Server</strong> — satu unit PC atau laptop tempat BetterPOS diinstal dan dijalankan sebagai server.</li>
            <li style={li}><strong>Machine ID</strong> — nomor identifikasi unik perangkat Windows yang digunakan untuk mengunci lisensi.</li>
            <li style={li}><strong>Pengguna</strong> — individu atau badan usaha yang memperoleh lisensi BetterPOS.</li>
          </ul>

          <h2 style={h2}>Pasal 2 — Lisensi Perangkat Lunak</h2>
          <p style={p}>
            Setiap lisensi berlaku untuk satu (1) Perangkat Server. Lisensi terkunci ke Machine ID perangkat tersebut dan tidak dapat digunakan secara bersamaan di lebih dari satu perangkat.
          </p>
          <p style={p}>
            Pengguna dapat mengakses antarmuka kasir dari beberapa perangkat lain (tablet, laptop, HP) dalam jaringan yang sama, selama BetterPOS berjalan di Perangkat Server yang dilisensikan.
          </p>
          <p style={p}>
            Lisensi bersifat non-eksklusif dan berlaku tanpa batas waktu untuk versi yang diperoleh, kecuali diakhiri sesuai Pasal 8.
          </p>

          <h2 style={h2}>Pasal 3 — Hak & Kewajiban Pengguna</h2>
          <h3 style={h3}>Pengguna berhak:</h3>
          <ul style={{ paddingLeft: 20, margin: '0 0 12px' }}>
            <li style={li}>Menggunakan BetterPOS untuk kegiatan bisnis komersial.</li>
            <li style={li}>Membuat salinan cadangan (backup) database BetterPOS.</li>
            <li style={li}>Menerima pembaruan perangkat lunak selama periode dukungan aktif.</li>
          </ul>
          <h3 style={h3}>Pengguna dilarang:</h3>
          <ul style={{ paddingLeft: 20, margin: '0 0 12px' }}>
            <li style={li}>Mendistribusikan, menyalin, atau menjual kembali perangkat lunak BetterPOS kepada pihak lain.</li>
            <li style={li}>Melakukan rekayasa balik (reverse engineering) terhadap perangkat lunak.</li>
            <li style={li}>Menghapus, mengubah, atau menyembunyikan pemberitahuan hak cipta yang ada.</li>
            <li style={li}>Menggunakan BetterPOS untuk tujuan yang melanggar hukum yang berlaku.</li>
          </ul>

          <h2 style={h2}>Pasal 4 — Pembaruan & Dukungan Teknis</h2>
          <p style={p}>
            Setiap pembelian mencakup pembaruan perangkat lunak dan dukungan teknis via WhatsApp selama 12 (dua belas) bulan sejak tanggal aktivasi.
          </p>
          <p style={p}>
            Setelah periode tersebut berakhir, BetterPOS tetap berfungsi penuh. Pengguna dapat memperpanjang layanan pembaruan dan dukungan dengan biaya <strong>Rp 1.000.000 per tahun</strong> (opsional).
          </p>

          <h2 style={h2}>Pasal 5 — Perpindahan Perangkat</h2>
          <p style={p}>
            Jika Pengguna mengganti Perangkat Server, pemindahan lisensi ke perangkat baru dikenakan biaya <strong>Rp 300.000</strong>. Lisensi pada perangkat lama dinonaktifkan secara otomatis setelah pemindahan selesai. Perpindahan hanya dapat dilakukan melalui tim BetterPOS.
          </p>

          <h2 style={h2}>Pasal 6 — Data Pengguna</h2>
          <p style={p}>
            Seluruh data operasional (transaksi, produk, pelanggan, keuangan) tersimpan sepenuhnya di Perangkat Server Pengguna. PT. Rimba Intan tidak memiliki akses ke data operasional tersebut.
          </p>
          <p style={p}>
            Pengguna sepenuhnya bertanggung jawab atas keamanan dan pencadangan data mereka. Fitur backup tersedia langsung di dalam aplikasi.
          </p>

          <h2 style={h2}>Pasal 7 — Batasan Tanggung Jawab</h2>
          <p style={p}>
            PT. Rimba Intan tidak bertanggung jawab atas kehilangan data yang disebabkan oleh kerusakan hardware, pemadaman listrik, bencana alam, atau kelalaian Pengguna dalam melakukan backup secara berkala.
          </p>
          <p style={p}>
            Dalam kejadian apapun, tanggung jawab maksimal PT. Rimba Intan tidak akan melebihi harga pembelian lisensi yang dibayarkan oleh Pengguna.
          </p>

          <h2 style={h2}>Pasal 8 — Pengakhiran Lisensi</h2>
          <p style={p}>
            Lisensi berakhir secara otomatis jika Pengguna melanggar ketentuan dalam dokumen ini. Tidak ada pengembalian dana jika lisensi diakhiri karena pelanggaran.
          </p>

          <h2 style={h2}>Pasal 9 — Hukum yang Berlaku</h2>
          <p style={p}>
            Syarat & Ketentuan ini diatur oleh hukum Republik Indonesia. Sengketa diselesaikan terlebih dahulu melalui musyawarah. Jika tidak tercapai kesepakatan dalam 30 hari, sengketa diselesaikan melalui pengadilan negeri yang berwenang.
          </p>

          <div style={{ marginTop: 48, padding: '20px 24px', background: '#F8F7FF', borderRadius: 12, border: '1px solid #E8E4F8' }}>
            <p style={{ ...p, marginBottom: 4 }}>Ada pertanyaan tentang syarat & ketentuan ini?</p>
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
