import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative w-full">
      {/* Hero Image with Overlay */}
      <div className="relative h-[600px] md:h-[700px] w-full overflow-hidden">
        <img
          src="/peaceful-nature-landscape-with-soft-morning-light-.jpg"
          alt="Peaceful landscape"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-background" />

        {/* Hero Content */}
        <div className="relative container mx-auto px-4 lg:px-8 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 max-w-4xl text-balance">
            Honoring Lives with Compassion and Dignity
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            {
              "Providing respectful funeral and burial services for families and corporate clients across Nigeria with care, dignity, and understanding."
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-[oklch(0.65_0.15_85)] text-foreground hover:bg-[oklch(0.60_0.15_85)]">
              Contact Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 backdrop-blur"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
