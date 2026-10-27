import React, { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AnimatePresence, motion } from 'framer-motion';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedSeeds from './components/FeaturedSeeds';
import AgroPillars from './components/AgroPillars';
import ImpactGallery from './components/ImpactGallery';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

/**
 * Inner Portfolio Shell that syncs Lenis smooth scrolling with GSAP ScrollTrigger
 * and orchestrates seamless Framer Motion transitions on language switch.
 */
const PortfolioShell: React.FC = () => {
  const { lang } = useLanguage();

  // Initialize Lenis Inertia Smooth Scroll & Bind to GSAP Ticker (60fps lock)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.95,
      touchMultiplier: 1.8,
    });

    // Synchronize Lenis scroll events with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const updateLenis = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateLenis);
      lenis.destroy();
    };
  }, []);

  // Refresh ScrollTrigger positions whenever language changes text heights
  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);
    return () => clearTimeout(timer);
  }, [lang]);

  return (
    <div className={`app-wrapper lang-${lang}`}>
      {/* Subtle Film Grain Overlay for Editorial Texture */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Sticky Navigation with Instant EN/HI Toggle */}
      <Navbar />

      {/* Smooth Page / Language Transition Wrapper */}
      <AnimatePresence mode="wait">
        <motion.main
          key={lang}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <Hero />
          <FeaturedSeeds />
          <AgroPillars />
          <ImpactGallery />
          <Footer />
        </motion.main>
      </AnimatePresence>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <PortfolioShell />
    </LanguageProvider>
  );
};

export default App;
