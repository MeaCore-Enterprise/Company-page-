'use client';

import { Check, Bot, Fingerprint, BadgeCheck, DraftingCompass, LayoutTemplate, Search, Component, Repeat, Code, Rocket, BrainCircuit, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Separator } from '../ui/separator';
import Link from 'next/link';

export default function Pricing() {
  const plans = [
    {
      name: 'Basic',
      price: '$299',
      priceDescription: 'From',
      features: [
        'Landing pages',
        'Small automations',
        'One-off scripts',
        'Fast delivery'
      ],
      cta: 'Start small',
      isPopular: false,
    },
    {
      name: 'Professional',
      price: '$899',
      priceDescription: 'From',
      features: [
        'MVP development',
        'SaaS features',
        'API integrations',
        'Scalable architecture'
      ],
      cta: 'Build your MVP',
      isPopular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      priceDescription: '',
      features: [
        'Complex systems',
        'Long-term development',
        'Internal tools',
        'Consulting & architecture'
      ],
      cta: 'Talk to us',
      isPopular: false,
    },
  ];

  const commissions = [
    {
        icon: <LayoutTemplate className="h-8 w-8 text-primary" />,
        name: 'Landing Page',
        price: '$149',
        priceDescription: 'From'
    },
    {
        icon: <Bot className="h-8 w-8 text-primary" />,
        name: 'Automation Script',
        price: '$199',
        priceDescription: 'From'
    },
    {
        icon: <BrainCircuit className="h-8 w-8 text-primary" />,
        name: 'AI Integration',
        price: '$299',
        priceDescription: 'From'
    },
    {
        icon: <Wrench className="h-8 w-8 text-primary" />,
        name: 'Bug Fix / Refactor',
        price: '$99',
        priceDescription: 'From'
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
          <h2 className="text-3xl md:text-4xl font-bold">Pricing that scales with your project</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Transparent starting prices. Custom solutions when needed.
          </p>
           <p className="mt-4 text-sm text-muted-foreground">All prices are starting points. Final cost depends on scope, timeline, and complexity.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.name} className={cn('flex flex-col border-2', plan.isPopular ? 'border-primary' : 'border-card')}>
              {plan.isPopular && (
                <div className="bg-primary text-primary-foreground text-center text-sm font-semibold py-1.5 rounded-t-md -mt-px">
                  Most Popular
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
                  <Link href="/contact">{plan.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Separator className="my-16 md:my-24" />

         <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold">Specific Services</h3>
            <p className="mt-4 text-lg text-muted-foreground">
                Looking for a well-defined deliverable? These fixed-scope services are perfect entry points.
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
                        <Link href="/contact">Request a quote</Link>
                    </Button>
                </Card>
            ))}
        </div>

        <Separator className="my-16 md:my-24" />

        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold">How We Work</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 max-w-5xl mx-auto">
          {processSteps.map((step) => (
            <Card key={step.title} className="text-center bg-transparent border-none shadow-none">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-3 rounded-full w-fit mb-3">
                  {step.icon}
                </div>
                <CardTitle className="text-lg">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="my-16 md:my-24" />

        <div className="text-center max-w-xl mx-auto bg-card p-8 md:p-12 rounded-lg">
            <h3 className="text-2xl md:text-3xl font-bold">Not sure what plan fits your idea?</h3>
            <p className="mt-4 text-lg text-muted-foreground">
                Let’s talk and figure it out.
            </p>
            <Button asChild size="lg" className="mt-8">
              <Link href="/contact">Request a quote</Link>
            </Button>
        </div>

      </div>
    </section>
  );
}
