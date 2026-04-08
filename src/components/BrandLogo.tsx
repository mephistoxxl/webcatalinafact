// Server Component — no necesita 'use client'
// next/image funciona perfectamente en el servidor
import Image from 'next/image';

type Props = {
  className?: string;
  alt?: string;
  width?: number;
  height?: number;
};

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
