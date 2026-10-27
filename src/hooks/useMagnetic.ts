import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Custom TypeScript hook that attaches Lando-Norris style 60fps magnetic cursor attraction
 * to any interactive DOM element and its inner text/icon layer.
 */
export function useMagnetic<T extends HTMLElement = HTMLElement>(
  strength = 0.38,
  textStrength = 0.22
) {
  const elementRef = useRef<T | null>(null);
  const contentRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const el = elementRef.current;
    const content = contentRef.current;
    if (!el) return;

    // Respect touch-only devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const xTo = gsap.quickTo(el, 'x', { duration: 0.7, ease: 'elastic.out(1, 0.35)' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.7, ease: 'elastic.out(1, 0.35)' });

    const textXTo = content
      ? gsap.quickTo(content, 'x', { duration: 0.6, ease: 'power3.out' })
      : null;
    const textYTo = content
      ? gsap.quickTo(content, 'y', { duration: 0.6, ease: 'power3.out' })
      : null;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const relX = e.clientX - (rect.left + rect.width / 2);
      const relY = e.clientY - (rect.top + rect.height / 2);

      xTo(relX * strength);
      yTo(relY * strength);

      if (textXTo && textYTo) {
        textXTo(relX * textStrength);
        textYTo(relY * textStrength);
      }
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
      if (textXTo && textYTo) {
        textXTo(0);
        textYTo(0);
      }
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength, textStrength]);

  return { elementRef, contentRef };
}
