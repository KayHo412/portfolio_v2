'use client'

import { ArrowUpRight } from 'lucide-react'
import { CONTACT } from '@/lib/portfolio-data'

export function ContactSection() {
  return (
    <section
      id="contact"
      className="scroll-mt-20 py-14"
      aria-labelledby="contact-heading"
    >
      <p className="mb-3 text-xs tracking-widest text-neon">
        {'// ESTABLISH CONNECTION'}
      </p>
      <h2
        id="contact-heading"
        className="mb-8 font-display text-4xl text-foreground sm:text-5xl"
      >
        GAME_OVER? CONTINUE.
      </h2>

      <div className="border-2 border-neon bg-surface box-glow">
        <div className="border-b-2 border-neon bg-neon px-4 py-2 text-background">
          <span className="text-xs font-bold tracking-widest">
            &gt; TRANSMIT_MESSAGE.EXE
          </span>
        </div>

        <div className="p-5">
          <a
            href={`mailto:${CONTACT.email}`}
            className="group inline-flex items-center gap-2 font-display text-3xl text-neon text-glow hover:text-cyan sm:text-4xl"
          >
            {CONTACT.email}
            <ArrowUpRight
              size={24}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              aria-hidden="true"
            />
          </a>

          <ul className="mt-6 grid gap-2 sm:grid-cols-3">
            {CONTACT.channels.map((c) => (
              <li key={c.label}>
                <a
                  href={c.url}
                  className="flex items-center justify-between border-2 border-border px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-neon hover:text-foreground"
                >
                  <span>
                    <span className="text-cyan">{c.label}</span>
                    <span className="block text-[10px]">{c.handle}</span>
                  </span>
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-8 text-center text-[10px] tracking-widest text-muted-foreground">
        KH_OS v8.16 &middot; NO PIXELS WERE HARMED &middot; PRESS START
      </p>
    </section>
  )
}
