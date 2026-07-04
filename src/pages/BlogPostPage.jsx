import { useParams, Link } from 'react-router-dom'
import { getPost } from '../blog/index.js'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function renderContent(content) {
  if (!content) return null
  return content.trim().split(/\n\n+/).map((block, i) => {
    const trimmed = block.trim()
    if (trimmed.startsWith('## ')) return (
      <h2 key={i} style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', fontWeight: 800, color: 'var(--text-light)', letterSpacing: '-0.02em', marginTop: 40, marginBottom: 16, lineHeight: 1.2 }}>
        {trimmed.slice(3)}
      </h2>
    )
    if (trimmed.startsWith('### ')) return (
      <h3 key={i} style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-light)', marginTop: 28, marginBottom: 12 }}>
        {trimmed.slice(4)}
      </h3>
    )
    const imgMatch = trimmed.match(/^!\[([^\]]*)\]\(([^)]+)\)$/)
    if (imgMatch) return (
      <figure key={i} style={{ margin: '8px 0' }}>
        <img src={imgMatch[2]} alt={imgMatch[1]} style={{ width: '100%', borderRadius: 10, display: 'block', border: '1px solid rgba(255,255,255,0.08)' }} />
        {imgMatch[1] && <figcaption style={{ fontSize: '0.8rem', color: 'rgba(139,133,168,0.6)', marginTop: 8, textAlign: 'center' }}>{imgMatch[1]}</figcaption>}
      </figure>
    )
    return (
      <p key={i} style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: 0 }}>
        {trimmed}
      </p>
    )
  })
}

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = getPost(slug)

  if (!post) return (
    <>
      <Navbar />
      <div style={{ background: 'var(--bg-dark)', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
        <p style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-light)' }}>Artikel tidak ditemukan.</p>
        <Link to="/blog" style={{ color: 'var(--purple-light)', fontWeight: 600, fontSize: '0.9rem' }}>← Kembali ke Blog</Link>
      </div>
      <Footer />
    </>
  )

  return (
    <>
      <Navbar />
      <div style={{ background: 'var(--bg-dark)', minHeight: '100vh', paddingTop: 100, paddingBottom: 80 }}>
        <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 24px' }}>

          <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none', marginBottom: 40, transition: 'color 0.15s' }}
            onMouseEnter={e => e.target.style.color = 'var(--text-light)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>
            ← Blog
          </Link>

          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
            {post.tags?.map(tag => (
              <span key={tag} style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--purple-light)', background: 'rgba(83,74,183,0.15)', padding: '3px 10px', borderRadius: 100 }}>{tag}</span>
            ))}
          </div>

          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: 800, color: 'var(--text-light)', letterSpacing: '-0.03em', lineHeight: 1.15, marginBottom: 16 }}>
            {post.title}
          </h1>

          <p style={{ fontSize: '0.82rem', color: 'rgba(139,133,168,0.55)', fontWeight: 600, marginBottom: 48 }}>
            {new Date(post.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {renderContent(post.content)}
          </div>

          <div style={{ marginTop: 64, paddingTop: 32, borderTop: '1px solid var(--border-dark)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
            <Link to="/blog" style={{ color: 'var(--purple-light)', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>← Artikel lainnya</Link>
            <a href="https://wa.me/6282214918503?text=Halo, saya tertarik dengan BetterPOS"
              target="_blank" rel="noopener noreferrer"
              className="btn btn-purple"
              style={{ padding: '10px 22px', fontSize: '0.9rem' }}>
              Coba BetterPOS
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
