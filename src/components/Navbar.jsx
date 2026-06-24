import { useEffect, useState } from 'react'
import { NAV_LINKS, PROFILE } from '../utils/constants'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('#home')

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

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 py-5 ${
        scrolled ? 'bg-[#0D0D0D]/90 border-b border-white/5 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 md:px-8 flex items-center justify-between">
        {/* Name / Brand on left */}
        <a href="#home" className="text-xl font-bold tracking-tight text-white select-none hover:opacity-80 transition-opacity">
          {PROFILE.name}<span className="text-[#00F29D]">.</span>
        </a>

        {/* Centered navigation links */}
        <ul className="hidden md:flex items-center gap-8 font-mono text-xs">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="relative py-1">
              <a
                href={link.href}
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

        {/* Hire me pill on the right */}
        <div>
          <a
            href="#contacts"
            className="bg-[#00F29D] text-black font-semibold text-xs md:text-sm px-6 py-2 rounded-full hover:bg-[#00d187] transition-all duration-300 shadow-[0_0_15px_rgba(0,242,157,0.15)] hover:shadow-[0_0_25px_rgba(0,242,157,0.3)]"
          >
            Hire me
          </a>
        </div>
      </nav>
    </header>
  )
}

