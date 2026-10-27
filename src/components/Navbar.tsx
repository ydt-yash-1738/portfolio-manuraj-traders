import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wheat, PhoneCall, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import MagneticButton from './MagneticButton';

const Navbar: React.FC = () => {
  const { lang, toggleLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`site-nav ${scrolled ? 'site-nav--scrolled' : ''}`}>
      <div className="site-nav__inner container">
        {/* Brand Identity — Switches between English & Hindi */}
        <a
          href="#hero"
          onClick={(e) => scrollToSection(e, 'hero')}
          className="site-nav__brand"
        >
          <span className="site-nav__crest">
            <Wheat size={20} strokeWidth={2.2} />
          </span>
          <div className="site-nav__brand-text">
            <span className="site-nav__brand-name">{t.nav.brandName}</span>
            <span className="site-nav__brand-sub">{t.nav.brandSub}</span>
          </div>
        </a>

        {/* Center Navigation Links */}
        <nav className="site-nav__links" aria-label="Main Navigation">
          <a href="#hero" onClick={(e) => scrollToSection(e, 'hero')} className="site-nav__link">
            <span>01</span> {t.nav.legacy}
          </a>
          <a
            href="#featured-seeds"
            onClick={(e) => scrollToSection(e, 'featured-seeds')}
            className="site-nav__link site-nav__link--highlight"
          >
            <span>02</span> {t.nav.shriram}
          </a>
          <a
            href="#crop-pillars"
            onClick={(e) => scrollToSection(e, 'crop-pillars')}
            className="site-nav__link"
          >
            <span>03</span> {t.nav.inputs}
          </a>
          <a
            href="#community-gallery"
            onClick={(e) => scrollToSection(e, 'community-gallery')}
            className="site-nav__link"
          >
            <span>04</span> {t.nav.gallery}
          </a>
          <a
            href="#contact-footer"
            onClick={(e) => scrollToSection(e, 'contact-footer')}
            className="site-nav__link"
          >
            <span>05</span> {t.nav.contact}
          </a>
        </nav>

        {/* Actions: Sticky Bilingual Toggle + Direct Inquiry CTA */}
        <div className="site-nav__actions">
          <button
            type="button"
            onClick={toggleLanguage}
            className="lang-toggle"
            aria-label={t.meta.switchLabel}
            title={t.meta.switchLabel}
          >
            <Globe size={15} className="lang-toggle__icon" />
            <div className="lang-toggle__track">
              <span className={`lang-toggle__option ${lang === 'en' ? 'is-active' : ''}`}>
                EN
              </span>
              <span className={`lang-toggle__option ${lang === 'hi' ? 'is-active' : ''}`}>
                हिं
              </span>
              <motion.span
                className="lang-toggle__thumb"
                layout
                transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                style={{
                  left: lang === 'en' ? '3px' : 'calc(50% + 1px)',
                }}
              />
            </div>
          </button>

          <MagneticButton
            href="#contact-footer"
            onClick={(e) => scrollToSection(e, 'contact-footer')}
            variant="gold"
            className="site-nav__cta"
          >
            <PhoneCall size={15} />
            <span>{t.nav.cta}</span>
          </MagneticButton>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
