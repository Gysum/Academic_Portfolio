import { motion } from 'framer-motion'
import { FiMessageSquare } from 'react-icons/fi'
import { SectionHeading } from './About'

export default function Testimonials() {
  return (
    <section className="section-wrap">
      <SectionHeading eyebrow="Testimonials" title="This space is reserved" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass rounded-2xl p-12 mt-10 text-center max-w-xl mx-auto"
      >
        <div className="w-12 h-12 rounded-xl bg-white/[0.06] flex items-center justify-center mx-auto mb-5">
          <FiMessageSquare size={20} className="text-accent-cyan" />
        </div>
        <p className="text-ink-muted leading-relaxed">
          Recommendations from mentors, teammates, and hiring managers will go here
          once I've worked with them. For now — check the activity sections above
          for proof that's already verifiable.
        </p>
      </motion.div>
    </section>
  )
}
