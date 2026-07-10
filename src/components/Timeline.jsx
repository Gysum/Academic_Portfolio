import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { WORK_EXPERIENCE } from '../utils/constants'
import { playTick } from '../utils/audio'

export default function Timeline() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section id="work" className="section-wrap pt-20 pb-24 border-t border-white/5 relative overflow-hidden w-full">
      <div className="relative z-10 w-full flex flex-col items-center">
        {/* Centered Title */}
        <div className="text-center mb-16 select-none">
          <span className="font-mono text-xs text-[#00F29D] uppercase tracking-widest">[ Milestones ]</span>
          <h2 className="text-4xl font-mono uppercase tracking-tighter text-white font-bold mt-2">
            Work Experience
          </h2>
        </div>

        {/* Timeline container */}
        <div className="relative w-full max-w-4xl mx-auto before:absolute before:top-0 before:bottom-0 before:left-4 md:before:left-1/2 before:w-[1px] before:bg-zinc-800 before:-translate-x-1/2">
          {WORK_EXPERIENCE.map((item, idx) => {
            const isLeft = idx % 2 === 0

            // Left-side column slides in from left (x: -40), right-side column slides in from right (x: 40)
            const dateSlideX = isMobile ? 40 : (isLeft ? 40 : -40)
            const cardSlideX = isMobile ? 40 : (isLeft ? -40 : 40)

            return (
              <div 
                key={idx} 
                className={`relative w-full flex flex-col md:flex-row items-stretch mb-12 last:mb-0 ${
                  isLeft ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline node dot */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
                  style={{ x: '-50%' }}
                  className="absolute left-4 md:left-1/2 w-3.5 h-3.5 rounded-full bg-zinc-950 border-2 border-[#00F29D] top-6 z-10 shadow-[0_0_8px_rgba(0,242,157,0.4)]" 
                />

                {/* Left/Right Column: Date & Location info */}
                <motion.div
                  initial={{ opacity: 0, x: dateSlideX }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className={`w-full md:w-1/2 pl-12 md:pl-0 pr-0 md:pr-12 flex flex-col justify-start text-left md:text-right ${
                    isLeft ? 'md:items-start md:text-left md:pl-12 md:pr-0' : 'md:items-end md:text-right md:pr-12 md:pl-0'
                  }`}
                >
                  <span className="font-mono text-xs text-zinc-400 font-semibold mt-5">
                    {item.date} {item.location ? `(${item.location})` : ''}
                  </span>
                </motion.div>

                {/* Spacer for MD screens to push detail card to the other side */}
                <div className="hidden md:block w-0" />

                {/* Left/Right Column: Details Card */}
                <motion.div
                  initial={{ opacity: 0, x: cardSlideX, scale: 0.98 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: false, amount: 0.15 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
                  className={`w-full md:w-1/2 pl-12 pr-0 ${
                    isLeft ? 'md:pr-12 md:pl-0' : 'md:pl-12 md:pr-0'
                  }`}
                >
                  <div className="bg-[#131313]/90 border border-white/5 rounded-2xl p-6 hover:border-[#00F29D]/20 transition-all duration-300 relative group overflow-hidden select-none text-left">
                    {/* Hover ambient highlight */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#00F29D]/0 to-[#00F29D]/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                    <h3 className="font-mono text-base font-bold text-white group-hover:text-[#00F29D] transition-colors leading-tight">
                      {item.role}
                    </h3>
                    <span className="font-mono text-xs text-zinc-400 font-semibold block mt-1">
                      {item.company}
                    </span>
                    <p className="text-xs text-zinc-500 font-sans leading-relaxed mt-4">
                      {item.description || item.role}
                    </p>
                  </div>
                </motion.div>

              </div>
            )
          })}
        </div>

        {/* Running Bottom Banner (matching the mockup) */}
        <div className="w-full overflow-hidden border-t border-b border-white/5 py-4 mt-20 select-none bg-[#0D0D0D]">
          <div className="w-max flex gap-12 animate-marquee text-xs font-mono uppercase tracking-widest text-zinc-600 font-bold">
            <div className="flex gap-12 shrink-0">
              <span>Collaboration</span>
              <span>•</span>
              <span>Adaptive</span>
              <span>•</span>
              <span>Team Work</span>
            </div>
            <div className="flex gap-12 shrink-0">
              <span>Collaboration</span>
              <span>•</span>
              <span>Adaptive</span>
              <span>•</span>
              <span>Team Work</span>
            </div>
            <div className="flex gap-12 shrink-0">
              <span>Collaboration</span>
              <span>•</span>
              <span>Adaptive</span>
              <span>•</span>
              <span>Team Work</span>
            </div>
            <div className="flex gap-12 shrink-0">
              <span>Collaboration</span>
              <span>•</span>
              <span>Adaptive</span>
              <span>•</span>
              <span>Team Work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
