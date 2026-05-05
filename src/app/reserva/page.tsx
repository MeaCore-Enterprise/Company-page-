'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarDays, Clock, Video, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ReservaPage() {
  return (
    <div className="min-h-screen bg-background pt-24 pb-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[10%] left-[30%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 text-sm font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full mb-6">
            Consulta Gratuita
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent pb-4">
            Reserva una Asesoría
          </h1>
          <p className="mt-4 text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Agenda una videollamada con nuestro equipo técnico para analizar tu proyecto, descubrir cómo podemos ayudarte y definir el siguiente paso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Info Section */}
          <div className="flex flex-col gap-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">¿Qué incluye la sesión?</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <p className="text-muted-foreground">Análisis de viabilidad técnica para tu idea o proyecto actual.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <p className="text-muted-foreground">Recomendaciones de arquitectura y tecnologías (Web, Móvil, IA).</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <p className="text-muted-foreground">Estimación de tiempos y propuesta de modelo de trabajo.</p>
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="p-3 bg-muted rounded-full">
                  <Clock className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Duración</h4>
                  <p>30 Minutos</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="p-3 bg-muted rounded-full">
                  <Video className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Formato</h4>
                  <p>Videollamada (Google Meet / Zoom)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form / Booking Section */}
          <Card className="relative overflow-hidden border-primary/20 shadow-[0_0_40px_-15px_rgba(var(--primary),0.3)]">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40" />
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <CalendarDays className="w-6 h-6 text-primary" />
                Agendar ahora
              </CardTitle>
              <CardDescription className="text-base">
                Déjanos tus datos y nos pondremos en contacto en menos de 24 horas para coordinar la fecha y hora exacta.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="flex flex-col gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="Ej. Juan Pérez"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="tu@empresa.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="topic" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    ¿De qué trata tu proyecto?
                  </label>
                  <textarea
                    id="topic"
                    className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                    placeholder="Necesito desarrollar una aplicación móvil para..."
                    required
                  />
                </div>
                <Button type="button" className="w-full mt-2 font-semibold" size="lg" onClick={() => alert("Tu solicitud ha sido enviada. Te contactaremos pronto.")}>
                  Solicitar Reserva <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <p className="text-xs text-center text-muted-foreground mt-2">
                  Al solicitar la reserva, aceptas nuestra política de privacidad.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
