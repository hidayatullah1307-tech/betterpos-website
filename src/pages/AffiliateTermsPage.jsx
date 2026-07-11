import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const WA_PARTNER = 'https://wa.me/6282214918503?text=Halo%2C%20saya%20tertarik%20untuk%20daftar%20sebagai%20Sales%20Partner%20BetterPOS.'
const WA = 'https://wa.me/6282214918503'

const h2 = { fontSize: '0.95rem', fontWeight: 800, color: '#1A1830', marginTop: 40, marginBottom: 10, paddingBottom: 8, borderBottom: '2px solid #E8E4F8' }
const h3 = { fontSize: '0.88rem', fontWeight: 700, color: '#534AB7', marginTop: 24, marginBottom: 8 }
const p  = { fontSize: '0.9rem', color: '#4B4770', lineHeight: 1.8, marginBottom: 10 }
const li = { fontSize: '0.9rem', color: '#4B4770', lineHeight: 1.8, marginBottom: 4 }

function CommissionTable({ rows }) {
  return (
    <div style={{ overflowX: 'auto', marginTop: 12, marginBottom: 16 }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.88rem' }}>
        <thead>
          <tr style={{ background: '#F8F7FF' }}>
            {['Paket', 'Harga', 'Komisi', '%'].map(h => (
              <th key={h} style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 700, color: '#1A1830', borderBottom: '2px solid #E8E4F8', whiteSpace: 'nowrap' }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r.plan} style={{ background: i % 2 === 0 ? '#fff' : '#FAFAFA' }}>
              <td style={{ padding: '10px 14px', fontWeight: 700, color: '#1A1830', borderBottom: '1px solid #E8E4F8' }}>{r.plan}</td>
              <td style={{ padding: '10px 14px', color: '#4B4770', borderBottom: '1px solid #E8E4F8' }}>{r.price}</td>
              <td style={{ padding: '10px 14px', fontWeight: 700, color: '#534AB7', borderBottom: '1px solid #E8E4F8' }}>{r.commission}</td>
              <td style={{ padding: '10px 14px', color: '#4B4770', borderBottom: '1px solid #E8E4F8' }}>{r.pct}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function AffiliateTermsPage() {
  return (
    <>
      <Helmet>
        <title>Kebijakan Afiliasi & Mitra | BetterPOS</title>
        <meta name="description" content="Ketentuan program afiliasi dan sales partner BetterPOS — komisi, cara pembayaran, dan aturan kemitraan." />
        <link rel="canonical" href="https://betterpos.my.id/kebijakan-mitra" />
      </Helmet>

      <Navbar />

      <div style={{ background: 'var(--bg-dark)', paddingTop: 100, paddingBottom: 72 }}>
        <div className="container" style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Legal</p>
          <h1 className="heading-lg" style={{ color: 'var(--text-light)', marginTop: 12 }}>Kebijakan Afiliasi & Mitra</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginTop: 10 }}>
            Terakhir diperbarui: Juli 2026 · Program Affiliate dan Sales Partner BetterPOS
          </p>
        </div>
      </div>

      <div style={{ background: '#fff', padding: '56px 24px 80px' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>

          <p style={p}>
            Program kemitraan BetterPOS terdiri dari dua jenjang: <strong>Program Affiliate</strong> (otomatis untuk semua pembeli) dan <strong>Program Sales Partner</strong> (untuk mitra aktif yang mendaftar). Dengan berpartisipasi dalam program ini, Anda menyetujui ketentuan berikut.
          </p>

          {/* AFFILIATE */}
          <h2 style={h2}>Bagian A — Program Affiliate (AFF-xxxx)</h2>

          <h3 style={h3}>Siapa yang Termasuk</h3>
          <p style={p}>
            Setiap pembeli BetterPOS secara otomatis menjadi anggota program affiliate sejak lisensi diaktifkan. Tidak perlu mendaftar.
          </p>

          <h3 style={h3}>Kode Affiliate</h3>
          <p style={p}>
            Kode unik (format <strong>AFF-xxxx</strong>) tersedia di aplikasi BetterPOS → Settings → License. Kode aktif sejak hari pertama aktivasi dan tidak memiliki masa kedaluwarsa selama tidak ada pelanggaran ketentuan.
          </p>

          <h3 style={h3}>Komisi Affiliate</h3>
          <CommissionTable rows={[
            { plan: 'Essential', price: 'Rp 2.000.000', commission: 'Rp 300.000', pct: '15%' },
            { plan: 'Plus',      price: 'Rp 3.000.000', commission: 'Rp 450.000', pct: '15%' },
          ]} />

          {/* SALES PARTNER */}
          <h2 style={h2}>Bagian B — Program Sales Partner (SAL-xxxx)</h2>

          <h3 style={h3}>Cara Bergabung</h3>
          <p style={p}>
            Hubungi kami via WhatsApp dan sampaikan minat Anda bergabung sebagai Sales Partner. Setelah peninjauan dan persetujuan tim BetterPOS, Anda akan menerima kode partner unik (format <strong>SAL-xxxx</strong>).
          </p>

          <h3 style={h3}>Komisi Sales Partner</h3>
          <CommissionTable rows={[
            { plan: 'Essential', price: 'Rp 2.000.000', commission: 'Rp 400.000', pct: '20%' },
            { plan: 'Plus',      price: 'Rp 3.000.000', commission: 'Rp 600.000', pct: '20%' },
          ]} />
          <p style={p}>
            <strong>Bonus</strong>: Komisi tambahan <strong>Rp 500.000</strong> setelah berhasil mendatangkan 5 pelanggan pertama yang dikonfirmasi.
          </p>

          {/* PEMBAYARAN */}
          <h2 style={h2}>Bagian C — Pembayaran Komisi</h2>
          <ul style={{ paddingLeft: 20, margin: '0 0 12px' }}>
            <li style={li}>Komisi dibayarkan dalam <strong>7 (tujuh) hari kerja</strong> setelah pembayaran pembeli dikonfirmasi.</li>
            <li style={li}>Pembayaran dilakukan via transfer bank ke rekening yang telah didaftarkan.</li>
            <li style={li}>Tidak ada jumlah minimum untuk pencairan. Setiap penjualan langsung dibayar.</li>
            <li style={li}>Bukti transfer dikirimkan via WhatsApp.</li>
          </ul>

          {/* KETENTUAN & LARANGAN */}
          <h2 style={h2}>Bagian D — Ketentuan & Larangan</h2>
          <p style={p}>Sebagai anggota program kemitraan, Anda <strong>tidak boleh</strong>:</p>
          <ul style={{ paddingLeft: 20, margin: '0 0 12px' }}>
            <li style={li}>Menggunakan kode afiliasi/partner Anda untuk pembelian sendiri (self-referral).</li>
            <li style={li}>Menjual, memindahtangankan, atau membagikan kode kepada pihak lain untuk diklaim sebagai kode mereka.</li>
            <li style={li}>Membuat klaim palsu atau menyesatkan tentang BetterPOS (fitur, harga, jaminan yang tidak kami berikan).</li>
            <li style={li}>Melakukan spam atau promosi yang mengganggu di grup, forum, atau media sosial.</li>
          </ul>

          {/* PENGAKHIRAN */}
          <h2 style={h2}>Bagian E — Pengakhiran Kemitraan</h2>
          <p style={p}>
            PT. Rimba Intan berhak mengakhiri kemitraan tanpa pemberitahuan sebelumnya jika ditemukan pelanggaran terhadap ketentuan di atas.
          </p>
          <ul style={{ paddingLeft: 20, margin: '0 0 12px' }}>
            <li style={li}>Komisi dari penjualan yang sudah dikonfirmasi sebelum pengakhiran tetap dibayarkan.</li>
            <li style={li}>Komisi dari penjualan yang belum dikonfirmasi pada saat pengakhiran akan hangus.</li>
            <li style={li}>Kode afiliasi/partner dinonaktifkan sejak tanggal pengakhiran.</li>
          </ul>

          <div style={{ marginTop: 48, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href={WA_PARTNER} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-block', padding: '12px 20px', background: '#534AB7', color: '#fff', borderRadius: 10, fontSize: '0.88rem', fontWeight: 700 }}>
              Daftar Sales Partner →
            </a>
            <a href={WA} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-block', padding: '12px 20px', background: '#F8F7FF', color: '#534AB7', borderRadius: 10, fontSize: '0.88rem', fontWeight: 700, border: '1px solid #E8E4F8' }}>
              Ada pertanyaan? Chat kami
            </a>
          </div>

        </div>
      </div>

      <Footer />
    </>
  )
}
