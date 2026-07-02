export default function Badge({ children, variant = 'purple' }) {
  const styles = {
    purple: { background: 'rgba(83,74,183,0.18)', color: '#A89EF0', border: '1px solid rgba(83,74,183,0.3)' },
    gold:   { background: 'rgba(245,166,35,0.15)', color: '#F5A623', border: '1px solid rgba(245,166,35,0.3)' },
    green:  { background: 'rgba(29,158,117,0.15)', color: '#2DC98A', border: '1px solid rgba(29,158,117,0.3)' },
    muted:  { background: 'rgba(255,255,255,0.07)', color: '#8B85A8', border: '1px solid rgba(255,255,255,0.1)' },
  }
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '5px 14px', borderRadius: 999,
      fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.04em',
      ...styles[variant]
    }}>
      {children}
    </span>
  )
}
