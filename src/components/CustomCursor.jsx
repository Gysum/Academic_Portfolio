import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [cursorText, setCursorText] = useState('')
  const [isHovered, setIsHovered] = useState(false)
  const [isTouch, setIsTouch] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 220, mass: 0.6 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    // Detect touch device to disable custom cursor on mobile
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    setIsTouch(isTouchDevice)
    if (isTouchDevice) return

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleMouseOver = (e) => {
      const target = e.target.closest('[data-cursor]')
      if (target) {
        setCursorText(target.getAttribute('data-cursor') || '')
        setIsHovered(true)
      } else {
        setCursorText('')
        setIsHovered(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [cursorX, cursorY])

  if (isTouch) return null

  return (
    <motion.div
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: '-50%',
        translateY: '-50%',
      }}
      className={`fixed top-0 left-0 z-50 pointer-events-none rounded-full flex items-center justify-center font-mono text-[9px] font-bold tracking-wider uppercase border border-accent-cyan bg-site/5 shadow-[0_0_10px_rgba(61,214,245,0.2)] mix-blend-difference transition-all duration-200 ${
        isHovered ? 'w-16 h-16 bg-accent-cyan/10 border-accent-cyan' : 'w-6 h-6 border-white/40'
      }`}
      animate={{
        scale: isHovered ? 1.25 : 1,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <span className="text-accent-cyan font-bold leading-none select-none text-center">
        {cursorText}
      </span>
    </motion.div>
  )
}
