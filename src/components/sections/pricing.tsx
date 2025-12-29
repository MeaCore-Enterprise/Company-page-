import { Check, DraftingCompass, LayoutTemplate, Bot, Fingerprint } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Separator } from '../ui/separator';

const plans = [
  {
    name: 'Basic',
    price: '$499',
    priceDescription: '/month',
    description: 'For startups and small projects.',
    features: ['1-3 Pages Website', 'Basic Automation', 'Email Support', 'Monthly Analytics'],
    isPopular: false,
  },
  {
    name: 'Professional',
    price: '$999',
    priceDescription: '/month',
    description: 'For growing businesses and MVPs.',
    features: ['Up to 10 Pages Web App', 'Advanced Automation', 'Priority Support', 'Real-time Dashboard'],
    isPopular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    priceDescription: '',
    description: 'For large-scale applications.',
    features: ['Unlimited Pages/Features', 'Custom Integrations', 'Dedicated Support', 'On-premise option'],
    isPopular: false,
  },
];

const commissions = [
    {
        icon: <LayoutTemplate className="h-8 w-8 text-primary" />,
        name: 'Landing Page',
        description: 'A single, high-converting page to launch your product.'
    },
    {
        icon: <DraftingCompass className="h-8 w-8 text-primary" />,
        name: 'Dashboard',
        description: 'A custom dashboard to visualize your key metrics.'
    },
    {
        icon: <Bot className="h-8 w-8 text-primary" />,
        name: 'Automation',
        description: 'A specific workflow automation to save you time.'
    },
    {
        icon: <Fingerprint className="h-8 w-8 text-primary" />,
        name: 'Branding Kit',
        description: 'Business cards and branding assets for your company.'
    }
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Transparent & Flexible Pricing</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose a monthly plan or start with a specific project. Prices are a starting point and the final cost depends on the full scope.
          </p>
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
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.priceDescription}</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full" variant={plan.isPopular ? 'default' : 'outline'}>
                  <a href="#contact">Contact Us</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <Separator className="my-16" />
         <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold">Or, Start with a Specific Commission</h3>
            <p className="mt-4 text-lg text-muted-foreground">
                Perfect for getting started or for smaller, well-defined tasks.
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
                        <a href="#contact">Request Quote</a>
                    </Button>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
