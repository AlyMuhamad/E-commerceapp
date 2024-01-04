'use client';

import HeroSection from './(components)/HeroSection';
import Carousel from './(components)/Carousel';
import Footer from './(components)/Footer';
import Steps from './(components)/Steps';
import Testimonials from './(components)/Testimonials';
import { useRef } from 'react';
import CTA from './(components)/CTA';

export default function Home() {
  const ref = useRef(null);
  return (
    <main>
      <HeroSection scrollToTestimonials={ref} />
      <Carousel />
      <Steps />
      <Testimonials ref={ref} />
      <CTA />
      <Footer />
    </main>
  );
}
