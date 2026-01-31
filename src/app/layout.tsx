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
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/icon.png", type: "image/png" }],
  },
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Catalina Facturador | Sistema de Facturación",
    description:
      "Emite facturas rápido, controla pagos y toma decisiones con reportes claros.",
    type: "website",
    locale: "es_ES",
    url: "/",
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
