'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useI18n } from '@/locales/client';

export default function Portfolio() {
  const { t } = useI18n();
  const dashboardImage = PlaceHolderImages.find(img => img.id === 'portfolio-dashboard');

  return (
    <section id="portfolio" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">{t('portfolio.title')}</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {t('portfolio.description')}
          </p>
        </div>
        <div className="mt-12">
          <Card className="overflow-hidden shadow-2xl transition-transform hover:scale-[1.02] duration-500">
            <CardContent className="p-0">
              {dashboardImage && (
                <Image
                  src={dashboardImage.imageUrl}
                  alt={dashboardImage.description}
                  data-ai-hint={dashboardImage.imageHint}
                  width={1200}
                  height={800}
                  className="w-full h-auto"
                />
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
