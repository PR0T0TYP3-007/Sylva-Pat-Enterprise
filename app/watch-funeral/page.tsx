"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Play } from "lucide-react"
import { useState } from "react"

const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@ofodumsylvanusobinna5946"

const videos = [
  {
    id: "W1_mfULGBNc",
    title: "Funeral Service Recording",
  },
  {
    id: "ZBf5XZTvGaM",
    title: "Funeral Service Recording",
  },
  {
    id: "f0woAVagxJI",
    title: "Funeral Service Recording",
  },
  {
    id: "9KLDmVOsmjQ",
    title: "Funeral Service Recording",
  },
]

function VideoCard({ video }: { video: { id: string; title: string } }) {
  const [playing, setPlaying] = useState(false)

  return (
    <Card className="border-border overflow-hidden bg-background hover:shadow-lg transition-shadow">
      <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
        {playing ? (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 w-full h-full group cursor-pointer"
          >
            <img
              src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
              alt={video.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-[oklch(0.65_0.15_85)] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play className="w-7 h-7 text-foreground ml-1" fill="currentColor" />
              </div>
            </div>
          </button>
        )}
      </div>
    </Card>
  )
}

export default function WatchFuneralPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Banner */}
      <section className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-light text-foreground mb-6 text-balance">
              Watch Funeral Services
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Browse recordings of past funeral services. These videos preserve the memory of our departed loved ones
              and allow family and friends to revisit these meaningful moments.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-6xl mx-auto">

            {/* Main Featured Video */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-light text-foreground mb-8 text-center">
                Latest Service Videos
              </h2>
              <div className="max-w-4xl mx-auto">
                <div className="relative w-full rounded-xl overflow-hidden shadow-2xl ring-1 ring-border" style={{ paddingBottom: "56.25%" }}>
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${videos[0].id}?rel=0`}
                    title="Featured Funeral Service"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>

            {/* More Videos Grid */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-light text-foreground mb-4 text-center">
                More Recordings
              </h2>
              <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Click on any video to watch the full service recording.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.slice(1).map((video) => (
                  <VideoCard key={video.id} video={video} />
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <Card className="border-border bg-secondary/30 max-w-2xl mx-auto">
                <CardContent className="p-8 md:p-12">
                  <h3 className="text-xl md:text-2xl font-light text-foreground mb-4">
                    View All Videos on YouTube
                  </h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Visit our YouTube channel to browse all recorded funeral services, memorial ceremonies,
                    and celebration of life events.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href={YOUTUBE_CHANNEL_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-md bg-[oklch(0.65_0.15_85)] text-foreground px-8 py-3 text-base font-medium hover:bg-[oklch(0.60_0.15_85)] transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Visit YouTube Channel
                    </a>
                    <a
                      href="/#contact"
                      className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-8 py-3 text-base font-medium hover:bg-primary/90 transition-colors"
                    >
                      Request Live Streaming
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
