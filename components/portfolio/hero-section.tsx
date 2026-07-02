'use client'

import { motion } from 'framer-motion'
import { GlitchText } from '@/components/glitch-text'
import { ABOUT, IDENTITY } from '@/lib/portfolio-data'

export function HeroSection() {
  return (
    <section
      id="about"
      className="scroll-mt-20 border-b-2 border-border py-14"
      aria-labelledby="about-heading"
    >
      <p className="mb-3 text-xs tracking-widest text-neon">
        {'// ADMIN IDENTITY'}
      </p>

      <h1
        id="about-heading"
        className="font-display text-6xl leading-[0.9] text-foreground sm:text-8xl"
      >
        <GlitchText text={IDENTITY.name} className="text-neon text-glow" />
      </h1>

      <p className="mt-4 max-w-xl text-lg text-cyan">{IDENTITY.role}</p>

      <div className="mt-6 max-w-2xl space-y-1 text-sm leading-relaxed text-muted-foreground">
        {ABOUT.lines.map((l, i) => (
          <p key={i}>{l || '\u00A0'}</p>
        ))}
      </div>

      {/* Stat readouts */}
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {ABOUT.stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="border-2 border-border bg-surface p-3"
          >
            <p className="font-display text-3xl text-neon text-glow">
              {s.value}
            </p>
            <p className="mt-1 text-[10px] tracking-widest text-muted-foreground">
              {s.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
