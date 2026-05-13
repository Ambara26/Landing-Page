import LandingPage from "@/components/LandingPage";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Accurate Online Consultant",
  url: "https://accurate-implementation.vercel.app",
  logo: "https://accurate-implementation.vercel.app/logo.svg",
  image: "https://accurate-implementation.vercel.app/og-image.svg",
  description:
    "Jasa implementasi Accurate Online, training, migrasi data, setup inventory, multi gudang, dan konsultasi accounting system.",
  areaServed: {
    "@type": "Country",
    name: "Indonesia"
  },
  serviceType: [
    "Implementasi Accurate Online",
    "Training Accurate",
    "Setup Inventory",
    "Setup Multi Gudang",
    "Migrasi Data",
    "Konsultasi Accounting System"
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: "+62-812-0000-0000",
    availableLanguage: ["id-ID"]
  },
  sameAs: [
    "https://www.linkedin.com/",
    "https://www.instagram.com/",
    "https://www.facebook.com/"
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandingPage />
    </>
  );
}
