import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Archive, Database, HardDrive, Layers } from 'lucide-react';

export default function LegadoPage() {
  const features = [
    { icon: <Database className="h-6 w-6 text-primary" />, text: 'Battle-tested data models' },
    { icon: <Layers className="h-6 w-6 text-primary" />, text: 'Proven business logic' },
    { icon: <HardDrive className="h-6 w-6 text-primary" />, text: 'Stable, long-term architecture' },
    { icon: <Archive className="h-6 w-6 text-primary" />, text: 'Valuable historical data' },
  ];

  const useCases = [
    "Source of truth for business rules",
    "Foundation for modern refactoring projects",
    "Data migration to new systems",
    "Internal training and knowledge transfer",
  ];

  return (
    <div className="bg-background text-foreground">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Hero */}
          <section className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">LEGADO</h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Our foundational platform, a testament to our long-standing commitment to quality and engineering discipline.
            </p>
          </section>

          {/* Problem & Solution */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">The Problem</h2>
              <p className="mt-3 text-muted-foreground">
                "New" doesn't always mean "better". Rebuilding from scratch often discards years of valuable, battle-tested business logic and institutional knowledge embedded in code.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">The Solution</h2>
              <ul className="mt-3 space-y-2 text-muted-foreground list-disc list-inside">
                <li>Treat legacy code as an asset, not a liability.</li>
                <li>Isolate and preserve core business logic.</li>
                <li>Strategically refactor and modernize.</li>
                <li>Use as a stable foundation for new features.</li>
              </ul>
            </div>
          </div>

          {/* Capabilities */}
          <section>
            <h2 className="text-3xl font-bold text-center">What it Provides</h2>
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
                      <Archive className="h-5 w-5 text-primary" />
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
              <Badge variant="secondary">Status: Maintained</Badge>
              <Badge variant="secondary">Stage: Mature & Stable</Badge>
            </div>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
              This platform is not actively developed with new features, but is maintained as a critical part of our internal infrastructure and a source of core logic.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/contact">Contact us about our experience</Link>
              </Button>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
