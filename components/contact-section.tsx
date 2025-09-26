"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Linkedin, Mail, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "./ui/toaster"
import { motion } from "framer-motion"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    const form = e.target
    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    }
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!response.ok) throw new Error('Network response was not ok')
      toast({
        title: 'Success',
        description: 'Your message has been sent successfully.',
      })
      form.reset()
    } catch (error) {
      toast({
        title: 'Error',
        description: 'There was a problem sending your message. Please try again later.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Let's connect for opportunities, mentoring, or collaboration
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Contact Info Side */}
          <div className="space-y-8">
            <motion.div
              whileHover={{ scale: 1.04, boxShadow: "0 4px 24px rgba(99,102,241,0.20)" }}
              className="bg-white/90 dark:bg-neutral-900/90 rounded-xl p-7 shadow transition-all border"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">mjshubhampawar21@gmail.com</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.04, boxShadow: "0 4px 24px rgba(59,130,246,0.13)" }}
              className="bg-white/90 dark:bg-neutral-900/90 rounded-xl p-7 shadow transition-all border"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Linkedin className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">LinkedIn</h3>
                  <Button variant="link" className="p-0 h-auto font-semibold transition-colors hover:text-primary" asChild>
                    <a href="https://linkedin.com/in/mjshubham21" target="_blank" rel="noopener noreferrer">
                      Connect with me
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03, boxShadow: "0 2px 16px rgba(59,130,246,0.08)" }}
              className="bg-white/95 dark:bg-neutral-900/95 rounded-xl p-7 shadow border"
            >
              <h3 className="font-semibold mb-3">Open to opportunities in:</h3>
              <ul className="space-y-2 text-muted-foreground text-base">
                <li>• Data Analyst positions</li>
                <li>• Business Intelligence roles</li>
                <li>• Freelance data projects</li>
                <li>• Mentoring and collaboration</li>
              </ul>
            </motion.div>
          </div>

          {/* Contact Form Side */}
          <motion.div
            whileHover={{ scale: 1.02, boxShadow: "0 6px 28px rgba(99,102,241,0.16)" }}
            className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg transition-all border p-8"
          >
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  autoComplete="name"
                  required
                  className="border-2 border-border focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="border-2 border-border focus:border-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me about your project or opportunity..."
                  className="border-2 border-border focus:border-primary transition-colors resize-none"
                />
              </div>
              <motion.div
                whileHover={{ scale: 1.04, boxShadow: "0 1px 16px rgba(59,130,246,0.17)" }}
              >
                <Button
                  type="submit"
                  className="w-full font-semibold text-base py-3 transition-all bg-primary hover:bg-primary/80 flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
      <Toaster />
    </section>
  )
}
