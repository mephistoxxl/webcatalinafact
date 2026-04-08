import type { Metadata } from "next";
import { BrandLogo } from "@/components/BrandLogo";
import { MagneticButton } from "@/components/motion/MagneticButton";

const whatsappNumberIntl = "593991116753";
const whatsappMessage =
  "Hola Catalina Facturador. Quiero conocer beneficios y una demo.";
const whatsappHref = `https://wa.me/${whatsappNumberIntl}?text=${encodeURIComponent(whatsappMessage)}`;

export const metadata: Metadata = {
  title: "Beneficios del sistema de facturación",
  description:
    "Beneficios de un sistema web de facturación para pymes en Ecuador: rapidez, control, cumplimiento SRI y reportes.",
  alternates: {
    canonical: "/beneficios",
  },
};

const benefits = [
  {
    title: "Facturación sin errores",
    text: "Validaciones automáticas que reducen rechazos y retrabajos en cada emisión.",
    icon: "✓",
  },
  {
    title: "Cobros más ordenados",
    text: "Seguimiento de pagos, vencimientos y estados para mejorar flujo de caja.",
    icon: "💳",
  },
  {
    title: "Cumplimiento SRI",
    text: "Comprobantes con estructura correcta y transmisión inmediata al SRI.",
    icon: "🛡",
  },
  {
    title: "Reportes claros",
    text: "Ventas por período, cliente y estado para decisiones rápidas.",
    icon: "📊",
  },
  {
    title: "Trabajo en equipo",
    text: "Roles y permisos para controlar lo que cada usuario puede hacer.",
    icon: "👥",
  },
  {
    title: "Acceso en la nube",
    text: "Factura desde cualquier lugar sin instalaciones complicadas.",
    icon: "☁",
  },
  {
    title: "Historial y respaldo",
    text: "Documentos, XML y RIDE guardados para consultas y auditorías.",
    icon: "🗂",
  },
  {
    title: "Visibilidad de ventas",
    text: "Reportes diarios, semanales y por cliente para decisiones rápidas.",
    icon: "📈",
  },
];

export default function Beneficios() {
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
            <a className="hover:text-gray-900" href="/precios">
              Precios
            </a>
            <a className="hover:text-gray-900" href="/preguntas-frecuentes">
              FAQ
            </a>
          </nav>
          <MagneticButton href={whatsappHref} target="_blank" rel="noopener noreferrer">
            Pedir demo
          </MagneticButton>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-5 py-14">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold text-gray-500">Beneficios</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl text-gray-900">
            Beneficios reales de un sistema de facturación electrónica
          </h1>
          <p className="mt-4 text-sm leading-6 text-gray-600">
            Catalina Facturador reduce el tiempo en administración y te permite facturar con
            orden, claridad y cumplimiento. Estos son los beneficios más buscados por
            emprendedores y PYMES.
          </p>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            Útil para tienda, minimarket, ferretería, restaurante y servicios
            profesionales.
          </p>
        </div>

        <section className="mt-10 grid gap-4 md:grid-cols-2">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-brand/10 text-brand ring-1 ring-brand/20 text-lg">
                  {b.icon}
                </div>
                <div className="text-sm font-semibold text-gray-900">{b.title}</div>
              </div>
              <p className="mt-2 text-sm leading-6 text-gray-600">{b.text}</p>
            </div>
          ))}
        </section>

        <section className="mt-10 rounded-3xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="text-lg font-semibold text-gray-900">Impacto en la operación</h2>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
              Menos tiempo en tareas manuales y más tiempo en ventas.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
              Cobros más ordenados con estados y vencimientos claros.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
              Mejor control de productos y ventas.
            </li>
          </ul>
        </section>

        <section className="mt-10 rounded-3xl border border-gray-200 bg-gradient-to-br from-green-50 to-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">Listo para ver el sistema</h2>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            Agenda una demo y revisa si el flujo se adapta a tu negocio. Te mostramos la
            emisión completa, desde clientes y productos hasta reportes.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <MagneticButton href={whatsappHref} target="_blank" rel="noopener noreferrer">
              Solicitar demo
            </MagneticButton>
            <MagneticButton href="/precios" variant="secondary">
              Ver precios
            </MagneticButton>
          </div>
        </section>
      </main>
    </div>
  );
}
