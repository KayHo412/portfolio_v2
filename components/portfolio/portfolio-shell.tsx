'use client'

import { motion } from 'framer-motion'
import { SystemNav } from './system-nav'
import { HeroSection } from './hero-section'
import { SkillsSection } from './skills-section'
import { ProjectsSection } from './projects-section'
import { ContactSection } from './contact-section'

export function PortfolioShell() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.02, filter: 'brightness(3)' }}
      animate={{ opacity: 1, scale: 1, filter: 'brightness(1)' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="min-h-dvh bg-background"
    >
      <SystemNav />

      <main className="px-4 pb-16 pt-20 lg:ml-60 lg:pt-8">
        <div className="mx-auto max-w-4xl px-0 sm:px-4">
          <HeroSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </main>
    </motion.div>
  )
}
