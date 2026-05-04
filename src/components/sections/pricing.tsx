'use client';

import { Check, Bot, Fingerprint, BadgeCheck, DraftingCompass, LayoutTemplate, Search, Component, Repeat, Code, Rocket, BrainCircuit, Wrench, Globe, MonitorSmartphone, Package, ShieldCheck, Gauge } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Separator } from '../ui/separator';
import Link from 'next/link';
import { useI18n } from '@/locales/client';

export default function Pricing() {
  const t = useI18n();

  const plans = [
    {
      name: t('pricing.plans.0.name'),
      price: 'MVP',
      priceDescription: t('pricing.plans.0.priceDescription'),
      features: [
        t('services.cards.0.title'),
        t('services.cards.1.title'),
        t('pricing.principles.0'),
        t('pricing.principles.1')
      ],
      cta: t('pricing.requestQuote'),
      isPopular: true,
    },
    {
      name: t('pricing.plans.1.name'),
      price: 'CORP',
      priceDescription: t('pricing.plans.1.priceDescription'),
      features: [
        t('pricing.plans.1.description'),
        t('pricing.principles.2'),
        'SLA & Soporte',
        'Arquitectura dedicada'
      ],
      cta: t('pricing.requestQuote'),
      isPopular: false,
    },
    {
      name: t('pricing.plans.2.name'),
      price: t('pricing.plans.2.price'),
      priceDescription: '',
      features: [
        t('pricing.plans.2.description'),
        t('services.cards.2.title'),
        'Optimización',
        'Auditoría'
      ],
      cta: t('pricing.requestQuote'),
      isPopular: false,
    },
  ];

  const commissions = [
    {
        icon: <ShieldCheck className="h-8 w-8 text-primary" />,
        name: t('pricing.commissions.0.name'),
        price: 'Full',
        priceDescription: 'Análisis'
    },
    {
        icon: <Gauge className="h-8 w-8 text-primary" />,
        name: t('pricing.commissions.1.name'),
        price: 'WPO',
        priceDescription: 'Turbo'
    },
    {
        icon: <MonitorSmartphone className="h-8 w-8 text-primary" />,
        name: t('pricing.commissions.2.name'),
        price: 'V1.0',
        priceDescription: 'Build'
    },
    {
        icon: <Package className="h-8 w-8 text-primary" />,
        name: t('pricing.commissions.3.name'),
        price: 'Lib',
        priceDescription: 'Core'
    }
]

const processSteps = [
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: '1. Discovery',
      description: 'Understand the problem',
    },
    {
      icon: <DraftingCompass className="h-8 w-8 text-primary" />,
      title: '2. Design',
      description: 'Propose a solution',
    },
    {
      icon: <Component className="h-8 w-8 text-primary" />,
      title: '3. Build',
      description: 'Implement fast',
    },
    {
      icon: <Repeat className="h-8 w-8 text-primary" />,
      title: '4. Iterate',
      description: 'Improve with feedback',
    },
  ];


  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">{t('pricing.title')}</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t('pricing.description')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.name} className={cn('flex flex-col border-2', plan.isPopular ? 'border-primary' : 'border-card')}>
              {plan.isPopular && (
                <div className="bg-primary text-primary-foreground text-center text-sm font-semibold py-1.5 rounded-t-md -mt-px">
                  {t('pricing.mostPopular')}
                </div>
              )}
              <CardHeader className={cn("text-center pt-8", !plan.isPopular && "pt-12")}>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="text-center mb-6">
                    {plan.priceDescription && <p className="text-muted-foreground">{plan.priceDescription}</p>}
                  <span className="text-4xl font-bold">{plan.price}</span>
                </div>
                <ul className="space-y-3 text-muted-foreground flex-grow mb-8">
                    {plan.features.map(feature => (
                        <li key={feature} className="flex items-center gap-3">
                            <Check className="h-5 w-5 text-primary" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
                <Button asChild className="w-full mt-auto" variant={plan.isPopular ? 'default' : 'outline'}>
                  <Link href="#contact">{plan.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Separator className="my-16 md:my-24" />

         <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold">{t('pricing.commissionsTitle')}</h3>
            <p className="mt-4 text-lg text-muted-foreground">
                {t('pricing.commissionsDescription')}
            </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 max-w-6xl mx-auto">
            {commissions.map((item) => (
                 <Card key={item.name} className="flex flex-col items-center text-center p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="mb-4 bg-primary/10 p-3 rounded-full">
                        {item.icon}
                    </div>
                    <h4 className="font-bold text-lg mb-2">{item.name}</h4>
                    <div className="text-center mb-4">
                        <p className="text-sm text-muted-foreground">{item.priceDescription}</p>
                        <span className="text-2xl font-bold">{item.price}</span>
                    </div>
                    <Button asChild variant="link" className="mt-auto">
                        <Link href="#contact">{t('pricing.requestQuote')}</Link>
                    </Button>
                </Card>
            ))}
        </div>

        <Separator className="my-16 md:my-24" />

        <div className="text-center max-w-xl mx-auto bg-card p-8 md:p-12 rounded-lg">
            <h3 className="text-2xl md:text-3xl font-bold">{t('pricing.customEngagement')}</h3>
            <p className="mt-4 text-lg text-muted-foreground">
                {t('contact.description')}
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="#contact">{t('pricing.requestQuote')}</Link>
            </Button>
        </div>

      </div>
    </section>
  );
}
