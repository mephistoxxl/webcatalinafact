import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Catalina Facturador | Sistema de Facturación",
    template: "%s | Catalina Facturador",
  },
  description:
    "Catalina Facturador: sistema de facturación para emitir documentos rápido, controlar pagos y ver reportes en tiempo real.",
  keywords: [
    "sistema web de facturacion ecuador",
    "sistema de facturacion web ecuador",
    "software de facturacion web ecuador",
    "facturacion electronica web ecuador",
    "sistema de facturacion en linea ecuador",
    "sistema de facturacion en la nube ecuador",
    "programa web para facturar ecuador",
    "plataforma web de facturacion electronica",
    "sistema online de facturacion sri",
    "software facturacion electronica sri",
    "facturacion electronica sri",
    "comprobantes electronicos sri",
    "emitir factura electronica sri",
    "enviar comprobantes electronicos sri",
    "autorizacion de comprobantes electronicos sri",
    "validacion de comprobantes electronicos sri",
    "firma electronica para facturacion ecuador",
    "xml factura electronica sri",
    "ride factura electronica ecuador",
    "ambiente de pruebas sri facturacion electronica",
    "ambiente de produccion sri facturacion electronica",
    "clave de acceso sri factura electronica",
    "nota de credito electronica sri",
    "nota de debito electronica sri",
    "comprobante de retencion electronico sri",
    "guia de remision electronica sri",
    "liquidacion de compra electronica sri",
    "sistema web de facturacion para tienda ecuador",
    "sistema web de facturacion para minimarket ecuador",
    "sistema web de facturacion para ferreteria ecuador",
    "sistema web de facturacion para restaurante ecuador",
    "sistema web de facturacion para servicios profesionales ecuador",
    "facturacion electronica automatica sri",
    "generar firmar y enviar factura electronica sri",
    "sistema web de facturacion facil ecuador",
    "facturacion electronica rapida en linea",
    "sistema web de facturacion para pymes ecuador",
  ],
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/icon.png", type: "image/png" }],
  },
  metadataBase: new URL("https://www.catalinafact.com"),
  openGraph: {
    title: "Catalina Facturador | Sistema de Facturación",
    description:
      "Emite facturas rápido, controla pagos y toma decisiones con reportes claros.",
    type: "website",
    locale: "es_ES",
    url: "https://www.catalinafact.com/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Catalina Facturador",
    description:
      "Emite facturas rápido, controla pagos y toma decisiones con reportes claros.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
