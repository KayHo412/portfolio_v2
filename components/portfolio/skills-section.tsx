'use client'

import { motion } from 'framer-motion'
import { SKILLS } from '@/lib/portfolio-data'

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-b-2 border-border py-14"
      aria-labelledby="skills-heading"
    >
      <p className="mb-3 text-xs tracking-widest text-neon">
        {'// INSTALLED MODULES'}
      </p>
      <h2
        id="skills-heading"
        className="mb-8 font-display text-4xl text-foreground sm:text-5xl"
      >
        SKILL
      </h2>

      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {SKILLS.map((skill, i) => (
          <motion.li
            key={skill.name}
            initial={{ opacity: 0, y: 24, scale: 0.9 }}
            whileInView={{
              opacity: 1,
              y: [24, -8, 0],
              scale: 1,
            }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              delay: i * 0.05,
              duration: 0.4,
              times: [0, 0.6, 1],
              ease: 'easeOut',
            }}
            //whileHover={{ y: -4 }}
            className="group border-2 border-border bg-surface p-3 hover:border-neon"
          >
            <div className="flex items-baseline justify-between">
              <span className="font-display text-2xl text-foreground group-hover:text-neon">
                {skill.name}
              </span>
              <span className="text-[10px] text-muted-foreground">
                {skill.category}
              </span>
            </div>

            {/* Pixel level meter (10 blocks) */}
            <div className="mt-3 flex gap-0.5" aria-hidden="true">
              {Array.from({ length: 10 }).map((_, b) => (
                <span
                  key={b}
                  className={`h-3 flex-1 border ${
                    b < Math.round(skill.level / 10)
                      ? 'border-neon bg-neon'
                      : 'border-border bg-muted'
                  }`}
                />
              ))}
            </div>
            <p className="mt-1 text-right text-[10px] text-cyan">
              LVL {skill.level}
            </p>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
