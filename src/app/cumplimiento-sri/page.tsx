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
            <a className="hover:text-gray-900" href="/beneficios">
              Beneficios
            </a>
            <a className="hover:text-gray-900" href="/precios">
              Precios
            </a>
            <a className="hover:text-gray-900" href="/preguntas-frecuentes">
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
          <div className="text-xs font-semibold text-gray-500">Cumplimiento</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl text-gray-900">
            Cumplimiento SRI para facturación electrónica
          </h1>
          <p className="mt-4 text-sm leading-6 text-gray-600">
            Un sistema de facturación debe emitir comprobantes con datos correctos,
            numeración controlada y transmisión oportuna al SRI. Esto reduce rechazos y
            mantiene tu operación alineada a la normativa.
          </p>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            El flujo incluye XML, autorización, RIDE y clave de acceso. En el ambiente de
            pruebas se valida el proceso antes de pasar a producción.
          </p>
        </div>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-lg font-semibold text-gray-900">Requisitos clave</h2>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
                Emisión con estructura y datos fiscales correctos.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
                Numeración por establecimiento, punto de emisión y secuencias válidas.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
                Registro de clientes, impuestos, totales y retenciones cuando aplique.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
                Envío del XML y recepción de autorización del SRI.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
                Generación de RIDE y gestión de clave de acceso.
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">Cambios 2026 (vigentes)</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Desde el 01/01/2026 se eliminó el plazo de hasta 4 días hábiles para enviar
              el comprobante al SRI. La transmisión debe hacerse al momento de la emisión.
            </p>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Las facturas con la leyenda &quot;consumidor final&quot; no se pueden anular una vez
              emitidas y transmitidas al SRI, y no procede nota de crédito en esos casos.
            </p>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-lg font-semibold text-gray-900">Checklist rápido</h2>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
                RUC, establecimiento y punto de emisión configurados.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
                Firma electrónica vigente para generar el XML.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
                Clave de acceso y autorización almacenadas.
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">Buenas prácticas</h2>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
                Validar datos antes de emitir para evitar rechazos.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
                Guardar XML y RIDE como respaldo digital.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
                Usar ambiente de pruebas antes de pasar a producción.
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-gray-200 bg-gray-50 p-6">
          <h2 className="text-lg font-semibold text-gray-900">Ambiente de pruebas y producción</h2>
          <p className="mt-3 text-sm leading-6 text-gray-600">
            En pruebas se valida la estructura del XML y el flujo SRI. En producción los
            comprobantes quedan autorizados oficialmente. Mantener ambos entornos evita
            errores antes de emitir al cliente.
          </p>
        </section>

        <section className="mt-10 rounded-3xl border border-gray-200 bg-gradient-to-br from-green-50 to-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900">Como te ayuda Catalina Facturador</h2>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
              Emite comprobantes con validaciones para evitar errores comunes.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
              Transmite el XML al SRI de forma inmediata y guarda el respaldo.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
              Mantiene historiales y reportes para auditorías y control interno.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
              Soporta el flujo de pruebas y producción cuando aplica.
            </li>
          </ul>
          <p className="mt-4 text-sm text-gray-500">
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
