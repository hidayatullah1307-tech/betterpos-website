import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { posts } from '../blog/index.js'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const hasToken = () => !!localStorage.getItem('betterpos_gh_pat')

export default function BlogPage() {
  const canEdit = hasToken()
  return (
    <>
      <Helmet>
        <title>Blog BetterPOS | Tips &amp; Panduan untuk Pemilik Toko</title>
        <meta name="description" content="Artikel dan tips seputar manajemen toko, kasir digital, pencatatan stok, dan keuangan untuk pemilik usaha retail Indonesia." />
        <meta property="og:title" content="Blog BetterPOS | Tips & Panduan untuk Pemilik Toko" />
        <meta property="og:description" content="Artikel dan tips seputar manajemen toko, kasir digital, pencatatan stok, dan keuangan untuk pemilik usaha retail Indonesia." />
        <meta property="og:url" content="https://betterpos.my.id/blog" />
        <link rel="canonical" href="https://betterpos.my.id/blog" />
      </Helmet>
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
                <div key={post.slug} style={{ position: 'relative', borderBottom: '1px solid var(--border-dark)' }}>
                  <Link to={`/blog/${post.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                    <div
                      style={{ padding: '28px 0', paddingRight: canEdit ? 72 : 0, transition: 'opacity 0.15s' }}
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
                  {canEdit && (
                    <Link to={`/new-post?edit=${post.slug}`}
                      style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', padding: '7px 14px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.05)', color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap' }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--text-light)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}>
                      Edit
                    </Link>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}
