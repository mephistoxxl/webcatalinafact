import type { Metadata } from "next";
import { BrandLogo } from "@/components/BrandLogo";
import { MagneticButton } from "@/components/motion/MagneticButton";

const whatsappNumberIntl = "593991116753";
const whatsappMessage =
  "Hola Catalina Facturador. Quiero informacion sobre facturacion electronica y una demo.";
const whatsappHref = `https://wa.me/${whatsappNumberIntl}?text=${encodeURIComponent(whatsappMessage)}`;

export const metadata: Metadata = {
  title: "Qué es la facturación electrónica",
  description:
    "Guía sobre qué es la facturación electrónica en Ecuador, flujo SRI, XML, RIDE y autorización de comprobantes.",
  alternates: {
    canonical: "/que-es-facturacion-electronica",
  },
};

export default function QueEsFacturacion() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-white/10 bg-black/70 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5">
          <a href="/" className="flex items-center gap-3 font-semibold tracking-tight">
            <BrandLogo className="h-14 w-auto" width={380} height={88} />
            <span className="sr-only">Catalina Facturador</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a className="hover:text-white" href="/cumplimiento-sri">
              Cumplimiento SRI
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
            Pedir demo
          </MagneticButton>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-5 py-14">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold text-white/60">Guía</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
            ¿Qué es la facturación electrónica y por qué es clave?
          </h1>
          <p className="mt-4 text-sm leading-6 text-white/70">
            La facturación electrónica es el proceso de emitir comprobantes digitales con
            validez tributaria. En lugar de papel, los documentos se generan en un sistema
            web, se firman digitalmente y se transmiten al SRI para su autorización.
          </p>
          <p className="mt-3 text-sm leading-6 text-white/70">
            Un sistema online de facturación SRI genera el XML, crea el RIDE y mantiene
            historial para reportes y control de pagos.
          </p>
        </div>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold">Qué resuelve en tu negocio</h2>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                Emisión rápida de facturas y comprobantes sin errores manuales.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                Control de clientes, productos, impuestos y numeración.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                Historial y reportes para ventas, pagos y conciliación.
              </li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
            <h2 className="text-lg font-semibold">Cómo funciona en la práctica</h2>
            <ol className="mt-3 space-y-2 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-white/60">1.</span>
                Registras clientes, productos e impuestos en el sistema.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-white/60">2.</span>
                Generas el comprobante y el sistema crea el XML.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-white/60">3.</span>
                El XML se transmite al SRI y queda autorizado.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-white/60">4.</span>
                Envías el comprobante al cliente y guardas respaldo.
              </li>
            </ol>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold">Comprobantes electrónicos comunes</h2>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Según tu negocio, en Ecuador se usan comprobantes como factura, nota de
              crédito, nota de débito, comprobante de retención, guía de remisión y
              liquidación de compra.
            </p>
            <p className="mt-3 text-sm leading-6 text-white/70">
              Un sistema de facturación te ayuda a mantener la numeración y el respaldo
              digital de cada documento.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
            <h2 className="text-lg font-semibold">Datos que se requieren</h2>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                Datos del emisor y establecimiento.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                Datos del cliente, ítems, impuestos y totales.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                Forma de pago y condiciones cuando aplique.
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold">Flujo SRI paso a paso</h2>
            <ol className="mt-3 space-y-2 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <span className="mt-1 text-white/60">1.</span>
                Generas el comprobante y el XML con la estructura correcta.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-white/60">2.</span>
                El XML se transmite al SRI para autorización.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-white/60">3.</span>
                Se genera el RIDE y se entrega al cliente.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 text-white/60">4.</span>
                Queda el respaldo y la clave de acceso para consultas.
              </li>
            </ol>
          </div>

          <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
            <h2 className="text-lg font-semibold">Errores comunes a evitar</h2>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                Datos incompletos del cliente o del item.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                Impuestos mal calculados o sin detalle.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                Numeración duplicada o fuera de secuencia.
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-lg font-semibold">Por qué es importante cumplir</h2>
          <p className="mt-3 text-sm leading-6 text-white/70">
            Cumplir con el SRI evita rechazos, retrasos de cobro y riesgos en auditorías.
            Un sistema de facturación electrónica mantiene reglas actualizadas y te ayuda
            a emitir correctamente desde el primer intento.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <MagneticButton href="/cumplimiento-sri" variant="secondary">
              Ver cumplimiento SRI
            </MagneticButton>
            <MagneticButton href="/precios">Ver precios</MagneticButton>
          </div>
        </section>
      </main>
    </div>
  );
}
