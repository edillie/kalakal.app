"use client"

import { useEffect, useState } from "react"

const SECTIONS = [
  { id: "top", label: "Home" },
  { id: "idea", label: "The Idea" },
  { id: "how", label: "How It Works" },
  { id: "exchange", label: "Exchange" },
  { id: "difference", label: "The Difference" },
  { id: "story", label: "Our Story" },
  { id: "inclusive", label: "Inclusive Design" },
  { id: "start", label: "Start Exchanging" },
]

export function HeartNav() {
  const [active, setActive] = useState("top")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    )

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="heart-nav" aria-label="Section navigation">
      {SECTIONS.map(({ id, label }) => (
        <button
          key={id}
          type="button"
          className={`dot${active === id ? " active" : ""}`}
          aria-label={`Go to ${label}`}
          aria-current={active === id ? "true" : undefined}
          onClick={() => {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
          }}
        >
          <img className="heart-mark" src="/kalakal-heart.png" alt="" aria-hidden="true" />
          <span className="label">{label}</span>
        </button>
      ))}
    </nav>
  )
}
