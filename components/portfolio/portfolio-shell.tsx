'use client'

import { motion } from 'framer-motion'
import { SystemNav } from './system-nav'
import { HeroSection } from './hero-section'
import { SkillsSection } from './skills-section'
import { ProjectsSection } from './projects-section'
import { ContactSection } from './contact-section'
import { PortfolioGame } from './portfolio-game'

type Props = {
  onExit: () => void
}

export function PortfolioShell({ onExit }: Props) {
  return (
    <div className="min-h-dvh bg-background">
      {/* Sidebar lives outside the animated wrapper so its `position: fixed`
          is anchored to the viewport (a CSS filter would break that). */}
      <SystemNav onExit={onExit} />

      <motion.main
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="px-4 pb-16 pt-20 lg:ml-60 lg:pt-8"
      >
        <div className="mx-auto max-w-4xl px-0 sm:px-4">
          <HeroSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
          <PortfolioGame />
        </div>
      </motion.main>
    </div>
  )
}
