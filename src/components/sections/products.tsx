'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Gamepad2, Sparkles, Code2, ExternalLink } from 'lucide-react';
import { useI18n } from '@/locales/client';

export default function Products() {
  const t = useI18n();

  const products = [
    {
      icon: <Gamepad2 className="h-12 w-12 text-primary drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />,
      title: t('products.cards.0.title'),
      description: t('products.cards.0.description'),
      link: 'https://meacorelauncher.keyler-ender-777.workers.dev/',
      featured: true,
    },
    {
      icon: <Code2 className="h-10 w-10 text-muted-foreground/50" />,
      title: t('products.cards.1.title'),
      description: t('products.cards.1.description'),
      featured: false,
    },
    {
      icon: <Sparkles className="h-10 w-10 text-muted-foreground/50" />,
      title: t('products.cards.2.title'),
      description: t('products.cards.2.description'),
      featured: false,
    },
  ];
  
  return (
    <section id="products" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent pb-2">{t('products.title')}</h2>
          <p className="mt-6 text-xl text-muted-foreground leading-relaxed">
            {t('products.description')}
          </p>
          <p className="mt-2 text-muted-foreground font-medium">{t('products.subDescription')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <a 
              key={idx} 
              href={product.link || '#'} 
              target={product.link ? "_blank" : "_self"} 
              rel={product.link ? "noopener noreferrer" : ""} 
              className={`group block h-full ${product.link ? "cursor-pointer" : "cursor-default pointer-events-none"}`}
            >
              <Card className={`relative h-full overflow-hidden transition-all duration-500 bg-card/50 backdrop-blur-sm border-border/50
                ${product.featured 
                  ? 'hover:shadow-[0_0_40px_-10px_hsl(var(--primary))] hover:border-primary/50 hover:-translate-y-2' 
                  : 'opacity-70 grayscale-[50%] hover:grayscale-0 hover:opacity-100'
                }
              `}>
                {product.featured && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                )}
                
                <CardHeader className="pb-4 relative z-10">
                  <div className={`mx-auto p-4 rounded-2xl w-fit mb-6 transition-transform duration-500
                    ${product.featured ? 'bg-primary/10 group-hover:scale-110 group-hover:bg-primary/20' : 'bg-muted'}
                  `}>
                    {product.icon}
                  </div>
                  <CardTitle className={`text-2xl font-bold flex items-center justify-center gap-2 ${product.featured ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {product.title}
                    {product.featured && <ExternalLink className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-primary" />}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className={`text-center leading-relaxed ${product.featured ? 'text-muted-foreground' : 'text-muted-foreground/70'}`}>
                    {product.description}
                  </p>
                  
                  {product.featured && (
                    <div className="mt-8 flex justify-center">
                      <span className="inline-flex items-center text-sm font-semibold text-primary">
                        Explorar Launcher
                        <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </span>
                    </div>
                  )}
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
