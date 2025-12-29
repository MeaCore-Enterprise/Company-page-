'use client';

import { Check, DraftingCompass, LayoutTemplate, Bot, Fingerprint, BadgeCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Separator } from '../ui/separator';
import Link from 'next/link';

export default function Pricing() {
  const plans = [
    {
      name: 'Basic',
      price: '$499',
      priceDescription: 'Starting from',
      description: 'Best for small businesses or early ideas. Landing pages or simple websites, basic automation, prototypes. Ideal for validating ideas quickly.',
      features: [
        '1-3 Pages Website',
        'Basic Automation',
        'Email Support',
        'Monthly Analytics'
      ],
      isPopular: false,
    },
    {
      name: 'Professional',
      price: '$999',
      priceDescription: 'Starting from',
      description: 'For growing products and internal tools. Custom web apps, process automation, dynamic dashboards, and MVP development.',
      features: [
        'Up to 10 Pages Web App',
        'Advanced Automation',
        'Priority Support',
        'Real-time Dashboard'
      ],
      isPopular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      priceDescription: '',
      description: 'For complex systems and long-term collaboration. Full-stack platforms, scalable architectures, and ongoing support.',
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
        name: 'Landing Page',
        description: 'A single, conversion-focused page to launch your product.'
    },
    {
        icon: <DraftingCompass className="h-8 w-8 text-primary" />,
        name: 'Dashboard Mockup',
        description: 'A custom dashboard to visualize your key metrics.'
    },
    {
        icon: <Bot className="h-8 w-8 text-primary" />,
        name: 'Task Automation',
        description: 'A specific workflow automation to save you time.'
    },
    {
        icon: <Fingerprint className="h-8 w-8 text-primary" />,
        name: 'Branding Assets',
        description: 'Business cards and digital assets for your company.'
    }
]

const principles = [
    {
        icon: <BadgeCheck className="h-6 w-6 text-primary" />,
        text: 'Clear deliverables'
    },
    {
        icon: <BadgeCheck className="h-6 w-6 text-primary" />,
        text: 'No hidden costs'
    },
    {
        icon: <BadgeCheck className="h-6 w-6 text-primary" />,
        text: 'Solutions that actually scale'
    }
]

  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Pricing Philosophy</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our pricing is transparent and flexible. The plans below represent starting points, not rigid packages. Final pricing depends on scope, complexity, and timeline.
          </p>
           <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 mt-6">
                {principles.map((p, i) => (
                    <div key={i} className="flex items-center gap-2">
                        {p.icon}
                        <span className="text-muted-foreground">{p.text}</span>
                    </div>
                ))}
           </div>
           <p className="mt-4 text-muted-foreground">If your needs don’t fit a box, we design a custom engagement.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.name} className={cn('flex flex-col', plan.isPopular && 'border-primary ring-2 ring-primary shadow-lg')}>
              {plan.isPopular && (
                <div className="bg-primary text-primary-foreground text-center text-sm font-semibold py-1 rounded-t-lg">
                  Most Popular
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
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <Separator className="my-16" />
         <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold">Fixed-Scope Services (Quick Wins)</h3>
            <p className="mt-4 text-lg text-muted-foreground">
                For clients who want fast, well-defined deliverables: clear scope, fixed price, and fast delivery.
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
                        <Link href="/contact">Request Quote</Link>
                    </Button>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
