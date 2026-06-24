import { motion } from 'framer-motion'
import { SectionHeading } from './About'
import { LEARNING_JOURNEY } from '../utils/constants'

const STATUS_STYLES = {
  'In Progress': 'text-accent-cyan bg-accent-cyan/10',
  Ongoing: 'text-accent-violet bg-accent-violet/10',
  Upcoming: 'text-ink-faint bg-white/[0.06]',
}

function JourneyCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="glass glass-hover rounded-2xl p-6"
    >
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="font-display font-medium text-base leading-snug">{item.title}</h3>
        <span className={`shrink-0 text-[11px] font-mono px-2.5 py-1 rounded-full ${STATUS_STYLES[item.status]}`}>
          {item.status}
        </span>
      </div>
      <p className="text-sm text-ink-muted leading-relaxed mb-5">{item.detail}</p>

      <div className="flex items-center justify-between text-xs font-mono text-ink-faint mb-2">
        <span>Progress</span>
        <span>{item.progress}%</span>
      </div>
      <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent-violet to-accent-cyan"
          initial={{ width: 0 }}
          whileInView={{ width: `${item.progress}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: 'easeOut', delay: 0.15 }}
        />
      </div>
    </motion.div>
  )
}

export default function LearningJourney() {
  return (
    <section id="journey" className="section-wrap">
      <SectionHeading
        eyebrow="Building in Public"
        title="Learning Journey"
        subtitle="No flagship project yet — here's what's actually in progress instead of a polished fake one."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
        {LEARNING_JOURNEY.map((item, i) => (
          <JourneyCard key={item.title} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}
