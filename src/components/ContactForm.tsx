'use client';

import { useState } from 'react';

type FormValues = {
  ruc: string;
  email: string;
  phone: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

function normalizeDigits(value: string) {
  return value.replace(/\D+/g, '');
}

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};

  const rucDigits = normalizeDigits(values.ruc);
  if (!rucDigits) errors.ruc = 'Ingresa tu RUC.';
  else if (rucDigits.length !== 13) errors.ruc = 'El RUC debe tener 13 dígitos.';

  if (!values.email.trim()) errors.email = 'Ingresa tu correo.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
    errors.email = 'Ingresa un correo válido.';

  const phoneDigits = normalizeDigits(values.phone);
  if (!phoneDigits) errors.phone = 'Ingresa tu teléfono.';
  else if (phoneDigits.length < 7) errors.phone = 'Ingresa un teléfono válido.';

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<FormValues>({ ruc: '', email: '', phone: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  function onChange<K extends keyof FormValues>(key: K, next: string) {
    setStatus('idle');
    setStatusMessage('');
    setErrors((prev) => ({ ...prev, [key]: undefined }));
    setValues((prev) => ({ ...prev, [key]: next }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus('sending');
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ruc: values.ruc.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
        }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(data?.error || 'No se pudo enviar el mensaje.');
      }

      setStatus('sent');
      setStatusMessage('Enviado. Te contactamos por correo.');
    } catch (err) {
      setStatus('error');
      setStatusMessage(
        err instanceof Error ? err.message : 'No se pudo enviar el mensaje.',
      );
    }
  }

  const baseInputClass =
    'mt-1 w-full rounded-xl bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/35 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-brand/40';

  return (
    <form onSubmit={onSubmit} className="grid gap-3">
      <div>
        <label className="text-xs font-semibold text-white/70" htmlFor="ruc">
          RUC
        </label>
        <input
          id="ruc"
          name="ruc"
          inputMode="numeric"
          autoComplete="off"
          placeholder="13 dígitos"
          maxLength={13}
          className={baseInputClass}
          value={values.ruc}
          onChange={(e) => onChange('ruc', normalizeDigits(e.target.value))}
        />
        {errors.ruc ? <div className="mt-1 text-xs text-red-300">{errors.ruc}</div> : null}
      </div>

      <div>
        <label className="text-xs font-semibold text-white/70" htmlFor="email">
          Correo (Gmail)
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="tucorreo@gmail.com"
          className={baseInputClass}
          value={values.email}
          onChange={(e) => onChange('email', e.target.value)}
        />
        {errors.email ? <div className="mt-1 text-xs text-red-300">{errors.email}</div> : null}
      </div>

      <div>
        <label className="text-xs font-semibold text-white/70" htmlFor="phone">
          Teléfono
        </label>
        <input
          id="phone"
          name="phone"
          inputMode="tel"
          autoComplete="tel"
          placeholder="099 111 6753"
          className={baseInputClass}
          value={values.phone}
          onChange={(e) => onChange('phone', e.target.value)}
        />
        {errors.phone ? <div className="mt-1 text-xs text-red-300">{errors.phone}</div> : null}
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-1 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black hover:bg-white/90"
      >
        {status === 'sending' ? 'Enviando...' : 'Enviar'}
      </button>

      <div className="text-xs text-white/50">
        Al enviar, recibimos tus datos en nuestro correo.
      </div>

      {status === 'sent' ? (
        <div className="text-xs font-semibold text-brand">{statusMessage}</div>
      ) : null}
      {status === 'error' ? (
        <div className="text-xs font-semibold text-red-300">{statusMessage}</div>
      ) : null}
    </form>
  );
}
