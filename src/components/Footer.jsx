const WA_NUMBER = '6282214918503'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-dark)', borderTop: '1px solid var(--border-dark)', padding: '40px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 24 }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--text-light)' }}>
              Better<span style={{ color: 'var(--gold)' }}>POS</span>
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: 6 }}>
              © 2025 BetterPOS. Semua hak dilindungi.
            </p>
          </div>

          <nav style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
            {[
              { label: 'Fitur', href: '#fitur' },
              { label: 'Harga', href: '#harga' },
              { label: 'Trial Gratis', href: '#trial' },
              { label: 'Blog', href: 'https://betterpos.hashnode.dev', external: true },
              { label: 'Kontak', href: '#kontak' },
              { label: 'WhatsApp', href: `https://wa.me/${WA_NUMBER}`, external: true },
            ].map(l => (
              <a key={l.label} href={l.href}
                {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600, transition: 'color 0.15s' }}
                onMouseEnter={e => e.target.style.color = 'var(--text-light)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
