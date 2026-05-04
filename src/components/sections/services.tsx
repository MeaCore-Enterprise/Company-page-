'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Globe, MonitorSmartphone, Package } from 'lucide-react';
import { useI18n } from '@/locales/client';

export default function Services() {
  const t = useI18n();

  const services = [
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: t('services.cards.0.title'),
      description: t('services.cards.0.description'),
    },
    {
      icon: <MonitorSmartphone className="h-10 w-10 text-primary" />,
      title: t('services.cards.1.title'),
      description: t('services.cards.1.description'),
    },
    {
      icon: <Package className="h-10 w-10 text-primary" />,
      title: t('services.cards.2.title'),
      description: t('services.cards.2.description'),
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">{t('services.title')}</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t('services.description')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {services.map((service) => (
            <Card key={service.title} className="glass-card text-center group cursor-default">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-5 rounded-2xl w-fit mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
