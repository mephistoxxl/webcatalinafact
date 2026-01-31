Landing en Next.js (SSG/SSR) para promocionar un **Sistema de Facturación**, con Tailwind CSS, Motion (animaciones UI) y GSAP (scroll/timelines).

## Getting Started

Primero, inicia el servidor de desarrollo:

```bash
npm run dev
```

Abre http://localhost:3000 en el navegador.

Edita la landing en `src/app/page.tsx`.

## Configuración rápida

- Cambia el dominio SEO en `src/app/layout.tsx` (campo `metadataBase`) y `src/app/sitemap.ts`.
- Coloca tu logo en `public/catalina-logo.svg` o `public/catalina-logo.png`.
	- Actualmente hay un placeholder en `public/catalina-logo.svg` (puedes reemplazarlo por tu logo oficial).
- Reemplaza el email de contacto en la sección Contacto.

## Comandos

```bash
npm run dev
npm run build
npm run start
```

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
