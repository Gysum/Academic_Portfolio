import { useEffect, useState } from 'react'

const TERMINAL_STEPS = [
  { type: 'command', text: 'whoami' },
  { type: 'output', text: 'aakash' },
  { type: 'command', text: 'cat about.txt' },
  { type: 'output', text: '3rd-year CS student. Building React interfaces, solving daily DSA, winning Aerothons.' },
  { type: 'command', text: 'git log -n 1' },
  {
    type: 'output',
    text: `commit 7205dbd (HEAD -> main, origin/main)
Author: Aakash <your.email@example.com>
Date:   Wed Jun 24 13:52:54 2026

    feat: Won HAL Aerothon '26! 🚀`
  }
]

export default function TerminalHero() {
  const [lines, setLines] = useState([])
  const [currentText, setCurrentText] = useState('')
  const [stepIndex, setStepIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    if (stepIndex >= TERMINAL_STEPS.length) return

    const currentStep = TERMINAL_STEPS[stepIndex]

    if (currentStep.type === 'command') {
      // Type out character-by-character
      if (charIndex < currentStep.text.length) {
        const timer = setTimeout(() => {
          setCurrentText((prev) => prev + currentStep.text[charIndex])
          setCharIndex((prev) => prev + 1)
        }, 60) // speed of typing
        return () => clearTimeout(timer)
      } else {
        // Command finished typing, push to lines
        const timer = setTimeout(() => {
          setLines((prev) => [...prev, { type: 'command', text: currentStep.text }])
          setCurrentText('')
          setStepIndex((prev) => prev + 1)
          setCharIndex(0)
        }, 500) // pause after typing before running
        return () => clearTimeout(timer)
      }
    } else if (currentStep.type === 'output') {
      // Instantly print output with small delay
      const timer = setTimeout(() => {
        setLines((prev) => [...prev, { type: 'output', text: currentStep.text }])
        setStepIndex((prev) => prev + 1)
      }, 400) // delay before output prints
      return () => clearTimeout(timer)
    }
  }, [stepIndex, charIndex])

  return (
    <div 
      className="w-full max-w-lg glass bg-black/40 border border-white/10 rounded-xl overflow-hidden font-mono text-[11px] md:text-xs shadow-2xl text-left select-none relative"
      data-cursor="click"
    >
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-white/[0.03] border-b border-white/10">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
        </div>
        <span className="text-[9px] text-ink-faint uppercase tracking-wider font-semibold">aakash@portfolio:~</span>
        <div className="w-10" />
      </div>

      {/* Terminal Body */}
      <div className="p-4 md:p-5 min-h-[220px] max-h-[300px] overflow-y-auto space-y-2.5 leading-relaxed text-[#D2D6E2]">
        {lines.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap">
            {line.type === 'command' ? (
              <span className="text-accent-cyan font-bold">$ {line.text}</span>
            ) : (
              <span className="text-ink-muted font-medium">{line.text}</span>
            )}
          </div>
        ))}
        {stepIndex < TERMINAL_STEPS.length && TERMINAL_STEPS[stepIndex].type === 'command' && (
          <div className="flex items-center">
            <span className="text-accent-cyan font-bold mr-1.5">$</span>
            <span>{currentText}</span>
            <span className="w-1.5 h-3.5 bg-accent-cyan animate-pulse ml-0.5" />
          </div>
        )}
        {stepIndex >= TERMINAL_STEPS.length && (
          <div className="flex items-center">
            <span className="text-accent-cyan font-bold mr-1.5">$</span>
            <span className="w-1.5 h-3.5 bg-accent-cyan animate-pulse" />
          </div>
        )}
      </div>
    </div>
  )
}
