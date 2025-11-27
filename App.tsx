import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ProgramsSection from './components/ProgramsSection';
import TeachersSection from './components/TeachersSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import FaqSection from './components/FaqSection';
import ContactSection from './components/ContactSection';
import PpdbSection from './components/PpdbSection';
import Footer from './components/Footer';
import AiChat from './components/AiChat';
import { RevealOnScroll } from './components/RevealOnScroll';

const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-900 bg-gray-50 selection:bg-mc-yellow selection:text-black">
      <Navbar />
      <main>
        <Hero />
        
        <RevealOnScroll>
          <AboutSection />
        </RevealOnScroll>
        
        <RevealOnScroll>
          <ProgramsSection />
        </RevealOnScroll>

        <RevealOnScroll>
          <GallerySection />
        </RevealOnScroll>
        
        <RevealOnScroll>
          <PpdbSection />
        </RevealOnScroll>

        <RevealOnScroll>
          <TeachersSection />
        </RevealOnScroll>

        <RevealOnScroll>
          <TestimonialsSection />
        </RevealOnScroll>

        <RevealOnScroll>
          <FaqSection />
        </RevealOnScroll>

        <RevealOnScroll>
          <ContactSection />
        </RevealOnScroll>
      </main>
      <Footer />
      <AiChat />
    </div>
  );
};

export default App;