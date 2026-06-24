import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { STATS } from '../utils/constants'

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 })

  return (
    <section ref={ref} className="section-wrap py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="text-center"
          >
            <div className="font-mono text-4xl md:text-5xl font-semibold bg-gradient-to-r from-accent-violet to-accent-cyan bg-clip-text text-transparent">
              {inView ? <CountUp end={stat.value} duration={1.8} /> : 0}
              {stat.suffix}
            </div>
            <div className="text-sm text-ink-muted mt-2">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
