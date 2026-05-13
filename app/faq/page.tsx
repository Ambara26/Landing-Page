import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { faqs, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ Implementasi Accurate Online",
  description:
    "Pertanyaan umum tentang implementasi Accurate Online, training, migrasi data, setup inventory, multi gudang, dan support go-live.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "FAQ Implementasi Accurate Online",
    description: "Jawaban ringkas sebelum memulai project Accurate Online.",
    url: "/faq"
  }
};

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    })),
    url: `${siteUrl}/faq`
  };

  return (
    <main>
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageHero
        eyebrow="FAQ"
        title="Jawaban sebelum memulai implementasi Accurate Online."
        description="Temukan jawaban untuk pertanyaan umum seputar timeline, migrasi data, training, multi gudang, dan support setelah go-live."
        breadcrumbs={[{ label: "FAQ" }]}
      />
      <section className="section-padding bg-white">
        <div className="container-px grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Butuh detail?</p>
            <h2 className="section-title">Kondisi tiap bisnis bisa berbeda.</h2>
            <p className="section-lead">
              Untuk jawaban yang lebih presisi, ceritakan jumlah user, modul, gudang, dan kondisi
              data saat ini.
            </p>
            <Link href="/contact" className="mt-6 inline-flex font-bold text-brand-600 hover:text-brand-700">
              Hubungi konsultan
            </Link>
          </div>
          <FAQAccordion />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
