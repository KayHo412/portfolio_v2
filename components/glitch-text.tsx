'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

type GlitchTextProps = {
  text: string
  className?: string
}

export function GlitchText({ text, className = '' }: GlitchTextProps) {
  const [active, setActive] = useState(false)

  const trigger = () => {
    setActive(true)
    window.setTimeout(() => setActive(false), 600)
  }

  return (
    <motion.span
      className={`relative inline-block select-none ${className}`}
      onHoverStart={trigger}
      onViewportEnter={trigger}
      viewport={{ once: false, amount: 0.6 }}
      tabIndex={0}
      onFocus={trigger}
      role="text"
      aria-label={text}
    >
      <span aria-hidden="true" className="relative z-10">
        {text}
      </span>

      {/* Cyan channel */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 text-cyan"
        style={{
          transform: active ? 'translate(-3px, 1px)' : 'translate(0,0)',
          opacity: active ? 0.85 : 0,
          transition: 'transform 60ms steps(2), opacity 60ms',
          clipPath: active ? 'inset(20% 0 40% 0)' : 'inset(0 0 0 0)',
        }}
      >
        {text}
      </span>

      {/* Amber channel */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 text-amber"
        style={{
          transform: active ? 'translate(3px, -1px)' : 'translate(0,0)',
          opacity: active ? 0.85 : 0,
          transition: 'transform 60ms steps(2), opacity 60ms',
          clipPath: active ? 'inset(55% 0 8% 0)' : 'inset(0 0 0 0)',
        }}
      >
        {text}
      </span>
    </motion.span>
  )
}
