'use client';

import { useId, useState } from 'react';
import { FadeIn } from '@/components/motion/FadeIn';

export type FaqItem = {
  q: string;
  a: string;
};

type Props = {
  items: FaqItem[];
  defaultOpenIndex?: number;
};

export function FaqAccordion({ items, defaultOpenIndex = 0 }: Props) {
  const baseId = useId();
  const safeDefault =
    Number.isFinite(defaultOpenIndex) &&
    defaultOpenIndex >= 0 &&
    defaultOpenIndex < items.length
      ? defaultOpenIndex
      : -1;

  const [openIndex, setOpenIndex] = useState<number | null>(
    safeDefault === -1 ? null : safeDefault,
  );

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const contentId = `${baseId}-faq-${idx}`;

        return (
          <FadeIn key={item.q} delay={0.03 * idx}>
            <div className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition-colors hover:bg-white/[0.07]">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 text-left text-sm font-semibold"
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={() => setOpenIndex((prev) => (prev === idx ? null : idx))}
              >
                <span>{item.q}</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="none"
                  className={[
                    'h-4 w-4 text-white/60 transition-transform duration-200',
                    isOpen ? 'rotate-180' : 'rotate-0',
                  ].join(' ')}
                >
                  <path
                    d="M5 7.5 10 12.5 15 7.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <div
                id={contentId}
                className={[
                  'grid transition-[grid-template-rows,opacity] duration-250 ease-out',
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
                ].join(' ')}
              >
                <div className="overflow-hidden">
                  <div className="pt-3 text-sm leading-6 text-white/70">{item.a}</div>
                </div>
              </div>
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
}
