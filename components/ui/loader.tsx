"use client"

import { cn } from "@/lib/utils"

export const Loader = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="relative">
        <div className="w-12 h-12 rounded-full absolute border-4 border-solid border-gray-200"></div>
        <div className="w-12 h-12 rounded-full animate-spin absolute border-4 border-solid border-blue-500 border-t-transparent shadow-md"></div>
      </div>
    </div>
  )
}

export const DotsLoader = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex space-x-2 justify-center items-center", className)}>
      <div className="h-2 w-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div className="h-2 w-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
      <div className="h-2 w-2 bg-blue-500 rounded-full animate-bounce"></div>
    </div>
  )
}

export const PulseLoader = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex justify-center items-center", className)}>
      <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
    </div>
  )
}
