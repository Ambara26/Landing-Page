import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://accurate-implementation.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jasa Implementasi Accurate Online Profesional",
    template: "%s | Accurate Online Consultant"
  },
  description:
    "Jasa implementasi Accurate Online, training Accurate, setup inventory, multi gudang, migrasi data, dan konsultasi accounting system untuk bisnis yang ingin go-live lebih cepat.",
  keywords: [
    "jasa implementasi Accurate Online",
    "training Accurate",
    "setup Accurate Online",
    "setup inventory Accurate",
    "multi gudang Accurate",
    "migrasi data Accurate",
    "konsultan accounting system"
  ],
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: "/favicon.svg"
  },
  openGraph: {
    title: "Jasa Implementasi Accurate Online Profesional",
    description:
      "Implementasi, training, migrasi data, inventory, multi gudang, dan konsultasi Accurate Online untuk operasional bisnis yang lebih rapi.",
    url: "/",
    siteName: "Accurate Online Consultant",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Jasa Implementasi Accurate Online"
      }
    ],
    locale: "id_ID",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Jasa Implementasi Accurate Online Profesional",
    description:
      "Setup, training, migrasi data, inventory, multi gudang, dan konsultasi Accurate Online.",
    images: ["/og-image.svg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
