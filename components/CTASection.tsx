import Link from "next/link";
import { MessageCircle } from "lucide-react";
import MotionSection from "@/components/MotionSection";
import { whatsappUrl } from "@/lib/site";

export default function CTASection() {
  return (
    <MotionSection className="section-padding bg-brand-600">
      <div className="container-px">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">
              Konsultasi gratis
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Siap merapikan Accurate Online untuk bisnis Anda?
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-blue-100">
              Ceritakan kebutuhan Anda. Kami bantu petakan modul, data, timeline, dan prioritas
              implementasi yang paling masuk akal.
            </p>
          </div>
          <Link
            href={whatsappUrl}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-bold text-brand-700 shadow-soft transition hover:-translate-y-0.5 hover:bg-blue-50"
          >
            <MessageCircle size={19} />
            Chat WhatsApp
          </Link>
        </div>
      </div>
    </MotionSection>
  );
}
