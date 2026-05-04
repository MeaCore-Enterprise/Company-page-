'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useI18n } from '@/locales/client';

export default function Portfolio() {
  const t = useI18n();
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
          <a href="https://meacorelauncher.keyler-ender-777.workers.dev/" target="_blank" rel="noopener noreferrer">
            <Card className="overflow-hidden shadow-2xl transition-all hover:scale-[1.01] duration-500 border-primary/20 hover:border-primary/50 group">
              <CardContent className="p-0 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                    <span className="text-primary font-bold text-lg">Visitar MeaCore Launcher →</span>
                </div>
                {dashboardImage && (
                  <Image
                    src={dashboardImage.imageUrl}
                    alt={dashboardImage.description}
                    data-ai-hint={dashboardImage.imageHint}
                    width={1200}
                    height={800}
                    className="w-full h-auto grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                    priority
                  />
                )}
              </CardContent>
            </Card>
          </a>
        </div>
      </div>
    </section>
  );
}
