import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DraftingCompass, Repeat, Search, Component } from 'lucide-react';

const processSteps = [
  {
    icon: <Search className="h-10 w-10 text-primary" />,
    title: '1. Discovery',
    description: 'We analyze your idea, business goals, technical constraints, and timeline. No assumptions, no buzzwords—just clarity.',
  },
  {
    icon: <DraftingCompass className="h-10 w-10 text-primary" />,
    title: '2. Solution Design',
    description: 'We define the architecture, scope, and tools required. You get a clear technical plan before any implementation starts.',
  },
  {
    icon: <Component className="h-10 w-10 text-primary" />,
    title: '3. Implementation',
    description: 'We build, iterate, and integrate. Clean code, scalable decisions, and constant progress visibility.',
  },
    {
    icon: <Repeat className="h-10 w-10 text-primary" />,
    title: '4. Iteration & Improvement',
    description: 'We refine based on feedback, optimize performance, and prepare the product for real-world usage or scaling.',
  },
];

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">How We Work</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We follow a structured, transparent process designed to reduce risk and deliver results efficiently.
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
