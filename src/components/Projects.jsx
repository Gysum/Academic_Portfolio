import { motion } from 'framer-motion'
import { FiGithub } from 'react-icons/fi'
import { PROJECTS } from '../utils/constants'
import { playTick } from '../utils/audio'

export default function Projects() {
  return (
    <section id="projects" className="section-wrap py-20 flex flex-col items-center w-full border-t border-white/5">
      {/* Title */}
      <div className="relative z-10 text-center w-full mb-16 select-none">
        <span className="font-mono text-xs text-[#00F29D] uppercase tracking-widest">[ Portfolio ]</span>
        <h2 className="text-4xl font-mono uppercase tracking-tighter text-white font-bold mt-2">
          Projects
        </h2>
      </div>

      {/* Projects list */}
      <div className="w-full space-y-24 pb-20">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-3xl mx-auto bg-[#09090b] border border-white/5 hover:border-[#00F29D]/20 rounded-[32px] p-8 md:p-12 transition-all duration-300 relative group overflow-hidden select-none sticky top-28"
            style={{
              zIndex: 10 + idx,
            }}
          >
            {/* Ambient Background Glow on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00F29D]/0 to-[#00F29D]/1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            {/* Project Title at the top (centered) */}
            <h3 className="font-mono text-xl md:text-2xl font-bold uppercase tracking-widest text-center text-white mb-8 group-hover:text-[#00F29D] transition-colors">
              {project.title}
            </h3>

            {/* Content Details */}
            <div className="w-full flex flex-col justify-between text-left space-y-6">
              <p className="text-xs text-zinc-400 font-sans leading-relaxed">
                {project.description}
              </p>

              <div className="space-y-3">
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block">
                  Tech Stack :
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="font-mono text-[9px] font-bold text-black bg-white px-3 py-1 rounded-full uppercase"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer links & role */}
              <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playTick()}
                  className="text-zinc-400 hover:text-[#00F29D] transition-colors cursor-pointer"
                  title="GitHub Repository"
                >
                  <FiGithub size={18} />
                </a>

                {/* Dashed line and role/award info */}
                <div className="flex items-center gap-3 text-zinc-500 font-mono text-[10px] uppercase tracking-wider flex-1 overflow-hidden">
                  <div className="border-t border-dashed border-zinc-700 flex-1 min-w-[20px]" />
                  <span className="text-zinc-400 group-hover:text-[#00F29D] transition-colors font-bold whitespace-nowrap">
                    {project.role}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
