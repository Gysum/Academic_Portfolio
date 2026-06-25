import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaJava, FaPython } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiExpress, SiMongodb } from 'react-icons/si'
import { PROFILE, WORK_EXPERIENCE, EDUCATION, ABOUT_ME_INFO } from '../utils/constants'
import { playTick } from '../utils/audio'

export default function About() {
  const [activeTab, setActiveTab] = useState('skills')

  const handleTabChange = (tab) => {
    setActiveTab(tab)
    playTick()
  }

  // Skills mapping
  const skillsData = [
    { name: 'HTML 5', icon: FaHtml5 },
    { name: 'CSS 3', icon: FaCss3Alt },
    { name: 'JavaScript', icon: FaJs },
    { name: 'Java', icon: FaJava },
    { name: 'React.js', icon: FaReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'Express.js', icon: SiExpress },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'Python', icon: FaPython },
    { name: 'Git', icon: FaGitAlt }
  ]

  // Tab details mapping
  const tabContent = {
    experience: {
      title: 'My experience',
      description: 'I have participated in hackathons, worked on industry-grade frontend & backend designs, and built modular interfaces.',
      render: () => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full text-left">
          {WORK_EXPERIENCE.map((exp, idx) => (
            <div
              key={idx}
              className="bg-[#1c1c1e] p-5 rounded-2xl border border-white/5 flex flex-col justify-between hover:border-[#00F29D]/20 transition-all duration-300"
            >
              <div>
                <span className="text-[#00F29D] font-mono text-[11px] font-semibold mb-1 block">
                  {exp.year} ({exp.duration})
                </span>
                <h4 className="text-white font-mono text-sm font-bold mb-1 leading-tight">
                  {exp.role}
                </h4>
              </div>
              <div className="flex items-center gap-1.5 text-zinc-400 font-mono text-[10px] mt-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00F29D]" />
                {exp.company}
              </div>
            </div>
          ))}
        </div>
      )
    },
    education: {
      title: 'My education',
      description: 'I combine formal computer science coursework with industry certifications to build deep frontend and backend expertise.',
      render: () => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full text-left">
          {EDUCATION.map((edu, idx) => (
            <div
              key={idx}
              className="bg-[#1c1c1e] p-5 rounded-2xl border border-white/5 flex flex-col justify-between hover:border-[#00F29D]/20 transition-all duration-300"
            >
              <div>
                <span className="text-[#00F29D] font-mono text-[11px] font-semibold mb-1 block">
                  {edu.duration}
                </span>
                <h4 className="text-white font-mono text-sm font-bold mb-1 leading-tight">
                  {edu.degree}
                </h4>
              </div>
              <div className="flex items-center gap-1.5 text-zinc-400 font-mono text-[10px] mt-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00F29D]" />
                {edu.institution}
              </div>
            </div>
          ))}
        </div>
      )
    },
    skills: {
      title: 'My skills',
      description: 'Here are the core languages, libraries, tools, and databases I use regularly to build projects.',
      render: () => (
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-4 w-full">
          {skillsData.map((skill, idx) => {
            const Icon = skill.icon
            return (
              <div
                key={idx}
                className="aspect-square bg-[#1c1c1e] rounded-2xl border border-white/5 flex flex-col items-center justify-center transition-all duration-300 group cursor-pointer hover:border-[#00F29D]/30 hover:shadow-[0_0_15px_rgba(0,242,157,0.1)]"
              >
                <Icon className="text-3xl text-white group-hover:text-[#00F29D] transition-colors duration-300" />
                <span className="text-[9px] sm:text-[10px] font-mono text-zinc-500 group-hover:text-white uppercase tracking-wider mt-3 transition-colors duration-300">
                  {skill.name}
                </span>
              </div>
            )
          })}
        </div>
      )
    },
    about: {
      title: 'About me',
      description: ABOUT_ME_INFO.description,
      render: () => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 w-full text-left pt-2">
          {ABOUT_ME_INFO.details.map((detail, idx) => (
            <div
              key={idx}
              className="flex flex-wrap items-baseline gap-2 border-b border-white/5 pb-2"
            >
              <span className="text-zinc-500 font-mono text-xs uppercase tracking-wider min-w-[90px]">
                {detail.label}
              </span>
              <span className="text-white font-mono text-sm font-semibold">
                {detail.value}
              </span>
            </div>
          ))}
        </div>
      )
    }
  }

  const currentTab = tabContent[activeTab]

  return (
    <section id="about" className="section-wrap pt-20 pb-24 border-t border-white/5 relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full">
        {/* Left Column: Why hire me & Tab Selector Buttons */}
        <div className="lg:col-span-5 flex flex-col items-start text-left">
          <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4 uppercase tracking-tighter">
            Why hire me?
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed mb-8 font-sans">
            I am a full-stack builder dedicated to writing clean, maintainable code. I love designing interactive experiences and building robust systems.
          </p>

          <div className="flex flex-col gap-3 w-full">
            {[
              { id: 'experience', label: 'Experience' },
              { id: 'education', label: 'Education' },
              { id: 'skills', label: 'Skills' },
              { id: 'about', label: 'About me' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`w-full py-3 px-6 rounded-xl font-mono text-sm tracking-wider uppercase font-bold transition-all duration-300 text-center ${
                  activeTab === tab.id
                    ? 'bg-[#00F29D] text-black shadow-[0_0_15px_rgba(0,242,157,0.2)]'
                    : 'bg-zinc-800/40 text-zinc-300 hover:bg-zinc-800 hover:text-white border border-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Dynamic Tab Content */}
        <div className="lg:col-span-7 w-full min-h-[380px] flex flex-col items-start justify-start">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="w-full flex flex-col items-start"
            >
              <h3 className="text-2xl md:text-3xl font-bold font-mono text-white mb-2 uppercase tracking-tighter">
                {currentTab.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6 text-left max-w-xl font-sans">
                {currentTab.description}
              </p>
              
              <div className="w-full">
                {currentTab.render()}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="relative z-10 text-left">
      <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">{eyebrow}</span>
      <h2 className="text-3xl font-mono uppercase tracking-tighter text-white font-bold mt-2">{title}</h2>
      {subtitle && <p className="text-xs text-zinc-500 font-mono mt-2">{subtitle}</p>}
    </div>
  )
}

