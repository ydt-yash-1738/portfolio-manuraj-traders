import React, { type ReactNode, type MouseEventHandler } from 'react';
import { useMagnetic } from '../hooks/useMagnetic';

export type MagneticVariant = 'primary' | 'gold' | 'outline';

export interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: MouseEventHandler<HTMLElement>;
  variant?: MagneticVariant;
  className?: string;
  strength?: number;
  ariaLabel?: string;
  target?: string;
  rel?: string;
}

/**
 * Reusable Magnetic Button with Lando Norris-inspired liquid fill hover
 * and dual-layer spring physics.
 */
const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  strength = 0.35,
  ariaLabel,
  target,
  rel,
}) => {
  const { elementRef, contentRef } = useMagnetic<HTMLElement>(strength, strength * 0.55);

  const combinedClass = `magnetic-btn magnetic-btn--${variant} ${className}`.trim();

  if (href) {
    return (
      <a
        ref={elementRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        onClick={onClick}
        className={combinedClass}
        aria-label={ariaLabel}
        target={target}
        rel={rel}
      >
        <span className="magnetic-btn__fill" aria-hidden="true" />
        <span ref={contentRef} className="magnetic-btn__content">
          {children}
        </span>
      </a>
    );
  }

  return (
    <button
      ref={elementRef as React.RefObject<HTMLButtonElement>}
      type="button"
      onClick={onClick}
      className={combinedClass}
      aria-label={ariaLabel}
    >
      <span className="magnetic-btn__fill" aria-hidden="true" />
      <span ref={contentRef} className="magnetic-btn__content">
        {children}
      </span>
    </button>
  );
};

export default MagneticButton;
