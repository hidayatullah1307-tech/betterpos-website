import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const STORAGE_KEY = 'promo_dismissed'

export default function PromoBanner({ visible, onDismiss }) {
  const navigate = useNavigate()

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) onDismiss()
  }, [])

  if (!visible) return null

  function dismiss(e) {
    e.stopPropagation()
    sessionStorage.setItem(STORAGE_KEY, '1')
    onDismiss()
  }

  return (
    <div
      onClick={() => navigate('/kemitraan')}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 101, height: 40,
        background: 'linear-gradient(90deg, #3A31A8 0%, #6C5CE7 50%, #9A6F1A 100%)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', padding: '0 48px', boxSizing: 'border-box',
      }}
    >
      <span className="pbanner-full" style={{ fontSize: '0.82rem', fontWeight: 700, color: '#fff', whiteSpace: 'nowrap', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        💰 Dapat komisi hingga{' '}<strong style={{ color: '#FFD97A' }}>Rp 600K</strong>{' '}per penjualan
        {' '}·{' '}Sudah beli BetterPOS? Kamu sudah jadi mitra.{' '}
        <span style={{ color: '#FFD97A', textDecoration: 'underline', textUnderlineOffset: 3 }}>Lihat Program Mitra →</span>
      </span>
      <span className="pbanner-mobile" style={{ fontSize: '0.82rem', fontWeight: 700, color: '#fff', whiteSpace: 'nowrap', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        💰 Komisi hingga{' '}<strong style={{ color: '#FFD97A' }}>Rp 600K</strong>{' '}per penjualan{' '}
        <span style={{ color: '#FFD97A' }}>· Lihat →</span>
      </span>
      <button
        onClick={dismiss}
        aria-label="Tutup banner"
        style={{
          position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
          background: 'none', border: 'none', color: 'rgba(255,255,255,0.65)',
          fontSize: '1.2rem', cursor: 'pointer', padding: '2px 6px', lineHeight: 1,
          display: 'flex', alignItems: 'center',
        }}
      >×</button>
      <style>{`
        .pbanner-mobile { display: none !important; }
        @media (max-width: 600px) {
          .pbanner-full { display: none !important; }
          .pbanner-mobile { display: inline !important; }
        }
      `}</style>
    </div>
  )
}
