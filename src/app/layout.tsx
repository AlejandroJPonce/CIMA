import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import "flowbite";

const jostSans = Jost({
  variable: "--font-jost-sans",
  subsets: ["latin"],
});

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
        style={{
          backgroundImage: "url('/backgrounds/fondo.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {children}
      </body>
    </html>
  );
}
