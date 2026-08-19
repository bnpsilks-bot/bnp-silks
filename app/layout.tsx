import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BNP Silks | Premium Silk Sarees",
  description:
    "BNP Silks — Manufacturers of Premium Silk Sarees. Wedding Collection, Pure Silk, Soft Silk and more. Wholesale and Retail.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}