import dynamic from "next/dynamic"
import { HeroSection } from "@/components/hero-section"
import { Navigation } from "@/components/navigation"
import { SkillsFlipSection } from "@/components/skills-flip-section"
import { LoadingScreen } from "@/components/loading-screen"
import { Suspense } from "react"
import { Loader } from "@/components/ui/loader"

const AboutSection = dynamic(
  () => import("@/components/about-section").then((mod) => ({ default: mod.AboutSection })),
  {
    loading: () => (
      <div className="h-96 flex items-center justify-center">
        <Loader />
      </div>
    ),
  },
)

const SkillsSection = dynamic(
  () => import("@/components/skills-section").then((mod) => ({ default: mod.SkillsSection })),
  {
    loading: () => (
      <div className="h-96 flex items-center justify-center">
        <Loader />
      </div>
    ),
  },
)

const EnhancedProjects = dynamic(
  () => import("@/components/enhanced-projects").then((mod) => ({ default: mod.EnhancedProjects })),
  {
    loading: () => (
      <div className="h-96 flex items-center justify-center">
        <Loader />
      </div>
    ),
  },
)

const AchievementsSection = dynamic(
  () => import("@/components/achievements-section").then((mod) => ({ default: mod.AchievementsSection })),
  {
    loading: () => (
      <div className="h-96 flex items-center justify-center">
        <Loader />
      </div>
    ),
  },
)

const ContactSection = dynamic(
  () => import("@/components/contact-section").then((mod) => ({ default: mod.ContactSection })),
  {
    loading: () => (
      <div className="h-96 flex items-center justify-center">
        <Loader />
      </div>
    ),
  },
)

const Footer = dynamic(() => import("@/components/footer").then((mod) => ({ default: mod.Footer })), {
  loading: () => (
    <div className="h-32 flex items-center justify-center">
      <Loader />
    </div>
  ),
})

const ScrollToTop = dynamic(() => import("@/components/scroll-to-top").then((mod) => ({ default: mod.ScrollToTop })))

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <LoadingScreen />
      <Navigation />

      <HeroSection />

      <Suspense
        fallback={
          <div className="h-32 flex items-center justify-center">
            <Loader />
          </div>
        }
      >
        <SkillsFlipSection />
      </Suspense>

      <Suspense
        fallback={
          <div className="h-96 flex items-center justify-center">
            <Loader />
          </div>
        }
      >
        <AboutSection />
      </Suspense>

      <Suspense
        fallback={
          <div className="h-96 flex items-center justify-center">
            <Loader />
          </div>
        }
      >
        <SkillsSection />
      </Suspense>

      <Suspense
        fallback={
          <div className="h-96 flex items-center justify-center">
            <Loader />
          </div>
        }
      >
        <EnhancedProjects />
      </Suspense>

      <Suspense
        fallback={
          <div className="h-96 flex items-center justify-center">
            <Loader />
          </div>
        }
      >
        <AchievementsSection />
      </Suspense>

      <Suspense
        fallback={
          <div className="h-96 flex items-center justify-center">
            <Loader />
          </div>
        }
      >
        <ContactSection />
      </Suspense>

      <Suspense
        fallback={
          <div className="h-32 flex items-center justify-center">
            <Loader />
          </div>
        }
      >
        <Footer />
      </Suspense>

      <ScrollToTop />

      <Suspense fallback={null}>
        <div className="fixed bottom-0 right-0 z-50">{/* Toaster will be loaded when needed */}</div>
      </Suspense>
    </main>
  )
}
