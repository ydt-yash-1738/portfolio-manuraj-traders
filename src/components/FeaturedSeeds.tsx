import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import {
  Wheat,
  TrendingUp,
  Sun,
  Droplets,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Award,
  Sprout,
  ShieldCheck,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import MagneticButton from './MagneticButton';

gsap.registerPlugin(ScrollTrigger);

interface GoldenWheatGraphicProps {
  className?: string;
}

/**
 * Custom SVG Golden Wheat Ear Graphic for Parallax Float Layers
 */
const GoldenWheatGraphic: React.FC<GoldenWheatGraphicProps> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 220 420"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="wheatGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F8E29B" />
        <stop offset="50%" stopColor="#D4A843" />
        <stop offset="100%" stopColor="#8F6718" />
      </linearGradient>
    </defs>
    {/* Central Stem */}
    <path
      d="M110 410 C110 310, 114 190, 110 45"
      stroke="url(#wheatGoldGrad)"
      strokeWidth="3.5"
      strokeLinecap="round"
    />
    {/* Awns (Whiskers) */}
    <path
      d="M110 45 L82 6 M110 45 L110 2 M110 45 L138 6 M96 80 L62 32 M124 80 L158 32 M94 125 L56 75 M126 125 L164 75"
      stroke="url(#wheatGoldGrad)"
      strokeWidth="1.5"
      strokeOpacity="0.65"
      strokeLinecap="round"
    />
    {/* Paired Golden Spikelets */}
    {[70, 108, 146, 184, 222, 260, 298].map((y, idx) => (
      <g key={y} opacity={1 - idx * 0.08}>
        <ellipse
          cx="92"
          cy={y}
          rx="14"
          ry="24"
          transform={`rotate(-28 92 ${y})`}
          fill="url(#wheatGoldGrad)"
        />
        <ellipse
          cx="128"
          cy={y}
          rx="14"
          ry="24"
          transform={`rotate(28 128 ${y})`}
          fill="url(#wheatGoldGrad)"
        />
      </g>
    ))}
    {/* Crown Spikelet */}
    <ellipse cx="110" cy="48" rx="12" ry="22" fill="url(#wheatGoldGrad)" />
  </svg>
);

const FeaturedSeeds: React.FC = () => {
  const { t, lang } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);
  const wheatLeftRef = useRef<HTMLDivElement | null>(null);
  const wheatRightRef = useRef<HTMLDivElement | null>(null);
  const packImgRef = useRef<HTMLImageElement | null>(null);

  useGSAP(
    () => {
      // 1. Parallax Floating Effect on Wheat Botanical Graphics
      if (wheatLeftRef.current) {
        gsap.fromTo(
          wheatLeftRef.current,
          { y: 80, rotate: -8 },
          {
            y: -100,
            rotate: 6,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          }
        );
      }

      if (wheatRightRef.current) {
        gsap.fromTo(
          wheatRightRef.current,
          { y: 110, rotate: 10 },
          {
            y: -120,
            rotate: -6,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.4,
            },
          }
        );
      }

      // 2. Subtle Parallax Float on the Shriram Super 303 Seed Package
      if (packImgRef.current) {
        gsap.fromTo(
          packImgRef.current,
          { y: 18, rotate: -1.5 },
          {
            y: -18,
            rotate: 1.5,
            ease: 'none',
            scrollTrigger: {
              trigger: packImgRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          }
        );
      }
    },
    { scope: sectionRef, dependencies: [lang] }
  );

  const { flagship, varieties, advisory } = t.featuredSeeds;

  return (
    <section id="featured-seeds" ref={sectionRef} className="seeds-section">
      {/* Parallax Floating Wheat Botanical Layers */}
      <div ref={wheatLeftRef} className="seeds-section__wheat seeds-section__wheat--left">
        <GoldenWheatGraphic className="wheat-svg" />
      </div>
      <div ref={wheatRightRef} className="seeds-section__wheat seeds-section__wheat--right">
        <GoldenWheatGraphic className="wheat-svg" />
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="seeds-section__header">
          <div className="seeds-section__header-top">
            <span className="section-tag">
              <Wheat size={15} /> {t.featuredSeeds.eyebrow}
            </span>
            <span className="seeds-section__live-badge">
              <span className="pulse-indicator" />
              {t.featuredSeeds.seasonBadge}
            </span>
          </div>

          <h2 className="seeds-section__headline">
            <span>{t.featuredSeeds.headlinePart1} </span>
            <span className="text-gradient-gold">{t.featuredSeeds.headlineAccent}</span>
          </h2>

          <p className="seeds-section__lead">{t.featuredSeeds.description}</p>
        </div>

        {/* Bento-Box Grid */}
        <div className="seeds-bento">
          {/* BENTO CELL 1: Flagship Shriram Super 303 (2-Column Layout: Details Left, Official Seed Package Right) */}
          <article className="bento-card bento-card--flagship">
            <div className="bento-flagship__left">
              <div className="bento-flagship__badges">
                <span className="badge-pill badge-pill--gold">
                  <Sparkles size={13} /> {flagship.badge}
                </span>
                <span className="badge-pill badge-pill--dark">{flagship.companyBadge}</span>
              </div>

              <div className="bento-flagship__title-group">
                <span className="bento-flagship__code">{flagship.code}</span>
                <h3 className="bento-flagship__name">{flagship.name}</h3>
                <p className="bento-flagship__tagline">{flagship.tagline}</p>
              </div>

              <p className="bento-flagship__desc">{flagship.description}</p>

              {/* Agronomic Feature List */}
              <ul className="bento-flagship__features">
                {flagship.features.map((feat, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={18} className="icon-gold" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* 4 High-Contrast Yield & Spec Data Cards */}
              <div className="bento-flagship__metrics">
                {flagship.metrics.map((metric, idx) => (
                  <div key={idx} className="seed-metric-box">
                    <span className="seed-metric-box__label">{metric.label}</span>
                    <strong className="seed-metric-box__value">{metric.value}</strong>
                    <span className="seed-metric-box__unit">{metric.unit}</span>
                  </div>
                ))}
              </div>

              <div className="bento-flagship__cta-row">
                <MagneticButton href="#contact-footer" variant="gold" strength={0.35}>
                  <span>{flagship.cta}</span>
                  <ArrowUpRight size={18} />
                </MagneticButton>
              </div>
            </div>

            {/* Right Column: Official Shriram Super 303 Wheat Seed Package Showcase */}
            <div className="bento-flagship__right">
              <div className="seed-pack-showcase">
                <div className="seed-pack-showcase__badge">
                  <Wheat size={15} className="icon-gold" />
                  <span>{flagship.packBadge}</span>
                </div>

                <picture className="seed-pack-showcase__picture">
                  <source srcSet="/assets/images/shriram-303-pack.webp" type="image/webp" />
                  <img
                    ref={packImgRef}
                    src="/assets/images/shriram-303-pack.png"
                    alt="Official Shriram Super 303 Wheat Seeds Package — Manuraj Traders Orai"
                    className="seed-pack-showcase__img"
                  />
                </picture>

                <div className="seed-pack-showcase__caption">
                  <ShieldCheck size={16} className="icon-gold" />
                  <span>{flagship.packCaption}</span>
                </div>
              </div>
            </div>
          </article>

          {/* BENTO CELLS 2, 3, 4: Shriram Super 234, Shriram OP, and Shriram Hybrid */}
          {varieties.map((v, idx) => {
            const icons = [Sun, Sprout, TrendingUp];
            const VarietyIcon = icons[idx % icons.length];

            return (
              <motion.article
                key={v.id}
                className="bento-card bento-card--variety"
                whileHover={{ y: -8 }}
                transition={{ type: 'spring', stiffness: 320, damping: 24 }}
              >
                <div className="variety-card__top">
                  <span className="variety-card__badge">{v.badge}</span>
                  <span className="variety-card__icon">
                    <VarietyIcon size={20} />
                  </span>
                </div>

                <div className="variety-card__header">
                  <span className="variety-card__code">{v.code}</span>
                  <h3 className="variety-card__name">{v.name}</h3>
                </div>

                <div className="variety-card__highlight">
                  <Award size={15} className="icon-gold" />
                  <span>{v.highlight}</span>
                </div>

                <p className="variety-card__desc">{v.description}</p>

                <div className="variety-card__stats">
                  <div className="variety-stat">
                    <span className="variety-stat__label">{t.featuredSeeds.yieldLabel}</span>
                    <strong className="variety-stat__val">{v.yield}</strong>
                  </div>
                  <div className="variety-stat">
                    <span className="variety-stat__label">{t.featuredSeeds.maturityLabel}</span>
                    <strong className="variety-stat__val">{v.duration}</strong>
                  </div>
                </div>

                <div className="variety-card__tags">
                  {v.specs.map((spec, sIdx) => (
                    <span key={sIdx} className="variety-tag">
                      {spec}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}

          {/* BENTO CELL 5: Agronomic Advisory Strip by Manuraj Traders */}
          <div className="bento-card bento-card--advisory">
            <div className="advisory-icon">
              <Droplets size={26} />
            </div>
            <div className="advisory-content">
              <h4>{advisory.title}</h4>
              <p>{advisory.text}</p>
            </div>
            <div className="advisory-cta">
              <MagneticButton href="#contact-footer" variant="outline" strength={0.3}>
                <span>{advisory.cta}</span>
                <ArrowUpRight size={16} />
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSeeds;
