"use client"

import { useState } from "react"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PhotoGallery } from "@/components/photo-gallery"
import { RolesList } from "@/components/roles-list"

export default function Home() {
  const [showResult, setShowResult] = useState(false)
  const [otherButtonText, setOtherButtonText] = useState("Outro")

  const handleMatheusClick = () => {
    setShowResult(true)
  }

  const handleOutroClick = () => {
    setOtherButtonText("Matheus")
    setTimeout(() => {
      setShowResult(true)
    }, 300)
  }

  const handleReset = () => {
    setShowResult(false)
    setOtherButtonText("Outro")
  }

  if (showResult) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
        <div className="animate-in zoom-in-50 duration-500 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Heart className="w-12 h-12 md:w-20 md:h-20 text-primary fill-primary animate-pulse" />
            <h1 className="text-6xl md:text-9xl font-bold text-primary">
              Matheus
            </h1>
            <Heart className="w-12 h-12 md:w-20 md:h-20 text-primary fill-primary animate-pulse" />
          </div>
          <p className="text-xl md:text-3xl text-muted-foreground mb-8">
            A resposta sempre será Matheus! 💕
          </p>
          <Button 
            onClick={handleReset}
            variant="outline"
            className="text-lg px-8 py-6"
          >
            Voltar
          </Button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <header className="py-8 md:py-12 text-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <Heart className="w-8 h-8 text-primary fill-primary" />
          <h1 className="text-3xl md:text-5xl font-bold text-foreground">
            Nós dois!
          </h1>
          <Heart className="w-8 h-8 text-primary fill-primary" />
        </div>
        <p className="text-muted-foreground text-lg">
          Momentos juntos
        </p>
      </header>

    
      <PhotoGallery />

      <RolesList />
      
      <section className="py-12 md:py-20 px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-8">
            Você quer ficar com quem?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleMatheusClick}
              className="text-xl px-10 py-8 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              <Heart className="w-5 h-5 mr-2 fill-current" />
              Matheus
            </Button>
            
            <Button 
              onClick={handleOutroClick}
              variant="outline"
              className="text-xl px-10 py-8 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all hover:scale-105"
            >
              {otherButtonText}
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center border-t border-border">
        <p className="text-muted-foreground flex items-center justify-center gap-2">
          Feito com <Heart className="w-4 h-4 text-primary fill-primary" /> para nós dois
        </p>
      </footer>
    </main>
  )
}
