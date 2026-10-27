import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, MapPin, Award } from 'lucide-react';
import { useLanguage, type GalleryItem, type GalleryCategory } from '../context/LanguageContext';

type FilterType = 'all' | GalleryCategory;

const ImpactGallery: React.FC = () => {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const filters: { key: FilterType; label: string }[] = [
    { key: 'all', label: t.gallery.filterAll },
    { key: 'leadership', label: t.gallery.filterLeadership },
    { key: 'community', label: t.gallery.filterCommunity },
    { key: 'summit', label: t.gallery.filterSummit },
  ];

  const filteredItems =
    activeFilter === 'all'
      ? t.gallery.items
      : t.gallery.items.filter((item) => item.category === activeFilter);

  return (
    <section id="community-gallery" className="gallery-section">
      <div className="container">
        <div className="gallery-section__header">
          <div className="gallery-section__title-wrap">
            <span className="section-tag">
              <Award size={15} /> {t.gallery.eyebrow}
            </span>
            <h2 className="gallery-section__title">{t.gallery.title}</h2>
            <p className="gallery-section__subtitle">{t.gallery.subtitle}</p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="gallery-filters" role="tablist">
            {filters.map((f) => (
              <button
                key={f.key}
                type="button"
                role="tab"
                aria-selected={activeFilter === f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`gallery-filter-btn ${activeFilter === f.key ? 'is-active' : ''}`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Animated Masonry / Bento Photo Grid */}
        <motion.div layout className="gallery-masonry">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.figure
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.92, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.45, delay: idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className={`gallery-item gallery-item--${item.span}`}
                onClick={() => setLightboxItem(item)}
              >
                <div className="gallery-item__media">
                  <picture>
                    <source srcSet={item.src} type="image/webp" />
                    <img
                      src={item.fallback}
                      alt={item.title}
                      className="gallery-item__img"
                      loading="lazy"
                    />
                  </picture>
                  <div className="gallery-item__shade" />
                  <button
                    type="button"
                    className="gallery-item__zoom"
                    aria-label={`View ${item.title}`}
                  >
                    <Maximize2 size={16} />
                  </button>
                </div>

                <figcaption className="gallery-item__caption">
                  <span className="gallery-item__loc">
                    <MapPin size={12} /> {item.location}
                  </span>
                  <h3 className="gallery-item__title">{item.title}</h3>
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Fullscreen High-Res Lightbox Modal */}
      <AnimatePresence>
        {lightboxItem && (
          <motion.div
            className="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxItem(null)}
          >
            <motion.div
              className="gallery-lightbox__dialog"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="gallery-lightbox__close"
                onClick={() => setLightboxItem(null)}
                aria-label="Close preview"
              >
                <X size={20} />
              </button>
              <picture>
                <source srcSet={lightboxItem.src} type="image/webp" />
                <img
                  src={lightboxItem.fallback}
                  alt={lightboxItem.title}
                  className="gallery-lightbox__img"
                />
              </picture>
              <div className="gallery-lightbox__info">
                <span>{lightboxItem.location}</span>
                <h3>{lightboxItem.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ImpactGallery;
