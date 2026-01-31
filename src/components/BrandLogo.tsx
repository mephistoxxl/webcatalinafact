'use client';

/* eslint-disable @next/next/no-img-element */

import * as React from 'react';

type Props = {
  className?: string;
  alt?: string;
  width?: number;
  height?: number;
  cropPng?: boolean;
};

/**
 * Uses a runtime fallback (PNG -> SVG) without crashing the app.
 * We intentionally use <img> (not next/image) because next/image throws on 404.
 */
export function BrandLogo({
  className,
  alt = 'Catalina Facturador',
  width = 170,
  height = 44,
  cropPng = true,
}: Props) {
  const [src, setSrc] = React.useState('/catalina-logo.svg');

  React.useEffect(() => {
    let cancelled = false;
    let blobUrl: string | undefined;

    async function loadAndCrop() {
      const img = new Image();
      img.decoding = 'async';
      img.src = '/catalina-logo.png';

      try {
        await img.decode();
      } catch {
        // If PNG doesn't exist or can't decode, stay on SVG fallback.
        if (!cancelled) setSrc('/catalina-logo.svg');
        return;
      }

      if (cancelled) return;

      if (!cropPng) {
        setSrc('/catalina-logo.png');
        return;
      }

      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      if (!ctx) {
        setSrc('/catalina-logo.png');
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);

      const { data, width: w, height: h } = ctx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height,
      );

      const alphaThreshold = 8;
      let minX = w;
      let minY = h;
      let maxX = -1;
      let maxY = -1;

      for (let y = 0; y < h; y++) {
        const row = y * w * 4;
        for (let x = 0; x < w; x++) {
          const a = data[row + x * 4 + 3];
          if (a > alphaThreshold) {
            if (x < minX) minX = x;
            if (y < minY) minY = y;
            if (x > maxX) maxX = x;
            if (y > maxY) maxY = y;
          }
        }
      }

      // If no opaque pixels were found, fall back to the original PNG.
      if (maxX < 0 || maxY < 0) {
        setSrc('/catalina-logo.png');
        return;
      }

      // Add a small safety padding so strokes don't get clipped.
      const pad = 6;
      minX = Math.max(0, minX - pad);
      minY = Math.max(0, minY - pad);
      maxX = Math.min(w - 1, maxX + pad);
      maxY = Math.min(h - 1, maxY + pad);

      const cw = Math.max(1, maxX - minX + 1);
      const ch = Math.max(1, maxY - minY + 1);

      const out = document.createElement('canvas');
      out.width = cw;
      out.height = ch;
      const outCtx = out.getContext('2d');
      if (!outCtx) {
        setSrc('/catalina-logo.png');
        return;
      }

      outCtx.drawImage(img, minX, minY, cw, ch, 0, 0, cw, ch);

      const blob: Blob | null = await new Promise((resolve) =>
        out.toBlob(resolve, 'image/png'),
      );

      if (!blob) {
        setSrc('/catalina-logo.png');
        return;
      }

      blobUrl = URL.createObjectURL(blob);
      setSrc(blobUrl);
    }

    loadAndCrop();

    return () => {
      cancelled = true;
      if (blobUrl) URL.revokeObjectURL(blobUrl);
    };
  }, [cropPng]);

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      decoding="async"
      loading="eager"
    />
  );
}
