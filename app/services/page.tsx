import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Car, Music, HeartHandshake, UtensilsCrossed, Camera, FileText, Video, Clock, Globe } from "lucide-react"

const services = [
  {
    icon: Users,
    title: "Pallbearers (Dressed to Specification)",
    description:
      "Fully trained and experienced professionals dressed in suits or traditional attires to walk beside the hearse, control the sympathizers when paying their last respect and carrying the casket where and when necessary to compliment the occasion.",
  },
  {
    icon: Car,
    title: "Hearse Services",
    description:
      "We have various luxury brands in our fleet of hearse like Executive Lincoln Jeep, R. Class 4matic Benz, Escalade Jeep, Hummer Jeep, Lincoln Navigator Jeep, Cadillac Limousine, Mercedes Benz, Bike Escort Service, Volvo amongst others.",
  },
  {
    icon: Music,
    title: "Mobile Brass Band and Live Band",
    description:
      "Professional musicians trained in the art of special melodic funeral music to make the burial a memorable one.",
  },
  {
    icon: HeartHandshake,
    title: "Professional Mourners",
    description:
      "Professionals in the area of sharing grievance and emotional pain of the deceased by crying and other ways of showing emotional pain during funeral service.",
  },
  {
    icon: UtensilsCrossed,
    title: "Catering Service",
    description: "We offer catering service. Our catering service also maintain any standard you want.",
  },
  {
    icon: Camera,
    title: "Photography and Video Recording",
    description:
      "We have experienced videographers and photographers that will provide you with professional shots that captures special moments during the funeral and delivered to you in any format of your choice.",
  },
  {
    icon: FileText,
    title: "Publications and Announcements",
    description:
      "We have professional graphic artists and copywriters that can create befitting obituary posters and announcements, IV Cards, Order-of-service, thank-you cards, etc for prints and electronic media.",
  },
]

const streamingFeatures = [
  {
    icon: Video,
    title: "Live Streaming",
    description:
      "High-quality video and audio streaming of the funeral service in real-time. Share a private link with family and friends who cannot attend in person.",
  },
  {
    icon: Clock,
    title: "Recorded Service",
    description:
      "Access a recorded version of the service to watch later. Perfect for those in different time zones or who need time to process their grief before viewing.",
  },
  {
    icon: Globe,
    title: "Global Access",
    description:
      "Connect with loved ones anywhere in the world. Our streaming service works on all devices - computers, tablets, and smartphones with a secure internet connection.",
  },
  {
    icon: Users,
    title: "Easy to Use",
    description:
      "No technical knowledge required. We provide simple instructions and a secure link. Click to watch - it's that easy. Technical support available if needed.",
  },
]

const streamingSteps = [
  { step: 1, title: "Book the Service", description: "Let us know you'd like live streaming when arranging the funeral." },
  { step: 2, title: "Receive the Link", description: "We'll provide a secure, private link to share with your guests." },
  { step: 3, title: "Watch Together", description: "Guests click the link at the scheduled time to watch the live service." },
  { step: 4, title: "Access Recording", description: "A recording is available for 30 days after the service." },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Main Services Section */}
      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-light text-foreground mb-6 text-balance">Our Funeral Services</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We offer sensitive and compassionate burial arrangements. We also offer personalized services, including
              the casket, to reflect your loved ones' lifestyle, religion, tradition, profession, organizational
              affiliation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              At SYLVA-PAT Enterprises, our Funeral Directors will help you coordinate all the details required no
              matter what size during this time. Most importantly, our Funeral Directors will assist you in planning a
              personal and meaningful burial ceremony to begin the healing process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow bg-background">
                  <CardContent className="p-8">
                    <div className="mb-4">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Live Streaming & Recording Services Section */}
      <section className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light text-foreground mb-6 text-balance">
              Watch Funeral Services
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Unable to attend in person? We offer live streaming services so family and friends around the world can
              participate in the funeral service and pay their respects from anywhere.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            {streamingFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="border-border hover:shadow-lg transition-shadow bg-background">
                  <CardContent className="p-8">
                    <div className="mb-4">
                      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[oklch(0.65_0.15_85)]/10">
                        <Icon className="w-7 h-7 text-[oklch(0.65_0.15_85)]" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {/* How It Works */}
          <div className="max-w-3xl mx-auto">
            <Card className="border-border bg-secondary/30">
              <CardContent className="p-8 md:p-12">
                <h3 className="text-2xl md:text-3xl font-light text-foreground mb-8 text-center">How It Works</h3>
                <div className="space-y-6">
                  {streamingSteps.map((item) => (
                    <div key={item.step} className="flex gap-4 items-start">
                      <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[oklch(0.65_0.15_85)]/15 flex items-center justify-center text-[oklch(0.65_0.15_85)] font-semibold text-lg">
                        {item.step}
                      </span>
                      <div>
                        <p className="text-foreground font-semibold mb-1">{item.title}</p>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-border text-center">
                  <p className="text-lg text-muted-foreground mb-6">
                    Interested in live streaming for an upcoming service?
                  </p>
                  <a
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-md bg-[oklch(0.65_0.15_85)] text-foreground px-8 py-3 text-base font-medium hover:bg-[oklch(0.60_0.15_85)] transition-colors"
                  >
                    Contact Us to Learn More
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
