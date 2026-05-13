"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  Cloud,
  Database,
  Headphones,
  Link2,
  MessageCircle,
  Puzzle,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Users
} from "lucide-react";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import MotionSection from "@/components/MotionSection";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { processSteps, testimonials, whatsappUrl } from "@/lib/site";

const trustedLogos = [
  "CV. Maju Jaya",
  "Sentosa Distributor",
  "Toko Bangunan Sukses",
  "PT. Berkah Abadi",
  "Holy Drink",
  "Mega Jaya Elektronik",
  "Duta Karya Mandiri",
  "Fashion Indonesia"
];

const heroChecks = [
  "Berpengalaman & Profesional",
  "Proses Terstruktur",
  "Support Berkelanjutan",
  "Hasil Terukur"
];

const heroFeatures = [
  {
    title: "Cloud Based",
    description: "Akses data kapan saja di mana saja",
    icon: Cloud
  },
  {
    title: "Data Aman",
    description: "Backup otomatis & keamanan terjamin",
    icon: ShieldCheck
  },
  {
    title: "Realtime",
    description: "Laporan akurat secara real-time",
    icon: BarChart3
  },
  {
    title: "Integrasi Lengkap",
    description: "Terhubung dengan banyak sistem bisnis",
    icon: Puzzle
  },
  {
    title: "Custom & Fleksibel",
    description: "Disesuaikan dengan kebutuhan Anda",
    icon: SlidersHorizontal
  }
];

const serviceGrid = [
  {
    title: "Setup & Konfigurasi",
    description: "Setup database, chart of account, master data, pajak, dan preferensi sesuai kebutuhan bisnis.",
    icon: Database
  },
  {
    title: "Migrasi Data",
    description: "Pindahkan data dari sistem lama atau Excel ke Accurate Online dengan aman dan akurat.",
    icon: Cloud
  },
  {
    title: "Penyesuaian Proses Bisnis",
    description: "Sesuaikan workflow Accurate Online dengan proses operasional bisnis Anda.",
    icon: Puzzle
  },
  {
    title: "Training & User Guide",
    description: "Pelatihan penggunaan Accurate Online untuk tim agar lebih produktif.",
    icon: Users
  },
  {
    title: "Go-Live & Pendampingan",
    description: "Kami dampingi hingga sistem berjalan lancar dan tim Anda siap mandiri.",
    icon: Headphones
  },
  {
    title: "Integrasi Sistem",
    description: "Integrasi dengan sistem lain seperti e-commerce, bank, absensi, dan lainnya.",
    icon: Link2
  },
  {
    title: "Laporan & Dashboard",
    description: "Buat laporan dan dashboard sesuai kebutuhan untuk pengambilan keputusan.",
    icon: BarChart3
  },
  {
    title: "Support After Sales",
    description: "Bantuan teknis dan konsultasi setelah implementasi untuk memastikan sistem optimal.",
    icon: Headphones
  }
];

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-blue-100 bg-white pt-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_72%_12%,rgba(37,99,235,0.14),transparent_32%),radial-gradient(circle_at_18%_76%,rgba(239,68,68,0.08),transparent_30%),linear-gradient(180deg,#f8fbff_0%,#ffffff_62%)]" />
      <div className="absolute right-0 top-16 -z-10 h-[560px] w-[60%] bg-[linear-gradient(90deg,rgba(255,255,255,0.95),rgba(239,246,255,0.5)),url('/dashboard-accurate-mockup.png')] bg-contain bg-right-top bg-no-repeat opacity-10" />

      <div className="container-px grid min-h-[640px] items-center gap-10 pb-8 lg:grid-cols-[0.86fr_1.14fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="pt-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-brand-700">
            <Sparkles size={15} />
            Spesialis Implementasi Accurate Online
          </div>
          <h1 className="mt-7 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-ink-900 sm:text-5xl lg:text-[56px]">
            Implementasi Accurate Online Lebih{" "}
            <span className="text-brand-600">Cepat, Rapi, dan Tepat</span> untuk Bisnis Anda
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-700">
            Kami bantu Anda setup, migrasi data, training, hingga Accurate Online benar-benar siap
            digunakan untuk operasional bisnis.
          </p>

          <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3">
            {heroChecks.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm font-medium text-ink-700">
                <CheckCircle2 size={20} className="text-brand-600" />
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={whatsappUrl}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-7 py-4 text-sm font-bold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-brand-700"
            >
              <MessageCircle size={18} />
              Konsultasi Gratis via WhatsApp
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-brand-600 bg-white px-7 py-4 text-sm font-bold text-brand-700 transition hover:-translate-y-0.5 hover:bg-blue-50"
            >
              <CalendarDays size={18} />
              Jadwalkan Demo
            </Link>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <div className="flex -space-x-2">
              {["AR", "DN", "MS", "LV"].map((initial) => (
                <div
                  key={initial}
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-slate-200 text-xs font-bold text-slate-700"
                >
                  {initial}
                </div>
              ))}
            </div>
            <p className="text-sm text-ink-700">Telah dipercaya 50+ bisnis di berbagai industri</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="relative"
        >
          <div className="hero-dashboard-card relative mx-auto max-w-3xl">
            <div className="absolute -inset-8 -z-10 rounded-full bg-blue-100/70 blur-3xl" />
            <div className="absolute -right-7 -top-7 -z-10 h-44 w-44 rounded-full bg-rose-200/70 blur-3xl" />
            <div className="absolute -bottom-8 left-8 -z-10 h-56 w-56 rounded-full bg-sky-200/80 blur-3xl" />
            <div className="absolute -left-3 top-10 z-10 hidden rounded-lg border border-white/80 bg-white/90 px-4 py-3 shadow-soft backdrop-blur md:block">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600 text-white">
                  <BarChart3 size={20} />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-ink-500">Dashboard</p>
                  <p className="text-sm font-extrabold text-ink-900">Realtime Report</p>
                </div>
              </div>
            </div>
            <div className="absolute -right-2 bottom-16 z-10 hidden rounded-lg border border-white/80 bg-white/90 px-4 py-3 shadow-soft backdrop-blur sm:block">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-600 text-white">
                  <CheckCircle2 size={20} />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-ink-500">Siap Go-Live</p>
                  <p className="text-sm font-extrabold text-ink-900">Data lebih rapi</p>
                </div>
              </div>
            </div>
            <Image
              src="/dashboard-accurate-mockup.png"
              alt="Dashboard Accurate Online di layar laptop"
              width={1536}
              height={1024}
              priority
              className="animate-dashboard-float h-auto w-full rounded-2xl border border-white/80 shadow-[0_28px_80px_rgba(15,23,42,0.22)] ring-1 ring-blue-100/80"
            />
          </div>
        </motion.div>
      </div>

      <div className="container-px relative z-10 -mb-10 hidden lg:block">
        <div className="ml-auto grid max-w-[980px] grid-cols-5 gap-0 rounded-xl border border-blue-100 bg-white p-5 shadow-soft">
          {heroFeatures.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex gap-4 px-4">
                <Icon size={28} className="mt-1 shrink-0 text-brand-600" />
                <div>
                  <h3 className="text-sm font-extrabold text-ink-900">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink-500">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="bg-slate-50 pt-16">
      <div className="container-px grid items-center gap-5 py-7 lg:grid-cols-[180px_1fr]">
        <p className="text-sm font-bold text-ink-900">Dipercaya oleh berbagai bisnis</p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-8">
          {trustedLogos.map((logo) => (
            <div key={logo} className="flex min-h-12 items-center justify-center text-center text-xs font-extrabold uppercase tracking-wide text-slate-500">
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <MotionSection id="layanan" className="section-padding bg-white">
      <div className="container-px grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="eyebrow">Layanan Kami</p>
          <h2 className="mt-3 max-w-xl text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            Solusi Lengkap Implementasi Accurate Online
          </h2>
          <p className="mt-4 max-w-2xl leading-8 text-ink-500">
            Kami memberikan layanan end-to-end untuk memastikan Accurate Online berjalan optimal
            dan sesuai dengan kebutuhan bisnis Anda.
          </p>

          <div className="mt-9 grid gap-4 md:grid-cols-2">
            {serviceGrid.map((service) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-card"
                >
                  <Icon className="text-brand-600" size={31} />
                  <h3 className="mt-5 text-base font-extrabold text-ink-900">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink-500">{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>

        <aside id="keunggulan" className="scroll-mt-28 rounded-xl bg-blue-50 p-8 lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow">Mengapa Memilih Kami?</p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-ink-900">
            Lebih dari Sekadar Setup, Kami Jadi Partner Bisnis Anda
          </h2>
          <div className="mt-7 space-y-4">
            {[
              "Tim berpengalaman dan bersertifikasi Accurate",
              "Metodologi implementasi yang terstruktur",
              "Solusi disesuaikan dengan kebutuhan bisnis Anda",
              "Komunikasi mudah & respons cepat",
              "Harga transparan & kompetitif"
            ].map((item) => (
              <div key={item} className="flex gap-3 text-sm font-medium text-ink-700">
                <CheckCircle2 size={20} className="shrink-0 text-brand-600" />
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 rounded-lg bg-brand-600 p-5 text-white sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {[
              ["50+", "Klien Puas"],
              ["100+", "Project Selesai"],
              ["5+", "Tahun Pengalaman"],
              ["98%", "Client Retention"]
            ].map(([value, label]) => (
              <div key={label}>
                <p className="text-2xl font-extrabold">{value}</p>
                <p className="mt-1 text-xs text-blue-100">{label}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </MotionSection>
  );
}

function ProcessSection() {
  return (
    <MotionSection id="proses" className="section-padding bg-slate-50">
      <div className="container-px">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Proses</p>
          <h2 className="section-title">Tahapan implementasi yang jelas dari awal.</h2>
          <p className="section-lead mx-auto">
            Setiap project memiliki checkpoint agar konfigurasi, training, dan go-live berjalan
            lebih terukur.
          </p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {processSteps.map((item) => (
            <article key={item.step} className="relative rounded-lg border border-blue-100 bg-white p-6 shadow-sm">
              <span className="text-sm font-bold text-brand-600">{item.step}</span>
              <h3 className="mt-4 text-xl font-bold text-ink-900">{item.title}</h3>
              <p className="mt-3 leading-7 text-ink-500">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

function TestimonialsSection() {
  return (
    <MotionSection id="testimoni" className="section-padding bg-white">
      <div className="container-px">
        <div className="max-w-3xl">
          <p className="eyebrow">Testimoni</p>
          <h2 className="section-title">Dipilih oleh bisnis yang butuh implementasi rapi.</h2>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="rounded-lg border border-blue-100 bg-white p-6 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 font-bold text-white">
                  {testimonial.initials}
                </div>
                <div>
                  <h3 className="font-bold text-ink-900">{testimonial.name}</h3>
                  <p className="text-sm text-ink-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="leading-7 text-ink-500">&quot;{testimonial.quote}&quot;</p>
            </article>
          ))}
        </div>
      </div>
    </MotionSection>
  );
}

function PricingSection() {
  return (
    <MotionSection id="harga" className="section-padding bg-slate-50">
      <div className="container-px">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Harga</p>
          <h2 className="section-title">Paket fleksibel sesuai kompleksitas bisnis.</h2>
          <p className="section-lead mx-auto">
            Biaya final mengikuti jumlah modul, user, gudang, kualitas data, dan kebutuhan training.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-4xl rounded-xl border border-blue-100 bg-white p-8 text-center shadow-soft">
          <p className="text-lg font-bold text-ink-900">Mulai dari konsultasi kebutuhan gratis</p>
          <p className="mt-3 leading-8 text-ink-500">
            Kami bantu estimasi timeline dan ruang lingkup implementasi sebelum Anda memutuskan.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-7 py-4 text-sm font-bold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-brand-700"
          >
            Minta Penawaran
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </MotionSection>
  );
}

function FAQSection() {
  return (
    <MotionSection id="faq" className="section-padding bg-white">
      <div className="container-px grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="eyebrow">FAQ</p>
          <h2 className="section-title">Pertanyaan yang sering muncul.</h2>
          <p className="section-lead">
            Butuh jawaban lebih spesifik untuk kondisi bisnis Anda? Konsultasi awal bisa dilakukan
            lewat WhatsApp.
          </p>
          <Link href="/faq" className="mt-6 inline-flex font-bold text-brand-600 hover:text-brand-700">
            Buka semua FAQ
          </Link>
        </div>
        <FAQAccordion />
      </div>
    </MotionSection>
  );
}

export default function LandingPage() {
  return (
    <main>
      <SiteHeader />
      <Hero />
      <TrustBar />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <SiteFooter />
    </main>
  );
}
