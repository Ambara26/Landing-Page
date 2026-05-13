import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontak Konsultan Accurate Online",
  description:
    "Hubungi konsultan Accurate Online untuk konsultasi implementasi, training, setup inventory, multi gudang, dan migrasi data.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Kontak Konsultan Accurate Online",
    description: "Jadwalkan konsultasi Accurate Online untuk bisnis Anda.",
    url: "/contact"
  }
};

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="Contact"
        title="Diskusikan kebutuhan Accurate Online bisnis Anda."
        description="Kirim kebutuhan awal, modul yang ingin digunakan, dan kondisi data saat ini. Kami bantu petakan langkah implementasi yang paling praktis."
        breadcrumbs={[{ label: "Contact" }]}
      />
      <section className="section-padding bg-white">
        <div className="container-px grid gap-6 lg:grid-cols-4">
          {[
            [MessageCircle, "WhatsApp", "+62 812-0000-0000", whatsappUrl],
            [Mail, "Email", "hello@accurateconsultant.id", "mailto:hello@accurateconsultant.id"],
            [Phone, "Telepon", "+62 812-0000-0000", "tel:+6281200000000"],
            [MapPin, "Area Layanan", "Seluruh Indonesia", "/services"]
          ].map(([Icon, title, value, href]) => {
            const ContactIcon = Icon as typeof MessageCircle;
            return (
              <Link key={title as string} href={href as string} className="rounded-lg border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-card">
                <ContactIcon className="text-brand-600" size={26} />
                <h2 className="mt-5 text-xl font-bold text-ink-900">{title as string}</h2>
                <p className="mt-2 text-ink-500">{value as string}</p>
              </Link>
            );
          })}
        </div>
      </section>
      <CTASection />
      <SiteFooter />
    </main>
  );
}
