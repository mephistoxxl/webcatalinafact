import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type Payload = {
  ruc?: string;
  email?: string;
  phone?: string;
};

function normalizeDigits(value: string) {
  return value.replace(/\D+/g, "");
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export async function POST(req: Request) {
  const requiredEnv = [
    "ZEPTO_HOST",
    "ZEPTO_PORT",
    "ZEPTO_USER",
    "ZEPTO_PASS",
    "ZEPTO_FROM",
    "ZEPTO_TO",
  ];

  for (const key of requiredEnv) {
    if (!process.env[key]) {
      return NextResponse.json(
        { error: "Servidor no configurado para correo." },
        { status: 500 },
      );
    }
  }

  let payload: Payload;
  try {
    payload = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "JSON invalido." }, { status: 400 });
  }

  const ruc = String(payload.ruc || "").trim();
  const email = String(payload.email || "").trim();
  const phone = String(payload.phone || "").trim();

  const rucDigits = normalizeDigits(ruc);
  const phoneDigits = normalizeDigits(phone);

  if (!rucDigits || rucDigits.length !== 13) {
    return NextResponse.json({ error: "RUC invalido." }, { status: 400 });
  }
  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: "Correo invalido." }, { status: 400 });
  }
  if (!phoneDigits || phoneDigits.length < 7) {
    return NextResponse.json({ error: "Telefono invalido." }, { status: 400 });
  }

  const host = process.env.ZEPTO_HOST as string;
  const port = Number(process.env.ZEPTO_PORT);
  const user = process.env.ZEPTO_USER as string;
  const pass = process.env.ZEPTO_PASS as string;
  const from = process.env.ZEPTO_FROM as string;
  const to = process.env.ZEPTO_TO as string;

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from,
    to,
    replyTo: email,
    subject: "Nuevo contacto desde Catalina Facturador",
    text: [
      "Nuevo contacto desde la web:",
      "",
      `RUC: ${rucDigits}`,
      `Correo: ${email}`,
      `Telefono: ${phoneDigits}`,
    ].join("\n"),
  });

  return NextResponse.json({ ok: true });
}
