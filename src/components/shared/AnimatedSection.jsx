import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function AnimatedSection({ children, className = '', delay = 0, direction = 'up', style = {} }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px 0px' })

  const offsets = { up: [30, 0], down: [-30, 0], left: [0, 40], right: [0, -40] }
  const [y, x] = offsets[direction] ?? offsets.up

  return (
    <motion.div
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0, y, x }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
