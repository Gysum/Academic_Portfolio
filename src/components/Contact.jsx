import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiSend, FiCheck } from 'react-icons/fi'
import { PROFILE } from '../utils/constants'
import { playTick } from '../utils/audio'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | sent

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    playTick()
    setTimeout(() => {
      setStatus('sent')
      playTick()
    }, 1200)
  }

  return (
    <section id="contacts" className="section-wrap border-t border-white/5">
      {/* Centered header */}
      <div className="text-left mb-12">
        <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">Contact</span>
        <h2 className="text-4xl font-mono uppercase tracking-tighter text-white font-bold mt-2">
          Let's talk
        </h2>
        <p className="text-xs text-zinc-500 font-mono mt-2">
          Internship leads, hackathon teammates, or just feedback on this site — all welcome.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-8">
        {/* Form panel */}
        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onSubmit={handleSubmit}
          className="md:col-span-3 border border-white/10 rounded-[24px] p-7 space-y-5 bg-transparent"
        >
          <Field label="Name" name="name" value={form.name} onChange={handleChange} required />
          <Field label="Email" name="email" type="email" value={form.email} onChange={handleChange} required />
          <Field label="Message" name="message" textarea value={form.message} onChange={handleChange} required />

          <button
            type="submit"
            disabled={status !== 'idle'}
            className="w-full bg-white hover:bg-zinc-200 text-black font-mono text-xs font-bold py-3.5 rounded-full flex items-center justify-center gap-2 transition-all disabled:opacity-80 cursor-pointer shadow-sm"
            data-cursor="click"
          >
            {status === 'idle' && (<><FiSend size={14} /> Send Message</>)}
            {status === 'sending' && 'Sending…'}
            {status === 'sent' && (<><FiCheck size={14} /> Sent — thanks!</>)}
          </button>
        </motion.form>

        {/* Links panel */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:col-span-2 flex flex-col gap-4"
        >
          <ContactLink icon={FiMail} label="Email" value={PROFILE.email} href={`mailto:${PROFILE.email}`} />
          <ContactLink icon={FiGithub} label="GitHub" value={`@${PROFILE.github.split('/').pop()}`} href={PROFILE.github} />
          <ContactLink icon={FiLinkedin} label="LinkedIn" value="Connect" href={PROFILE.linkedin} />
        </motion.div>
      </div>
    </section>
  )
}

function Field({ label, name, type = 'text', textarea, value, onChange, required }) {
  const Tag = textarea ? 'textarea' : 'input'
  return (
    <div>
      <label htmlFor={name} className="block text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-2">
        {label}
      </label>
      <Tag
        id={name}
        name={name}
        type={textarea ? undefined : type}
        rows={textarea ? 4 : undefined}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder:text-zinc-600 focus:border-white/30 focus:outline-none transition-colors resize-none font-mono"
        placeholder={`Your ${label.toLowerCase()}`}
      />
    </div>
  )
}

function ContactLink({ icon: Icon, label, value, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="border border-white/10 hover:border-white/30 rounded-[20px] p-5 flex items-center gap-4 group transition-colors duration-300"
      data-cursor="click"
    >
      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center group-hover:scale-105 transition-transform">
        <Icon size={16} className="text-white" />
      </div>
      <div className="text-left font-mono">
        <div className="text-[10px] text-zinc-500 uppercase">{label}</div>
        <div className="text-xs text-white mt-0.5">{value}</div>
      </div>
    </a>
  )
}
