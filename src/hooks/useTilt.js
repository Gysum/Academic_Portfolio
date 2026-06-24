import { useRef } from 'react'
import { useMotionValue, useSpring, useTransform } from 'framer-motion'

// Gives any card a subtle 3D tilt that tracks the cursor, plus a glow position.
// Use: const tilt = useTilt(); <motion.div ref={tilt.ref} style={tilt.style} onMouseMove={tilt.onMouseMove} onMouseLeave={tilt.onMouseLeave} />
export default function useTilt(maxDeg = 8) {
  const ref = useRef(null)
  const x = useMotionValue(0.5)
  const y = useMotionValue(0.5)

  const rotateX = useSpring(useTransform(y, [0, 1], [maxDeg, -maxDeg]), { stiffness: 200, damping: 20 })
  const rotateY = useSpring(useTransform(x, [0, 1], [-maxDeg, maxDeg]), { stiffness: 200, damping: 20 })
  const glowX = useTransform(x, [0, 1], ['0%', '100%'])
  const glowY = useTransform(y, [0, 1], ['0%', '100%'])

  function onMouseMove(e) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left) / rect.width)
    y.set((e.clientY - rect.top) / rect.height)
  }

  function onMouseLeave() {
    x.set(0.5)
    y.set(0.5)
  }

  return {
    ref,
    onMouseMove,
    onMouseLeave,
    style: { rotateX, rotateY, transformPerspective: 800 },
    glowX,
    glowY,
  }
}
