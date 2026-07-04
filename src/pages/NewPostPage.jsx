import { useState, useEffect, useRef } from 'react'

const REPO = 'hidayatullah1307-tech/betterpos-website'
const PAT_KEY = 'betterpos_gh_pat'

function slugify(str) {
  return str.toLowerCase().trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

export default function NewPostPage() {
  const [pat, setPat] = useState(() => localStorage.getItem(PAT_KEY) || '')
  const [title, setTitle] = useState('')
  const [excerpt, setExcerpt] = useState('')
  const [tags, setTags] = useState('')
  const [content, setContent] = useState('')
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const [showPat, setShowPat] = useState(false)
  const [uploading, setUploading] = useState(false)
  const fileRef = useRef(null)
  const textareaRef = useRef(null)

  useEffect(() => {
    if (pat) localStorage.setItem(PAT_KEY, pat)
  }, [pat])

  async function uploadImage(file) {
    if (!pat) { setError('Masukkan GitHub Token dulu sebelum upload gambar.'); return }
    setUploading(true)
    setError('')

    try {
      const ext = file.name.split('.').pop().toLowerCase()
      const safeName = `${Date.now()}-${slugify(file.name.replace(/\.[^.]+$/, ''))}.${ext}`
      const arrayBuffer = await file.arrayBuffer()
      const bytes = new Uint8Array(arrayBuffer)
      let binary = ''
      bytes.forEach(b => binary += String.fromCharCode(b))
      const encoded = btoa(binary)

      const res = await fetch(`https://api.github.com/repos/${REPO}/contents/public/blog-images/${safeName}`, {
        method: 'PUT',
        headers: { 'Authorization': `Bearer ${pat}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: `blog: upload gambar ${safeName}`, content: encoded }),
      })
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.message || `Error ${res.status}`)
      }

      const imageMarkup = `\n\n![${file.name}](/blog-images/${safeName})\n\n`
      const textarea = textareaRef.current
      const pos = textarea ? textarea.selectionStart : content.length
      setContent(prev => prev.slice(0, pos) + imageMarkup + prev.slice(pos))
    } catch (e) {
      setError('Gagal upload gambar: ' + e.message)
    } finally {
      setUploading(false)
      if (fileRef.current) fileRef.current.value = ''
    }
  }

  async function publish() {
    if (!pat) { setError('Masukkan GitHub Token dulu.'); return }
    if (!title.trim()) { setError('Judul tidak boleh kosong.'); return }
    if (!content.trim()) { setError('Isi artikel tidak boleh kosong.'); return }

    setStatus('publishing')
    setError('')

    const slug = slugify(title)
    const date = new Date().toISOString().slice(0, 10)
    const tagArr = tags.split(',').map(t => t.trim()).filter(Boolean)

    const fileContent = `export default ${JSON.stringify({ slug, title: title.trim(), date, excerpt: excerpt.trim(), tags: tagArr, content: content.trim() }, null, 2)}\n`
    const encoded = btoa(unescape(encodeURIComponent(fileContent)))

    try {
      const res = await fetch(`https://api.github.com/repos/${REPO}/contents/src/blog/posts/${slug}.js`, {
        method: 'PUT',
        headers: { 'Authorization': `Bearer ${pat}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: `blog: tambah artikel "${title.trim()}"`, content: encoded }),
      })
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.message || `Error ${res.status}`)
      }
      setStatus('success')
      setTitle(''); setExcerpt(''); setTags(''); setContent('')
    } catch (e) {
      setError(e.message)
      setStatus('idle')
    }
  }

  const input = {
    width: '100%', padding: '12px 16px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.12)',
    background: 'rgba(255,255,255,0.05)', color: '#F5F0FF', fontSize: '0.95rem',
    fontFamily: 'inherit', outline: 'none',
  }

  return (
    <div style={{ background: '#0D0C1D', minHeight: '100vh', display: 'flex', justifyContent: 'center', padding: '48px 24px' }}>
      <div style={{ width: '100%', maxWidth: 720 }}>

        <div style={{ marginBottom: 40 }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7B72D4', marginBottom: 10 }}>BetterPOS</p>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#F5F0FF', letterSpacing: '-0.03em' }}>Tulis Artikel Baru</h1>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

          <div>
            <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#8B85A8', marginBottom: 8, letterSpacing: '0.04em', textTransform: 'uppercase' }}>GitHub Token</label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPat ? 'text' : 'password'}
                value={pat}
                onChange={e => setPat(e.target.value)}
                placeholder="github_pat_xxxxxxxxxxxx"
                style={{ ...input, paddingRight: 48 }}
              />
              <button onClick={() => setShowPat(v => !v)}
                style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#8B85A8', fontSize: '0.9rem' }}>
                {showPat ? '🙈' : '👁'}
              </button>
            </div>
            <p style={{ fontSize: '0.75rem', color: 'rgba(139,133,168,0.6)', marginTop: 6 }}>Disimpan di browser. Perlu permission: Contents (Read & Write).</p>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#8B85A8', marginBottom: 8, letterSpacing: '0.04em', textTransform: 'uppercase' }}>Judul</label>
            <input type="text" value={title} onChange={e => setTitle(e.target.value)}
              placeholder="Contoh: Tips Kelola Stok Toko Baju" style={input} />
            {title && <p style={{ fontSize: '0.75rem', color: 'rgba(139,133,168,0.5)', marginTop: 5 }}>URL: /blog/{slugify(title)}</p>}
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#8B85A8', marginBottom: 8, letterSpacing: '0.04em', textTransform: 'uppercase' }}>Deskripsi Singkat</label>
            <input type="text" value={excerpt} onChange={e => setExcerpt(e.target.value)}
              placeholder="1–2 kalimat yang muncul di daftar blog" style={input} />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#8B85A8', marginBottom: 8, letterSpacing: '0.04em', textTransform: 'uppercase' }}>Tags</label>
            <input type="text" value={tags} onChange={e => setTags(e.target.value)}
              placeholder="kasir, stok, umkm (pisahkan dengan koma)" style={input} />
          </div>

          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <label style={{ fontSize: '0.78rem', fontWeight: 700, color: '#8B85A8', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                Isi Artikel
                <span style={{ fontWeight: 400, textTransform: 'none', marginLeft: 8, color: 'rgba(139,133,168,0.6)' }}>— baris kosong = paragraf baru, ## = judul bagian</span>
              </label>
              <button
                onClick={() => fileRef.current?.click()}
                disabled={uploading}
                style={{
                  padding: '6px 14px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.15)',
                  background: uploading ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.07)',
                  color: uploading ? '#8B85A8' : '#F5F0FF', fontSize: '0.8rem', fontWeight: 600,
                  cursor: uploading ? 'not-allowed' : 'pointer', fontFamily: 'inherit', whiteSpace: 'nowrap',
                }}>
                {uploading ? 'Mengupload...' : '+ Upload Gambar'}
              </button>
            </div>
            <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }}
              onChange={e => e.target.files[0] && uploadImage(e.target.files[0])} />
            <textarea ref={textareaRef} value={content} onChange={e => setContent(e.target.value)}
              rows={18}
              placeholder={`Tulis artikel di sini...\n\nBisa beberapa paragraf.\n\n## Judul Bagian\n\nLanjutkan isi di sini.\n\nGunakan tombol "Upload Gambar" untuk menyisipkan foto.`}
              style={{ ...input, resize: 'vertical', lineHeight: 1.7 }}
            />
          </div>

          {error && (
            <div style={{ background: 'rgba(163,45,45,0.15)', border: '1px solid rgba(163,45,45,0.4)', borderRadius: 8, padding: '12px 16px', color: '#FCA5A5', fontSize: '0.9rem' }}>
              {error}
            </div>
          )}

          {status === 'success' && (
            <div style={{ background: 'rgba(29,158,117,0.15)', border: '1px solid rgba(29,158,117,0.4)', borderRadius: 8, padding: '16px', color: '#6EE7B7', fontSize: '0.9rem' }}>
              <strong>Artikel berhasil dipublish!</strong> Vercel sedang deploy — tunggu 1–2 menit lalu cek di{' '}
              <a href="/blog" style={{ color: '#6EE7B7' }}>betterpos.my.id/blog</a>.
            </div>
          )}

          <button onClick={publish} disabled={status === 'publishing'}
            style={{
              padding: '14px 32px', borderRadius: 10, border: 'none', cursor: status === 'publishing' ? 'not-allowed' : 'pointer',
              background: status === 'publishing' ? 'rgba(83,74,183,0.5)' : '#534AB7',
              color: '#fff', fontSize: '1rem', fontWeight: 700, fontFamily: 'inherit',
              transition: 'background 0.2s', alignSelf: 'flex-start',
            }}>
            {status === 'publishing' ? 'Mempublish...' : 'Publish Artikel'}
          </button>
        </div>
      </div>
    </div>
  )
}
