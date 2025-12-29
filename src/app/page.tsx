'use client';

import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import HowWeWork from '@/components/sections/how-we-work';
import Portfolio from '@/components/sections/portfolio';
import Products from '@/components/sections/products';
import FirestoreMetrics from '@/components/sections/firestore-metrics';
import Pricing from '@/components/sections/pricing';
import Contact from '@/components/sections/contact';
import Footer from '@/components/layout/footer';
import { useI18n, useCurrentLocale } from '@/locales/client';
import { useEffect } from 'react';

export default function Home() {
  const t = useI18n();
  const locale = useCurrentLocale();

  useEffect(() => {
    document.title = t('meta.title');
    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute('content', t('meta.description'));
    }
  }, [t, locale]);

  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <HowWeWork />
        <Portfolio />
        <Products />
        <FirestoreMetrics />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
