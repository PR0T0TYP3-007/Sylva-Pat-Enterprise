import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Flower2, FileText } from "lucide-react"

const services = [
  {
    icon: Heart,
    title: "Traditional Funeral Services",
    description:
      "Complete traditional funeral arrangements with viewing, ceremony, and burial services tailored to your family's wishes and traditions.",
  },
  {
    icon: Flower2,
    title: "Memorial Services",
    description:
      "Personalized memorial celebrations that honor your loved one's unique life story and legacy in a meaningful way.",
  },
  {
    icon: Users,
    title: "Pre-Planning Services",
    description:
      "Take the burden off your family by planning ahead. We guide you through every decision with care and clarity.",
  },
  {
    icon: FileText,
    title: "Grief Support",
    description:
      "Compassionate counseling and support resources to help families navigate the grieving process with understanding.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-light text-foreground mb-4 text-balance">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive funeral services designed to honor your loved one and support your family through every step
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                      <Icon className="w-6 h-6 text-primary" />
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
  )
}
