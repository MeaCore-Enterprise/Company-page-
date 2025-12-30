import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { FileText, Briefcase, Bot, Share2 } from 'lucide-react';

export default function GeneradorCvPage() {
  const features = [
    { icon: <FileText className="h-6 w-6 text-primary" />, text: 'Multiple professional templates' },
    { icon: <Bot className="h-6 w-6 text-primary" />, text: 'AI-assisted content suggestions' },
    { icon: <Briefcase className="h-6 w-6 text-primary" />, text: 'Real-time preview' },
    { icon: <Share2 className="h-6 w-6 text-primary" />, text: 'Export to PDF & shareable link' },
  ];

  const useCases = [
    "Students creating their first resume",
    "Professionals updating their CV for a new role",
    "Career changers tailoring their experience",
    "Freelancers showcasing project histories",
  ];

  return (
    <div className="bg-background text-foreground">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Hero */}
          <section className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Generador de CV</h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              An internal tool to quickly generate professional, consistent CVs for our team members and proposals.
            </p>
          </section>

          {/* Problem & Solution */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">The Problem</h2>
              <p className="mt-3 text-muted-foreground">
                Manually creating and formatting CVs is time-consuming and prone to inconsistencies. Keeping them updated for different applications is a repetitive, inefficient task.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">The Solution</h2>
              <ul className="mt-3 space-y-2 text-muted-foreground list-disc list-inside">
                <li>Template-driven design for consistency.</li>
                <li>Component-based structure for content reuse.</li>
                <li>Separation of data from presentation.</li>
                <li>Automated PDF generation.</li>
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
                      <Briefcase className="h-5 w-5 text-primary" />
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
              <Badge variant="secondary">Status: Internal Tool</Badge>
              <Badge variant="secondary">Stage: Production-Ready</Badge>
            </div>
            <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
              This tool is actively used within our company. We're considering releasing a public version based on demand.
            </p>
            <div className="mt-8">
              <Button size="lg" asChild>
                <Link href="/contact">Contact us about this product</Link>
              </Button>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
