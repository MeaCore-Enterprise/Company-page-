'use client';

import { Check, DraftingCompass, LayoutTemplate, Bot, Fingerprint, BadgeCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Separator } from '../ui/separator';
import { useI18n } from '@/locales/client';

export default function Pricing() {
  const { t } = useI18n();

  const plans = [
    {
      name: t('pricing.plans.0.name'),
      price: '$499',
      priceDescription: t('pricing.plans.0.priceDescription'),
      description: t('pricing.plans.0.description'),
      features: [
        '1-3 Pages Website',
        'Basic Automation',
        'Email Support',
        'Monthly Analytics'
      ],
      isPopular: false,
    },
    {
      name: t('pricing.plans.1.name'),
      price: '$999',
      priceDescription: t('pricing.plans.1.priceDescription'),
      description: t('pricing.plans.1.description'),
      features: [
        'Up to 10 Pages Web App',
        'Advanced Automation',
        'Priority Support',
        'Real-time Dashboard'
      ],
      isPopular: true,
    },
    {
      name: t('pricing.plans.2.name'),
      price: t('pricing.plans.2.price'),
      priceDescription: '',
      description: t('pricing.plans.2.description'),
      features: [
        'Unlimited Pages/Features',
        'Custom Integrations',
        'Dedicated Support',
        'On-premise option'
      ],
      isPopular: false,
    },
  ];

  const commissions = [
    {
        icon: <LayoutTemplate className="h-8 w-8 text-primary" />,
        name: t('pricing.commissions.0.name'),
        description: t('pricing.commissions.0.description')
    },
    {
        icon: <DraftingCompass className="h-8 w-8 text-primary" />,
        name: t('pricing.commissions.1.name'),
        description: t('pricing.commissions.1.description')
    },
    {
        icon: <Bot className="h-8 w-8 text-primary" />,
        name: t('pricing.commissions.2.name'),
        description: t('pricing.commissions.2.description')
    },
    {
        icon: <Fingerprint className="h-8 w-8 text-primary" />,
        name: t('pricing.commissions.3.name'),
        description: t('pricing.commissions.3.description')
    }
]

const principles = [
    {
        icon: <BadgeCheck className="h-6 w-6 text-primary" />,
        text: t('pricing.principles.0')
    },
    {
        icon: <BadgeCheck className="h-6 w-6 text-primary" />,
        text: t('pricing.principles.1')
    },
    {
        icon: <BadgeCheck className="h-6 w-6 text-primary" />,
        text: t('pricing.principles.2')
    }
]

  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">{t('pricing.title')}</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t('pricing.description')}
          </p>
           <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mt-6">
                {principles.map((p, i) => (
                    <div key={i} className="flex items-center gap-2">
                        {p.icon}
                        <span className="text-muted-foreground">{p.text}</span>
                    </div>
                ))}
           </div>
           <p className="mt-4 text-muted-foreground">{t('pricing.customEngagement')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.name} className={cn('flex flex-col', plan.isPopular && 'border-primary ring-2 ring-primary shadow-lg')}>
              {plan.isPopular && (
                <div className="bg-primary text-primary-foreground text-center text-sm font-semibold py-1 rounded-t-lg">
                  {t('pricing.mostPopular')}
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <div className="text-center mb-6">
                    {plan.priceDescription && <p className="text-muted-foreground">{plan.priceDescription}</p>}
                  <span className="text-4xl font-bold">{plan.price}</span>
                </div>
                <p className="text-muted-foreground flex-grow">{plan.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full" variant={plan.isPopular ? 'default' : 'outline'}>
                  <a href="#contact">{t('nav.contact')}</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <Separator className="my-16" />
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
                    <p className="text-muted-foreground text-sm flex-grow">{item.description}</p>
                    <Button asChild variant="link" className="mt-4">
                        <a href="#contact">{t('pricing.requestQuote')}</a>
                    </Button>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
