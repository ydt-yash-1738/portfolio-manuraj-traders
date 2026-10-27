import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight, MapPin, Award, Sparkles, Store } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import MagneticButton from './MagneticButton';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedHeadlineProps {
  text: string;
  className?: string;
  delayOffset?: number;
}

/**
 * Helper component for staggered word reveal
 */
const AnimatedHeadline: React.FC<AnimatedHeadlineProps> = ({
  text,
  className = '',
  delayOffset = 0,
}) => {
  const words = text.split(' ');
  return (
    <span className={`split-line ${className}`} aria-label={text}>
      {words.map((word, wordIdx) => (
        <span key={`${word}-${wordIdx}`} className="split-word-mask">
          <motion.span
            className="split-word"
            initial={{ y: '105%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: delayOffset + wordIdx * 0.07,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </span>
  );
};

const Hero: React.FC = () => {
  const { t, lang } = useLanguage();
  const heroRef = useRef<HTMLElement | null>(null);
  const portraitWrapRef = useRef<HTMLDivElement | null>(null);
  const portraitImgRef = useRef<HTMLImageElement | null>(null);
  const stripTrackRef = useRef<HTMLDivElement | null>(null);

  // Curated 6 highlight images for the Hero Showcase Strip
  const heroStripPhotos = t.gallery.items.slice(0, 6);

  useGSAP(
    () => {
      // 1. Portrait Parallax & Subtle Scale on Scroll
      if (portraitImgRef.current && portraitWrapRef.current) {
        gsap.fromTo(
          portraitImgRef.current,
          { scale: 1.06, yPercent: -2 },
          {
            scale: 1.0,
            yPercent: 4,
            ease: 'none',
            scrollTrigger: {
              trigger: portraitWrapRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.1,
            },
          }
        );
      }

      // 2. Hero Showcase Cards: Smooth Scale-Up on Scroll
      const cards = gsap.utils.toArray<HTMLElement>('.hero-showcase__card');
      cards.forEach((card) => {
        const img = card.querySelector<HTMLElement>('.hero-showcase__img');
        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.12 },
            {
              scale: 1.0,
              ease: 'none',
              scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 1,
              },
            }
          );
        }
      });
    },
    { scope: heroRef, dependencies: [lang] }
  );

  return (
    <section id="hero" ref={heroRef} className="hero-section">
      {/* Ambient Radial Mesh & Topographic Field Lines */}
      <div className="hero-section__ambient" aria-hidden="true">
        <div className="hero-section__glow hero-section__glow--gold" />
        <div className="hero-section__glow hero-section__glow--emerald" />
        <div className="hero-section__grid-lines" />
      </div>

      <div className="container hero-section__main">
        {/* Left Column: Editorial Typography & Trust Metrics */}
        <div className="hero-section__content">
          <motion.div
            className="hero-section__eyebrow"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <span className="hero-section__pulse-dot" />
            <span>{t.hero.eyebrow}</span>
          </motion.div>

          <motion.div
            className="hero-section__identity-pill"
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.06 }}
          >
            <Award size={16} className="icon-gold" />
            <span className="hero-section__greeting">{t.hero.greeting}</span>
            <span className="hero-section__divider">•</span>
            <span className="hero-section__shop-pill">
              <Store size={14} className="icon-gold" /> {t.hero.shopBadge}
            </span>
            <span className="hero-section__divider">•</span>
            <a
              href="https://maps.app.goo.gl/ncWXPNNiC1q92XDd9"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-section__location"
              title="Open Manuraj Traders location in Google Maps"
            >
              <MapPin size={14} /> {t.hero.badgeLocation}
              <ArrowUpRight size={13} />
            </a>
          </motion.div>

          <h1 className="hero-section__headline" key={`headline-${lang}`}>
            <AnimatedHeadline text={t.hero.titleLine1} delayOffset={0.08} />
            <AnimatedHeadline
              text={t.hero.titleAccent}
              className="hero-section__headline--gold"
              delayOffset={0.18}
            />
            <AnimatedHeadline text={t.hero.titleLine2} delayOffset={0.28} />
          </h1>

          <motion.p
            className="hero-section__subtitle"
            key={`sub-${lang}`}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.38, ease: [0.16, 1, 0.3, 1] }}
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            className="hero-section__actions"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.48 }}
          >
            <MagneticButton href="#featured-seeds" variant="primary" strength={0.35}>
              <span>{t.hero.primaryCta}</span>
              <ArrowUpRight size={18} />
            </MagneticButton>

            <MagneticButton href="#contact-footer" variant="outline" strength={0.3}>
              <span>{t.hero.secondaryCta}</span>
            </MagneticButton>
          </motion.div>

          {/* 4-Column Trust & Legacy Bar */}
          <motion.div
            className="hero-section__stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.56 }}
          >
            {t.hero.stats.map((stat, idx) => (
              <div key={idx} className="hero-stat">
                <span className="hero-stat__value">{stat.value}</span>
                <span className="hero-stat__label">{stat.label}</span>
                <span className="hero-stat__detail">{stat.detail}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Clean, Full-Sized Portrait of Shri Prabhat Tiwari (No Top Tag) */}
        <div className="hero-section__visual">
          <div ref={portraitWrapRef} className="hero-portrait">
            <div className="hero-portrait__frame">
              <picture className="hero-portrait__picture">
                <source srcSet="/assets/images/hero.webp" type="image/webp" />
                <img
                  ref={portraitImgRef}
                  src="/assets/images/hero.jpg"
                  alt="Shri Prabhat Tiwari — Proprietor, Manuraj Traders Orai"
                  className="hero-portrait__img"
                  fetchPriority="high"
                />
              </picture>
              <div className="hero-portrait__vignette" />
            </div>

            {/* Bottom Nameplate Overlay */}
            <div className="hero-portrait__nameplate">
              <div className="hero-portrait__nameplate-left">
                <span className="hero-portrait__tag">{t.hero.portraitTag}</span>
                <h3>{t.hero.greeting}</h3>
                <p>{t.hero.badgeRole}</p>
              </div>
              <div className="hero-portrait__seal">
                <Sparkles size={18} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Kinetic Ticker */}
      <div className="hero-marquee" aria-hidden="true">
        <div className="hero-marquee__track">
          <span>{t.hero.marquee}</span>
          <span>{t.hero.marquee}</span>
          <span>{t.hero.marquee}</span>
        </div>
      </div>

      {/* Integrated Showcase Strip Below Hero */}
      <div className="hero-showcase container" ref={stripTrackRef}>
        <div className="hero-showcase__header">
          <div>
            <span className="section-tag">{t.hero.galleryHeader.tag}</span>
            <h2 className="hero-showcase__title">{t.hero.galleryHeader.title}</h2>
          </div>
          <p className="hero-showcase__subtitle">{t.hero.galleryHeader.subtitle}</p>
        </div>

        <div className="hero-showcase__grid">
          {heroStripPhotos.map((item, idx) => (
            <article
              key={item.id}
              className={`hero-showcase__card hero-showcase__card--${idx + 1}`}
            >
              <div className="hero-showcase__img-wrap">
                <picture className="hero-showcase__picture">
                  <source srcSet={item.src} type="image/webp" />
                  <img
                    src={item.fallback}
                    alt={item.title}
                    className="hero-showcase__img"
                    loading="lazy"
                  />
                </picture>
                <div className="hero-showcase__overlay">
                  <span className="hero-showcase__index">0{idx + 1}</span>
                  <div className="hero-showcase__meta">
                    <span className="hero-showcase__loc">{item.location}</span>
                    <h3 className="hero-showcase__card-title">{item.title}</h3>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
