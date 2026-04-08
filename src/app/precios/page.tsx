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
    price: "$9,99",
    note: "+ IVA · anual",
    limit: "65 documentos",
    features: [
      "Clientes y productos",
      "PDF + envío por email",
      "Soporte estándar",
    ],
    highlight: false,
  },
  {
    name: "Plan Básico",
    price: "$14,99",
    note: "+ IVA · anual",
    limit: "100 documentos",
    features: [
      "Clientes y productos",
      "PDF + envío por email",
      "Soporte estándar",
    ],
    highlight: true,
  },
  {
    name: "Plan Emprendedor",
    price: "$25,99",
    note: "+ IVA · anual",
    limit: "150 documentos",
    features: [
      "Clientes y productos",
      "PDF + envío por email",
      "Soporte estándar",
    ],
    highlight: false,
  },
];



export default function Precios() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="border-b border-gray-200 bg-white/90 backdrop-blur shadow-sm">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5">
          <a href="/" className="flex items-center gap-3 font-semibold tracking-tight">
            <BrandLogo className="h-14 w-auto" width={380} height={88} />
            <span className="sr-only">Catalina Facturador</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-gray-600 md:flex">
            <a className="hover:text-gray-900" href="/que-es-facturacion-electronica">
              Qué es
            </a>
            <a className="hover:text-gray-900" href="/cumplimiento-sri">
              Cumplimiento SRI
            </a>
            <a className="hover:text-gray-900" href="/beneficios">
              Beneficios
            </a>
            <a className="hover:text-gray-900" href="/preguntas-frecuentes">
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
          <div className="text-xs font-semibold text-gray-500">Precios</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl text-gray-900">
            Planes simples, valor claro
          </h1>
          <p className="mt-4 text-sm leading-6 text-gray-600">
            Elige el plan que calce con tu volumen de facturación. Todos incluyen soporte
            en español y cumplimiento con el SRI.
          </p>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            Ideal para pymes que buscan facturación electrónica rápida en línea y control
            de cobros sin complicaciones.
          </p>
        </div>

        <section className="mt-10 grid gap-4 md:grid-cols-3">
          {pricing.map((p) => (
            <div
              key={p.name}
              className={[
                "relative flex flex-col rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
                p.highlight
                  ? "border-brand/50 bg-green-50 ring-2 ring-inset ring-brand/20 shadow-md"
                  : "border-gray-200 bg-white shadow-sm",
              ].join(" ")}
            >
              {p.highlight && (
                <div className="absolute right-0 top-0 rounded-bl-2xl bg-brand/20 border-b border-l border-brand/30 px-3 py-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand">Popular</span>
                </div>
              )}

              <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest">{p.name}</div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight text-gray-900">{p.price.split(',')[0]}</span>
                <span className="text-xl font-semibold text-gray-500">,{p.price.split(',')[1]}</span>
              </div>
              <div className="mt-1 text-sm text-gray-400">{p.note}</div>

              <div className="mt-6 mb-2 rounded-2xl border border-gray-200 bg-gradient-to-b from-gray-50 to-white p-4 text-center">
                <div className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-gray-900 to-gray-500">
                  {p.limit.split(' ')[0]}
                </div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-widest text-brand">
                  {p.limit.split(' ').slice(1).join(' ')} al año
                </div>
              </div>

              <ul className="mt-5 mb-8 flex-1 space-y-3 text-sm text-gray-600">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <div className="rounded-full bg-brand/20 p-0.5">
                      <svg className="h-3 w-3 shrink-0 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex w-full justify-center">
                <MagneticButton
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant={p.highlight ? "primary" : "secondary"}
                  className="w-full justify-center"
                >
                  Elegir plan
                </MagneticButton>
              </div>
            </div>
          ))}
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-lg font-semibold text-gray-900">Qué incluye cada plan</h2>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
                Emisión de comprobantes electrónicos con XML y RIDE.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
                Clientes, productos e impuestos configurables.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
                Reportes básicos y control de cobros.
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">Requisitos habituales</h2>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
                Datos fiscales del emisor y establecimiento.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
                Firma electrónica para emitir comprobantes.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
                Correo para envío de documentos al cliente.
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
