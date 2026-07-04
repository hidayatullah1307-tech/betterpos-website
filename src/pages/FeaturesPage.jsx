import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { requirements, features, allFeatures, faq } from '../data/featuresPage.js'

const REPO = 'hidayatullah1307-tech/betterpos-website'
const PAT_KEY = 'betterpos_gh_pat'

function useAdmin() {
  return !!localStorage.getItem(PAT_KEY)
}

function FeatureCard({ feature, isAdmin }) {
  const [imgSrc, setImgSrc] = useState(`/feature-images/${feature.id}.png`)
  const [hasImg, setHasImg] = useState(true)
  const [uploading, setUploading] = useState(false)
  const fileRef = useRef(null)
  const pat = localStorage.getItem(PAT_KEY)

  async function uploadImage(file) {
    setUploading(true)
    try {
      const encoded = await new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onload = () => resolve(reader.result.split(',')[1])
        reader.onerror = reject
        reader.readAsDataURL(file)
      })

      const path = `public/feature-images/${feature.id}.png`
      const checkRes = await fetch(`https://api.github.com/repos/${REPO}/contents/${path}`, {
        headers: { 'Authorization': `Bearer ${pat}` }
      })
      const body = { message: `fitur: upload gambar ${feature.id}`, content: encoded }
      if (checkRes.ok) {
        const existing = await checkRes.json()
        body.sha = existing.sha
      } else {
        await checkRes.text()
      }

      const res = await fetch(`https://api.github.com/repos/${REPO}/contents/${path}`, {
        method: 'PUT',
        headers: { 'Authorization': `Bearer ${pat}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (!res.ok) {
        const errData = await res.json().catch(() => ({}))
        throw new Error(errData.message || `Upload gagal (${res.status})`)
      }
      setImgSrc(`/feature-images/${feature.id}.png?t=${Date.now()}`)
      setHasImg(true)
    } catch (e) {
      alert('Gagal upload: ' + e.message)
    } finally {
      setUploading(false)
      if (fileRef.current) fileRef.current.value = ''
    }
  }

  return (
    <div style={{
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 14,
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <div style={{ position: 'relative', background: 'rgba(83,74,183,0.08)', minHeight: 180, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {hasImg ? (
          <img
            src={imgSrc}
            alt={feature.title}
            onError={() => setHasImg(false)}
            style={{ width: '100%', display: 'block', maxHeight: 260, objectFit: 'cover' }}
          />
        ) : (
          <div style={{ padding: 32, textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', marginBottom: 8, opacity: 0.3 }}>🖼</div>
            <p style={{ fontSize: '0.75rem', color: 'rgba(139,133,168,0.4)', fontWeight: 600 }}>Gambar belum ditambahkan</p>
          </div>
        )}
        {isAdmin && (
          <>
            <button
              onClick={() => fileRef.current?.click()}
              disabled={uploading}
              style={{
                position: 'absolute', bottom: 10, right: 10,
                padding: '5px 12px', borderRadius: 6, border: '1px solid rgba(255,255,255,0.2)',
                background: 'rgba(13,12,29,0.8)', color: '#F5F0FF', fontSize: '0.72rem',
                fontWeight: 600, cursor: uploading ? 'not-allowed' : 'pointer', fontFamily: 'inherit',
              }}>
              {uploading ? 'Uploading...' : hasImg ? 'Ganti Gambar' : 'Upload Gambar'}
            </button>
            <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }}
              onChange={e => e.target.files[0] && uploadImage(e.target.files[0])} />
          </>
        )}
      </div>

      <div style={{ padding: '20px 22px 24px' }}>
        <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#F5F0FF', letterSpacing: '-0.01em', marginBottom: 10, lineHeight: 1.3 }}>
          {feature.title}
        </h3>
        <p style={{ fontSize: '0.9rem', color: '#8B85A8', lineHeight: 1.7 }}>
          {feature.description}
        </p>
      </div>
    </div>
  )
}

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          width: '100%', textAlign: 'left', padding: '20px 0', background: 'none', border: 'none',
          cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16,
        }}>
        <span style={{ fontSize: '1rem', fontWeight: 700, color: '#F5F0FF', lineHeight: 1.4 }}>{q}</span>
        <span style={{ fontSize: '1.2rem', color: '#7B72D4', flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s', display: 'inline-block' }}>+</span>
      </button>
      {open && (
        <p style={{ fontSize: '0.92rem', color: '#8B85A8', lineHeight: 1.75, paddingBottom: 20 }}>
          {a}
        </p>
      )}
    </div>
  )
}

export default function FeaturesPage() {
  const isAdmin = useAdmin()

  return (
    <>
      <Navbar />
      <div style={{ background: '#0D0C1D', minHeight: '100vh', paddingTop: 100, paddingBottom: 80 }}>

        {/* Hero */}
        <div className="container" style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', marginBottom: 80 }}>
          <p style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7B72D4', marginBottom: 14 }}>Fitur Lengkap</p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, color: '#F5F0FF', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 20 }}>
            Semua yang Ada<br />di BetterPOS
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#8B85A8', lineHeight: 1.7, maxWidth: 560 }}>
            Dari kasir harian sampai laporan laba, dari manajemen stok sampai kontrol akses staf — semuanya ada, tanpa biaya bulanan.
          </p>
        </div>

        {/* Requirements */}
        <div style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '60px 0', marginBottom: 80 }}>
          <div className="container" style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px' }}>
            <p style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7B72D4', marginBottom: 12 }}>Spesifikasi</p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#F5F0FF', letterSpacing: '-0.02em', marginBottom: 36 }}>Kebutuhan Perangkat</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>

              {/* PC Requirements */}
              <div style={{ background: 'rgba(83,74,183,0.08)', border: '1px solid rgba(83,74,183,0.2)', borderRadius: 14, padding: 28 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22 }}>
                  <span style={{ fontSize: '1.3rem' }}>💻</span>
                  <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#F5F0FF' }}>PC / Laptop</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0, marginBottom: 8, padding: '0 0 8px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'rgba(139,133,168,0.5)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Komponen</span>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'rgba(139,133,168,0.5)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Minimum</span>
                    <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'rgba(139,133,168,0.5)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Disarankan</span>
                  </div>
                  {requirements.pc.map((r, i) => (
                    <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0, padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                      <span style={{ fontSize: '0.82rem', color: '#8B85A8', fontWeight: 600 }}>{r.label}</span>
                      <span style={{ fontSize: '0.82rem', color: '#F5F0FF' }}>{r.min}</span>
                      <span style={{ fontSize: '0.82rem', color: '#7B72D4' }}>{r.rec}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 20, padding: '12px 14px', background: 'rgba(245,166,35,0.08)', border: '1px solid rgba(245,166,35,0.2)', borderRadius: 8 }}>
                  <p style={{ fontSize: '0.8rem', color: '#F5A623', lineHeight: 1.6 }}>
                    Tips: {requirements.pcTip}
                  </p>
                </div>
              </div>

              {/* Android Requirements */}
              <div style={{ background: 'rgba(45,201,138,0.06)', border: '1px solid rgba(45,201,138,0.18)', borderRadius: 14, padding: 28 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 22 }}>
                  <span style={{ fontSize: '1.3rem' }}>📱</span>
                  <h3 style={{ fontSize: '1rem', fontWeight: 800, color: '#F5F0FF' }}>Android (Aplikasi Owner)</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginBottom: 20 }}>
                  {requirements.android.map((r, i) => (
                    <div key={i} style={{ display: 'flex', flexDirection: 'column', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                      <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'rgba(139,133,168,0.5)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 4 }}>{r.label}</span>
                      <span style={{ fontSize: '0.88rem', color: '#F5F0FF' }}>{r.value}</span>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: '0.82rem', color: '#8B85A8', lineHeight: 1.65 }}>{requirements.androidNote}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="container" style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px', marginBottom: 80 }}>
          <p style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7B72D4', marginBottom: 12 }}>Fitur Unggulan</p>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#F5F0FF', letterSpacing: '-0.02em', marginBottom: 36 }}>Yang Membedakan BetterPOS</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
            {features.map(f => (
              <FeatureCard key={f.id} feature={f} isAdmin={isAdmin} />
            ))}
          </div>
        </div>

        {/* All Features List */}
        <div style={{ background: 'rgba(255,255,255,0.02)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '60px 0', marginBottom: 80 }}>
          <div className="container" style={{ maxWidth: 1100, margin: '0 auto', padding: '0 24px' }}>
            <p style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7B72D4', marginBottom: 12 }}>Daftar Lengkap</p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#F5F0FF', letterSpacing: '-0.02em', marginBottom: 8 }}>
              Semua yang Ada di Dalamnya
            </h2>
            <p style={{ fontSize: '0.92rem', color: '#8B85A8', marginBottom: 40 }}>
              {allFeatures.reduce((acc, cat) => acc + cat.items.length, 0)}+ fitur dalam satu sistem, tanpa biaya bulanan.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 32 }}>
              {allFeatures.map((cat, i) => (
                <div key={i}>
                  <h3 style={{ fontSize: '0.82rem', fontWeight: 800, color: '#7B72D4', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: 14 }}>{cat.category}</h3>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9 }}>
                    {cat.items.map((item, j) => (
                      <li key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                        <span style={{ color: '#534AB7', fontWeight: 700, fontSize: '0.9rem', flexShrink: 0, marginTop: 1 }}>✓</span>
                        <span style={{ fontSize: '0.88rem', color: '#8B85A8', lineHeight: 1.5 }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="container" style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px', marginBottom: 80 }}>
          <p style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#7B72D4', marginBottom: 12 }}>FAQ</p>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#F5F0FF', letterSpacing: '-0.02em', marginBottom: 8 }}>Pertanyaan yang Sering Muncul</h2>
          <p style={{ fontSize: '0.92rem', color: '#8B85A8', marginBottom: 36 }}>Tidak ada yang ketemu? Hubungi kami langsung via WhatsApp.</p>

          <div>
            {faq.map((item, i) => (
              <FaqItem key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="container" style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#F5F0FF', letterSpacing: '-0.02em', marginBottom: 16 }}>Siap coba BetterPOS?</h2>
          <p style={{ fontSize: '0.95rem', color: '#8B85A8', marginBottom: 32 }}>Trial 14 hari, gratis. Tidak perlu kartu kredit.</p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/6282214918503?text=Halo, saya ingin coba BetterPOS"
              target="_blank" rel="noopener noreferrer"
              className="btn btn-gold btn-lg">
              Download Gratis
            </a>
            <Link to="/" className="btn btn-outline-light btn-lg">Kembali ke Beranda</Link>
          </div>
        </div>

      </div>
      <Footer />

      <style>{`
        @media (max-width: 640px) {
          .req-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
