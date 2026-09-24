'use client';

import * as React from 'react';

type Props = {
  plan: string;
  variant?: 'primary' | 'secondary';
};

export function PaymentButton({ plan, variant = 'primary' }: Props) {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  async function startPayment() {
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/payments/payphone', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan }),
      });
      const data = (await response.json()) as { checkoutUrl?: string; error?: string };

      if (!response.ok || !data.checkoutUrl) {
        throw new Error(data.error || 'No se pudo iniciar el pago.');
      }

      window.location.assign(data.checkoutUrl);
    } catch (paymentError) {
      setError(paymentError instanceof Error ? paymentError.message : 'No se pudo iniciar el pago.');
      setLoading(false);
    }
  }

  return (
    <div className="w-full">
      <button
        type="button"
        className={[
          'inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-wait disabled:opacity-60',
          variant === 'primary'
            ? 'bg-brand text-white hover:bg-green-700'
            : 'bg-white text-gray-700 ring-1 ring-gray-300 hover:bg-gray-100',
        ].join(' ')}
        onClick={startPayment}
        disabled={loading}
      >
        {loading ? 'Conectando con Payphone...' : 'Pagar ahora'}
      </button>
      {error && <p className="mt-2 text-center text-xs text-red-600">{error}</p>}
    </div>
  );
}
