'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { BOOT_LOGS } from '@/lib/portfolio-data'

export function BootSequence({ onDone }: { onDone: () => void }) {
  const [visible, setVisible] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = 1800 / BOOT_LOGS.length
    const logTimer = window.setInterval(() => {
      setVisible((v) => {
        if (v >= BOOT_LOGS.length) {
          window.clearInterval(logTimer)
          return v
        }
        return v + 1
      })
    }, interval)

    const progressTimer = window.setInterval(() => {
      setProgress((p) => Math.min(100, p + 4))
    }, 1800 / 25)

    const done = window.setTimeout(onDone, 2100)

    return () => {
      window.clearInterval(logTimer)
      window.clearInterval(progressTimer)
      window.clearTimeout(done)
    }
  }, [onDone])

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="flex min-h-dvh flex-col justify-center bg-background px-6 py-10 sm:px-16"
    >
      <div className="mx-auto w-full max-w-2xl">
        <p className="mb-4 font-display text-2xl text-neon text-glow">
          ARCADE_OS // BOOT
        </p>

        <div className="min-h-[220px] font-mono text-sm">
          {BOOT_LOGS.slice(0, visible).map((log, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.12 }}
              className={
                log.includes('100%') || log.includes('OK')
                  ? 'text-foreground'
                  : 'text-muted-foreground'
              }
            >
              {log}
              {log.includes('OK') && <span className="text-neon"> [done]</span>}
            </motion.p>
          ))}
          <span className="cursor-blink text-neon" aria-hidden="true" />
        </div>

        {/* Pixel progress bar */}
        <div className="mt-6">
          <div className="mb-1 flex justify-between text-xs text-muted-foreground">
            <span>LOADING GRAPHICAL SHELL</span>
            <span className="text-neon">{progress}%</span>
          </div>
          <div className="h-4 w-full border-2 border-neon bg-muted p-0.5">
            <div
              className="h-full bg-neon transition-[width] duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </motion.main>
  )
}
