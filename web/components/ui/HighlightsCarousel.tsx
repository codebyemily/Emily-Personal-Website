"use client"
import { useState } from "react"
import Image, { StaticImageData } from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import OmiDevices from "@/public/images/OmiDevices.jpg"
import OmiEvent from "@/public/images/OmiEvent.jpg"

// ─── ADD MORE HIGHLIGHTS HERE ───────────────────────────────────────────────
// Each entry needs:
//   text   – the description shown above the images
//   images – an array of images; all images display side by side at once.
//            Import images at the top of this file, or use string paths
//            like "/images/my-photo.jpg"
const highlights: { text: string; images: (StaticImageData | string)[] }[] = [
  {
    text: "Hosting the Omi Info Session at RCC, GWC, and AI/ML Club at SJSU!",
    images: [OmiDevices, OmiEvent],
  },
  // {
  //   text: "I recently became an Omi ambassador! I will be hosting a series of events at RCC and giving away these Omi devices!",
  //   images: [OmiDevices],
  // },
  // Example of a second entry – replace with your own:
  // {
  //   text: "Describe your second highlight here.",
  //   images: [MyImage1, MyImage2],
  // },
]
// ────────────────────────────────────────────────────────────────────────────

export function HighlightsCarousel() {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((i) => (i - 1 + highlights.length) % highlights.length)
  const next = () => setIndex((i) => (i + 1) % highlights.length)

  const { text, images } = highlights[index]

  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="flex flex-col items-center gap-4 flex-1">
        <p className="text-sm text-center">{text}</p>

        {/* All images displayed side by side */}
        <div className="flex gap-2 w-full">
          {images.map((img, i) => (
            <div key={i} className="relative flex-1 h-48 min-w-0">
              <Image
                src={img}
                fill
                alt={`Highlight image ${i + 1}`}
                className="rounded-xl object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Highlight prev/next */}
      {highlights.length > 1 && (
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="p-1 rounded-full hover:bg-accent/50 transition-colors"
            aria-label="Previous highlight"
          >
            <ChevronLeft className="h-5 w-5 text-muted-foreground" />
          </button>

          <span className="text-xs text-muted-foreground">
            {index + 1} / {highlights.length}
          </span>

          <button
            onClick={next}
            className="p-1 rounded-full hover:bg-accent/50 transition-colors"
            aria-label="Next highlight"
          >
            <ChevronRight className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>
      )}
    </div>
  )
}
