import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode, SiHackerrank } from 'react-icons/si'
import { SectionHeading } from './About'
import { PROFILE } from '../utils/constants'
import useTilt from '../hooks/useTilt'

function ProfileCard({ icon: Icon, name, username, stats, href, color, loading }) {
  const tilt = useTilt(6)
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      ref={tilt.ref}
      onMouseMove={tilt.onMouseMove}
      onMouseLeave={tilt.onMouseLeave}
      style={tilt.style}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5 }}
      className="glass glass-hover rounded-2xl p-6 block group"
    >
      <div className="flex items-center gap-3 mb-5">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
          style={{ backgroundColor: `${color}1A` }}
        >
          <Icon size={20} style={{ color }} />
        </div>
        <div>
          <div className="font-medium text-sm">{name}</div>
          <div className="text-xs text-ink-faint font-mono">@{username}</div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="font-mono text-lg font-medium text-ink">
              {loading ? '—' : s.value}
            </div>
            <div className="text-xs text-ink-faint">{s.label}</div>
          </div>
        ))}
      </div>
    </motion.a>
  )
}

export default function CodingProfiles() {
  const [github, setGithub] = useState(null)
  const [leetcode, setLeetcode] = useState(null)
  const [loadingGh, setLoadingGh] = useState(true)
  const [loadingLc, setLoadingLc] = useState(true)

  const ghUsername = PROFILE.github.split('/').pop()

  useEffect(() => {
    fetch(`https://api.github.com/users/${ghUsername}`)
      .then((res) => res.json())
      .then((data) => setGithub(data))
      .catch(() => setGithub(null))
      .finally(() => setLoadingGh(false))

    // Community LeetCode stats API — swap in your own deployed instance if this one is unavailable.
    fetch(`https://leetcode-stats-api.herokuapp.com/${PROFILE.leetcode}`)
      .then((res) => res.json())
      .then((data) => setLeetcode(data))
      .catch(() => setLeetcode(null))
      .finally(() => setLoadingLc(false))
  }, [ghUsername])

  return (
    <section id="profiles" className="section-wrap">
      <SectionHeading
        eyebrow="Coding Profiles"
        title="Live numbers, not a screenshot"
        subtitle="Pulled directly from GitHub and LeetCode — refreshes every time you load this page."
      />

      <div className="grid md:grid-cols-2 gap-5 mt-12">
        <ProfileCard
          icon={FaGithub}
          name="GitHub"
          username={ghUsername}
          href={PROFILE.github}
          color="#E8EAF0"
          loading={loadingGh}
          stats={[
            { label: 'Public Repos', value: github?.public_repos ?? '—' },
            { label: 'Followers', value: github?.followers ?? '—' },
          ]}
        />
        <ProfileCard
          icon={SiLeetcode}
          name="LeetCode"
          username={PROFILE.leetcode}
          href={`https://leetcode.com/${PROFILE.leetcode}`}
          color="#FFA116"
          loading={loadingLc}
          stats={[
            { label: 'Solved', value: leetcode?.totalSolved ?? '—' },
            { label: 'Ranking', value: leetcode?.ranking ? `#${leetcode.ranking}` : '—' },
          ]}
        />
        <ProfileCard
          icon={FaLinkedin}
          name="LinkedIn"
          username={ghUsername}
          href={PROFILE.linkedin}
          color="#0A66C2"
          loading={false}
          stats={[
            { label: 'Status', value: 'Open to work' },
            { label: 'Network', value: 'Growing' },
          ]}
        />
        <ProfileCard
          icon={SiHackerrank}
          name="HackerRank"
          username={ghUsername}
          href={PROFILE.hackerrank}
          color="#2EC866"
          loading={false}
          stats={[
            { label: 'Status', value: 'Active' },
            { label: 'Focus', value: 'DSA' },
          ]}
        />
      </div>
    </section>
  )
}
