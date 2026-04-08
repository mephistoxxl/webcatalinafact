'use client';

import * as React from 'react';

function isMobile(): boolean {
  if (typeof window === 'undefined') return false;
  // Usar matchMedia en lugar de userAgent (más fiable y rápido)
  return window.matchMedia('(max-width: 767px)').matches;
}

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// ─── Versión CSS pura para móvil ──────────────────────────────────────────────
// Solo opacity + transform. Cero filtros, cero clipPath, cero GSAP.
// Todo corre en el compositor sin tocar el main thread.
function MobileShowcase() {
  const [step, setStep] = React.useState<0 | 1 | 2 | 3>(0);
  const [total, setTotal] = React.useState('0.00');
  const timerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const rootRef = React.useRef<HTMLDivElement>(null);
  const activeRef = React.useRef(false);

  const runSequence = React.useCallback(() => {
    // paso 1: cliente
    setStep(1);
    timerRef.current = setTimeout(() => {
      // paso 2: items
      setStep(2);
      timerRef.current = setTimeout(() => {
        // paso 3: total animado
        setStep(3);
        let v = 0;
        const target = 42.9;
        const steps = 20;
        const inc = target / steps;
        let count = 0;
        const counter = setInterval(() => {
          count++;
          v = Math.min(v + inc, target);
          setTotal(v.toFixed(2));
          if (count >= steps) clearInterval(counter);
        }, 25);
        // reset después de completar
        timerRef.current = setTimeout(() => {
          setStep(0);
          setTotal('0.00');
          timerRef.current = setTimeout(runSequence, 600);
        }, 2200);
      }, 700);
    }, 700);
  }, []);

  React.useEffect(() => {
    if (prefersReducedMotion()) return;

    // Solo animar cuando está visible en pantalla
    const el = rootRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !activeRef.current) {
          activeRef.current = true;
          timerRef.current = setTimeout(runSequence, 400);
        } else if (!entry.isIntersecting) {
          activeRef.current = false;
          if (timerRef.current) clearTimeout(timerRef.current);
          setStep(0);
          setTotal('0.00');
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(el);

    const handleVisibility = () => {
      if (document.hidden) {
        activeRef.current = false;
        if (timerRef.current) clearTimeout(timerRef.current);
      } else if (el && rootRef.current) {
        // si sigue visible, reanudar
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          activeRef.current = true;
          timerRef.current = setTimeout(runSequence, 400);
        }
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibility);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [runSequence]);

  const revealStyle = (show: boolean): React.CSSProperties => ({
    opacity: show ? 1 : 0,
    transform: show ? 'translateY(0)' : 'translateY(6px)',
    transition: show ? 'opacity 0.3s ease, transform 0.3s ease' : 'none',
  });

  const stepStyle = (minStep: number): React.CSSProperties => ({
    opacity: step >= minStep ? 1 : 0.35,
    transition: 'opacity 0.25s ease',
  });

  return (
    <div ref={rootRef} className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="relative flex items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-gray-500">Demo</div>
          <div className="mt-1 text-sm font-semibold text-gray-900">Factura en segundos</div>
        </div>
        <div className="rounded-full bg-brand/15 px-3 py-1 text-xs font-semibold text-brand ring-1 ring-brand/20">
          3 pasos
        </div>
      </div>

      <div className="relative mt-4 rounded-2xl bg-gray-50 p-4 ring-1 ring-gray-200">
        <div className="flex items-center justify-between">
          <div className="text-xs font-semibold text-gray-500">Emitir documento</div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-24 overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-brand"
                style={{
                  width: step === 0 ? '0%' : step === 1 ? '35%' : step === 2 ? '70%' : '100%',
                  transition: 'width 0.35s ease',
                }}
              />
            </div>
            <div
              className="grid h-6 w-6 place-items-center rounded-full bg-brand text-[12px] font-black text-white"
              aria-hidden
              style={{
                opacity: step === 3 ? 1 : 0,
                transform: step === 3 ? 'scale(1)' : 'scale(0.6)',
                transition: 'opacity 0.3s ease, transform 0.3s ease',
              }}
            >
              ✓
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-3">
          <div className="rounded-xl bg-gray-100 p-3 ring-1 ring-gray-200" style={stepStyle(1)}>
            <div className="text-[11px] font-semibold text-gray-500">Cliente</div>
            <div className="mt-2 rounded-lg bg-white px-3 py-2 text-sm text-gray-900 border border-gray-200" style={revealStyle(step >= 1)}>
              Ferretería Los Andes
            </div>
          </div>

          <div className="rounded-xl bg-gray-100 p-3 ring-1 ring-gray-200" style={stepStyle(2)}>
            <div className="text-[11px] font-semibold text-gray-500">Items</div>
            <div className="mt-2 rounded-lg bg-white px-3 py-2 text-sm text-gray-900 border border-gray-200" style={revealStyle(step >= 2)}>
              2× Servicios • 1× Producto
            </div>
          </div>

          <div className="rounded-xl bg-gray-100 p-3 ring-1 ring-gray-200" style={stepStyle(3)}>
            <div className="flex items-center justify-between">
              <div className="text-[11px] font-semibold text-gray-500">Total</div>
              <div className="text-[11px] font-semibold text-gray-500">USD</div>
            </div>
            <div className="mt-2 flex items-baseline justify-between rounded-lg bg-white px-3 py-2 border border-gray-200" style={revealStyle(step >= 3)}>
              <div className="text-sm text-gray-600">Total a cobrar</div>
              <div className="text-lg font-semibold text-gray-900">
                ${total}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 text-xs text-gray-500">
          Sin pasos innecesarios: elegir cliente → items → emitir.
        </div>
      </div>
    </div>
  );
}

// ─── Versión GSAP para desktop ────────────────────────────────────────────────
// Optimizada: sin clipPath, sin filter, sin boxShadow animado.
// Solo opacity + transform (translateX/Y/scaleX) — 100% compositor.
function DesktopShowcase() {
  const rootRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (prefersReducedMotion()) return;

    let ctx: { revert: () => void } | undefined;
    let tl: { pause?: () => void; resume?: () => void; kill?: () => void } | undefined;
    let visibilityObserver: IntersectionObserver | undefined;

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
        // Solo 3 streaks en desktop (eran 6)
        const streaks = gsap.utils.toArray<HTMLElement>('[data-streak]');

        // Estado inicial — solo opacity y transform (compositor-safe)
        gsap.set(steps, { opacity: 0.35 });
        // Reemplazamos clipPath por translateX — mucho más rápido
        gsap.set(reveal, { opacity: 0, x: -8 });
        if (check) gsap.set(check, { scale: 0.6, opacity: 0 });
        if (progress) gsap.set(progress, { scaleX: 0, transformOrigin: '0% 50%' });
        gsap.set(streaks, { xPercent: -120, opacity: 0 });

        const total = { v: 0 };

        // repeatDelay más largo para dar respiro a la GPU
        const timeline = gsap.timeline({ repeat: -1, repeatDelay: 1.5 });
        tl = timeline as unknown as { pause?: () => void; resume?: () => void; kill?: () => void };

        // Streaks: más rápidos, sin yoyo extra
        timeline.to(
          streaks,
          { xPercent: 200, opacity: 0.2, duration: 0.5, stagger: 0.08, ease: 'power2.out' },
          0,
        );

        // Step 1
        timeline
          .to(steps[0], { opacity: 1, duration: 0.2 }, 0.1)
          .to(reveal[0], { opacity: 1, x: 0, duration: 0.3, ease: 'power2.out' }, 0.15);
        if (progress) timeline.to(progress, { scaleX: 0.35, duration: 0.3, ease: 'power2.out' }, 0.2);

        // Step 2
        timeline
          .to(steps[1], { opacity: 1, duration: 0.2 }, 0.55)
          .to(reveal[1], { opacity: 1, x: 0, duration: 0.3, ease: 'power2.out' }, 0.6);
        if (progress) timeline.to(progress, { scaleX: 0.7, duration: 0.3, ease: 'power2.out' }, 0.7);

        // Step 3 + contador
        timeline
          .to(steps[2], { opacity: 1, duration: 0.2 }, 1.0)
          .to(reveal[2], { opacity: 1, x: 0, duration: 0.3, ease: 'power2.out' }, 1.05)
          .to(
            total,
            {
              v: 42.9,
              duration: 0.45,
              ease: 'power2.out',
              onUpdate: () => {
                if (totalNum) totalNum.textContent = total.v.toFixed(2);
              },
            },
            1.05,
          );
        if (progress) timeline.to(progress, { scaleX: 1, duration: 0.3, ease: 'power2.out' }, 1.15);

        // Check — solo scale + opacity, sin rotate (compositor-safe)
        if (check) timeline.to(check, { opacity: 1, scale: 1, duration: 0.3, ease: 'back.out(1.5)' }, 1.5);
        // Badge — solo opacity flicker, sin filter
        if (badge) timeline.to(badge, { opacity: 0.6, duration: 0.15, yoyo: true, repeat: 1 }, 1.5);

        // Reset
        timeline
          .to(reveal, { opacity: 0, x: -8, duration: 0.3, ease: 'power2.in', stagger: 0.05 }, 2.2)
          .to(steps, { opacity: 0.35, duration: 0.2 }, 2.2)
          .to(check ?? {}, { opacity: 0, scale: 0.6, duration: 0.2 }, 2.2)
          .to(progress ?? {}, { scaleX: 0, duration: 0.2, ease: 'power2.inOut' }, 2.2)
          .to(total, {
            v: 0, duration: 0.01,
            onUpdate: () => { if (totalNum) totalNum.textContent = '0.00'; },
          }, 2.2);

      }, rootRef);

      if (rootRef.current) {
        visibilityObserver = new IntersectionObserver(
          ([entry]) => {
            if (!tl) return;
            if (entry.isIntersecting) tl.resume?.();
            else tl.pause?.();
          },
          { threshold: 0.05 },
        );
        visibilityObserver.observe(rootRef.current);
      }
    }

    run();

    const handlePageVisibility = () => {
      if (!tl) return;
      if (document.hidden) tl.pause?.();
      else tl.resume?.();
    };
    document.addEventListener('visibilitychange', handlePageVisibility);

    return () => {
      visibilityObserver?.disconnect();
      document.removeEventListener('visibilitychange', handlePageVisibility);
      tl?.kill?.();
      ctx?.revert();
    };
  }, []);

  return (
    <div ref={rootRef} className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      {/* Streak decorativo — solo 3, sin blur CSS */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            data-streak
            className="absolute left-[-40%] h-full w-[50%] rotate-12 bg-gradient-to-r from-transparent via-brand/15 to-transparent"
            style={{ top: `${15 + i * 25}%` }}
          />
        ))}
      </div>

      <div className="relative flex items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-gray-500">Demo</div>
          <div className="mt-1 text-sm font-semibold text-gray-900">Factura en segundos</div>
        </div>
        <div
          data-badge
          className="rounded-full bg-brand/15 px-3 py-1 text-xs font-semibold text-brand ring-1 ring-brand/20"
        >
          3 pasos
        </div>
      </div>

      <div className="relative mt-4 rounded-2xl bg-gray-50 p-4 ring-1 ring-gray-200">
        <div className="flex items-center justify-between">
          <div className="text-xs font-semibold text-gray-500">Emitir documento</div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-24 overflow-hidden rounded-full bg-gray-200">
              <div data-progress className="h-full w-full rounded-full bg-brand" />
            </div>
            <div
              data-check
              className="grid h-6 w-6 place-items-center rounded-full bg-brand text-[12px] font-black text-white"
              aria-hidden
            >
              ✓
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-3">
          <div data-step className="rounded-xl bg-gray-100 p-3 ring-1 ring-gray-200">
            <div className="text-[11px] font-semibold text-gray-500">Cliente</div>
            <div data-reveal className="mt-2 rounded-lg bg-white px-3 py-2 text-sm text-gray-900 border border-gray-200">
              Ferretería Los Andes
            </div>
          </div>

          <div data-step className="rounded-xl bg-gray-100 p-3 ring-1 ring-gray-200">
            <div className="text-[11px] font-semibold text-gray-500">Items</div>
            <div data-reveal className="mt-2 rounded-lg bg-white px-3 py-2 text-sm text-gray-900 border border-gray-200">
              2× Servicios • 1× Producto
            </div>
          </div>

          <div data-step className="rounded-xl bg-gray-100 p-3 ring-1 ring-gray-200">
            <div className="flex items-center justify-between">
              <div className="text-[11px] font-semibold text-gray-500">Total</div>
              <div className="text-[11px] font-semibold text-gray-500">USD</div>
            </div>
            <div data-reveal className="mt-2 flex items-baseline justify-between rounded-lg bg-white px-3 py-2 border border-gray-200">
              <div className="text-sm text-gray-600">Total a cobrar</div>
              <div className="text-lg font-semibold text-gray-900">
                $<span data-total>0.00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 text-xs text-gray-500">
          Sin pasos innecesarios: elegir cliente → items → emitir.
        </div>
      </div>
    </div>
  );
}

// ─── Componente principal — elige versión según dispositivo ───────────────────
export function InvoiceSpeedShowcase() {
  const [mobile, setMobile] = React.useState<boolean | null>(null);

  React.useEffect(() => {
    setMobile(isMobile());
  }, []);

  // Durante SSR y primer frame: placeholder estático, sin layout shift
  if (mobile === null) {
    return (
      <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm h-[340px]" />
    );
  }

  return mobile ? <MobileShowcase /> : <DesktopShowcase />;
}
