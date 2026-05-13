import Link from "next/link";
import { Building2, Facebook, Instagram, Linkedin } from "lucide-react";
import { navItems } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="bg-slate-950 py-12 text-white">
      <div className="container-px">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-600">
                <Building2 size={22} />
              </div>
              <span className="text-lg font-bold">Accurate Online Consultant</span>
            </div>
            <p className="mt-5 max-w-xl leading-7 text-slate-300">
              Jasa implementasi Accurate Online, training, setup inventory, multi gudang, migrasi
              data, dan konsultasi accounting system untuk bisnis di Indonesia.
            </p>
          </div>

          <div>
            <h3 className="font-bold">Navigasi</h3>
            <div className="mt-4 flex flex-col gap-3">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-slate-300 hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold">Kontak</h3>
            <div className="mt-4 space-y-3 text-sm text-slate-300">
              <p>WhatsApp: +62 812-0000-0000</p>
              <p>Email: hello@accurateconsultant.id</p>
              <p>Area layanan: Indonesia</p>
            </div>
            <div className="mt-5 flex gap-3">
              {[Linkedin, Instagram, Facebook].map((Icon, index) => (
                <Link
                  key={index}
                  href="/contact"
                  aria-label="Social media"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-brand-600"
                >
                  <Icon size={18} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-400">
          <p>Copyright 2026 Accurate Online Consultant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
