import { PROFILE } from '../utils/constants'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 mt-12 bg-transparent">
      <div className="max-w-5xl mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-zinc-500 font-mono">
        <p>Built with React & Tailwind CSS.</p>
        <p>© {new Date().getFullYear()} {PROFILE.name}</p>
      </div>
    </footer>
  )
}
