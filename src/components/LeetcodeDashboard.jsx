import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { SectionHeading } from './About'
import { PROFILE } from '../utils/constants'

const DIFFICULTY_COLORS = {
  easy: '#3DD6F5',
  medium: '#7C5CFF',
  hard: '#FF6B6B',
}

export default function LeetcodeDashboard() {
  const [stats, setStats] = useState(null)

  useEffect(() => {
    fetch(`https://leetcode-stats-api.herokuapp.com/${PROFILE.leetcode}`)
      .then((res) => res.json())
      .then(setStats)
      .catch(() => setStats(null))
  }, [])

  const breakdown = [
    { key: 'easy', label: 'Easy', solved: stats?.easySolved, total: stats?.totalEasy },
    { key: 'medium', label: 'Medium', solved: stats?.mediumSolved, total: stats?.totalMedium },
    { key: 'hard', label: 'Hard', solved: stats?.hardSolved, total: stats?.totalHard },
  ]

  return (
    <section id="leetcode" className="section-wrap">
      <SectionHeading
        eyebrow="LeetCode Analytics"
        title="Daily reps, broken down by difficulty"
      />

      <div className="grid md:grid-cols-3 gap-5 mt-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-1 glass rounded-2xl p-7 flex flex-col items-center justify-center text-center"
        >
          <div className="font-mono text-4xl font-semibold bg-gradient-to-r from-accent-violet to-accent-cyan bg-clip-text text-transparent">
            {stats?.totalSolved ? <CountUp end={stats.totalSolved} duration={1.6} /> : '—'}
          </div>
          <div className="text-sm text-ink-muted mt-2">Problems Solved</div>
          <div className="text-xs text-ink-faint mt-1 font-mono">
            Acceptance: {stats?.acceptanceRate ? `${stats.acceptanceRate.toFixed(1)}%` : '—'}
          </div>
        </motion.div>

        <div className="md:col-span-2 grid grid-cols-3 gap-4">
          {breakdown.map((d, i) => (
            <motion.div
              key={d.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass glass-hover rounded-2xl p-5 flex flex-col justify-between"
            >
              <span
                className="font-mono text-xs uppercase tracking-widest"
                style={{ color: DIFFICULTY_COLORS[d.key] }}
              >
                {d.label}
              </span>
              <div className="mt-3">
                <span className="font-mono text-2xl font-semibold">
                  {d.solved ?? '—'}
                </span>
                <span className="text-ink-faint text-sm"> / {d.total ?? '—'}</span>
              </div>
              <div className="w-full h-1.5 bg-white/[0.06] rounded-full mt-3 overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ backgroundColor: DIFFICULTY_COLORS[d.key] }}
                  initial={{ width: 0 }}
                  whileInView={{ width: d.total ? `${(d.solved / d.total) * 100}%` : '0%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
