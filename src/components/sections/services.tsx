'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CodeXml, Bot, Rocket } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <CodeXml className="h-10 w-10 text-primary" />,
      title: 'Software Development',
      description: 'We build scalable and robust web applications tailored to your business needs, from simple websites to complex platforms.',
    },
    {
      icon: <Bot className="h-10 w-10 text-primary" />,
      title: 'Process Automation',
      description: 'Streamline your operations by automating repetitive tasks. We create custom bots and workflows to boost efficiency and reduce costs.',
    },
    {
      icon: <Rocket className="h-10 w-10 text-primary" />,
      title: 'MVP Solutions',
      description: 'Launch your idea quickly with a Minimum Viable Product. We help you validate your concept and get to market faster with core features.',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">What We Offer</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our expertise lies in turning complex challenges into simple, elegant solutions that drive growth and efficiency for your business.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                  {service.icon}
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
