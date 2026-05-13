"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CalendarDays, Menu, MessageCircle, X } from "lucide-react";
import { navItems, whatsappUrl } from "@/lib/site";

export default function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-blue-100/80 bg-white/90 backdrop-blur-xl">
      <nav className="container-px flex h-20 items-center justify-between" aria-label="Navigasi utama">
        <Link href="/" className="flex items-center gap-3" aria-label="Accurate Online Consultant">
          <Image src="/logo.svg" alt="Accurate Online Consultant" width={172} height={40} priority />
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname === item.href.split("#")[0];
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`border-b-2 py-7 text-sm font-semibold transition ${
                  active
                    ? "border-brand-600 text-brand-700"
                    : "border-transparent text-slate-600 hover:border-blue-200 hover:text-brand-600"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={whatsappUrl}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-ink-900 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50"
          >
            <MessageCircle size={18} className="text-emerald-500" />
            Konsultasi Gratis
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-sm font-bold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-brand-700"
          >
            <CalendarDays size={18} />
            Jadwalkan Demo
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-blue-100 text-slate-700 lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-blue-100 bg-white lg:hidden">
          <div className="container-px flex flex-col gap-2 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-blue-50"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={whatsappUrl}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-bold text-ink-900"
              onClick={() => setIsOpen(false)}
            >
              <MessageCircle size={18} className="text-emerald-500" />
              Konsultasi WhatsApp
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-5 py-3 text-sm font-bold text-white"
              onClick={() => setIsOpen(false)}
            >
              <CalendarDays size={18} />
              Jadwalkan Demo
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
