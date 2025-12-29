import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

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

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Transparent Pricing for Every Scale</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the plan that fits your needs. All plans are fully customizable to match your project requirements.
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
      </div>
    </section>
  );
}
