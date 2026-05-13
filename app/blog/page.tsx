import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { blogPosts } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog Accurate Online",
  description:
    "Artikel seputar implementasi Accurate Online, setup inventory, multi gudang, migrasi data, dan accounting system.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog Accurate Online",
    description: "Insight praktis untuk implementasi Accurate Online dan optimasi accounting system.",
    url: "/blog"
  }
};

export default function BlogPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="Blog"
        title="Insight praktis untuk implementasi Accurate Online."
        description="Artikel ringkas untuk membantu owner, finance, dan tim operasional menyiapkan sistem accounting yang lebih tertata."
        breadcrumbs={[{ label: "Blog" }]}
      />
      <section className="section-padding bg-white">
        <div className="container-px grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article key={post.slug} className="rounded-lg border border-blue-100 bg-white p-6 shadow-sm">
              <p className="text-sm font-bold text-brand-600">{post.category}</p>
              <h2 className="mt-4 text-2xl font-bold text-ink-900">
                <Link href={`/blog/${post.slug}`} className="hover:text-brand-600">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-4 leading-7 text-ink-500">{post.excerpt}</p>
              <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
