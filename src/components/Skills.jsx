import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  FaReact, FaNodeJs, FaJava, FaPython, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaBootstrap,
} from 'react-icons/fa'
import { SiTailwindcss, SiJavascript, SiExpress, SiMysql, SiMongodb, SiPostman } from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import { SectionHeading } from './About'
import { SKILLS, SKILL_DETAILS } from '../utils/constants'
import { playTick } from '../utils/audio'

const ICONS = {
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  JavaScript: SiJavascript,
  React: FaReact,
  'Tailwind CSS': SiTailwindcss,
  Bootstrap: FaBootstrap,
  'Node.js': FaNodeJs,
  'Express.js': SiExpress,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Java: FaJava,
  Python: FaPython,
  Git: FaGitAlt,
  GitHub: FaGithub,
  'VS Code': VscVscode,
  Postman: SiPostman,
}

const ICON_COLORS = {
  HTML: '#E34F26', CSS: '#1572B6', JavaScript: '#F7DF1E', React: '#61DAFB',
  'Tailwind CSS': '#38BDF8', Bootstrap: '#7952B3', 'Node.js': '#3C873A',
  'Express.js': '#9AA1B2', MySQL: '#4479A1', MongoDB: '#47A248', Java: '#E76F00',
  Python: '#3776AB', Git: '#F05032', GitHub: '#E8EAF0', 'VS Code': '#007ACC', Postman: '#FF6C37',
}

function SkillChip({ name }) {
  const [flipped, setFlipped] = useState(false)
  const Icon = ICONS[name]
  const detailText = SKILL_DETAILS[name] || 'Used in various build projects'

  const handleClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setFlipped(!flipped)
    playTick()
  }

  return (
    <div
      onClick={handleClick}
      className="w-44 h-14 cursor-pointer relative flex-shrink-0 select-none"
      style={{ perspective: '1000px' }}
      data-cursor="flip"
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
        style={{ transformStyle: 'preserve-3d' }}
        className="w-full h-full relative"
      >
        {/* Front Side */}
        <div
          style={{ backfaceVisibility: 'hidden' }}
          className="absolute inset-0 glass glass-hover rounded-xl px-4 py-3 flex items-center gap-3 w-full h-full"
        >
          {Icon && (
            <Icon
              size={20}
              style={{ color: ICON_COLORS[name] }}
              className="flex-shrink-0"
            />
          )}
          <span className="text-xs font-semibold text-ink-muted whitespace-nowrap overflow-hidden text-ellipsis">
            {name}
          </span>
        </div>

        {/* Back Side */}
        <div
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
          className="absolute inset-0 bg-[#1D183A] border border-accent-cyan/40 rounded-xl px-3 py-2 flex flex-col justify-center text-left w-full h-full overflow-hidden"
        >
          <span className="text-[9px] font-mono text-accent-cyan font-bold tracking-wider leading-none">WHERE USED</span>
          <p className="text-[10px] text-ink-muted font-medium leading-tight mt-1 whitespace-pre-wrap line-clamp-2">
            {detailText}
          </p>
        </div>
      </motion.div>
    </div>
  )
}

export default function Skills() {
  const allSkills = Object.values(SKILLS).flat()
  const halfLength = Math.ceil(allSkills.length / 2)
  const row1Skills = allSkills.slice(0, halfLength)
  const row2Skills = allSkills.slice(halfLength)

  return (
    <section id="skills" className="section-wrap relative overflow-hidden">
      <SectionHeading
        eyebrow="Skills"
        title="What I reach for, by category"
        subtitle="Click any pill to flip and reveal where it is used. Hover to pause the marquee."
      />

      <div className="mt-14 space-y-6 relative z-10 w-full overflow-hidden">
        {/* Row 1 (flows left) */}
        <div className="flex w-full overflow-x-auto scrollbar-none py-1">
          <div className="flex gap-4 w-max animate-marquee hover:pause cursor-grab active:cursor-grabbing" data-cursor="drag">
            {row1Skills.map((name, i) => (
              <SkillChip key={`r1-${name}-${i}`} name={name} />
            ))}
            {/* Duplicate for loop */}
            {row1Skills.map((name, i) => (
              <SkillChip key={`r1-dup-${name}-${i}`} name={name} />
            ))}
          </div>
        </div>

        {/* Row 2 (flows right) */}
        <div className="flex w-full overflow-x-auto scrollbar-none py-1">
          <div className="flex gap-4 w-max animate-marquee-reverse hover:pause cursor-grab active:cursor-grabbing" data-cursor="drag">
            {row2Skills.map((name, i) => (
              <SkillChip key={`r2-${name}-${i}`} name={name} />
            ))}
            {/* Duplicate for loop */}
            {row2Skills.map((name, i) => (
              <SkillChip key={`r2-dup-${name}-${i}`} name={name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
