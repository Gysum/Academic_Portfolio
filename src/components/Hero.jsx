import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaLinkedin, FaTelegram, FaFacebook, FaInstagram } from 'react-icons/fa'
import { FiDownload } from 'react-icons/fi'
import { PROFILE, STATS } from '../utils/constants'
import { playTick } from '../utils/audio'

export default function Hero() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section
      id="home"
      className="section-wrap pt-32 pb-16 flex flex-col items-center justify-center w-full min-h-screen"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
        {/* Left Column: Bio and Intro */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          <span className="font-mono text-sm tracking-widest text-zinc-400 mb-3 uppercase">
            Software Developer
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1] font-mono text-white">
            Hello I'm <br />
            <span className="text-[#00F29D]">{PROFILE.name}</span>
          </h1>
          <p className="max-w-lg text-zinc-400 text-sm md:text-base leading-relaxed mb-8 font-sans">
            I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.
          </p>

          {/* Actions: Download CV and Socials */}
          <div className="flex flex-wrap items-center gap-6 select-none">
            <a
              href="#"
              onClick={() => playTick()}
              className="group border-2 border-[#00F29D] text-[#00F29D] font-mono text-xs md:text-sm font-bold px-6 py-3 rounded-full flex items-center gap-3 hover:bg-[#00F29D] hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,242,157,0.1)] hover:shadow-[0_0_25px_rgba(0,242,157,0.3)] cursor-pointer"
            >
              DOWNLOAD CV
              <span className="w-5 h-5 rounded-full bg-[#00F29D] text-black group-hover:bg-black group-hover:text-[#00F29D] flex items-center justify-center text-xs transition-colors">
                <FiDownload size={12} />
              </span>
            </a>

            <div className="flex items-center gap-3">
              {[
                { icon: FaGithub, href: PROFILE.github, label: 'GitHub' },
                { icon: FaLinkedin, href: PROFILE.linkedin, label: 'LinkedIn' },
                { icon: FaTelegram, href: PROFILE.telegram, label: 'Telegram' },
                { icon: FaFacebook, href: PROFILE.facebook, label: 'Facebook' },
                { icon: FaInstagram, href: PROFILE.instagram, label: 'Instagram' },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playTick()}
                  className="w-10 h-10 rounded-full border border-[#00F29D] text-[#00F29D] flex items-center justify-center hover:bg-[#00F29D] hover:text-black transition-all duration-300 cursor-pointer"
                  title={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Avatar with slow spinning border */}
        <div className="lg:col-span-5 flex items-center justify-center w-full">
          <div className="relative flex items-center justify-center w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px]">
            {/* Spinning Dashed Border */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#00F29D] animate-spin-slow pointer-events-none"></div>
            
            {/* Portrait Image wrapper */}
            <div className="w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden border border-white/10 bg-zinc-950 flex items-center justify-center z-10 shadow-2xl transition-all duration-500 grayscale hover:grayscale-0">
              <img
                src="/developer_portrait.png"
                alt={PROFILE.name}
                className="w-full h-full object-cover scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Stats Row */}
      <div
        ref={ref}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full pt-12 mt-20 border-t border-white/5"
      >
        {STATS.map((stat, i) => (
          <div key={i} className="flex items-center gap-4 text-left">
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono text-white leading-none tracking-tight">
              {inView ? <CountUp end={stat.value} duration={2.2} /> : 0}
              {stat.suffix}
            </span>
            <p className="text-[10px] md:text-xs text-zinc-500 font-mono leading-tight uppercase tracking-widest max-w-[120px]">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

