"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, CheckCircle, Loader2 } from "lucide-react"
import { useState, type FormEvent } from "react"

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("sending")
    setErrorMessage("")

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setStatus("success")
        form.reset()
      } else {
        setStatus("error")
        setErrorMessage(data.message || "Failed to send message. Please try again.")
      }
    } catch {
      setStatus("error")
      setErrorMessage("Something went wrong. Please try again later.")
    }
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light text-foreground mb-4 text-balance">We Are Here for You</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {"Reach out to us anytime. We're available 24/7 to provide support and answer your questions."}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border">
            <CardContent className="p-8">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="w-16 h-16 text-green-600 mb-4" />
                  <h3 className="text-2xl font-semibold text-foreground mb-2">Message Sent</h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out. We will get back to you as soon as possible.
                  </p>
                  <Button
                    onClick={() => setStatus("idle")}
                    variant="outline"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="access_key" value="dcb27caa-97d7-4a0d-a869-81ee4f26ae10" />
                <input type="hidden" name="subject" value="New Message from SYLVA-PAT Website" />
                <input type="hidden" name="from_name" value="SYLVA-PAT Website Contact Form" />

                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                    Full Name
                  </label>
                  <Input id="name" name="name" placeholder="Enter your full name" required />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-foreground">
                    Phone Number
                  </label>
                  <Input id="phone" name="phone" type="tel" placeholder="+234 803 668 1993" required />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                    Message
                  </label>
                  <Textarea id="message" name="message" placeholder="How can we help you?" rows={5} required />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-600">{errorMessage}</p>
                )}

                <Button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-[oklch(0.65_0.15_85)] text-foreground hover:bg-[oklch(0.60_0.15_85)]"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
              )}
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[oklch(0.65_0.15_85)]/10">
                  <Phone className="w-5 h-5 text-[oklch(0.65_0.15_85)]" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Phone</h3>
                <p className="text-muted-foreground">+234 803 668 1993</p>
                <p className="text-muted-foreground">+234 803 359 3159</p>
                <p className="text-muted-foreground">+234 805 463 5671</p>
                <p className="text-muted-foreground">+234 708 468 3633</p>
                <p className="text-muted-foreground">+234 817 787 1725</p>
                <p className="text-sm text-muted-foreground mt-1">Available 24/7</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[oklch(0.65_0.15_85)]/10">
                  <Mail className="w-5 h-5 text-[oklch(0.65_0.15_85)]" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground">info@sylvapat.com</p>
                <p className="text-muted-foreground">enquiry@sylvapat.com</p>
                <p className="text-sm text-muted-foreground mt-1">We respond within 24 hours</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[oklch(0.65_0.15_85)]/10">
                  <MapPin className="w-5 h-5 text-[oklch(0.65_0.15_85)]" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Head Office</h3>
                <p className="text-muted-foreground">
                  1-2 CMO Plaza, Regina Caeli Hospital Road
                  <br />
                  Awka, Anambra State, Nigeria
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[oklch(0.65_0.15_85)]/10">
                  <Clock className="w-5 h-5 text-[oklch(0.65_0.15_85)]" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Hours</h3>
                <p className="text-muted-foreground">
                  Office: Mon-Sat 8:00 AM - 6:00 PM
                  <br />
                  Emergency Services: 24/7
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-16 border-t border-border">
          <h3 className="text-2xl font-light text-center mb-8">Our Branches</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <h4 className="font-semibold mb-2">Awka Branch</h4>
              <p className="text-sm text-muted-foreground">
                Shop 54, CMO Plaza, Regina Caeli Hospital Road, Awka, Anambra State
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">Adazi-Ani Branch</h4>
              <p className="text-sm text-muted-foreground">
                Nkpuota Junction, Adazi-Ani, Aniocha L.G.A., Anambra State
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold mb-2">Uga Branch</h4>
              <p className="text-sm text-muted-foreground">
                Christ the King Plaza, Nnewi Road, Uga, Aguata L.G.A., Anambra State
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
