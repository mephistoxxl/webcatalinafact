import { NextResponse } from 'next/server';

const plans = {
  'Plan Micro': 9.99,
  'Plan Básico': 19.99,
  'Plan Emprendedor': 45.00,
} as const;

type PaymentPayload = {
  plan?: string;
};

export async function POST(request: Request) {
  const token = process.env.PAYPHONE_TOKEN;
  const apiUrl = process.env.PAYPHONE_API_URL;
  const returnUrl = process.env.PAYPHONE_RETURN_URL;
  const cancellationUrl = process.env.PAYPHONE_CANCEL_URL;

  if (!token || !apiUrl || !returnUrl || !cancellationUrl) {
    return NextResponse.json(
      { error: 'Payphone no está configurado en el servidor.' },
      { status: 500 },
    );
  }

  let payload: PaymentPayload;
  try {
    payload = (await request.json()) as PaymentPayload;
  } catch {
    return NextResponse.json({ error: 'Solicitud inválida.' }, { status: 400 });
  }

  const plan = payload.plan;
  if (!plan || !(plan in plans)) {
    return NextResponse.json({ error: 'Plan inválido.' }, { status: 400 });
  }

  const amount = Math.round(plans[plan as keyof typeof plans] * 100);
  const clientTransactionId = `cat-${crypto.randomUUID()}`;

  const payphoneResponse = await fetch(`${apiUrl.replace(/\/$/, '')}/button/Prepare`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      Amount: amount,
      AmountWithoutTax: amount,
      AmountWithTax: 0,
      Tax: 0,
      Service: 0,
      Tip: 0,
      Currency: 'USD',
      ClientTransactionId: clientTransactionId,
      ResponseUrl: returnUrl,
      CancellationUrl: cancellationUrl,
    }),
  });

  const payphoneBody = await payphoneResponse.text();

  if (!payphoneResponse.ok) {
    console.error('Payphone Prepare rejected request', {
      status: payphoneResponse.status,
      body: payphoneBody.slice(0, 500),
    });
    return NextResponse.json(
      { error: `Payphone rechazó la preparación del pago (${payphoneResponse.status}).` },
      { status: 502 },
    );
  }

  const result = JSON.parse(payphoneBody) as {
    transactionId?: string;
    clientTransactionId?: string;
    TransactionId?: string;
    ClientTransactionId?: string;
    paymentId?: string;
    payWithPayPhone?: string;
    payWithCard?: string;
  };

  const transactionId = result.transactionId || result.TransactionId;
  const checkoutUrl = result.payWithPayPhone;
  if (!transactionId && !checkoutUrl) {
    console.error('Payphone Prepare returned no transaction id', {
      body: payphoneBody.slice(0, 500),
    });
    return NextResponse.json(
      { error: 'Payphone no devolvió una transacción válida.' },
      { status: 502 },
    );
  }

  if (checkoutUrl) {
    return NextResponse.json({ checkoutUrl });
  }

  const checkoutClientTransactionId =
    result.clientTransactionId || result.ClientTransactionId || clientTransactionId;
  const legacyCheckoutUrl = `https://pay.payphonetodoesposible.com/api/button/Payment?transactionId=${encodeURIComponent(transactionId as string)}&clientTransactionId=${encodeURIComponent(checkoutClientTransactionId)}`;

  return NextResponse.json({ checkoutUrl: legacyCheckoutUrl });
}
