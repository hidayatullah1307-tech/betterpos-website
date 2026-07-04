import { Link } from 'react-router-dom'
import { posts } from '../blog/index.js'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <div style={{ background: 'var(--bg-dark)', minHeight: '100vh', paddingTop: 100, paddingBottom: 80 }}>
        <div className="container" style={{ maxWidth: 760, margin: '0 auto', padding: '0 24px' }}>

          <div style={{ marginBottom: 56 }}>
            <p style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--purple-light)', marginBottom: 12 }}>Blog</p>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: 'var(--text-light)', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              Artikel & Tips<br />untuk Pemilik Toko
            </h1>
          </div>

          {posts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--text-muted)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: 16 }}>✍️</div>
              <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>Belum ada artikel.</p>
              <p style={{ fontSize: '0.9rem', marginTop: 8 }}>Artikel pertama sedang dalam perjalanan.</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {posts.map(post => (
                <Link key={post.slug} to={`/blog/${post.slug}`} style={{ textDecoration: 'none' }}>
                  <div
                    style={{
                      padding: '28px 0',
                      borderBottom: '1px solid var(--border-dark)',
                      transition: 'opacity 0.15s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.75'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 10 }}>
                      {post.tags?.map(tag => (
                        <span key={tag} style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--purple-light)', background: 'rgba(83,74,183,0.15)', padding: '3px 10px', borderRadius: 100 }}>{tag}</span>
                      ))}
                    </div>
                    <h2 style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)', fontWeight: 800, color: 'var(--text-light)', letterSpacing: '-0.02em', marginBottom: 10, lineHeight: 1.3 }}>{post.title}</h2>
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 14 }}>{post.excerpt}</p>
                    <p style={{ fontSize: '0.78rem', color: 'rgba(139,133,168,0.5)', fontWeight: 600 }}>
                      {new Date(post.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}
