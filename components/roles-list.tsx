"use client"

import { useState, useEffect } from "react"
import { Plus, MapPin, Trash2, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Role {
  id: string
  titulo: string
  data: string
  criadoEm: number
}

export function RolesList() {
  const [roles, setRoles] = useState<Role[]>([])
  const [novoTitulo, setNovoTitulo] = useState("")
  const [novaData, setNovaData] = useState("")
  const [mostrarForm, setMostrarForm] = useState(false)

  
  useEffect(() => {
    const rolesSalvos = localStorage.getItem("nossos-roles")
    if (rolesSalvos) {
      setRoles(JSON.parse(rolesSalvos))
    }
  }, [])


  useEffect(() => {
    localStorage.setItem("nossos-roles", JSON.stringify(roles))
  }, [roles])

  const adicionarRole = () => {
    if (!novoTitulo.trim()) return

    const novoRole: Role = {
      id: Date.now().toString(),
      titulo: novoTitulo.trim(),
      data: novaData || "Data a definir",
      criadoEm: Date.now(),
    }

    setRoles([novoRole, ...roles])
    setNovoTitulo("")
    setNovaData("")
    setMostrarForm(false)
  }

  const removerRole = (id: string) => {
    setRoles(roles.filter((role) => role.id !== id))
  }

  return (
    <section className="py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground flex items-center gap-2">
            <MapPin className="w-6 h-6 text-primary" />
            Nossos Rolês
          </h2>
          <Button
            onClick={() => setMostrarForm(!mostrarForm)}
            className="bg-primary hover:bg-primary/90"
          >
            <Plus className="w-4 h-4 mr-1" />
            Adicionar
          </Button>
        </div>

        {mostrarForm && (
          <div className="bg-card border border-border rounded-xl p-4 mb-6 animate-in slide-in-from-top-2 duration-200">
            <h3 className="font-semibold text-foreground mb-3">Novo Rolê</h3>
            <div className="space-y-3">
              <Input
                type="text"
                placeholder="Ex: tomar uma no bar da esquina"
                value={novoTitulo}
                onChange={(e) => setNovoTitulo(e.target.value)}
                className="w-full"
                onKeyDown={(e) => e.key === "Enter" && adicionarRole()}
              />
              <Input
                type="text"
                placeholder="Data (opcional) - Ex: 28/02/2026 Lembra dessa?"
                value={novaData}
                onChange={(e) => setNovaData(e.target.value)}
                className="w-full"
              />
              <div className="flex gap-2">
                <Button onClick={adicionarRole} className="flex-1">
                  Salvar
                </Button>
                <Button
                  onClick={() => setMostrarForm(false)}
                  variant="outline"
                  className="flex-1"
                >
                  Cancelar
                </Button>
              </div>
            </div>
          </div>
        )}


        {roles.length === 0 ? (
          <div className="text-center py-12 bg-card border border-border rounded-xl">
            <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground">
              Nenhum rolê adicionado ainda.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Clique em "Adicionar" para criar o primeiro!
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {roles.map((role) => (
              <div
                key={role.id}
                className="bg-card border border-border rounded-xl p-4 flex items-center justify-between hover:shadow-md transition-shadow"
              >
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{role.titulo}</h3>
                  <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                    <Calendar className="w-3 h-3" />
                    {role.data}
                  </p>
                </div>
                <Button
                  onClick={() => removerRole(role.id)}
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground hover:text-destructive"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        )}

        <p className="text-xs text-muted-foreground text-center mt-4">
          Os rolês ficam salvos só com você então não da pra todo mundo ver
        </p>
      </div>
    </section>
  )
}