import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import MotionSection from "@/components/MotionSection";
import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { processSteps, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Layanan Implementasi Accurate Online",
  description:
    "Layanan implementasi Accurate Online, training, migrasi data, setup inventory, multi gudang, dan konsultasi accounting system.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Layanan Implementasi Accurate Online",
    description: "Paket layanan end-to-end untuk setup Accurate Online dan pendampingan go-live.",
    url: "/services"
  }
};

const ids = ["implementasi", "training", "migrasi-data", "inventory", "konsultasi"];

export default function ServicesPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="Services"
        title="Layanan Accurate Online untuk operasional yang lebih rapi."
        description="Pilih layanan yang sesuai dengan kebutuhan bisnis Anda, dari setup awal sampai optimasi laporan dan kontrol inventory."
        breadcrumbs={[{ label: "Services" }]}
      />
      <MotionSection className="section-padding bg-white">
        <div className="container-px grid gap-6 lg:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <article
                id={ids[index]}
                key={service.title}
                className="scroll-mt-28 rounded-lg border border-blue-100 bg-white p-7 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-brand-600">
                  <Icon size={24} />
                </div>
                <h2 className="mt-6 text-2xl font-bold text-ink-900">{service.title}</h2>
                <p className="mt-4 leading-8 text-ink-500">{service.description}</p>
                <Link href="/contact" className="mt-6 inline-flex font-bold text-brand-600 hover:text-brand-700">
                  Konsultasikan kebutuhan layanan
                </Link>
              </article>
            );
          })}
        </div>
      </MotionSection>
      <MotionSection className="section-padding bg-slate-50">
        <div className="container-px">
          <p className="eyebrow">Workflow</p>
          <h2 className="section-title">Tahapan kerja yang transparan.</h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {processSteps.map((item) => (
              <article key={item.step} className="rounded-lg border border-blue-100 bg-white p-6 shadow-sm">
                <span className="text-sm font-bold text-brand-600">{item.step}</span>
                <h3 className="mt-4 text-xl font-bold text-ink-900">{item.title}</h3>
                <p className="mt-3 leading-7 text-ink-500">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </MotionSection>
      <CTASection />
      <SiteFooter />
    </main>
  );
}
