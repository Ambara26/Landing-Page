"use client";

import { ChangeEvent, ReactNode, useRef, useState } from "react";
import {
  BarChart3,
  Bell,
  Box,
  CalendarDays,
  ChevronDown,
  FileText,
  Grid2X2,
  LayoutDashboard,
  LogOut,
  Package,
  Save,
  Settings,
  Tags,
  Trash2,
  Truck,
  Upload,
  Users,
  X
} from "lucide-react";

type UploadValue = {
  name: string;
  size: string;
  preview?: string;
  kind: "logo" | "signature";
};

const tabs = [
  { label: "DASHBOARD", icon: LayoutDashboard },
  { label: "PURCHASE ORDER", icon: Package },
  { label: "LOGISTICS", icon: Box },
  { label: "SUPPLIER", icon: Users },
  { label: "REPORT", icon: BarChart3 },
  { label: "SETTING", icon: Settings, active: true }
];

const sidebarItems = [
  { icon: Grid2X2, active: false, tone: "emerald" },
  { icon: FileText, active: false, tone: "lime" },
  { icon: Tags, active: false, tone: "sky" },
  { icon: Users, active: false, tone: "violet" },
  { icon: Truck, active: false, tone: "amber" },
  { icon: CalendarDays, active: false, tone: "blue" },
  { icon: BarChart3, active: false, tone: "cyan" },
  { icon: Settings, active: true, tone: "green" }
];

const inputClass =
  "h-[50px] w-full rounded-md border border-emerald-900/20 bg-white px-4 text-[15px] font-medium text-slate-800 outline-none transition focus:border-emerald-500 focus:ring-3 focus:ring-emerald-100";

function SidebarIcon({
  children,
  active,
  tone
}: {
  children: ReactNode;
  active?: boolean;
  tone?: string;
}) {
  const toneClass =
    tone === "lime"
      ? "bg-lime-50 text-lime-700"
      : tone === "sky"
        ? "bg-sky-50 text-sky-600"
        : tone === "violet"
          ? "bg-violet-50 text-violet-600"
          : tone === "amber"
            ? "bg-amber-50 text-amber-600"
            : tone === "blue"
              ? "bg-blue-50 text-blue-600"
              : tone === "cyan"
                ? "bg-cyan-50 text-cyan-600"
                : "bg-emerald-50 text-emerald-600";

  return (
    <button
      type="button"
      className={`flex h-12 w-12 items-center justify-center rounded-xl border text-sm transition ${
        active
          ? "border-emerald-700 bg-emerald-700 text-white shadow-sm"
          : `border-transparent ${toneClass} hover:border-emerald-200`
      }`}
    >
      {children}
    </button>
  );
}

function TextField({ value }: { value: string }) {
  return <input className={inputClass} value={value} readOnly />;
}

function SelectField({ value }: { value: string }) {
  return (
    <div className="relative">
      <select className={`${inputClass} appearance-none pr-10 disabled:opacity-100`} value={value} disabled>
        <option>{value}</option>
      </select>
      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-700" size={18} />
    </div>
  );
}

function PreviewMark({ value }: { value: UploadValue }) {
  if (value.preview) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={value.preview} alt={value.name} className="h-10 w-10 rounded-md object-cover" />
    );
  }

  if (value.kind === "signature") {
    return (
      <div className="flex h-10 w-14 items-center justify-center rounded-md bg-white text-xl italic text-slate-700">
        Budi
      </div>
    );
  }

  return (
    <div className="grid h-10 w-10 place-items-center rounded-md bg-emerald-600 text-lg font-black text-white">
      S
    </div>
  );
}

function UploadField({
  value,
  onChange
}: {
  value: UploadValue;
  onChange: (value: UploadValue) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFile(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      onChange({
        name: file.name,
        size: `${file.type.includes("png") ? "PNG" : "IMG"} - ${Math.max(1, Math.round(file.size / 1024))} KB`,
        preview: String(reader.result),
        kind: value.kind
      });
    };
    reader.readAsDataURL(file);
  }

  function handleDelete() {
    onChange({
      name: value.kind === "logo" ? "logo_senwell.png" : "ttd_budi_santoso.png",
      size: value.kind === "logo" ? "PNG - 245 KB" : "PNG - 120 KB",
      kind: value.kind
    });
    if (inputRef.current) inputRef.current.value = "";
  }

  return (
    <div className="flex h-[50px] w-full items-center gap-3 rounded-md border border-emerald-900/20 bg-white px-3">
      <PreviewMark value={value} />
      <div className="min-w-0 flex-1">
        <p className="truncate text-[14px] font-semibold leading-5 text-slate-800">{value.name}</p>
        <p className="text-xs font-medium leading-4 text-slate-500">{value.size}</p>
      </div>
      <input ref={inputRef} type="file" accept="image/*" className="hidden" onChange={handleFile} />
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="inline-flex h-8 items-center gap-1.5 rounded-md bg-emerald-50 px-2.5 text-xs font-bold text-emerald-700 transition hover:-translate-y-0.5 hover:bg-emerald-100"
      >
        <Upload size={14} />
        Upload
      </button>
      <button
        type="button"
        onClick={handleDelete}
        aria-label="Hapus file"
        className="grid h-8 w-8 place-items-center rounded-md border border-red-200 text-red-600 transition hover:-translate-y-0.5 hover:bg-red-50"
      >
        <Trash2 size={15} />
      </button>
    </div>
  );
}

function FieldLabel({ children }: { children: ReactNode }) {
  return <label className="self-center whitespace-nowrap text-[15px] font-bold text-emerald-950/90">{children}</label>;
}

function FormRow({
  leftLabel,
  leftField,
  rightLabel,
  rightField
}: {
  leftLabel: string;
  leftField: ReactNode;
  rightLabel: string;
  rightField: ReactNode;
}) {
  return (
    <div className="grid h-[56px] grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-center gap-x-8">
      <div className="grid grid-cols-[160px_minmax(0,1fr)] items-center gap-x-4">
        <FieldLabel>{leftLabel}</FieldLabel>
        {leftField}
      </div>
      <div className="grid grid-cols-[160px_minmax(0,1fr)] items-center gap-x-4">
        <FieldLabel>{rightLabel}</FieldLabel>
        {rightField}
      </div>
    </div>
  );
}

export default function CompanySettingPage() {
  const [logo, setLogo] = useState<UploadValue>({
    name: "logo_senwell.png",
    size: "PNG - 245 KB",
    kind: "logo"
  });
  const [signature, setSignature] = useState<UploadValue>({
    name: "ttd_budi_santoso.png",
    size: "PNG - 120 KB",
    kind: "signature"
  });

  return (
    <main className="min-h-screen overflow-x-auto bg-[#fbfcf8] text-slate-900">
      <aside className="fixed inset-y-0 left-0 z-30 flex w-[88px] flex-col border-r border-emerald-900/15 bg-[#f7fbf4]">
        <div className="flex h-[92px] items-center justify-center border-b border-emerald-900/15">
          <div className="grid h-14 w-14 place-items-center rounded-xl border border-emerald-900/15 bg-white text-lg font-black text-emerald-800 shadow-sm">
            OR
          </div>
        </div>
        <div className="flex flex-1 flex-col items-center gap-4 py-6">
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            return (
              <SidebarIcon key={Icon.displayName ?? item.tone} active={item.active} tone={item.tone}>
                <Icon size={24} />
              </SidebarIcon>
            );
          })}
        </div>
        <div className="flex flex-col items-center gap-4 border-t border-emerald-900/15 py-5">
          <SidebarIcon>
            <span className="text-base font-black text-emerald-800">A</span>
          </SidebarIcon>
          <SidebarIcon>
            <LogOut size={22} />
          </SidebarIcon>
        </div>
      </aside>

      <div className="pl-[88px]">
        <header className="sticky top-0 z-20 flex h-[68px] items-center justify-between border-b border-emerald-900/15 bg-white/85 pr-8 backdrop-blur">
          <div className="flex h-full items-end gap-1 pl-6">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <div
                  key={tab.label}
                  className={`flex h-[54px] min-w-[190px] items-center justify-between gap-3 rounded-t-lg border px-4 text-sm font-bold ${
                    tab.active
                      ? "border-emerald-700 border-b-white bg-white text-emerald-950"
                      : "border-emerald-900/15 bg-[#f8fbf6] text-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={19} className={tab.active ? "text-emerald-700" : "text-slate-500"} />
                    {tab.label}
                  </div>
                  <X size={16} className="text-slate-600" />
                </div>
              );
            })}
          </div>
          <Bell size={22} className="text-slate-700" />
        </header>

        <section className="p-6">
          <div className="min-h-[calc(100vh-116px)] min-w-[1460px] rounded-lg border border-emerald-900/15 bg-white px-7 py-7 shadow-[0_10px_34px_rgba(15,23,42,0.04)]">
            <h1 className="text-xl font-black tracking-tight text-emerald-950">Company Setting</h1>

            <form className="mt-8">
              <div className="space-y-5">
                <FormRow
                  leftLabel="Company Name"
                  leftField={<TextField value="PT. SENWELL" />}
                  rightLabel="Director Name"
                  rightField={<TextField value="Budi Santoso" />}
                />
                <FormRow
                  leftLabel="Company Address"
                  leftField={<TextField value="Jl. Ahmad Yani No.10" />}
                  rightLabel="Logo Company"
                  rightField={<UploadField value={logo} onChange={setLogo} />}
                />
                <FormRow
                  leftLabel="City"
                  leftField={<TextField value="Banjarmasin" />}
                  rightLabel="Signature"
                  rightField={<UploadField value={signature} onChange={setSignature} />}
                />
                <FormRow
                  leftLabel="Postal Code"
                  leftField={<TextField value="70234" />}
                  rightLabel="Phone Alternative"
                  rightField={<TextField value="0812-3456-7890" />}
                />
                <FormRow
                  leftLabel="Phone Number"
                  leftField={<TextField value="(0511) 1234567" />}
                  rightLabel="Email Alternative"
                  rightField={<TextField value="admin@senwell.co.id" />}
                />
                <FormRow
                  leftLabel="Email"
                  leftField={<TextField value="info@senwell.co.id" />}
                  rightLabel="Tax Number"
                  rightField={<TextField value="01.234.567.8-901.000" />}
                />
                <FormRow
                  leftLabel="Website"
                  leftField={<TextField value="www.senwell.co.id" />}
                  rightLabel="Currency Default"
                  rightField={<SelectField value="IDR - Indonesian Rupiah" />}
                />
                <FormRow
                  leftLabel="NPWP"
                  leftField={<TextField value="01.234.567.8-901.000" />}
                  rightLabel="Language"
                  rightField={<SelectField value="Bahasa Indonesia" />}
                />
              </div>

              <div className="mt-7 flex justify-end">
                <button
                  type="button"
                  className="inline-flex h-12 items-center gap-3 rounded-md bg-emerald-700 px-5 text-[15px] font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-800"
                >
                  <Save size={19} />
                  Save
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
