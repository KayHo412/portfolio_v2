'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { fileData } from '@/lib/portfolio-data'

type Line = { text: string; tone?: 'sys' | 'user' | 'err' | 'ok' }

const INTRO: Line[] = [
  { text: 'KH_OS v4.12  [build 199X]', tone: 'sys' },
  { text: '(c) K.H SYSTEMS. All pixels reserved.', tone: 'sys' },
  { text: '', tone: 'sys' },
  { text: 'System ready. Waiting for command...', tone: 'ok' },
]

export function TerminalGate({ onBoot }: { onBoot: () => void }) {
  const [history, setHistory] = useState<Line[]>(INTRO)
  const [value, setValue] = useState('')
  const [locked, setLocked] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight })
  }, [history])

  const submit = () => {
    const cmd = value.trim()
    if (!cmd || locked) {
      setValue('')
      return
    }

    const next: Line[] = [...history, { text: `guest@arcade:~$ ${cmd}`, tone: 'user' }]

    if (cmd.toLowerCase() === 'boot --system' || cmd.toLowerCase() === 'npm run dev' || cmd.toLowerCase() === 'initialize' || cmd.toLowerCase() === 'boot') {
      next.push({ text: '> booting graphical shell...', tone: 'ok' })
      setHistory(next)
      setValue('')
      setLocked(true)
      window.setTimeout(onBoot, 400)
      return
    }

    if (cmd.toLowerCase() === 'help') {
      next.push({ text: 'available: initialize, help, clear, ls, cat, whoami, cwd', tone: 'sys' })

    } else if (cmd.toLowerCase() === 'clear') {
      setHistory(INTRO)
      setValue('')
      return

    } else if (cmd.toLowerCase() === 'whoami') {
      next.push({ text: 'guest@arcade', tone: 'ok'})

    } else if (cmd.toLowerCase() === 'cwd') {
      next.push({ text: '/home/guest', tone: 'ok'})

    } else if (cmd.toLowerCase() === 'ls') {
      next.push({ text: 'about.md, skills.json, projects.exe, contact.txt', tone: 'ok'})

    } else if (cmd.toLowerCase().startsWith('cat ')) {
      const fileName = cmd.toLowerCase().slice(4); // Extracts the filename
      const content = fileData[fileName];

      if (content) {
        next.push({ text: content, tone: 'ok' });
      } else {
        next.push({ text: `cat: ${fileName}: No such file or directory`, tone: 'err' });
      }

    } else {
      next.push({ text: `command not found: ${cmd}`, tone: 'err' });
      next.push({ text: 'hint: type "help" to find available commands.', tone: 'sys' });
    }

    setHistory(next)
    setValue('')
  }

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.nativeEvent.isComposing && e.keyCode !== 229) {
      e.preventDefault()
      submit()
    }
  }

  const toneClass = (tone?: Line['tone']) => {
    switch (tone) {
      case 'ok':
        return 'text-neon text-glow'
      case 'err':
        return 'text-danger'
      case 'user':
        return 'text-foreground'
      default:
        return 'text-muted-foreground'
    }
  }

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'brightness(4) blur(2px)' }}
      transition={{ duration: 0.35 }}
      className="flex min-h-dvh items-center justify-center bg-background p-4"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="box-glow flex h-[80dvh] w-full max-w-3xl flex-col border-2 border-neon bg-surface">
        {/* Title bar */}
        <header className="flex items-center justify-between border-b-2 border-neon bg-neon px-3 py-1 text-background">
          <span className="font-mono text-xs font-bold tracking-widest">
            /bin/arcade-shell
          </span>
          <span className="flex gap-2" aria-hidden="true">
            <span className="h-3 w-3 border-2 border-background" />
            <span className="h-3 w-3 border-2 border-background" />
            <span className="h-3 w-3 border-2 border-background bg-background" />
          </span>
        </header>

        {/* Output */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto px-4 py-3 text-sm leading-relaxed"
        >
          {history.map((line, i) => (
            <p key={i} className={`whitespace-pre-wrap ${toneClass(line.tone)}`}>
              {line.text || '\u00A0'}
            </p>
          ))}

          {!locked && (
            <div className="mt-1 flex items-center text-foreground">
              <span className="shrink-0 text-neon">guest@arcade:~$&nbsp;</span>
              <span className="whitespace-pre">{value}</span>
              <span className="cursor-blink" aria-hidden="true" />
            </div>
          )}
        </div>

        {/* Hidden real input for keystroke capture + mobile keyboard */}
        <label className="sr-only" htmlFor="terminal-input">
          Terminal command input. Type npm run dev to initialize.
        </label>
        <input
          id="terminal-input"
          ref={inputRef}
          value={value}
          disabled={locked}
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={onKeyDown}
          className="h-0 w-0 opacity-0"
          aria-label="Terminal command input"
        />

        <footer className="border-t-2 border-border px-4 py-2 text-xs text-muted-foreground">
          [ENTER] execute &middot; try enter <b>help</b> for available commands
        </footer>
      </div>
    </motion.main>
  )
}
