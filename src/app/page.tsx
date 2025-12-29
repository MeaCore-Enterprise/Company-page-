'use client';

import Hero from '@/components/sections/hero';
import Services from '@/components/sections/services';
import HowWeWork from '@/components/sections/how-we-work';
import Portfolio from '@/components/sections/portfolio';
import Products from '@/components/sections/products';
import FirestoreMetrics from '@/components/sections/firestore-metrics';
import Pricing from '@/components/sections/pricing';
import Contact from '@/components/sections/contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <HowWeWork />
      <Portfolio />
      <Products />
      <FirestoreMetrics />
      <Pricing />
      <Contact />
    </>
  );
}
