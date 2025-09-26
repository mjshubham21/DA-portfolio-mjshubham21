"use client"
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number
    name: string
    designation?: string
    image?: string
    href?: string
  }[]
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const springConfig = { stiffness: 100, damping: 5 }
  const x = useMotionValue(0)

  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig)
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig)

  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2
    x.set(event.nativeEvent.offsetX - halfWidth)
  }

  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      {items.map((item, idx) => (
        <div
          className="relative group"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="wait">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                <div className="font-bold text-white relative z-30 text-base">{item.name}</div>
                {item.designation && <div className="text-white text-xs">{item.designation}</div>}
              </motion.div>
            )}
          </AnimatePresence>
          {item.href ? (
            <Link href={item.href}>
              <div
                onMouseMove={handleMouseMove}
                className="object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500 cursor-pointer"
              >
                {item.image ? (
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    className="object-cover !m-0 !p-0 object-top rounded-full h-14 w-14"
                  />
                ) : (
                  <div className="h-14 w-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                    {item.name.charAt(0)}
                  </div>
                )}
              </div>
            </Link>
          ) : (
            <div
              onMouseMove={handleMouseMove}
              className="object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500 cursor-pointer"
            >
              {item.image ? (
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="object-cover !m-0 !p-0 object-top rounded-full h-14 w-14"
                />
              ) : (
                <div className="h-14 w-14 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
                  {item.name.charAt(0)}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
