import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Jost } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const jostSans = Jost({
  variable: "--font-jost-sans",
  subsets: ["latin"],
})

const jostMono = Jost({
  variable: "--font-jost-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "CIMA",
  description: "CIMA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${jostSans.variable} ${jostMono.variable} antialiased`}
        style={{ backgroundImage: "url('/backgrounds/fondo.png')", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundClip: "content-box", backgroundAttachment: "fixed" }}
      >
        {children}
      </body>
    </html>
  );
}
