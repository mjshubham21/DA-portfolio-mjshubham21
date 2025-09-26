"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

export const BackgroundBeams = ({ className }: { className?: string }) => {
  const beamsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const beams = beamsRef.current
    if (!beams) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = beams.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      beams.style.setProperty("--mouse-x", `${x}px`)
      beams.style.setProperty("--mouse-y", `${y}px`)
    }

    beams.addEventListener("mousemove", handleMouseMove)
    return () => beams.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      ref={beamsRef}
      className={cn(
        "absolute inset-0 overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-blue-50",
        className,
      )}
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8b5cf620_1px,transparent_1px),linear-gradient(to_bottom,#8b5cf620_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(59, 130, 246, 0.15), transparent 40%)`,
        }}
      />
    </div>
  )
}
