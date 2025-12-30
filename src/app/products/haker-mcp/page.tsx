import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Terminal, Files, BrainCircuit, ShieldCheck, Cpu } from 'lucide-react';

export default function HakerMcpPage() {
  const features = [
    { icon: <Files className="h-6 w-6 text-primary" />, text: 'Read/write filesystem' },
    { icon: <Terminal className="h-6 w-6 text-primary" />, text: 'Execute system commands' },
    { icon: <BrainCircuit className="h-6 w-6 text-primary" />, text: 'Persist agent memory' },
    { icon: <Cpu className="h-6 w-6 text-primary" />, text: 'Plug into any agent framework' },
  ];

  const useCases = [
    "AI agent managing a local development environment",
    "Internal automation scripts for operations teams",
    "Automated security auditing and reporting tools",
    "SaaS platforms exposing internal APIs to AI agents",
  ];

  return (
    <div className="bg-background text-foreground">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Hero */}
          <section className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Haker-MCP</h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Expose real system capabilities to AI agents through a Master Control Program.
            </p>
          </section>

          {/* Problem & Solution */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">The Problem</h2>
              <p className="mt-3 text-muted-foreground">
                Most AI agents can think, but they can’t act. Integrating real system tools usually results in tightly coupled, unmaintainable code and significant security risks.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">The Solution</h2>
              <ul className="mt-3 space-y-2 text-muted-foreground list-disc list-inside">
                <li>Typed tool contract for predictable interactions.</li>
                <li>Unified registry for discoverable capabilities.</li>
                <li>Decoupled runtime for safe execution.</li>
                <li>Zero-touch extensibility for custom domains.</li>
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
                            <ShieldCheck className="h-5 w-5 text-primary" />
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
                <Badge variant="secondary">Stage: Production-Ready Core</Badge>
            </div>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
                The core engine is stable and in use. We are constantly expanding the ecosystem with new, secure tool domains.
            </p>
            <div className="mt-8">
                <Button size="lg" variant="outline" asChild>
                    <Link href="#">Explore the Project (Private)</Link>
                </Button>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
