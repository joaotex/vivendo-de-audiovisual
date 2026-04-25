'use client'

import { useEffect, useState } from 'react'

interface CountdownState {
  days: number
  hours: number
  minutes: number
  seconds: number
  isEnded: boolean
}

export default function Countdown() {
  const [time, setTime] = useState<CountdownState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isEnded: false,
  })

  useEffect(() => {
    function calculateCountdown() {
      const eventDate = new Date('2025-05-16T09:00:00-03:00').getTime()
      const now = new Date().getTime()
      const diff = eventDate - now

      if (diff <= 0) {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0, isEnded: true })
        return
      }

      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / 1000 / 60) % 60),
        seconds: Math.floor((diff / 1000) % 60),
        isEnded: false,
      })
    }

    calculateCountdown()
    const interval = setInterval(calculateCountdown, 1000)
    return () => clearInterval(interval)
  }, [])

  if (time.isEnded) {
    return (
      <div className="bg-cream border-b border-black/5 px-6 py-4 text-center">
        <span className="font-semibold text-accent-dark">
          🎬 O workshop está acontecendo agora!
        </span>
      </div>
    )
  }

  const CountdownUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="text-center">
      <span className="font-display text-4xl font-bold text-charcoal block">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-xs uppercase tracking-widest text-muted">{label}</span>
    </div>
  )

  return (
    <div className="bg-cream border-b border-black/5 px-6 py-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 flex-wrap">
        <span className="text-xs uppercase tracking-widest text-muted font-semibold">
          O workshop começa em
        </span>
        <div className="flex items-center gap-6">
          <CountdownUnit value={time.days} label="dias" />
          <span className="text-3xl text-muted">:</span>
          <CountdownUnit value={time.hours} label="horas" />
          <span className="text-3xl text-muted">:</span>
          <CountdownUnit value={time.minutes} label="min" />
          <span className="text-3xl text-muted">:</span>
          <CountdownUnit value={time.seconds} label="seg" />
        </div>
      </div>
    </div>
  )
}
