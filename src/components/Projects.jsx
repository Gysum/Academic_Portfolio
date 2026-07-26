import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";
import { PROJECTS } from "../utils/constants";
import { playTick } from "../utils/audio";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-wrap py-20 flex flex-col items-center w-full border-t border-white/5"
    >
      {/* Heading */}
      <div className="relative z-10 text-center w-full mb-16 select-none">
        <span className="font-mono text-xs text-[#00F29D] uppercase tracking-widest">
          [ Portfolio ]
        </span>

        <h2 className="text-4xl font-mono uppercase tracking-tighter text-white font-bold mt-2">
          Projects
        </h2>
      </div>

      {/* Projects */}
      <div className="w-full space-y-24 pb-20">
        {PROJECTS.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ zIndex: idx + 10 }}
            className="sticky top-20 md:top-28 w-full max-w-6xl mx-auto bg-[#09090b] border border-white/5 hover:border-[#00F29D]/20 rounded-[32px] p-5 md:p-10 transition-all duration-300 overflow-hidden group"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00F29D]/0 to-[#00F29D]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Title */}
            <h3 className="font-mono text-2xl md:text-3xl uppercase tracking-[0.25em] text-center font-bold text-white mb-10 group-hover:text-[#00F29D] transition-colors">
              {project.title}
            </h3>

            {/* Main Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-start">
              {/* LEFT SIDE */}
              <div>
                {/* Browser Window */}
                <div className="rounded-2xl overflow-hidden border border-[#00F29D]/20 bg-[#111111] shadow-2xl">
                  {/* Browser Header */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-[#171717]">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>

                  {project.role === "Backend Engineer" ? (
                    <div className="bg-[#0d1117] min-h-[220px] md:min-h-[340px] p-4 md:p-6 font-mono text-[11px] md:text-sm overflow-hidden">
                      <p className="text-[#00F29D] mb-2">$ npm run dev</p>

                      <div className="border-b border-dashed border-zinc-700 mb-4"></div>

                      <p className="text-green-400">✓ MongoDB Connected</p>
                      <p className="text-green-400">✓ Express Server Running</p>
                      <p className="text-green-400">
                        ✓ JWT Authentication Enabled
                      </p>
                      <p className="text-green-400">✓ RBAC Middleware Loaded</p>

                      <div className="h-3"></div>

                      <p className="text-white">
                        GET&nbsp;&nbsp;&nbsp;/api/projects
                      </p>
                      <p className="text-white">POST&nbsp;&nbsp;/api/tasks</p>
                      <p className="text-white">
                        PUT&nbsp;&nbsp;&nbsp;/api/tasks/:id
                      </p>
                      <p className="text-white">DELETE /api/tasks/:id</p>

                      <div className="h-3"></div>

                      <p className="text-[#00F29D] break-all">
                        Server listening on localhost:5000 🚀
                      </p>
                    </div>
                  ) : (
                    <div className="bg-[#111] p-3">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full rounded-xl transition-all duration-500 group-hover:scale-[1.02]"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* RIGHT SIDE */}
              <div className="space-y-8">
                <p className="text-zinc-400 leading-8 text-[15px]">
                  {project.description}
                </p>

                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500 mb-4">
                    Tech Stack
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-white text-black font-mono text-[10px] uppercase px-4 py-2 rounded-full font-bold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center gap-4 mt-10 pt-6 border-t border-white/5">
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                onClick={() => playTick()}
                className="text-zinc-400 hover:text-[#00F29D] transition"
              >
                <FiGithub size={20} />
              </a>

              <div className="flex items-center gap-3 flex-1">
                <div className="flex-1 border-t border-dashed border-zinc-700" />

                <span className="font-mono uppercase text-[10px] tracking-[0.2em] text-zinc-400 group-hover:text-[#00F29D] transition">
                  {project.role}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
