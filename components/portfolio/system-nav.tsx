'use client'

import { useEffect, useState } from 'react'
import { Menu, X, Terminal } from 'lucide-react'
import { IDENTITY } from '@/lib/portfolio-data'

const SECTIONS = [
  { id: 'about', label: 'ABOUT', key: '01' },
  { id: 'skills', label: 'SKILLS', key: '02' },
  { id: 'projects', label: 'PROJECTS', key: '03' },
  { id: 'contact', label: 'CONTACT', key: '04' },
]

export function SystemNav() {
  const [active, setActive] = useState('about')
  const [open, setOpen] = useState(false)
  const [clock, setClock] = useState('--:--:--')

  useEffect(() => {
    const tick = () =>
      setClock(
        new Date().toLocaleTimeString('en-GB', { hour12: false }),
      )
    tick()
    const t = window.setInterval(tick, 1000)
    return () => window.clearInterval(t)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  const navItems = (
    <ul className="flex flex-col gap-1">
      {SECTIONS.map((s) => {
        const on = active === s.id
        return (
          <li key={s.id}>
            <button
              onClick={() => go(s.id)}
              aria-current={on ? 'true' : undefined}
              className={`group flex w-full items-center gap-3 border-2 px-3 py-2 text-left text-sm tracking-widest transition-colors ${
                on
                  ? 'border-neon bg-neon text-background'
                  : 'border-transparent text-muted-foreground hover:border-border hover:text-foreground'
              }`}
            >
              <span className={on ? 'text-background' : 'text-neon'}>
                {s.key}
              </span>
              <span>{s.label}</span>
              <span className="ml-auto opacity-0 group-hover:opacity-100">
                {'>'}
              </span>
            </button>
          </li>
        )
      })}
    </ul>
  )

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="fixed left-0 top-0 z-40 hidden h-dvh w-60 flex-col border-r-2 border-neon bg-surface p-4 lg:flex">
        <div className="mb-6 flex items-center gap-2 border-2 border-neon bg-neon px-2 py-1 text-background">
          <Terminal size={16} aria-hidden="true" />
          <span className="text-xs font-bold tracking-widest">ARCADE_OS</span>
        </div>

        <div className="mb-6">
          <p className="font-display text-2xl leading-none text-neon text-glow">
            {IDENTITY.name}
          </p>
          <p className="mt-1 text-[10px] tracking-widest text-muted-foreground">
            {IDENTITY.role}
          </p>
        </div>

        <nav aria-label="System menu">{navItems}</nav>

        <div className="mt-auto border-t-2 border-border pt-3 text-[10px] text-muted-foreground">
          <p className="flex justify-between">
            <span>SYS_TIME</span>
            <span className="text-cyan">{clock}</span>
          </p>
          <p className="mt-1 flex justify-between">
            <span>STATUS</span>
            <span className="text-neon">ONLINE</span>
          </p>
        </div>
      </aside>

      {/* Mobile top bar + Start Menu */}
      <div className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b-2 border-neon bg-surface px-3 py-2 lg:hidden">
        <div className="flex items-center gap-2">
          <span className="border-2 border-neon bg-neon px-2 py-0.5 text-xs font-bold text-background">
            ARCADE_OS
          </span>
          <span className="text-xs text-cyan">{clock}</span>
        </div>
        <button
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? 'Close start menu' : 'Open start menu'}
          className="flex items-center gap-1 border-2 border-neon px-2 py-1 text-xs text-neon"
        >
          {open ? <X size={14} /> : <Menu size={14} />}
          START
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-30 bg-background/80 lg:hidden" onClick={() => setOpen(false)}>
          <div
            className="absolute left-2 right-2 top-12 border-2 border-neon bg-surface p-3 box-glow"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="mb-2 font-display text-xl text-neon">{IDENTITY.name}</p>
            {navItems}
          </div>
        </div>
      )}
    </>
  )
}
