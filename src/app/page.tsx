import { FadeIn } from "@/components/motion/FadeIn";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { InvoiceSpeedShowcase } from "@/components/gsap/InvoiceSpeedShowcase";
import { BrandLogo } from "@/components/BrandLogo";
import { FaqAccordion } from "@/components/FaqAccordion";
import { ContactForm } from "@/components/ContactForm";

const benefits = [
  {
    title: "Facturación precisa",
    description:
      "Emite lo que necesitas. Sin restricciones, sin sorpresas ni cobros ocultos.",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M8 7.5h8M8 11.5h8M8 15.5h5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M7 3h7l3 3v15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Fácil de usar",
    description:
      "Aprendes rápido y facturas en minutos desde cualquier dispositivo.",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M13 2L3 14h7l-1 8 12-14h-7l-1-6Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Cumple con SRI",
    description:
      "Documentos correctos y envío al SRI para autorización.",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M12 2 20 6v6c0 5.2-3.3 9.8-8 10-4.7-.2-8-4.8-8-10V6l8-4Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 12l2.2 2.2L15.8 9.1"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "En la nube",
    description:
      "Sistema web de facturación en la nube para Ecuador.",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M7.5 18.5h10.2a4.3 4.3 0 0 0 .3-8.6A6 6 0 0 0 6.2 11.7a3.5 3.5 0 0 0 1.3 6.8Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Soporte real",
    description:
      "Soporte humano en español para dudas y configuración.",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M4.5 12a7.5 7.5 0 0 1 15 0v5.5a2.5 2.5 0 0 1-2.5 2.5h-2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M4.5 13.5H6a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v1.5a2 2 0 0 0 2 2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M19 13.5h1.5a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H19a2 2 0 0 0-2 2v1.5a2 2 0 0 0 2 2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Emisión instantánea",
    description:
      "Emites y envías al momento, sin demoras.",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <path
          d="M21 12a9 9 0 1 1-3.2-6.9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 7v5l3 2"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 4.5 18.5 8"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

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
    highlight: false,
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
    highlight: false,
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
    highlight: false,
  },
];

const extraOption = {
  name: "Opción Extra",
  description: "Casos muy especiales (máximo 3 facturas al mes).",
  price: "$4,99",
  note: "+ IVA · anual",
  limit: "Necesarias dentro del rango",
};

const whatsappNumberIntl = "593991116753";
const whatsappMessage =
  "Hola Catalina Facturador. Me interesa su Sistema de Facturación. ¿Podrían enviarme información de planes (Micro/Básico/Emprendedor) y ayudarme a agendar una demo? Gracias.";
const whatsappHref = `https://wa.me/${whatsappNumberIntl}?text=${encodeURIComponent(whatsappMessage)}`;
const loginHref = "https://www.catalinasoft-ec.com/inventario/login";

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
    a: "Sí. Puedes solicitar una demo para ver el flujo completo (clientes → ítems → emisión) y confirmar que se ajusta a tu proceso.",
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
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 md:py-6">
          <a href="#" className="flex items-center gap-3 font-semibold tracking-tight">
            <BrandLogo className="h-16 w-auto md:h-20" width={420} height={96} />
            <span className="sr-only">Catalina Facturador</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
            <a className="hover:text-white" href="/que-es-facturacion-electronica">
              Qué es
            </a>
            <a className="hover:text-white" href="/cumplimiento-sri">
              Cumplimiento SRI
            </a>
            <a className="hover:text-white" href="#beneficios">
              Beneficios
            </a>
            <a className="hover:text-white" href="#funciones">
              Funciones
            </a>
            <a className="hover:text-white" href="#precios">
              Precios
            </a>
            <a className="hover:text-white" href="#faq">
              FAQ
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full px-4 py-2 text-sm font-semibold text-white/80 ring-1 ring-white/15 hover:bg-white/5 md:inline-flex"
            >
              Hablar con ventas
            </a>
            <MagneticButton
              href="https://www.catalinasoft-ec.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Iniciar sesión
            </MagneticButton>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-brand/15 blur-3xl" />
          </div>

          <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 pb-16 pt-14 md:grid-cols-2 md:items-center md:pb-24 md:pt-20">
            <div>
              <FadeIn>
                <div className="inline-flex items-center gap-2 rounded-full bg-black/40 px-4 py-2 text-xs font-semibold text-white/90 ring-1 ring-brand/25 shadow-[0_0_0_1px_rgba(34,197,94,0.10),0_18px_55px_rgba(0,0,0,0.55)] backdrop-blur">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-brand/15 ring-1 ring-brand/30">
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="h-3.5 w-3.5"
                    >
                      <path
                        d="M4.3 10.2l3.2 3.2L15.7 5.2"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-brand"
                      />
                    </svg>
                  </span>
                  Cumple con todos los requerimientos del SRI
                </div>
              </FadeIn>

              <FadeIn delay={0.06}>
                <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
                  Facturación electrónica sin complicaciones.
                  <span className="block text-white/70">
                    Sin restricciones. Sin complicaciones.
                  </span>
                </h1>
              </FadeIn>

              <FadeIn delay={0.12}>
                <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-white/70">
                  Sistema web de facturación en línea para Ecuador. Emite factura
                  electrónica SRI, envía comprobantes, valida datos y guarda historial.
                  Genera XML, RIDE y clave de acceso con trazabilidad para reportes y
                  control de pagos. Ideal para pymes, tiendas y servicios profesionales.
                </p>
              </FadeIn>

              <FadeIn delay={0.18}>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <MagneticButton href="#contacto">Probar demo</MagneticButton>
                  <MagneticButton href="#precios" variant="secondary">
                    Ver precios
                  </MagneticButton>
                </div>
              </FadeIn>

              <FadeIn delay={0.22}>
                <div />
              </FadeIn>
            </div>

            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <InvoiceSpeedShowcase />
              </div>

              <FadeIn delay={0.22}>
                <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-xs text-white/55 md:justify-start">
                  <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
                    Facturas PDF
                  </span>
                  <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
                    Control de pagos
                  </span>
                  <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
                    Reportes
                  </span>
                  <span className="rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
                    Multi-usuario
                  </span>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <section id="que-es" className="mx-auto w-full max-w-6xl px-5 py-16">
          <FadeIn>
            <div className="text-xs font-semibold text-white/60">Guía rápida</div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
              ¿Qué es la facturación electrónica?
            </h2>
          </FadeIn>

          <div className="mt-8 grid gap-8 md:grid-cols-[1.3fr_1fr]">
            <FadeIn delay={0.05} className="h-full">
              <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-sm leading-6 text-white/70">
                  La facturación electrónica es la emisión de comprobantes digitales con
                  validez tributaria. El sistema genera el comprobante, crea el XML,
                  produce el RIDE y lo envía al SRI para autorización.
                </p>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  Incluye clave de acceso, validación y respaldo digital del comprobante.
                  Todo queda guardado con historial de ventas.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                    Emisión con numeración controlada.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                    Envío inmediato al SRI y respaldo digital.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                    Reportes listos para decidir.
                  </li>
                </ul>
                <div className="mt-4 text-sm text-white/70">
                  Comprobantes electrónicos comunes: factura, nota de crédito, nota de
                  débito, comprobante de retención, guía de remisión y liquidación de
                  compra.
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <MagneticButton href="/que-es-facturacion-electronica" variant="secondary">
                    Leer guia completa
                  </MagneticButton>
                  <MagneticButton href="#contacto">Solicitar demo</MagneticButton>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="rounded-3xl border border-white/10 bg-black/40 p-6">
                <div className="text-sm font-semibold">Para quién es</div>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Emprendedores y PYMES que quieren cumplir sin perder tiempo.
                </p>
                <div className="mt-4 text-sm text-white/70">
                  Tiendas, minimarket, ferreterías, restaurantes y servicios
                  profesionales. Equipos con roles y sucursales.
                </div>
                <div className="mt-3 text-sm text-white/70">
                  También para negocios con procesos de venta simples.
                </div>
                <div className="mt-6">
                  <a
                    className="text-sm font-semibold text-white/80 hover:text-white"
                    href="/cumplimiento-sri"
                  >
                    Ver cambios SRI 2026
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <section id="precios" className="mx-auto w-full max-w-6xl px-5 py-16">
          <FadeIn>
            <div className="text-xs font-semibold text-white/60">Precios</div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
              Planes simples. Valor real.
            </h2>
          </FadeIn>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {pricing.map((p, idx) => (
              <FadeIn key={p.name} delay={0.04 * idx}>
                <div
                  className={[
                    "rounded-3xl border p-6",
                    p.highlight
                      ? "border-white/20 bg-white/10"
                      : "border-white/10 bg-white/5",
                  ].join(" ")}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold">{p.name}</div>
                      <div className="mt-3 text-3xl font-semibold tracking-tight">
                        {p.price}
                      </div>
                      <div className="mt-1 text-sm text-white/60">{p.note}</div>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-2 text-sm text-white/70">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <MagneticButton
                      href="#contacto"
                      variant={"secondary"}
                      className="w-full"
                    >
                      Empezar
                    </MagneticButton>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.12}>
            <div className="mt-6 rounded-3xl border border-white/10 bg-black/40 p-6">
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
                  <MagneticButton href="#contacto" variant="secondary">
                    Consultar
                  </MagneticButton>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        <section id="beneficios" className="mx-auto w-full max-w-6xl px-5 py-16">
          <FadeIn>
            <div className="flex items-end justify-between gap-6">
              <div>
                <div className="text-xs font-semibold text-white/60">Beneficios</div>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                  Factura, cobra y sigue
                </h2>
              </div>
              <div className="hidden text-sm text-white/60 md:block">
                Menos admin. Más negocio.
              </div>
            </div>
          </FadeIn>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {benefits.map((b, idx) => (
              <FadeIn key={b.title} delay={0.04 * idx}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-brand/12 text-brand ring-1 ring-brand/20">
                      {b.icon}
                    </div>
                    <div className="text-sm font-semibold">{b.title}</div>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-white/70">{b.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <section id="funciones" className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto w-full max-w-6xl px-5 py-16">
            <FadeIn>
              <div className="text-xs font-semibold text-white/60">Funciones</div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                Lo esencial para facturar
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/70">
                Sistema web de facturación con clientes y productos, reportes y control de
                cobros. Listo para operar y cumplir con el SRI.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                  Control de impuestos, totales y datos fiscales.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                  Emisión y autorización de comprobantes en línea.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                  Reportes para ventas, cobros y estados.
                </li>
              </ul>
            </FadeIn>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Clientes y productos",
                  text: "Clientes, productos, impuestos y búsqueda rápida.",
                  icon: (
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                      <path
                        d="M4 7h16M7 4v6M17 4v6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M6 10h12a2 2 0 0 1 2 2v7H4v-7a2 2 0 0 1 2-2Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 14h4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Series y numeración",
                  text: "Series claras por usuario o sucursal para auditoría.",
                  icon: (
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                      <path
                        d="M7 6h14M7 12h14M7 18h14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M3.5 6h.01M3.5 12h.01M3.5 18h.01"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Pagos y vencimientos",
                  text: "Estados y vencimientos para cobrar a tiempo.",
                  icon: (
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                      <path
                        d="M12 21a9 9 0 1 0-9-9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 7v5l3 2"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3 12v5a4 4 0 0 0 4 4h5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Reportes en tiempo real",
                  text: "Reportes por fecha, cliente y estado.",
                  icon: (
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                      <path
                        d="M4 19V5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M4 19h16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="M8 16v-5M12 16V8M16 16v-3"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Roles y permisos",
                  text: "Roles claros para equipos.",
                  icon: (
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                      <path
                        d="M16 11a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.5 20a7.5 7.5 0 0 1 15 0"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Integraciones",
                  text: "Integraciones cuando las necesitas.",
                  icon: (
                    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                      <path
                        d="M10 13a5 5 0 0 1 0-7l.9-.9a5 5 0 0 1 7.1 7.1l-.8.8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14 11a5 5 0 0 1 0 7l-.9.9a5 5 0 0 1-7.1-7.1l.8-.8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                },
              ].map((f, idx) => (
                <FadeIn key={f.title} delay={0.03 * idx}>
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-2xl bg-brand/12 text-brand ring-1 ring-brand/20">
                        {f.icon}
                      </div>
                      <div className="text-sm font-semibold">{f.title}</div>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-white/70">{f.text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <section id="sri-2026" className="mx-auto w-full max-w-6xl px-5 py-16">
          <FadeIn>
            <div className="text-xs font-semibold text-white/60">Actualización SRI</div>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
              Cambios clave 2026
            </h2>
          </FadeIn>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <FadeIn delay={0.05}>
              <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm font-semibold">Transmisión inmediata</div>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  Sin plazo extra: se envía al momento de emitir para autorización de
                  comprobantes electrónicos SRI.
                </p>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  Antes existía un margen para transmitir después de generar el
                  comprobante. Desde 2026, ese margen se elimina y la emisión debe ir
                  acompañada de envío inmediato del XML.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.1} className="h-full">
              <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm font-semibold">Consumidor final</div>
                <p className="mt-2 text-sm leading-6 text-white/70">
                  No se anula ni se hace nota de crédito.
                </p>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  Una vez emitida y transmitida la factura con la leyenda "consumidor
                  final", no procede anulación ni nota de crédito. Por eso es clave
                  validar datos antes de emitir.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15} className="h-full">
              <div className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm font-semibold">Impacto operativo</div>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                    Validación previa para evitar rechazos del SRI.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                    Envío inmediato del XML y respaldo del RIDE.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/60" />
                    Control más estricto en consumidor final.
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.2}>
            <div className="mt-8 rounded-3xl border border-white/10 bg-black/40 p-6">
              <div className="text-sm font-semibold">Resumen rápido</div>
              <p className="mt-2 text-sm leading-6 text-white/70">
                Qué implica: emites y transmites de inmediato, evitas anulaciones de
                consumidor final y mantienes el historial correcto.
              </p>
              <p className="mt-3 text-sm leading-6 text-white/70">
                En la práctica, el sistema debe validar datos, generar XML y enviar al SRI
                sin demoras. También debe asegurar que el comprobante de consumidor final
                sea correcto desde el primer intento.
              </p>
              <div className="mt-4 text-sm text-white/60">
                Para casos especiales, revisa la resolución SRI vigente.
              </div>
            </div>
          </FadeIn>
        </section>

        <section id="faq" className="border-t border-white/10 bg-white/[0.03]">
          <div className="mx-auto w-full max-w-6xl px-5 py-16">
            <FadeIn>
              <div className="text-xs font-semibold text-white/60">FAQ</div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                Preguntas frecuentes
              </h2>
            </FadeIn>

            <div className="mt-10 mx-auto max-w-4xl">
              <FaqAccordion items={faqs} />
            </div>
          </div>
        </section>

        <section id="contacto" className="mx-auto w-full max-w-6xl px-5 py-16">
          <FadeIn>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 md:p-10">
              <div className="grid gap-8 md:grid-cols-2 md:items-center">
                <div>
                  <div className="text-xs font-semibold text-white/60">Contacto</div>
                  <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                    ¿Listo para facturar sin errores?
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/70">
                    Deja tus datos y vemos tu caso.
                  </p>
                </div>

                <div className="rounded-2xl bg-black/40 p-5 ring-1 ring-white/10">
                  <div className="text-sm font-semibold">Opción rápida</div>
                  <p className="mt-2 text-sm leading-6 text-white/70">
                    Déjanos tus datos y te contactamos con planes, requisitos y una demo.
                  </p>

                  <div className="mt-4 grid gap-3">
                    <ContactForm />

                    <div />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-5 py-10 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Catalina Facturador</div>
          <div className="flex gap-4">
            <a className="hover:text-white" href="/que-es-facturacion-electronica">
              Qué es
            </a>
            <a className="hover:text-white" href="/cumplimiento-sri">
              Cumplimiento SRI
            </a>
            <a className="hover:text-white" href="#beneficios">
              Beneficios
            </a>
            <a className="hover:text-white" href="#contacto">
              Contacto
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
