import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { blogPosts, siteUrl } from "@/lib/site";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date
    }
  };
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: "Accurate Online Consultant"
    },
    mainEntityOfPage: `${siteUrl}/blog/${post.slug}`
  };

  return (
    <main>
      <SiteHeader />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <article className="bg-white pt-32 sm:pt-36">
        <div className="container-px max-w-4xl pb-12">
          <Breadcrumbs items={[{ label: "Blog", href: "/blog" }, { label: post.title }]} />
          <p className="eyebrow mt-10">{post.category}</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">{post.title}</h1>
          <p className="mt-5 text-lg leading-8 text-ink-500">{post.excerpt}</p>
          <div className="mt-6 flex gap-4 text-sm text-slate-500">
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
        </div>
        <div className="border-y border-blue-100 bg-blue-50/50 py-10">
          <div className="container-px max-w-4xl">
            <h2 className="text-2xl font-bold text-ink-900">Ringkasan artikel</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {post.headings.map((heading) => (
                <div key={heading} className="rounded-lg border border-blue-100 bg-white p-4 font-semibold text-ink-900">
                  {heading}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="container-px max-w-4xl py-14">
          <div className="space-y-8 text-lg leading-9 text-ink-500">
            {post.headings.map((heading) => (
              <section key={heading}>
                <h2 className="text-2xl font-bold text-ink-900">{heading}</h2>
                <p className="mt-3">
                  Tahap ini membantu tim memastikan implementasi Accurate Online berjalan dengan
                  data yang bersih, alur kerja yang jelas, dan laporan yang bisa dipercaya sejak
                  awal penggunaan.
                </p>
              </section>
            ))}
            <p>
              Untuk kebutuhan yang lebih spesifik, Anda bisa melihat halaman{" "}
              <Link href="/services" className="font-bold text-brand-600 hover:text-brand-700">
                layanan Accurate Online
              </Link>{" "}
              atau langsung menghubungi tim melalui halaman{" "}
              <Link href="/contact" className="font-bold text-brand-600 hover:text-brand-700">
                kontak
              </Link>
              .
            </p>
          </div>
        </div>
      </article>
      <CTASection />
      <SiteFooter />
    </main>
  );
}
