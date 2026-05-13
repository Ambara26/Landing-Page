import Breadcrumbs, { type BreadcrumbItem } from "@/components/Breadcrumbs";

export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs
}: {
  eyebrow: string;
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
}) {
  return (
    <section className="relative overflow-hidden bg-white pt-32 sm:pt-36">
      <div className="absolute inset-0 -z-10 bg-hero-grid bg-[length:34px_34px]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-gradient-to-b from-blue-50 via-white to-white" />
      <div className="container-px pb-14">
        <Breadcrumbs items={breadcrumbs} />
        <p className="eyebrow mt-10">{eyebrow}</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-ink-500">{description}</p>
      </div>
    </section>
  );
}
