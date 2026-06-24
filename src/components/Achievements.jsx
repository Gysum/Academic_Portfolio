import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiAward, FiChevronDown } from 'react-icons/fi'
import { SectionHeading } from './About'
import { ACHIEVEMENTS } from '../utils/constants'
import { playTick } from '../utils/audio'

function AchievementCard({ item, isFeatured }) {
  const [expanded, setExpanded] = useState(false)

  const toggleExpand = () => {
    setExpanded(!expanded)
    playTick()
  }

  return (
    <div
      onClick={toggleExpand}
      className={`relative rounded-2xl p-7 border overflow-hidden cursor-pointer transition-all duration-300 select-none ${
        isFeatured
          ? 'w-full bg-gradient-to-r from-[#170E30]/70 via-base-surface to-[#0A162B]/70 border-accent-violet/30 hover:border-accent-violet/50 shadow-[0_0_20px_rgba(124,92,255,0.05)]'
          : 'glass glass-hover hover:border-white/20'
      }`}
      data-cursor="click"
    >
      {isFeatured && (
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-violet/20 rounded-full blur-3xl" />
      )}
      <div className="relative z-10">
        <div className="flex items-start justify-between w-full">
          <div className="flex items-start gap-4">
            <div className={`inline-flex items-center justify-center rounded-xl flex-shrink-0 ${
              isFeatured ? 'w-12 h-12 bg-gradient-to-br from-accent-violet to-accent-cyan' : 'w-10 h-10 bg-white/[0.06]'
            }`}>
              <FiAward size={isFeatured ? 22 : 18} className={isFeatured ? 'text-base' : 'text-accent-cyan'} />
            </div>
            <div className="text-left">
              <span className="font-mono text-[10px] uppercase tracking-widest text-accent-cyan block">
                {item.result}
              </span>
              <h3 className={`font-display font-semibold mt-1 ${isFeatured ? 'text-2xl md:text-3xl' : 'text-lg'}`}>
                {item.title}
              </h3>
            </div>
          </div>
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="p-1 rounded-full bg-white/5 border border-white/10 mt-1"
          >
            <FiChevronDown size={16} className="text-ink-muted" />
          </motion.div>
        </div>

        <p className={`text-ink-muted mt-4 leading-relaxed text-left ${isFeatured ? 'text-base max-w-2xl' : 'text-sm'}`}>
          {item.detail}
        </p>

        {/* Unfolding stats panel */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
              className="overflow-hidden mt-6 pt-6 border-t border-white/10"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left font-mono">
                <div>
                  <span className="text-[10px] text-ink-faint uppercase block">Timeline</span>
                  <span className="text-xs font-semibold text-accent-cyan mt-1 block">{item.date}</span>
                </div>
                <div>
                  <span className="text-[10px] text-ink-faint uppercase block">Team Size</span>
                  <span className="text-xs font-semibold text-accent-cyan mt-1 block">{item.team}</span>
                </div>
                <div>
                  <span className="text-[10px] text-ink-faint uppercase block">Tech Stack</span>
                  <span className="text-xs font-semibold text-accent-cyan mt-1 block">{item.tech}</span>
                </div>
                <div>
                  <span className="text-[10px] text-ink-faint uppercase block">Verification</span>
                  <span className="text-xs font-semibold text-accent-violet mt-1 block">{item.metric}</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default function Achievements() {
  const featured = ACHIEVEMENTS.find((item) => item.featured)
  const others = ACHIEVEMENTS.filter((item) => !item.featured)

  return (
    <section id="achievements" className="section-wrap relative overflow-hidden">
      <div className="absolute right-[-10%] top-[10%] select-none pointer-events-none opacity-[0.02] text-[10rem] md:text-[18rem] font-display font-bold text-white tracking-tighter leading-none">
        PROOF
      </div>

      <div className="relative z-10">
        <SectionHeading
          eyebrow="Achievements"
          title="Proof of momentum, not a finished resume"
          subtitle="Click cards to unfold mechanical logs showing real metrics & technology stacks."
        />

        <div className="mt-12 space-y-6">
          {featured && <AchievementCard item={featured} isFeatured={true} />}

          <div className="grid md:grid-cols-2 gap-6 w-full">
            {others.map((item, i) => (
              <AchievementCard key={item.title} item={item} isFeatured={false} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
