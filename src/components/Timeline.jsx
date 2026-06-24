import { useState } from 'react'
import { WORK_EXPERIENCE } from '../utils/constants'
import { playTick } from '../utils/audio'

export default function Timeline() {
  const [activeRow, setActiveRow] = useState(1) // Highlight the second item ("VK Development Lab") by default to match the mockup

  const handleRowClick = (idx) => {
    setActiveRow(idx)
    playTick()
  }

  return (
    <section id="work" className="section-wrap pt-20 pb-24 border-t border-white/5 relative overflow-hidden">
      <div className="relative z-10 w-full">
        {/* Right-aligned watermark text */}
        <div className="w-full flex justify-end mb-10 select-none">
          <h2 className="text-6xl md:text-8xl font-mono uppercase tracking-tighter text-white font-bold">
            Work
          </h2>
        </div>

        {/* Tabular Experience spreadsheet */}
        <div className="w-full border-t border-white/10">
          {WORK_EXPERIENCE.map((item, idx) => {
            const isActive = idx === activeRow
            return (
              <div
                key={idx}
                onClick={() => handleRowClick(idx)}
                className={`grid grid-cols-12 gap-4 py-6 px-4 border-b border-white/10 items-center transition-all duration-300 cursor-pointer text-left select-none ${
                  isActive
                    ? 'bg-white text-black my-1 border-white shadow-lg'
                    : 'bg-transparent text-zinc-400 hover:bg-white/5 hover:text-white'
                }`}
                style={{
                  borderRadius: isActive ? '12px' : '0px',
                }}
                data-cursor="click"
              >
                {/* Year & Duration */}
                <div className="col-span-4 md:col-span-3 font-mono text-left">
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] hidden md:inline select-none ${isActive ? 'text-zinc-700' : 'text-zinc-600'}`}>
                      {idx === 0 ? 'drwxr-xr-x' : '-rw-r--r--'}
                    </span>
                    <span className={`text-xs md:text-sm block font-bold ${isActive ? 'text-black' : 'text-white'}`}>
                      {item.year}
                    </span>
                  </div>
                  <span className={`text-[10px] block mt-1 ${isActive ? 'text-zinc-600' : 'text-zinc-500'}`}>
                    {item.duration}
                  </span>
                </div>

                {/* Company Name */}
                <div className={`col-span-4 md:col-span-4 font-mono font-bold text-xs md:text-sm ${isActive ? 'text-black' : 'text-white'}`}>
                  {item.company}
                </div>

                {/* Role Description */}
                <div className={`col-span-4 md:col-span-5 font-mono text-[10px] md:text-xs leading-normal ${isActive ? 'text-zinc-800' : 'text-zinc-400'}`}>
                  {item.role}
                </div>
              </div>
            )
          })}
        </div>

        {/* Right Bottom Summary text */}
        <div className="w-full flex justify-end mt-8 text-right font-mono select-none">
          <div>
            <span className="text-[10px] text-zinc-500 block uppercase tracking-wider">Work experience</span>
            <span className="text-xs text-white font-bold block mt-1">4 years 9 months</span>
          </div>
        </div>
      </div>
    </section>
  )
}
