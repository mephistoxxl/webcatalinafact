import type { Metadata } from "next";
import { BrandLogo } from "@/components/BrandLogo";
import { MagneticButton } from "@/components/motion/MagneticButton";

const whatsappNumberIntl = "593991116753";
const whatsappMessage =
  "Hola Catalina Facturador. Necesito asegurar el cumplimiento SRI y conocer cambios 2026.";
const whatsappHref = `https://wa.me/${whatsappNumberIntl}?text=${encodeURIComponent(whatsappMessage)}`;

export const metadata: Metadata = {
  title: "Cumplimiento SRI en facturación electrónica",
  description:
    "Requisitos SRI, autorización de comprobantes, clave de acceso, XML y cambios 2026 para facturación electrónica en Ecuador.",
  alternates: {
    canonical: "/cumplimiento-sri",
  },
};

export default function CumplimientoSRI() {
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
            <a className="hover:text-white" href="/beneficios">
              Beneficios
            </a>
            <a className="hover:text-white" href="/precios">
              Precios
            </a>
            <a className="hover:text-white" href="/preguntas-frecuentes">
              FAQ
            </a>
          </nav>
          <MagneticButton href={whatsappHref} target="_blank" rel="noopener noreferrer">
            Hablar con soporte
          </MagneticButton>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-5 py-14">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold text-white/60">Cumplimiento</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
            Cumplimiento SRI para facturación electrónica
          </h1>
          <p className="mt-4 text-sm leading-6 text-white/70">
            Un sistema de facturación debe emitir comprobantes con datos correctos,
            numeración controlada y transmisión oportuna al SRI. Esto reduce rechazos y
            mantiene tu operación alineada a la normativa.
          </p>
          <p className="mt-3 text-sm leading-6 text-white/70">
            El flujo incluye XML, autorización, RIDE y clave de acceso. En el ambiente de
            pruebas se valida el proceso antes de pasar a producción.
          </p>
        </div>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold">Requisitos clave</h2>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                Emisión con estructura y datos fiscales correctos.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                Numeración por establecimiento, punto de emisión y secuencias válidas.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                Registro de clientes, impuestos, totales y retenciones cuando aplique.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                Envío del XML y recepción de autorización del SRI.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                Generación de RIDE y gestión de clave de acceso.
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
            <h2 className="text-lg font-semibold">Cambios 2026 (vigentes)</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Desde el 01/01/2026 se eliminó el plazo de hasta 4 días hábiles para enviar
              el comprobante al SRI. La transmisión debe hacerse al momento de la emisión.
            </p>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Las facturas con la leyenda "consumidor final" no se pueden anular una vez
              emitidas y transmitidas al SRI, y no procede nota de crédito en esos casos.
            </p>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold">Checklist rápido</h2>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                RUC, establecimiento y punto de emisión configurados.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                Firma electrónica vigente para generar el XML.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                Clave de acceso y autorización almacenadas.
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
            <h2 className="text-lg font-semibold">Buenas prácticas</h2>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                Validar datos antes de emitir para evitar rechazos.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                Guardar XML y RIDE como respaldo digital.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                Usar ambiente de pruebas antes de pasar a producción.
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-semibold">Ambiente de pruebas y producción</h2>
          <p className="mt-3 text-sm leading-6 text-white/70">
            En pruebas se valida la estructura del XML y el flujo SRI. En producción los
            comprobantes quedan autorizados oficialmente. Mantener ambos entornos evita
            errores antes de emitir al cliente.
          </p>
        </section>

        <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-semibold">Como te ayuda Catalina Facturador</h2>
          <ul className="mt-3 space-y-2 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
              Emite comprobantes con validaciones para evitar errores comunes.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
              Transmite el XML al SRI de forma inmediata y guarda el respaldo.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
              Mantiene historiales y reportes para auditorías y control interno.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
              Soporta el flujo de pruebas y producción cuando aplica.
            </li>
          </ul>
          <p className="mt-4 text-sm text-white/60">
            Recomendación: revisa la resolución vigente del SRI o consulta con tu asesor
            contable para casos especiales.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <MagneticButton href="/precios" variant="secondary">
              Ver planes
            </MagneticButton>
            <MagneticButton href={whatsappHref} target="_blank" rel="noopener noreferrer">
              Pedir asesoría
            </MagneticButton>
          </div>
        </section>
      </main>
    </div>
  );
}
