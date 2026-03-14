import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NovaDeFi — Modular DeFi on Stellar",
  description: "Swap, lend, DCA, and stake on the Stellar network using Soroban smart contracts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-950 text-white min-h-screen`}>
        <Navbar />
        <main className="max-w-6xl mx-auto px-8 py-10">{children}</main>
      </body>
    </html>
  );
}
