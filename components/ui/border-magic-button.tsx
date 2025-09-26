"use client"

import type React from "react"
import { cn } from "@/lib/utils"

export const BorderMagicButton = ({
  children,
  className,
  containerClassName,
  borderClassName,
  duration,
  ...otherProps
}: {
  children: React.ReactNode
  className?: string
  containerClassName?: string
  borderClassName?: string
  duration?: number
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cn("bg-transparent relative text-xl h-16 w-40 p-[1px] overflow-hidden", containerClassName)}
      style={{
        borderRadius: `calc(1.75rem* 0.96)`,
      }}
      {...otherProps}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-[calc(1.75rem*0.96)] p-[1px] bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500",
          "before:absolute before:inset-0 before:rounded-[calc(1.75rem*0.96)] before:p-[1px]",
          "before:bg-gradient-to-r before:from-blue-500 before:via-purple-500 before:to-cyan-500",
          "before:animate-spin before:duration-[2s]",
          borderClassName,
        )}
        style={{
          filter: "blur(calc(1.75rem * 0.125))",
        }}
      />
      <div
        className={cn(
          "relative bg-slate-900/80 border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased font-medium",
          className,
        )}
        style={{
          borderRadius: `calc(1.75rem * 0.96)`,
        }}
      >
        {children}
      </div>
    </button>
  )
}
