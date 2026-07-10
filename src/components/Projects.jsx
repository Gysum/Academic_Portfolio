import { motion } from 'framer-motion'
import { FiGithub, FiFolder } from 'react-icons/fi'
import { PROJECTS } from '../utils/constants'
import { playTick } from '../utils/audio'

export default function Projects() {
  return (
    <section id="projects" className="section-wrap py-16 flex flex-col items-center w-full border-t border-white/5">
      <div className="relative z-10 text-left w-full mb-12">
        <span className="font-mono text-xs text-[#00F29D] uppercase tracking-widest">[ Portfolio ]</span>
        <h2 className="text-3xl font-mono uppercase tracking-tighter text-white font-bold mt-2">Projects</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative bg-[#131313] border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:border-[#00F29D]/30 transition-all duration-300 select-none overflow-hidden"
          >
            {/* Ambient Background Glow on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00F29D]/0 to-[#00F29D]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div>
              {/* Header icons */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-[#00F29D] transition-colors">
                  <FiFolder size={20} />
                </div>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playTick()}
                  className="w-10 h-10 rounded-full border border-white/10 hover:border-[#00F29D]/30 hover:bg-[#00F29D]/10 flex items-center justify-center text-zinc-400 hover:text-[#00F29D] transition-all cursor-pointer"
                  title="View Repository"
                >
                  <FiGithub size={18} />
                </a>
              </div>

              {/* Title & Role */}
              <h3 className="font-mono text-lg md:text-xl font-bold text-white group-hover:text-[#00F29D] transition-colors leading-tight">
                {project.title}
              </h3>
              <span className="font-mono text-[9px] text-[#00F29D]/80 uppercase tracking-widest mt-1 block">
                {project.role}
              </span>

              {/* Description */}
              <p className="text-xs text-zinc-400 font-sans leading-relaxed mt-4">
                {project.description}
              </p>
            </div>

            {/* Tech stack and Action */}
            <div className="mt-8">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="font-mono text-[9px] text-zinc-500 bg-white/5 border border-white/5 px-2 py-0.5 rounded uppercase"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                onClick={() => playTick()}
                className="bg-white text-black font-mono text-[10px] font-bold px-5 py-2.5 rounded-full flex items-center gap-2 hover:bg-[#00F29D] transition-colors w-fit shadow-sm cursor-pointer group/btn"
                data-cursor="click"
              >
                View Repository
                <span className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center text-[8px] group-hover/btn:translate-x-0.5 transition-transform">→</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
