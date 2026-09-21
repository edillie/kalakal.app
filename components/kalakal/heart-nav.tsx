"use client"

import { useEffect, useState } from "react"

export function HeartNav() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      const pct = scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0
      setProgress(pct)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  const size = 60
  const stroke = 3
  const r = (size - stroke) / 2
  const circumference = 2 * Math.PI * r
  const dash = circumference * progress

  return (
    <button
      type="button"
      className="heart-nav"
      aria-label={`Page progress ${Math.round(progress * 100)} percent. Back to top.`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <svg className="heart-nav-ring" width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(37,37,37,0.14)" strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--orange-bright)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${dash} ${circumference}`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
          style={{ transition: "stroke-dasharray 0.1s linear" }}
        />
      </svg>
      <span className="heart-nav-mark">
        <img src="/kalakal-heart-nav.png" alt="" aria-hidden="true" />
      </span>
    </button>
  )
}
