'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { FlaskConical, Beaker, Blocks } from 'lucide-react';

export default function Products() {
  const products = [
    {
      icon: <Blocks className="h-10 w-10 text-primary" />,
      title: 'Haker-MCP',
      description: 'An internal ecosystem designed to streamline our development process and enhance project management.',
    },
    {
      icon: <FlaskConical className="h-10 w-10 text-primary" />,
      title: 'Future SaaS (Stealth Mode)',
      description: 'We are actively developing a suite of SaaS products aimed at solving key industry challenges. More details coming soon.',
    },
    {
      icon: <Beaker className="h-10 w-10 text-primary" />,
      title: 'Internal Tooling',
      description: 'A collection of proprietary tools for automation, testing, and deployment that ensures quality and speed for our clients.',
    },
  ];
  
  return (
    <section id="products" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Our Products</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We don’t just build for clients—we build for ourselves. Here we showcase internal tools, experiments, and platforms developed in-house to test ideas, architectures, and workflows.
          </p>
          <p className="mt-2 text-muted-foreground">These projects demonstrate real engineering decisions, product thinking, and hands-on experience with modern stacks. No demos for hype. Just proof of work.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {products.map((product) => (
            <Card key={product.title} className="text-center hover:shadow-xl transition-shadow duration-300">
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
          ))}
        </div>
      </div>
    </section>
  );
}
