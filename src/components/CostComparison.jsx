import AnimatedSection from './shared/AnimatedSection'
import CountUp from './shared/CountUp'

const rows = [
  { name: 'Moka / Majoo',    y1: 3600000,  y3: 10800000, y5: 18000000, highlight: false },
  { name: 'Kasir Pintar',    y1: 1800000,  y3: 5400000,  y5: 9000000,  highlight: false },
  { name: 'BetterPOS Essential', y1: 2000000, y3: 2000000, y5: 2000000, highlight: true },
  { name: 'BetterPOS Plus',     y1: 3000000, y3: 3000000, y5: 3000000, highlight: true },
]

function fmt(n) { return 'Rp ' + (n / 1000000).toLocaleString('id-ID') + ' jt' }

export default function CostComparison() {
  return (
    <section className="section section--light" id="biaya">
      <div className="container">
        <AnimatedSection className="text-center">
          <p className="label text-muted-dark">Perbandingan Biaya</p>
          <h2 className="heading-lg" style={{ color: 'var(--text-dark)', marginTop: 10 }}>
            Berapa yang sudah kamu bayar<br />ke aplikasi kasir?
          </h2>
          <p className="body-lg text-muted-dark" style={{ marginTop: 16, maxWidth: 520, margin: '16px auto 0' }}>
            Langganan terasa murah per bulan — tapi dijumlahkan dalam 5 tahun, angkanya mengejutkan.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15} style={{ marginTop: 56 }}>
          <div style={{ overflowX: 'auto', width: '100%', WebkitOverflowScrolling: 'touch' }}>
          <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 0, minWidth: 560 }}>
            <thead>
              <tr>
                <th style={{ padding: '14px 20px', textAlign: 'left', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-mid)', borderBottom: '2px solid var(--border-light)' }}>Aplikasi Kasir</th>
                {['Tahun 1', 'Tahun 3', 'Tahun 5'].map(h => (
                  <th key={h} style={{ padding: '14px 20px', textAlign: 'right', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-mid)', borderBottom: '2px solid var(--border-light)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.name} style={{
                  background: row.highlight ? 'rgba(83,74,183,0.06)' : i % 2 === 0 ? 'transparent' : 'rgba(0,0,0,0.02)',
                  outline: row.highlight ? '2px solid rgba(83,74,183,0.2)' : 'none',
                  outlineOffset: row.highlight ? '-1px' : 0,
                }}>
                  <td style={{ padding: '18px 20px', fontWeight: row.highlight ? 800 : 600, color: row.highlight ? 'var(--purple)' : 'var(--text-dark)', borderBottom: '1px solid var(--border-light)', borderRadius: i === rows.length - 1 ? '0 0 0 12px' : 0 }}>
                    {row.name}
                    {row.highlight && <span style={{ marginLeft: 10, fontSize: '0.72rem', background: 'var(--purple)', color: '#fff', padding: '2px 8px', borderRadius: 999, fontWeight: 600 }}>Sekali Bayar</span>}
                  </td>
                  {[row.y1, row.y3, row.y5].map((val, j) => (
                    <td key={j} style={{ padding: '18px 20px', textAlign: 'right', fontWeight: row.highlight ? 800 : 500, color: row.highlight ? 'var(--purple)' : val > 5000000 ? '#DC2626' : 'var(--text-dark)', borderBottom: '1px solid var(--border-light)', fontSize: row.highlight ? '1.05rem' : '1rem' }}>
                      {row.highlight
                        ? <CountUp to={val / 1000000} prefix="Rp " suffix=" jt" duration={1.6} />
                        : <CountUp to={val / 1000000} prefix="Rp " suffix=" jt" duration={1.4} />
                      }
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="text-center" style={{ marginTop: 40 }}>
          <p style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--text-dark)' }}>
            Bayar sekali.{' '}
            <span style={{ color: 'var(--purple)' }}>Tidak pernah naik.</span>{' '}
            <span style={{ color: 'var(--purple)' }}>Tidak pernah diblokir.</span>
          </p>
          <p className="body-sm text-muted-dark" style={{ marginTop: 8 }}>
            *Estimasi berdasarkan harga langganan publik kompetitor per Januari 2026
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
