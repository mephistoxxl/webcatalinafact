import type { Metadata } from "next";
import { BrandLogo } from "@/components/BrandLogo";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { FaqAccordion } from "@/components/FaqAccordion";

const whatsappNumberIntl = "593991116753";
const whatsappMessage =
  "Hola Catalina Facturador. Tengo dudas sobre el sistema y la facturacion.";
const whatsappHref = `https://wa.me/${whatsappNumberIntl}?text=${encodeURIComponent(whatsappMessage)}`;

export const metadata: Metadata = {
  title: "Preguntas frecuentes sobre facturación",
  description:
    "Respuestas sobre facturación electrónica SRI, XML, RIDE, clave de acceso, pruebas y soporte.",
  alternates: {
    canonical: "/preguntas-frecuentes",
  },
};

const faqs = [
  {
    q: "¿Qué es Catalina Facturador y cómo funciona?",
    a: "Es un sistema de facturación en línea. Configuras tu negocio, creas clientes y productos, y emites documentos en pocos pasos desde cualquier dispositivo.",
  },
  {
    q: "¿Cumple con todos los requerimientos del SRI?",
    a: "Está diseñado para cumplir con los requerimientos del SRI. Te ayudamos con la configuración y mantenemos el sistema alineado a la normativa vigente.",
  },
  {
    q: "¿Puedo probar el sistema antes de comprar?",
    a: "Sí. Puedes solicitar una demo para ver el flujo completo (clientes -> ítems -> emisión) y confirmar que se ajusta a tu proceso.",
  },
  {
    q: "¿Qué métodos de pago aceptan?",
    a: "Aceptamos distintos medios según tu necesidad. Escríbenos por WhatsApp y te confirmamos las opciones disponibles para tu plan y facturación anual.",
  },
  {
    q: "¿Puedo cambiar de plan después?",
    a: "Sí. Puedes subir de plan cuando tu volumen crezca. Te ayudamos a elegir el plan correcto para no pagar de más.",
  },
  {
    q: "¿Ofrecen soporte técnico?",
    a: "Sí. Soporte en español para configuración, dudas y acompañamiento. El canal y tiempos dependen del plan contratado.",
  },
  {
    q: "¿Qué es el XML y el RIDE en facturación electrónica?",
    a: "El XML es el archivo electrónico del comprobante. El RIDE es la representación legible que se entrega al cliente.",
  },
  {
    q: "¿Qué es la clave de acceso del SRI?",
    a: "Es el código único que identifica el comprobante electrónico para su validación y consulta.",
  },
  {
    q: "¿Cuál es la diferencia entre ambiente de pruebas y producción?",
    a: "En pruebas se valida el flujo y la estructura del XML. En producción los comprobantes quedan autorizados oficialmente.",
  },
];

export default function PreguntasFrecuentes() {
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
            <a className="hover:text-white" href="/precios">
              Precios
            </a>
          </nav>
          <MagneticButton href={whatsappHref} target="_blank" rel="noopener noreferrer">
            Hablar con soporte
          </MagneticButton>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-5 py-14">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold text-white/60">FAQ</div>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">
            Preguntas frecuentes sobre el sistema de facturación
          </h1>
          <p className="mt-4 text-sm leading-6 text-white/70">
            Resolvemos las dudas más comunes para que tomes una decisión informada.
          </p>
        </div>

        <section className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-6">
          <FaqAccordion items={faqs} />
        </section>
      </main>
    </div>
  );
}
