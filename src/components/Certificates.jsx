import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import { CERTIFICATES } from '../utils/constants'
import { playTick } from '../utils/audio'

function CertificateVisual({ title, tech }) {
  const issuer = tech.split(' / ')[0] || 'CREDENTIAL'

  return (
    <div className="w-full h-full border border-white/10 bg-black/40 rounded-xl p-5 flex flex-col justify-between font-mono text-[9px] text-zinc-500 relative overflow-hidden select-none min-h-[180px] md:min-h-[220px]">
      {/* Decorative border layout */}
      <div className="absolute inset-1.5 border border-white/5 pointer-events-none rounded-lg" />
      
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-white/5 pb-2.5 z-10">
        <span className="text-[7px] text-zinc-600 tracking-wider">SECURE ID // {Math.random().toString(36).substring(3, 9).toUpperCase()}</span>
        <span className="text-white font-bold text-[8px] bg-white/5 px-2 py-0.5 rounded border border-white/5">{issuer}</span>
      </div>

      {/* Center content */}
      <div className="flex flex-col items-center justify-center my-4 text-center z-10">
        <div className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center mb-2 bg-white/5">
          <span className="text-white text-[9px]">★</span>
        </div>
        <span className="text-zinc-600 uppercase tracking-widest text-[7px] font-bold">Certificate of Achievement</span>
        <span className="text-[10px] text-white font-bold mt-1.5 leading-tight line-clamp-2 max-w-[160px]">{title}</span>
        <span className="text-[7px] text-zinc-500 mt-1">RECIPIENT: AAKASH</span>
      </div>

      {/* Bottom details */}
      <div className="flex items-end justify-between border-t border-white/5 pt-2.5 text-[7px] text-zinc-600 z-10">
        <div className="text-left">
          <span>SIGNATURE //</span>
          <span className="block mt-0.5 text-zinc-400 font-bold">VERIFIED_CREDENTIAL</span>
        </div>
        <div className="text-right">
          <span>STATUS //</span>
          <span className="block mt-0.5 text-green-500 font-bold uppercase">Active</span>
        </div>
      </div>
    </div>
  )
}

export default function Certificates() {
  const [index, setIndex] = useState(0)

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % CERTIFICATES.length)
    playTick()
  }

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + CERTIFICATES.length) % CERTIFICATES.length)
    playTick()
  }

  const currentCertificate = CERTIFICATES[index]

  return (
    <section id="certificates" className="section-wrap py-16 flex flex-col items-center w-full">
      <div className="relative z-10 text-left w-full mb-12">
        <span className="font-mono text-xs text-[#00F29D] uppercase tracking-widest">[ Credentials ]</span>
        <h2 className="text-3xl font-mono uppercase tracking-tighter text-white font-bold mt-2">Certificates</h2>
      </div>

      <div className="w-full relative flex items-center justify-center">
        {/* Left Arrow Button */}
        {CERTIFICATES.length > 1 && (
          <button
            onClick={handlePrev}
            className="absolute left-0 md:left-4 z-10 w-10 h-10 rounded-full border border-white/10 hover:border-[#00F29D]/30 bg-[#0D0D0D] flex items-center justify-center text-white hover:text-[#00F29D] transition-all cursor-pointer"
            aria-label="Previous certificate"
          >
            <FiArrowLeft size={16} />
          </button>
        )}

        {/* Carousel slide container */}
        <div className="w-full max-w-3xl overflow-hidden px-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, rotateX: 10, filter: 'blur(4px)' }}
              animate={{ opacity: 1, scale: 1, rotateX: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.95, rotateX: -10, filter: 'blur(4px)' }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full bg-[#131313] border border-white/5 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 text-left"
              style={{ perspective: '1000px' }}
            >
              {/* Certificate image or dynamic mockup */}
              <div className="w-full md:w-2/5 aspect-video md:aspect-square rounded-2xl overflow-hidden bg-zinc-950/40 flex-shrink-0 flex items-center justify-center border border-white/5">
                {currentCertificate.image && currentCertificate.image !== '/project_placeholder.png' ? (
                  <img
                    src={currentCertificate.image}
                    alt={currentCertificate.title}
                    className="w-full h-full object-contain p-1"
                  />
                ) : (
                  <CertificateVisual
                    title={currentCertificate.title}
                    tech={currentCertificate.tech}
                  />
                )}
              </div>

              {/* Slide details */}
              <div className="flex flex-col justify-between h-full py-2">
                <div>
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">
                    {currentCertificate.tech}
                  </span>
                  <h3 className="font-mono text-lg md:text-xl font-bold text-white mt-2 leading-tight">
                    {currentCertificate.title}
                  </h3>
                  <p className="text-xs text-zinc-400 font-sans leading-relaxed mt-4">
                    {currentCertificate.detail}
                  </p>
                </div>

                <a
                  href={currentCertificate.link}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => playTick()}
                  className="bg-white text-black font-mono text-[10px] font-bold px-5 py-2.5 rounded-full flex items-center gap-2 hover:bg-[#00F29D] transition-colors w-fit mt-8 shadow-sm cursor-pointer"
                  data-cursor="click"
                >
                  Verify credential
                  <span className="w-4 h-4 rounded-full bg-black text-white flex items-center justify-center text-[8px]">→</span>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Arrow Button */}
        {CERTIFICATES.length > 1 && (
          <button
            onClick={handleNext}
            className="absolute right-0 md:right-4 z-10 w-10 h-10 rounded-full border border-white/10 hover:border-[#00F29D]/30 bg-[#0D0D0D] flex items-center justify-center text-white hover:text-[#00F29D] transition-all cursor-pointer"
            aria-label="Next certificate"
          >
            <FiArrowRight size={16} />
          </button>
        )}
      </div>
    </section>
  )
}
