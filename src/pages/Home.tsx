import React from 'react';
import { HeroSlider, QuickActions } from '@/components/sections/HeroAndActions';
import { AboutSection, ServicesSection, TowingServicesHomeSection } from '@/components/sections/AboutAndServices';
import { HaulageHomeSection } from '@/components/sections/HaulageSection';
import { AutoParts, WhyChooseUs } from '@/components/sections/PartsAndWhyUs';
import { FAQ, BlogSection } from '@/components/sections/BottomSections';
import SEO from '@/components/seo/SEO';

export default function Home() {
  return (
    <main>
      <SEO 
        title="Pexus | 24/7 Emergency Towing, Haulage & Auto Services in Ghana" 
        description="Ghana's trusted partner for 24/7 emergency vehicle towing, heavy machinery transport, certified auto diagnostics, repairs, and genuine OEM auto parts." 
        canonical="/" 
      />
      <HeroSlider />
      <QuickActions />
      <AboutSection />
      <ServicesSection />
      <TowingServicesHomeSection />
      <HaulageHomeSection />
      <AutoParts />
      <WhyChooseUs />
      <BlogSection />
      <FAQ />
    </main>
  );
}
