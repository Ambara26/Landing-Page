import type { Metadata } from "next";
import CompanySettingPage from "@/components/CompanySettingPage";

export const metadata: Metadata = {
  title: "Company Setting",
  description: "Compact ERP company setting layout with horizontal labels and fields.",
  alternates: { canonical: "/company-setting" },
  robots: {
    index: false,
    follow: false
  }
};

export default function Page() {
  return <CompanySettingPage />;
}
