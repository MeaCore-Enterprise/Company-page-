'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DraftingCompass, Repeat, Search, Component } from 'lucide-react';
import { useI18n } from '@/locales/client';

export default function HowWeWork() {
  const { t } = useI18n();

  const processSteps = [
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: `1. ${t('howWeWork.steps.0.title')}`,
      description: t('howWeWork.steps.0.description'),
    },
    {
      icon: <DraftingCompass className="h-10 w-10 text-primary" />,
      title: `2. ${t('howWeWork.steps.1.title')}`,
      description: t('howWeWork.steps.1.description'),
    },
    {
      icon: <Component className="h-10 w-10 text-primary" />,
      title: `3. ${t('howWeWork.steps.2.title')}`,
      description: t('howWeWork.steps.2.description'),
    },
    {
      icon: <Repeat className="h-10 w-10 text-primary" />,
      title: `4. ${t('howWeWork.steps.3.title')}`,
      description: t('howWeWork.steps.3.description'),
    },
  ];
  
  return (
    <section id="how-we-work" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">{t('howWeWork.title')}</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t('howWeWork.description')}
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
