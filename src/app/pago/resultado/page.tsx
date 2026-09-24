import type { Metadata } from 'next';

import { BrandLogo } from '@/components/BrandLogo';

export const metadata: Metadata = {
  title: 'Resultado del pago',
  robots: { index: false, follow: false },
};

type Props = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

function first(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function PaymentResult({ searchParams }: Props) {
  const params = await searchParams;
  const message = first(params.msg);
  const status = first(params.status)?.toLowerCase();
  const failed = Boolean(message) || ['cancelled', 'canceled', 'failed', 'error'].includes(status || '');

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-5 py-12">
      <section className="w-full max-w-lg rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm">
        <BrandLogo className="mx-auto h-20 w-auto" width={500} height={114} />
        <div className="mt-8 text-xs font-semibold uppercase tracking-widest text-gray-500">
          Resultado del pago
        </div>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-gray-900">
          {failed ? 'No se pudo completar el pago' : 'Pago recibido'}
        </h1>
        <p className="mt-3 text-sm leading-6 text-gray-600">
          {message ||
            (failed
              ? 'Puedes volver a precios e intentarlo nuevamente.'
              : 'Estamos verificando la transacción. Conserva este mensaje como referencia.')}
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-green-700"
          >
            Ir al inicio
          </a>
          <a
            href="/precios"
            className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-gray-700 ring-1 ring-gray-300 hover:bg-gray-100"
          >
            Volver a precios
          </a>
        </div>
      </section>
    </main>
  );
}
