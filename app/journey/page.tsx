import { Navigation } from "@/components/navigation"
import { Timeline } from "@/components/timeline"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Footer } from "@/components/footer";

export default function JourneyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <Button variant="ghost" asChild className="mb-6">
                <Link href="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>

              <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-balance">My Journey</h1>
              <p className="text-xl text-muted-foreground text-pretty">
                From web development to data analytics - my professional and educational path
              </p>
            </div>

            {/* Timeline */}
            <Timeline />
          </div>
        </div>
      </div>

      <ScrollToTop />

      <Footer />
    </main>
  )
}
