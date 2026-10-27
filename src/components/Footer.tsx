import React from 'react';
import {
  PhoneCall,
  MessageCircle,
  MapPin,
  Clock,
  Award,
  ArrowUp,
  Wheat,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import MagneticButton from './MagneticButton';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const { footer } = t;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cleanPrimaryPhone = footer.primaryPhone.replace(/\s+/g, '');
  const cleanSecondaryPhone = footer.secondaryPhone.replace(/\s+/g, '');

  return (
    <footer id="contact-footer" className="site-footer">
      <div className="site-footer__glow" aria-hidden="true" />

      <div className="container">
        {/* Monumental Call-To-Action Header */}
        <div className="site-footer__hero">
          <span className="section-tag">
            <Wheat size={15} /> {footer.eyebrow}
          </span>

          <h2 className="site-footer__display">
            <span>{footer.ctaHeadline1}</span>
            <span className="text-gradient-gold">{footer.ctaHeadline2}</span>
          </h2>

          <p className="site-footer__sub">{footer.ctaSub}</p>
        </div>

        {/* Direct Phone & Business Contact Matrix */}
        <div className="site-footer__grid">
          {/* Primary Phone Card (Focus of Direct Inquiries) */}
          <div className="footer-card footer-card--phone">
            <span className="footer-card__label">
              <PhoneCall size={15} className="icon-gold" /> {footer.phoneLabel}
            </span>

            <div className="footer-phone-list">
              <a href={`tel:${cleanPrimaryPhone}`} className="footer-phone-number">
                {footer.primaryPhone}
              </a>
              <a
                href={`tel:${cleanSecondaryPhone}`}
                className="footer-phone-number footer-phone-number--secondary"
              >
                {footer.secondaryPhone}
              </a>
            </div>

            <div className="footer-card__actions">
              <MagneticButton
                href={`tel:${cleanPrimaryPhone}`}
                variant="gold"
                strength={0.35}
              >
                <PhoneCall size={17} />
                <span>{footer.callAction}</span>
              </MagneticButton>

              <MagneticButton
                href={`https://wa.me/${cleanPrimaryPhone.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                strength={0.35}
              >
                <MessageCircle size={17} />
                <span>{footer.whatsappAction}</span>
              </MagneticButton>
            </div>
          </div>

          {/* Establishment Location & Hours */}
          <div className="footer-card footer-card--details">
            <div className="footer-detail-block">
              <span className="footer-card__label">
                <MapPin size={15} className="icon-gold" /> {footer.addressLabel}
              </span>
              <h3 className="footer-detail-block__title">{footer.addressLine1}</h3>
              <p>{footer.addressLine2}</p>
              <p>
                <a
                  href="https://maps.app.goo.gl/ncWXPNNiC1q92XDd9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-map-link"
                >
                  <MapPin size={14} className="icon-gold" />
                  <span>{footer.addressLine3}</span>
                </a>
              </p>
            </div>

            <div className="footer-detail-block">
              <span className="footer-card__label">
                <Clock size={15} className="icon-gold" /> {footer.hoursLabel}
              </span>
              <p className="footer-hours">{footer.hoursValue}</p>
            </div>

            <div className="footer-detail-block">
              <span className="footer-card__label">
                <Award size={15} className="icon-gold" /> {footer.affiliationsLabel}
              </span>
              <ul className="footer-affiliations">
                {footer.affiliations.map((aff, idx) => (
                  <li key={idx}>{aff}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Back-to-top Bar */}
        <div className="site-footer__bottom">
          <p className="site-footer__copy">{footer.copyright}</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="site-footer__top-btn"
            aria-label="Scroll to top"
          >
            <span>{footer.topBtn}</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
