"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Menu, User, FolderOpen, Mail, MapPin, PencilRuler } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { DownloadResumeButton } from "./resume-btn"

const navItems = [
  { name: "About Me", link: "/#about", icon: <User className="h-4 w-4" /> },
  { name: "Projects", link: "/#projects", icon: <FolderOpen className="h-4 w-4" /> },
  { name: "Skills", link: "/#skills", icon: <PencilRuler className="h-4 w-4" /> },
  { name: "Contact", link: "/#contact", icon: <Mail className="h-4 w-4" /> },
  { name: "My Journey", link: "/journey", icon: <MapPin className="h-4 w-4" /> },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = ["about", "projects", "contact"]
      const current = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      setActiveSection(current || "")
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  const handleNavClick = (href: string, currentPathname?: string | null) => {
    setIsOpen(false);
  
    if (href.startsWith("/#")) {
      if (currentPathname === "/") {
        // We are already on homepage, just smooth scroll
        const hash = href.substring(1); // e.g., #about
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Not on homepage, navigate with Next.js Link to trigger page change (loader expected)
        window.location.href = href; // triggers full reload/navigation to homepage with hash
      }
    }
  };
  
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center space-x-2 group"
            onClick={() => {
              if (pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
            }}
          >
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
              mjshubham21
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-1">
            <DownloadResumeButton />
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive =
                activeSection === item.link.replace("#", "") || (pathname === item.link && !item.link.startsWith("#"))

              return (
                <Link
                  key={item.name}
                  href={item.link}
                  onClick={(e) => {
                    if (item.link.startsWith("/#")) {
                      e.preventDefault()
                      handleNavClick(item.link, pathname)
                    }
                  }}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 group ${
                    isActive
                      ? "bg-primary/20 text-primary shadow-lg shadow-primary/20"
                      : "text-foreground hover:text-primary hover:bg-primary/10"
                  }`}
                >
                  {Icon}
                  <span>{item.name}</span>
                  {isActive && (
                    <Badge variant="secondary" className="ml-2">
                      •
                    </Badge>
                  )}
                </Link>
              )
            })}

            <ThemeToggle />
          </div>

          <div className="flex items-center space-x-2 lg:hidden">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:bg-primary/20 hover:text-primary transition-all duration-200"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] bg-background/95 backdrop-blur-md border-l border-border/50"
              >
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                      Navigation
                    </h3>
                  </div>
                  {navItems.map((item, index) => {
                    const Icon = item.icon
                    const isActive =
                      activeSection === item.link.replace("#", "") ||
                      (pathname === item.link && !item.link.startsWith("#"))

                    return (
                      <Link
                        key={item.name}
                        href={item.link}
                        onClick={(e) => {
                          if (item.link.startsWith("/#")) {
                            e.preventDefault()
                            handleNavClick(item.link, pathname)
                          } else {
                            setIsOpen(false)
                          }
                        }}
                        className={`flex items-center space-x-3 text-lg font-medium py-3 px-4 rounded-lg transition-all duration-200 group ${
                          isActive
                            ? "bg-primary/20 text-primary shadow-lg shadow-primary/20"
                            : "text-foreground hover:text-primary hover:bg-primary/10"
                        }`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {Icon}
                        <span>{item.name}</span>
                        {isActive && (
                          <Badge variant="secondary" className="ml-auto">
                            •
                          </Badge>
                        )}
                      </Link>
                    )
                  })}
                  <div className="flex items-center justify-center mt-8">
                    <DownloadResumeButton />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
