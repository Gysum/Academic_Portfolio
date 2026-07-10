import { useEffect, useState } from 'react'
import { NAV_LINKS, PROFILE } from '../utils/constants'
import { FiMenu, FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#home')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-30% 0px -60% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    setActive(href)
    setOpen(false)
    
    // Tiny delay to let the mobile menu start closing before triggering the scroll thread
    setTimeout(() => {
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    }, 80)
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 py-5 ${
        scrolled ? 'bg-[#0D0D0D]/90 border-b border-white/5 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 md:px-8 flex items-center justify-between">
        {/* Name / Brand on left */}
        <a href="#home" className="text-lg sm:text-xl font-bold tracking-tight text-white select-none hover:opacity-80 transition-opacity">
          {PROFILE.name}<span className="text-[#00F29D]">.</span>
        </a>

        {/* Centered navigation links */}
        <ul className="hidden md:flex items-center gap-8 font-mono text-xs">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="relative py-1">
              <a
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`transition-colors duration-200 ${
                  active === link.href ? 'text-[#00F29D] font-bold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.label}
              </a>
              {active === link.href && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00F29D] rounded-full" />
              )}
            </li>
          ))}
        </ul>

        {/* Hire me pill & Hamburger toggle on the right */}
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${PROFILE.email}`}
            onClick={(e) => {
              e.preventDefault()
              window.open(`mailto:${PROFILE.email}`, '_blank')
            }}
            className="bg-[#00F29D] text-black font-semibold text-[10px] sm:text-xs md:text-sm px-4 py-1.5 sm:px-6 sm:py-2 rounded-full hover:bg-[#00d187] transition-all duration-300 shadow-[0_0_15px_rgba(0,242,157,0.15)] hover:shadow-[0_0_25px_rgba(0,242,157,0.3)]"
          >
            Hire me
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white hover:text-[#00F29D] p-1.5 transition-colors cursor-pointer rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10 flex items-center justify-center"
            aria-label="Toggle Menu"
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="absolute top-full inset-x-0 bg-[#0D0D0D]/95 border-b border-white/5 backdrop-blur-md md:hidden py-6 px-8 flex flex-col gap-4 font-mono text-[11px] uppercase tracking-wider z-30"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`transition-colors duration-200 py-1 ${
                  active === link.href ? 'text-[#00F29D] font-bold' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

