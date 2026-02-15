export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
            <img
              src="/serene-garden-with-flowers-and-peaceful-atmosphere.jpg"
              alt="Our facility"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-5xl font-light text-foreground mb-6 text-balance">
              Serving Families with Care Since 1985
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                For over three decades, Serenity Funeral Services has been a pillar of support for families during their
                most difficult times. We understand that losing a loved one is never easy, and we are here to guide you
                through every step with compassion and professionalism.
              </p>
              <p>
                Our dedicated team brings together years of experience with genuine care for each family we serve. We
                believe every life deserves to be celebrated in a way that honors their unique story and brings comfort
                to those left behind.
              </p>
              <p>
                Whether you need immediate assistance or wish to plan ahead, we are here for you 24 hours a day, 7 days
                a week. Your trust in us during this difficult time is something we never take for granted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
