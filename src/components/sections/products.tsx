'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Rocket, Terminal, Zap } from 'lucide-react';
import { useI18n } from '@/locales/client';

export default function Products() {
  const t = useI18n();

  const products = [
    {
      icon: <Rocket className="h-10 w-10 text-primary" />,
      title: t('products.cards.0.title'),
      description: t('products.cards.0.description'),
      link: 'https://meacorelauncher.keyler-ender-777.workers.dev/',
    },
    {
      icon: <Terminal className="h-10 w-10 text-primary" />,
      title: t('products.cards.1.title'),
      description: t('products.cards.1.description'),
      link: 'https://github.com/MeaCore-Enterprise/MeaCode-Studio',
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: t('products.cards.2.title'),
      description: t('products.cards.2.description'),
    },
  ];
  
  return (
    <section id="products" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">{t('products.title')}</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t('products.description')}
          </p>
          <p className="mt-2 text-muted-foreground">{t('products.subDescription')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {products.map((product) => (
            <a key={product.title} href={product.link} target="_blank" rel="noopener noreferrer" className={product.link ? "cursor-pointer" : "cursor-default"}>
              <Card className="text-center h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                    {product.icon}
                  </div>
                  <CardTitle>{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{product.description}</p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
