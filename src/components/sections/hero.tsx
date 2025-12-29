'use client';

import { Button } from '@/components/ui/button';
import { useI18n } from '@/locales/client';

export default function Hero() {
  const { t } = useI18n();

  return (
    <section id="hero" className="py-24 md:py-40">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 animate-fade-in-up">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in-up animation-delay-300">
            {t('hero.subtitle')}
          </p>
          <div className="flex justify-center gap-4 animate-fade-in-up animation-delay-600">
            <Button asChild size="lg">
              <a href="#contact">{t('hero.cta.primary')}</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#services">{t('hero.cta.secondary')}</a>
            </Button>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </section>
  );
}
