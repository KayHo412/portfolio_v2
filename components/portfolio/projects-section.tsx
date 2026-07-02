'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Play } from 'lucide-react'
import { PROJECTS, type Project } from '@/lib/portfolio-data'

function ArcadeCabinet({ project, index }: { project: Project; index: number }) {
  const [hover, setHover] = useState(false)

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.08 }}
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      className="relative flex flex-col overflow-hidden border-2 border-border bg-surface hover:border-neon"
    >
      {/* Marquee header (top of the cabinet) */}
      <div className="flex items-center justify-between border-b-2 border-border bg-muted px-3 py-2 group-hover:border-neon">
        <span className="text-[10px] tracking-widest text-cyan">
          {project.id}
        </span>
        <span className="text-[10px] tracking-widest text-muted-foreground">
          {project.year}
        </span>
      </div>

      {/* Screen */}
      <div className="relative flex-1 p-4">
        {/* Scanline flicker overlay on hover */}
        {hover && (
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="scanline-sweep absolute inset-x-0 h-1/2" />
          </div>
        )}

        <p className="text-[10px] tracking-widest text-neon">{project.genre}</p>
        <h3 className="mt-1 font-display text-4xl leading-none text-foreground">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="border-2 border-border px-2 py-0.5 text-[10px] tracking-widest text-cyan"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Cabinet base / high score */}
      <div className="flex items-center justify-between border-t-2 border-border px-3 py-2">
        <span className="text-[10px] tracking-widest text-muted-foreground">
          HI-SCORE{' '}
          <span className="text-amber text-glow">{project.highScore}</span>
        </span>
        <span className="flex items-center gap-1 text-[10px] tracking-widest text-neon">
          <Play size={12} aria-hidden="true" />
          INSERT COIN
        </span>
      </div>
    </motion.article>
  )
}

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 border-b-2 border-border py-14"
      aria-labelledby="projects-heading"
    >
      <p className="mb-3 text-xs tracking-widest text-neon">
        {'// PROJECT LIBRARY'}
      </p>
      <h2
        id="projects-heading"
        className="mb-8 font-display text-4xl text-foreground sm:text-5xl"
      >
        SELECT_A_CABINET
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <ArcadeCabinet key={p.id} project={p} index={i} />
        ))}
      </div>
    </section>
  )
}
