"use client"
import type React from "react"
import { cn } from "@/lib/utils"

export const MovingBorder = ({
  children,
  duration = 2000,
  rx,
  ry,
  ...otherProps
}: {
  children: React.ReactNode
  duration?: number
  rx?: string
  ry?: string
} & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...otherProps}
      className={cn("bg-transparent relative text-xl h-16 w-40 p-[1px] overflow-hidden", otherProps.className)}
    >
      <div
        className="absolute inset-0 rounded-[inherit]"
        style={{
          background: `linear-gradient(var(--move-direction, 90deg), transparent, rgba(255, 255, 255, 0.4) 50%, transparent)`,
          animation: `move ${duration}ms linear infinite`,
        }}
      />
      <div
        className={cn(
          "relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased rounded-[inherit]",
          otherProps.className,
        )}
      >
        {children}
      </div>
      <style jsx>{`
        @keyframes move {
          0% {
            --move-direction: 0deg;
          }
          25% {
            --move-direction: 90deg;
          }
          50% {
            --move-direction: 180deg;
          }
          75% {
            --move-direction: 270deg;
          }
          100% {
            --move-direction: 360deg;
          }
        }
      `}</style>
    </div>
  )
}

export const Button = ({
  borderRadius = "1.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}: {
  borderRadius?: string
  children: React.ReactNode
  as?: any
  containerClassName?: string
  borderClassName?: string
  duration?: number
  className?: string
  [key: string]: any
}) => {
  return (
    <Component
      className={cn("bg-transparent relative text-xl h-16 w-40 p-[1px] overflow-hidden", containerClassName)}
      style={{
        borderRadius: borderRadius,
      }}
      {...otherProps}
    >
      <div className="absolute inset-0" style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}>
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased",
          className,
        )}
        style={{
          borderRadius: `calc(${borderRadius} * 0.96)`,
        }}
      >
        {children}
      </div>
    </Component>
  )
}
