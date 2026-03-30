'use client';

import Image from 'next/image';

type Props = {
  className?: string;
  alt?: string;
  width?: number;
  height?: number;
};

/**
 * Logo de la marca — usa next/image para que Next.js:
 *  1. Sirva el PNG como WebP/AVIF automáticamente
 *  2. Emita un <link rel="preload"> en el <head> cuando priority=true
 *  3. Evite el canvas-crop en cliente que retrasaba el LCP ~300-800ms
 */
export function BrandLogo({
  className,
  alt = 'Catalina Facturador',
  width = 420,
  height = 96,
}: Props) {
  return (
    <Image
      src="/catalina-logo.png"
      alt={alt}
      width={width}
      height={height}
      priority
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
}
