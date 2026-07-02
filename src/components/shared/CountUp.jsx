import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'

export default function CountUp({ to, duration = 1.8, prefix = '', suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px 0px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const start = Date.now()
    const tick = () => {
      const elapsed = (Date.now() - start) / 1000
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * to))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, to, duration])

  return (
    <span ref={ref}>
      {prefix}{value.toLocaleString('id-ID')}{suffix}
    </span>
  )
}
