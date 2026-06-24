import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { SectionHeading } from './About'
import { PROFILE } from '../utils/constants'

export default function GithubDashboard() {
  const [data, setData] = useState(null)
  const ghUsername = PROFILE.github.split('/').pop()

  useEffect(() => {
    fetch(`https://api.github.com/users/${ghUsername}`)
      .then((res) => res.json())
      .then(setData)
      .catch(() => setData(null))
  }, [ghUsername])

  return (
    <section id="activity" className="section-wrap">
      <SectionHeading
        eyebrow="GitHub Activity"
        title="What the commit log actually looks like"
        subtitle="No curated highlight reel — this is the real contribution graph."
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass rounded-2xl p-6 mt-12 overflow-x-auto"
      >
        <img
          src={`https://ghchart.rshah.org/7C5CFF/${ghUsername}`}
          alt={`${ghUsername}'s GitHub contribution heatmap`}
          className="w-full min-w-[600px]"
          loading="lazy"
        />
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-6">
        <StatTile label="Repositories" value={data?.public_repos} />
        <StatTile label="Followers" value={data?.followers} />
        <StatTile label="Following" value={data?.following} />
        <StatTile label="Public Gists" value={data?.public_gists} />
      </div>
    </section>
  )
}

function StatTile({ label, value }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass glass-hover rounded-xl p-5 text-center"
    >
      <div className="font-mono text-2xl font-semibold text-accent-cyan">
        {value !== undefined && value !== null ? <CountUp end={value} duration={1.5} /> : '—'}
      </div>
      <div className="text-xs text-ink-faint mt-1">{label}</div>
    </motion.div>
  )
}
