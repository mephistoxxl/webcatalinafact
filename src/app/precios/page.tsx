import type { Metadata } from "next";
import { BrandLogo } from "@/components/BrandLogo";
import { MagneticButton } from "@/components/motion/MagneticButton";

const whatsappNumberIntl = "593991116753";
const whatsappMessage =
  "Hola Catalina Facturador. Quiero informacion de planes y requisitos.";
const whatsappHref = `https://wa.me/${whatsappNumberIntl}?text=${encodeURIComponent(whatsappMessage)}`;

export const metadata: Metadata = {
  title: "Precios del sistema de facturación",
  description:
    "Planes y precios de un sistema web de facturación en línea Ecuador con soporte en español y cumplimiento SRI.",
  alternates: {
    canonical: "/precios",
  },
};

const pricing = [
  {
    name: "Plan Micro",
    price: "$8,99",
    note: "+ IVA · anual",
    features: [
      "Límite: 65 documentos",
      "Clientes y productos",
      "PDF + envío por email",
      "Soporte estándar",
    ],
  },
  {
    name: "Plan Básico",
    price: "$12,99",
    note: "+ IVA · anual",
    features: [
      "Límite: 100 documentos",
      "Clientes y productos",
      "PDF + envío por email",
      "Soporte estándar",
    ],
  },
  {
    name: "Plan Emprendedor",
    price: "$15,99",
    note: "+ IVA · anual",
    features: [
      "Límite: 150 documentos",
      "Clientes y productos",
      "PDF + envío por email",
      "Soporte estándar",
    ],
  },
];

const extraOption = {
  name: "Opción Extra",
  description: "Casos muy especiales (máximo 3 facturas al mes).",
  price: "$6,99",
  note: "+ IVA · anual",
  limit: "Necesarias dentro del rango",
};

export default function Precios() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5">
          <a href="/" className="flex items-center gap-3 font-semibold tracking-tight">
            <BrandLogo className="h-14 w-auto" width={380} height={88} />
            <span className="sr-only">Catalina Facturador</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a className="hover:text-white" href="/que-es-facturacion-electronica">
              Qué es
            </a>
            <a className="hover:text-white" href="/cumplimiento-sri">
              Cumplimiento SRI
            </a>
            <a className="hover:text-white" href="/beneficios">
              Beneficios
            </a>
            <a className="hover:text-white" href="/preguntas-frecuentes">
              FAQ
            </a>
          </nav>
          <MagneticButton href={whatsappHref} target="_blank" rel="noopener noreferrer">
            Hablar con ventas
          </MagneticButton>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-5 py-14">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold text-white/60">Precios</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
            Planes simples, valor claro
          </h1>
          <p className="mt-4 text-sm leading-6 text-white/70">
            Elige el plan que calce con tu volumen de facturación. Todos incluyen soporte
            en español y cumplimiento con el SRI.
          </p>
          <p className="mt-3 text-sm leading-6 text-white/70">
            Ideal para pymes que buscan facturación electrónica rápida en línea y control
            de cobros sin complicaciones.
          </p>
        </div>

        <section className="mt-10 grid gap-4 md:grid-cols-3">
          {pricing.map((p) => (
            <div key={p.name} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm font-semibold">{p.name}</div>
              <div className="mt-3 text-3xl font-semibold tracking-tight">{p.price}</div>
              <div className="mt-1 text-sm text-white/60">{p.note}</div>
              <ul className="mt-5 space-y-2 text-sm text-white/70">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <MagneticButton href={whatsappHref} target="_blank" rel="noopener noreferrer">
                  Elegir plan
                </MagneticButton>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold">Qué incluye cada plan</h2>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                Emisión de comprobantes electrónicos con XML y RIDE.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                Clientes, productos e impuestos configurables.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                Reportes básicos y control de cobros.
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
            <h2 className="text-lg font-semibold">Requisitos habituales</h2>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                Datos fiscales del emisor y establecimiento.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                Firma electrónica para emitir comprobantes.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                Correo para envío de documentos al cliente.
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-white/10 bg-black/40 p-6">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm font-semibold">{extraOption.name}</div>
              <p className="mt-1 text-sm text-white/70">{extraOption.description}</p>
              <div className="mt-3 text-xs text-white/60">
                Límite documentos: {extraOption.limit}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-2xl font-semibold tracking-tight">{extraOption.price}</div>
                <div className="text-sm text-white/60">{extraOption.note}</div>
              </div>
              <MagneticButton href={whatsappHref} target="_blank" rel="noopener noreferrer">
                Consultar
              </MagneticButton>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
