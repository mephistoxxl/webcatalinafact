'use client';

import * as React from 'react';

export function ScrollShowcase() {
  const rootRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    let ctx: { revert: () => void } | undefined;

    async function run() {
      const gsapModule = await import('gsap');
      const scrollTriggerModule = await import('gsap/ScrollTrigger');

      const gsap = gsapModule.gsap;
      const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      if (!rootRef.current) return;

      ctx = gsap.context(() => {
        const panels = gsap.utils.toArray<HTMLElement>('[data-panel]');

        gsap.set(panels, { opacity: 0.35, y: 20 });

        panels.forEach((panel) => {
          gsap.to(panel, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: panel,
              start: 'top 75%',
              end: 'bottom 55%',
              toggleActions: 'play none none reverse',
            },
          });
        });

        ScrollTrigger.create({
          trigger: rootRef.current,
          start: 'top top',
          end: 'bottom bottom',
        });
      }, rootRef);
    }

    run();

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <div ref={rootRef} className="grid gap-4">
      <div
        data-panel
        className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
      >
        <div className="text-sm font-semibold text-white">Flujo profesional</div>
        <p className="mt-2 text-sm text-white/70">
          Cotización → Factura → Cobro → Reportes. Todo conectado.
        </p>
      </div>
      <div
        data-panel
        className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
      >
        <div className="text-sm font-semibold text-white">Cero fricción</div>
        <p className="mt-2 text-sm text-white/70">
          Plantillas, series, impuestos, descuentos, clientes y productos listos.
        </p>
      </div>
      <div
        data-panel
        className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
      >
        <div className="text-sm font-semibold text-white">Control total</div>
        <p className="mt-2 text-sm text-white/70">
          Alertas, auditoría y permisos por roles para equipos.
        </p>
      </div>
    </div>
  );
}
