'use client';

import * as React from 'react';

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function InvoiceSpeedShowcase() {
  const rootRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (prefersReducedMotion()) return;

    let ctx: { revert: () => void } | undefined;
    let timeline: { kill?: () => void } | undefined;

    async function run() {
      const gsapModule = await import('gsap');
      const gsap = gsapModule.gsap;

      if (!rootRef.current) return;

      ctx = gsap.context(() => {
        const rootEl = rootRef.current;
        if (!rootEl) return;

        const steps = gsap.utils.toArray<HTMLElement>('[data-step]');
        const reveal = gsap.utils.toArray<HTMLElement>('[data-reveal]');
        const badge = rootEl.querySelector<HTMLElement>('[data-badge]');
        const check = rootEl.querySelector<HTMLElement>('[data-check]');
        const progress = rootEl.querySelector<HTMLElement>('[data-progress]');
        const totalNum = rootEl.querySelector<HTMLElement>('[data-total]');
        const streaks = gsap.utils.toArray<HTMLElement>('[data-streak]');

        gsap.set(steps, { opacity: 0.35 });
        gsap.set(reveal, { clipPath: 'inset(0 100% 0 0 round 10px)' });
        if (check) gsap.set(check, { scale: 0.6, opacity: 0, rotate: -8 });
        if (progress) gsap.set(progress, { scaleX: 0, transformOrigin: '0% 50%' });
        gsap.set(streaks, { xPercent: -120, opacity: 0 });

        const total = { v: 0 };

        const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.9 });
        timeline = tl as unknown as { kill?: () => void };

        // Pulse the badge and create speed streaks.
        if (badge) {
          tl.to(
            badge,
            {
              boxShadow: '0 0 0 6px rgba(34,197,94,0.12)',
              duration: 0.25,
              ease: 'power2.out',
              yoyo: true,
              repeat: 1,
            },
            0,
          );
        }

        tl.to(
          streaks,
          {
            xPercent: 120,
            opacity: 0.28,
            duration: 0.7,
            stagger: 0.06,
            ease: 'power2.out',
          },
          0,
        ).to(
          streaks,
          {
            opacity: 0,
            duration: 0.25,
            stagger: 0.04,
            ease: 'power1.out',
          },
          0.45,
        );

        // Step 1: Cliente
        tl.to(steps[0], { opacity: 1, duration: 0.2 }, 0)
          .to(reveal[0], { clipPath: 'inset(0 0% 0 0 round 10px)', duration: 0.55, ease: 'power3.out' }, 0.05);
        if (progress) {
          tl.to(progress, { scaleX: 0.35, duration: 0.35, ease: 'power2.out' }, 0.12);
        }

        // Step 2: Items
        tl.to(steps[1], { opacity: 1, duration: 0.2 }, 0.55)
          .to(reveal[1], { clipPath: 'inset(0 0% 0 0 round 10px)', duration: 0.55, ease: 'power3.out' }, 0.62);
        if (progress) {
          tl.to(progress, { scaleX: 0.7, duration: 0.35, ease: 'power2.out' }, 0.72);
        }

        // Step 3: Total
        tl.to(steps[2], { opacity: 1, duration: 0.2 }, 1.1)
          .to(reveal[2], { clipPath: 'inset(0 0% 0 0 round 10px)', duration: 0.55, ease: 'power3.out' }, 1.16)
          .to(
            total,
            {
              v: 42.9,
              duration: 0.5,
              ease: 'power2.out',
              onUpdate: () => {
                if (!totalNum) return;
                totalNum.textContent = total.v.toFixed(2);
              },
            },
            1.16,
          );
        if (progress) {
          tl.to(progress, { scaleX: 1, duration: 0.35, ease: 'power2.out' }, 1.28);
        }

        // Emitir
        if (check) {
          tl.to(check, { opacity: 1, scale: 1, rotate: 0, duration: 0.35, ease: 'back.out(1.8)' }, 1.62);
        }
        if (badge) {
          tl.to(
            badge,
            {
              filter: 'brightness(1.25)',
              duration: 0.18,
              yoyo: true,
              repeat: 1,
            },
            1.62,
          );
        }
        tl.to(
          rootEl,
          {
            boxShadow: '0 0 0 1px rgba(34,197,94,0.35), 0 40px 90px rgba(0,0,0,0.6)',
            duration: 0.35,
            ease: 'power2.out',
            yoyo: true,
            repeat: 1,
          },
          1.62,
        );

        // Reset for next loop
        tl.to(
          [reveal[0], reveal[1], reveal[2]],
          {
            clipPath: 'inset(0 100% 0 0 round 10px)',
            duration: 0.45,
            ease: 'power2.in',
          },
          2.4,
        )
          .to(
            steps,
            {
              opacity: 0.35,
              duration: 0.25,
              ease: 'power2.out',
            },
            2.4,
          )
          .to(check ?? {}, { opacity: 0, scale: 0.6, duration: 0.2 }, 2.4)
          .to(progress ?? {}, { scaleX: 0, duration: 0.25, ease: 'power2.inOut' }, 2.4)
          .to(
            total,
            {
              v: 0,
              duration: 0.01,
              onUpdate: () => {
                if (!totalNum) return;
                totalNum.textContent = '0.00';
              },
            },
            2.4,
          );
      }, rootRef);
    }

    run();

    return () => {
      if (timeline) timeline.kill?.();
      if (ctx) ctx.revert();
    };
  }, []);

  return (
    <div ref={rootRef} className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-48 w-[28rem] -translate-x-1/2 rounded-full bg-brand/15 blur-3xl" />
        <div className="absolute -bottom-24 left-1/2 h-48 w-[28rem] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
      </div>

      {/* Speed streaks */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            data-streak
            className="absolute left-[-40%] top-0 h-full w-[50%] rotate-12 bg-gradient-to-r from-transparent via-brand/25 to-transparent blur-[1px]"
            style={{ top: `${10 + i * 14}%` }}
          />
        ))}
      </div>

      <div className="relative flex items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-white/60">Demo</div>
          <div className="mt-1 text-sm font-semibold">Factura en segundos</div>
        </div>

        <div
          data-badge
          className="rounded-full bg-brand/15 px-3 py-1 text-xs font-semibold text-brand ring-1 ring-brand/20"
        >
          3 pasos
        </div>
      </div>

      <div className="relative mt-4 rounded-2xl bg-black/60 p-4 ring-1 ring-white/10">
        <div className="flex items-center justify-between">
          <div className="text-xs font-semibold text-white/60">Emitir documento</div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-24 overflow-hidden rounded-full bg-white/10">
              <div data-progress className="h-full w-full rounded-full bg-brand" />
            </div>
            <div
              data-check
              className="grid h-6 w-6 place-items-center rounded-full bg-brand text-[12px] font-black text-black"
              aria-hidden
            >
              ✓
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-3">
          <div data-step className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
            <div className="text-[11px] font-semibold text-white/60">Cliente</div>
            <div data-reveal className="mt-2 rounded-lg bg-black/40 px-3 py-2 text-sm">
              Ferretería Los Andes
            </div>
          </div>

          <div data-step className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
            <div className="text-[11px] font-semibold text-white/60">Items</div>
            <div data-reveal className="mt-2 rounded-lg bg-black/40 px-3 py-2 text-sm">
              2× Servicios • 1× Producto
            </div>
          </div>

          <div data-step className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
            <div className="flex items-center justify-between">
              <div className="text-[11px] font-semibold text-white/60">Total</div>
              <div className="text-[11px] font-semibold text-white/60">USD</div>
            </div>
            <div data-reveal className="mt-2 flex items-baseline justify-between rounded-lg bg-black/40 px-3 py-2">
              <div className="text-sm text-white/70">Total a cobrar</div>
              <div className="text-lg font-semibold">$
                <span data-total>0.00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 text-xs text-white/55">
          Sin pasos innecesarios: elegir cliente → items → emitir.
        </div>
      </div>
    </div>
  );
}
