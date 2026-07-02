'use client'

import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { CrtOverlay } from '@/components/crt-overlay'
import { TerminalGate } from '@/components/terminal-gate'
import { BootSequence } from '@/components/boot-sequence'
import { PortfolioShell } from '@/components/portfolio/portfolio-shell'

type Stage = 'terminal' | 'boot' | 'portfolio'

export default function Page() {
  const [stage, setStage] = useState<Stage>('terminal')

  return (
    <>
      <AnimatePresence mode="wait">
        {stage === 'terminal' && (
          <TerminalGate key="terminal" onBoot={() => setStage('boot')} />
        )}
        {stage === 'boot' && (
          <BootSequence key="boot" onDone={() => setStage('portfolio')} />
        )}
        {stage === 'portfolio' && <PortfolioShell key="portfolio" />}
      </AnimatePresence>

      <CrtOverlay />
    </>
  )
}
