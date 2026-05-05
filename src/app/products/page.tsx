'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Gamepad2, Blocks, Cpu, ArrowRight } from 'lucide-react';

export default function Products() {
  const products = [
    {
      icon: <Gamepad2 className="h-14 w-14 text-primary drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]" />,
      title: 'MeaCore Launcher',
      description: 'El launcher de Minecraft de alto rendimiento para Linux. Totalmente optimizado, rápido, y sin anuncios para la mejor experiencia de juego.',
      href: 'https://meacorelauncher.keyler-ender-777.workers.dev/',
      featured: true,
      tag: 'Nuevo Lanzamiento'
    },
    {
      icon: <Blocks className="h-10 w-10 text-muted-foreground/40" />,
      title: 'Haker-MCP (Próximamente)',
      description: 'Un ecosistema interno diseñado para agilizar nuestro proceso de desarrollo y mejorar la gestión de proyectos.',
      href: '#',
      featured: false,
    },
    {
      icon: <Cpu className="h-10 w-10 text-muted-foreground/40" />,
      title: 'MeaCore-IA (Próximamente)',
      description: 'Aprovecha la inteligencia artificial para automatizar y optimizar procesos de negocio complejos.',
      href: '#',
      featured: false,
    },
  ];
  
  return (
    <section id="products-page" className="py-24 md:py-32 bg-background relative overflow-hidden min-h-screen">
      {/* Background elements */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-primary/5 to-transparent -z-10" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent pb-4">
            Nuestros Productos
          </h1>
          <p className="mt-4 text-xl text-muted-foreground leading-relaxed">
            No solo construimos para clientes, construimos para nosotros mismos. Descubre nuestras herramientas internas, experimentos y plataformas desarrolladas in-house.
          </p>
        </div>

        <div className="flex flex-col gap-12 max-w-5xl mx-auto">
          {products.map((product, idx) => (
            <a 
              key={idx} 
              href={product.href}
              target={product.featured ? "_blank" : "_self"}
              rel={product.featured ? "noopener noreferrer" : ""}
              className={`group block ${!product.featured && 'cursor-default pointer-events-none'}`}
            >
              <Card className={`relative overflow-hidden transition-all duration-500 bg-card/40 backdrop-blur-md border-border/40
                ${product.featured 
                  ? 'hover:shadow-[0_0_50px_-12px_hsl(var(--primary))] hover:border-primary/50 hover:-translate-y-1' 
                  : 'opacity-60 grayscale-[60%] hover:grayscale-0 hover:opacity-100'
                }
              `}>
                {product.featured && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                )}
                
                <div className="flex flex-col md:flex-row items-center p-8 gap-8 relative z-10">
                  <div className={`p-6 rounded-3xl shrink-0 transition-transform duration-500
                    ${product.featured ? 'bg-primary/10 group-hover:scale-110 group-hover:rotate-3' : 'bg-muted'}
                  `}>
                    {product.icon}
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    {product.tag && (
                      <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-primary uppercase bg-primary/10 rounded-full mb-3">
                        {product.tag}
                      </span>
                    )}
                    <CardTitle className={`text-3xl font-bold mb-4 ${product.featured ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {product.title}
                    </CardTitle>
                    <CardContent className="p-0">
                      <p className={`text-lg leading-relaxed ${product.featured ? 'text-muted-foreground' : 'text-muted-foreground/60'}`}>
                        {product.description}
                      </p>
                    </CardContent>
                  </div>
                  
                  {product.featured && (
                    <div className="shrink-0 mt-6 md:mt-0 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                      <div className="bg-primary text-primary-foreground p-4 rounded-full shadow-lg">
                        <ArrowRight className="w-6 h-6" />
                      </div>
                    </div>
                  )}
                </div>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
