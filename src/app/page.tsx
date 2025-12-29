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

export default function Home() {
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
