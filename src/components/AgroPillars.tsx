import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Sprout, ShieldAlert, FlaskConical, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const pillarIcons = [Sprout, ShieldAlert, FlaskConical];

const AgroPillars: React.FC = () => {
  const { t, lang } = useLanguage();
  const sectionRef = useRef<HTMLElement | null>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>('.pillar-card');
      gsap.fromTo(
        cards,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.16,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    },
    { scope: sectionRef, dependencies: [lang] }
  );

  return (
    <section id="crop-pillars" ref={sectionRef} className="pillars-section">
      <div className="container">
        <div className="pillars-section__header">
          <span className="section-tag">{t.pillars.eyebrow}</span>
          <h2 className="pillars-section__title">{t.pillars.title}</h2>
          <p className="pillars-section__subtitle">{t.pillars.subtitle}</p>
        </div>

        <div className="pillars-grid">
          {t.pillars.items.map((item, idx) => {
            const IconComponent = pillarIcons[idx % pillarIcons.length];
            return (
              <article key={item.number} className="pillar-card">
                <div className="pillar-card__top">
                  <span className="pillar-card__num">{item.number}</span>
                  <div className="pillar-card__icon">
                    <IconComponent size={24} />
                  </div>
                </div>

                <div className="pillar-card__body">
                  <span className="pillar-card__sub">{item.hindiSub}</span>
                  <h3 className="pillar-card__title">{item.title}</h3>
                  <p className="pillar-card__desc">{item.description}</p>
                </div>

                <div className="pillar-card__footer">
                  <div className="pillar-card__tags">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="pillar-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href="#contact-footer" className="pillar-card__link" aria-label={item.title}>
                    <ArrowUpRight size={18} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AgroPillars;
