/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { WhyUs } from './components/WhyUs';
import { TechStack } from './components/TechStack';
import { CallToAction } from './components/CallToAction';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ServiceModal } from './components/ServiceModal';
import { ServiceItem } from './types';

export default function App() {
  const [activeServiceModal, setActiveServiceModal] = useState<ServiceItem | null>(null);
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('cybersecurity');

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (service: ServiceItem) => {
    setSelectedServiceForContact(service.category);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-x-hidden">
      {/* Professional Polish Subtle Dot Grid Pattern */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-10 z-0" 
        style={{
          backgroundImage: 'radial-gradient(#22d3ee 0.5px, transparent 0.5px)',
          backgroundSize: '24px 24px'
        }} 
      />
      
      {/* Sticky Top Navigation */}
      <Navbar onOpenGetStarted={scrollToContact} />

      {/* Main Sections */}
      <main className="relative z-10">
        {/* 1. Hero Section */}
        <Hero
          onOpenGetStarted={scrollToContact}
          onExploreServices={scrollToServices}
        />

        {/* 2. About Section */}
        <About />

        {/* 3. Services Section */}
        <Services
          onSelectService={handleSelectService}
          onOpenDetails={(service) => setActiveServiceModal(service)}
        />

        {/* 4. Why Choose Us */}
        <WhyUs />

        
        {/* 7. Modern Tech Stack & Security Frameworks */}
        <TechStack />

        {/* 9. High-Impact Call To Action */}
        <CallToAction onStartProject={scrollToContact} />

        {/* 10. Professional Contact Section */}
        <Contact initialService={selectedServiceForContact} />
      </main>

      {/* Footer */}
      <Footer />
      <ServiceModal
        service={activeServiceModal}
        onClose={() => setActiveServiceModal(null)}
        onSelectService={(service) => {
          setActiveServiceModal(null);
          handleSelectService(service);
        }}
      />

    </div>
  );
}
