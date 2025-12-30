import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { BrainCircuit, Bot, Database, Workflow } from 'lucide-react';

export default function MeaCoreIaPage() {
  const features = [
    { icon: <Bot className="h-6 w-6 text-primary" />, text: 'Custom AI Agent development' },
    { icon: <Workflow className="h-6 w-6 text-primary" />, text: 'Business process automation' },
    { icon: <BrainCircuit className="h-6 w-6 text-primary" />, text: 'LLM integration and fine-tuning' },
    { icon: <Database className="h-6 w-6 text-primary" />, text: 'Vector DB & RAG pipelines' },
  ];

  const useCases = [
    "Automating customer support with AI chatbots",
    "Internal knowledge base search and summarization",
    "Automated data extraction from documents",
    "Personalized content and product recommendations",
  ];

  return (
    <div className="bg-background text-foreground">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Hero */}
          <section className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">MeaCore-IA</h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              A service and framework to design, build, and deploy AI-powered solutions that solve real business problems.
            </p>
          </section>

          {/* Problem & Solution */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">The Problem</h2>
              <p className="mt-3 text-muted-foreground">
                Integrating AI is more than just calling an API. Businesses struggle with prompt engineering, data privacy, scalability, and turning a "cool demo" into a reliable production system.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">The Solution</h2>
              <ul className="mt-3 space-y-2 text-muted-foreground list-disc list-inside">
                <li>Focus on concrete use cases and ROI.</li>
                <li>Production-ready agent and RAG architecture.</li>
                <li>Decoupled design for easy model swapping.</li>
                <li>Emphasis on security, evaluation, and monitoring.</li>
              </ul>
            </div>
          </div>

          {/* Capabilities */}
          <section>
            <h2 className="text-3xl font-bold text-center">What we can do</h2>
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
                      <BrainCircuit className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-card-foreground">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          
          {/* Status and CTA */}
          <section className="text-center bg-card border rounded-lg p-8 md:p-12">
            <h2 className="text-2xl font-semibold">Service Status</h2>
            <div className="mt-4 flex justify-center items-center gap-4">
              <Badge variant="secondary">Status: Actively offered</Badge>
              <Badge variant="secondary">Stage: Production Deployments</Badge>
            </div>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
              We have successfully deployed custom AI solutions for several clients. Our framework is mature and ready for new challenges.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/contact">Contact us about an AI project</Link>
              </Button>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
