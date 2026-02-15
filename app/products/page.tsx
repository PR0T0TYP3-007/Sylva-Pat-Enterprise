import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

const casketDesigns = [
  {
    name: "Classic Mahogany",
    description: "Rich mahogany wood with polished brass handles",
    image: "/luxurious-mahogany-wooden-casket-with-brass-handle.jpg",
  },
  {
    name: "Oak Traditional",
    description: "Solid oak with carved details and satin interior",
    image: "/elegant-oak-wooden-casket-with-carved-details.jpg",
  },
  {
    name: "Rosewood Premium",
    description: "Premium rosewood with gold accents",
    image: "/premium-rosewood-casket-with-gold-accents.jpg",
  },
  {
    name: "Steel Elegant",
    description: "Brushed steel with modern design elements",
    image: "/modern-brushed-steel-casket.jpg",
  },
  {
    name: "Bronze Classic",
    description: "Solid bronze with intricate corner designs",
    image: "/classic-bronze-casket-with-corner-designs.jpg",
  },
  {
    name: "White Pearl",
    description: "White finish with pearl accents and silk interior",
    image: "/elegant-white-pearl-casket-with-silk-interior.jpg",
  },
]

const artificialFlowers = [
  {
    name: "Eternal Rose Spray",
    description: "Luxurious silk roses in cream and gold",
    image: "/luxury-silk-rose-funeral-spray-arrangement-cream-g.jpg",
  },
  {
    name: "Golden Lily Display",
    description: "Elegant artificial lilies with gold ribbon",
    image: "/elegant-artificial-lily-funeral-arrangement-with-g.jpg",
  },
  {
    name: "Classic Wreath",
    description: "Traditional circular wreath with mixed silk flowers",
    image: "/classic-funeral-wreath-with-silk-flowers.jpg",
  },
  {
    name: "Standing Cross",
    description: "White silk flowers arranged in cross shape",
    image: "/white-silk-flower-standing-cross-funeral-arrangeme.jpg",
  },
]

const liveFlowers = [
  {
    name: "White Rose Casket Spray",
    description: "Premium white roses with eucalyptus accents",
    image: "/premium-white-rose-casket-spray-with-eucalyptus.jpg",
  },
  {
    name: "Mixed Lily Arrangement",
    description: "Fresh lilies in white and cream tones",
    image: "/fresh-white-and-cream-lily-funeral-arrangement.jpg",
  },
  {
    name: "Sympathy Standing Spray",
    description: "Tall arrangement with roses, lilies, and carnations",
    image: "/tall-sympathy-standing-spray-with-roses-and-lilies.jpg",
  },
  {
    name: "Garden Tribute",
    description: "Seasonal flowers in soft pastels",
    image: "/soft-pastel-garden-flowers-funeral-tribute-arrange.jpg",
  },
]

const funeralCars = [
  {
    name: "Classic Hearse",
    description: "Traditional black hearse with glass viewing panels",
    image: "/classic-black-funeral-hearse-with-glass-panels.jpg",
  },
  {
    name: "Cadillac Escalade",
    description: "Luxury black Cadillac Escalade for executive funeral processions",
    image: "/Escalade.JPG",
  },
  {
    name: "Hummer Jeep",
    description: "Bold and commanding black Hummer for distinguished funeral convoys",
    image: "/Hummer.JPG",
  },
  {
    name: "Black Suburban",
    description: "Spacious and elegant black Suburban for family transportation during funeral services",
    image: "/Suburban.JPG",
  },
]

export default function ProductsPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="py-24 md:py-32 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-light text-foreground mb-6 text-balance">Funeral Products</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We offer a wide range of quality funeral products to help you create a meaningful and dignified tribute to
              your loved one. Browse our selection of caskets, floral arrangements, and funeral vehicles.
            </p>
          </div>

          {/* Caskets Section */}
          <div className="mb-24">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 text-center">Casket Designs</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Choose from our selection of premium caskets in various materials and finishes
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {casketDesigns.map((casket, index) => (
                <Card
                  key={index}
                  className="border-border hover:shadow-lg transition-shadow bg-background overflow-hidden"
                >
                  <img
                    src={casket.image || "/placeholder.svg"}
                    alt={casket.name}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{casket.name}</h3>
                    <p className="text-muted-foreground leading-relaxed">{casket.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Artificial Flowers Section */}
          <div className="mb-24">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 text-center">Artificial Flowers</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Long-lasting silk and artificial floral arrangements that maintain their beauty
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {artificialFlowers.map((flower, index) => (
                <Card
                  key={index}
                  className="border-border hover:shadow-lg transition-shadow bg-background overflow-hidden"
                >
                  <img
                    src={flower.image || "/placeholder.svg"}
                    alt={flower.name}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{flower.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{flower.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Live Flowers Section */}
          <div className="mb-24">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 text-center">
              Fresh Flower Arrangements
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Beautiful fresh floral tributes designed with care and compassion
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {liveFlowers.map((flower, index) => (
                <Card
                  key={index}
                  className="border-border hover:shadow-lg transition-shadow bg-background overflow-hidden"
                >
                  <img
                    src={flower.image || "/placeholder.svg"}
                    alt={flower.name}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{flower.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{flower.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Funeral Cars Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4 text-center">Funeral Vehicles</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Professional and dignified transport for your loved one and family members
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {funeralCars.map((car, index) => (
                <Card
                  key={index}
                  className="border-border hover:shadow-lg transition-shadow bg-background overflow-hidden"
                >
                  <img src={car.image || "/placeholder.svg"} alt={car.name} className="w-full h-48 object-cover" />
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{car.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{car.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-lg text-muted-foreground mb-6">
              For detailed pricing and to view our complete product catalog, please contact us or visit one of our
              locations.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-8 py-3 text-base font-medium hover:bg-primary/90 transition-colors"
            >
              Contact Us for More Information
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
