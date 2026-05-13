import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import MotionSection from "@/components/MotionSection";
import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Tentang Konsultan Accurate Online",
  description:
    "Profil konsultan implementasi Accurate Online untuk bisnis yang membutuhkan setup accounting system, inventory, dan training yang terstruktur.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "Tentang Konsultan Accurate Online",
    description: "Pendamping implementasi Accurate Online dengan pendekatan bisnis, data, dan training.",
    url: "/about"
  }
};

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="About"
        title="Kami membantu tim finance dan operasional memakai Accurate dengan percaya diri."
        description="Fokus kami bukan hanya mengaktifkan software, tetapi memastikan struktur data, proses transaksi, dan laporan bisnis siap digunakan setiap hari."
        breadcrumbs={[{ label: "About" }]}
      />
      <MotionSection className="section-padding bg-white">
        <div className="container-px grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Pendekatan</p>
            <h2 className="section-title">Implementasi berbasis proses bisnis.</h2>
          </div>
          <div className="space-y-6 text-lg leading-9 text-ink-500">
            <p>
              Setiap bisnis memiliki alur transaksi yang berbeda. Karena itu, implementasi dimulai
              dari pemetaan kebutuhan, kualitas data, struktur user, dan target laporan yang ingin
              dicapai.
            </p>
            <p>
              Kami menghubungkan kebutuhan accounting, sales, purchasing, inventory, dan manajemen
              agar Accurate Online menjadi sistem kerja yang praktis, bukan hanya tempat input data.
            </p>
            <Link href="/services" className="inline-flex font-bold text-brand-600 hover:text-brand-700">
              Lihat layanan implementasi
            </Link>
          </div>
        </div>
      </MotionSection>
      <MotionSection className="section-padding bg-slate-50">
        <div className="container-px grid gap-5 md:grid-cols-3">
          {[
            ["120+", "Project implementasi dan training"],
            ["98%", "Project mencapai go-live"],
            ["4.9/5", "Rata-rata rating konsultasi"]
          ].map(([value, label]) => (
            <div key={label} className="rounded-lg border border-blue-100 bg-white p-7 shadow-sm">
              <p className="text-4xl font-bold text-brand-600">{value}</p>
              <p className="mt-3 text-ink-500">{label}</p>
            </div>
          ))}
        </div>
      </MotionSection>
      <CTASection />
      <SiteFooter />
    </main>
  );
}
