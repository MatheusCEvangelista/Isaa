"use client"

import { useState } from "react"
import Image from "next/image"
import { Heart, Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Photo {
  id: number
  src: string
  alt: string
}

const placeholderPhotos: Photo[] = [
  { id: 1, src: "/photos/WhatsApp Image 2026-03-17 at 23.31.07 (1).jpeg", alt: "Nosso momento especial 1" },
  { id: 2, src: "/photos/WhatsApp Image 2026-03-17 at 23.31.07.jpeg", alt: "Nosso momento especial 2" },
  { id: 3, src: "/photos/WhatsApp Image 2026-03-17 at 23.31.08 (1).jpeg", alt: "Nosso momento especial 3" },
  { id: 4, src: "/photos/WhatsApp Image 2026-03-17 at 23.31.08 (2).jpeg", alt: "Nosso momento especial 4" },
  { id: 5, src: "/photos/WhatsApp Image 2026-03-17 at 23.31.08.jpeg", alt: "Nosso momento especial 5" },
  { id: 6, src: "/photos/IMG-20260329-WA0043.jpg", alt: "Nosso momento especial 6" },
]

export function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)

  return (
    <>
      <section className="px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          {placeholderPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all hover:scale-[1.02] bg-muted"
            >
             
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary/10 to-accent/30">
                <Heart className="w-12 h-12 text-primary/40" />
                <span className="text-sm text-muted-foreground mt-2">Foto {photo.id}</span>
              </div>
              
             
              { <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
              /> }
              
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity fill-current" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Por enquanto é isso <code className="bg-muted px-2 py-1 rounded">#café</code>
          </p>
        </div>
      </section>

     
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-4xl w-full aspect-square md:aspect-video rounded-2xl overflow-hidden bg-muted">
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary/20 to-accent/40">
              <Heart className="w-24 h-24 text-primary" />
              <span className="text-xl text-foreground mt-4">{selectedPhoto.alt}</span>
            </div>
            { <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              fill
              className="object-contain"
            /> }
          </div>  
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-primary-foreground bg-primary/50 hover:bg-primary"
            onClick={() => setSelectedPhoto(null)}
          >
            <X className="w-6 h-6" />
          </Button>
        </div>
      )}
    </>
  )
}
