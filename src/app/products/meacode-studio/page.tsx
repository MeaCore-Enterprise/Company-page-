import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Code2, Zap, BrainCircuit, Blocks } from 'lucide-react';

export default function MeaCodeStudioPage() {
  const features = [
    { icon: <Code2 className="h-6 w-6 text-primary" />, text: 'AI-native code generation' },
    { icon: <Zap className="h-6 w-6 text-primary" />, text: 'Real-time collaboration' },
    { icon: <Blocks className="h-6 w-6 text-primary" />, text: 'Integrated project scaffolding' },
    { icon: <BrainCircuit className="h-6 w-6 text-primary" />, text: 'Context-aware refactoring' },
  ];

  const useCases = [
    "Rapid prototyping of Next.js applications",
    "Onboarding new developers to a project quickly",
    "Live coding sessions with clients and teams",
    "Building internal tools with a consistent stack",
  ];

  return (
    <div className="bg-background text-foreground">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Hero */}
          <section className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">MeaCode-Studio</h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              An AI-collaborative development environment to build and iterate on web applications at the speed of thought.
            </p>
          </section>

          {/* Problem & Solution */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">The Problem</h2>
              <p className="mt-3 text-muted-foreground">
                Modern web development involves too much boilerplate and context-switching. Traditional IDEs weren't built for a world where humans and AI collaborate on code.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">The Solution</h2>
              <ul className="mt-3 space-y-2 text-muted-foreground list-disc list-inside">
                <li>Conversational scaffolding of new projects.</li>
                <li>AI-powered file modifications, not just suggestions.</li>
                <li>A locked-in, best-practice tech stack (Next.js).</li>
                <li>Real-time preview and iteration loop.</li>
              </ul>
            </div>
          </div>

          {/* Capabilities */}
          <section>
            <h2 className="text-3xl font-bold text-center">What it can do</h2>
            <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {features.map((feature, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <p className="font-medium">{feature.text}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Use Cases */}
          <section>
            <h2 className="text-3xl font-bold text-center">Use Cases</h2>
            <div className="mt-8 max-w-2xl mx-auto">
              <ul className="space-y-3">
                {useCases.map((useCase) => (
                  <li key={useCase} className="flex items-center gap-3 p-4 bg-card border rounded-lg">
                    <div className="bg-primary/10 p-2 rounded-full">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-card-foreground">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          
          {/* Status and CTA */}
          <section className="text-center bg-card border rounded-lg p-8 md:p-12">
            <h2 className="text-2xl font-semibold">Product Status</h2>
            <div className="mt-4 flex justify-center items-center gap-4">
              <Badge variant="secondary">Status: Active Development</Badge>
              <Badge variant="secondary">Stage: MVP / Internal Beta</Badge>
            </div>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
              MeaCode-Studio is the engine behind its own development. We use it daily to build and improve our own products.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/contact">Request a demo</Link>
              </Button>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
