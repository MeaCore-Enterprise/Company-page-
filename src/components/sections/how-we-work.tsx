import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DraftingCompass, Repeat, Search, Component } from 'lucide-react';

const processSteps = [
  {
    icon: <Search className="h-10 w-10 text-primary" />,
    title: '1. Discovery',
    description: 'We start by diving deep to understand your business, challenges, and goals to ensure our solution is perfectly aligned with your vision.',
  },
  {
    icon: <DraftingCompass className="h-10 w-10 text-primary" />,
    title: '2. Solution Design',
    description: 'Next, we architect a comprehensive, scalable, and efficient solution, creating detailed mockups and a clear technical roadmap.',
  },
  {
    icon: <Component className="h-10 w-10 text-primary" />,
    title: '3. Implementation',
    description: 'Our expert developers bring the design to life, writing clean, high-quality code and integrating all necessary components.',
  },
    {
    icon: <Repeat className="h-10 w-10 text-primary" />,
    title: '4. Iteration & Improvement',
    description: 'We believe in continuous growth. After launch, we gather feedback, analyze performance, and iterate to enhance the product.',
  },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">How We Work</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our streamlined process ensures clarity, efficiency, and outstanding results from concept to launch and beyond.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {processSteps.map((step) => (
            <Card key={step.title} className="text-center hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
                  {step.icon}
                </div>
                <CardTitle>{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
