import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Download, Phone, Mail } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { InquiryForm } from "@/components/InquiryForm";
import { getProduct, PRODUCTS } from "@/data/products";
import { SITE } from "@/data/site";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    const p = loaderData?.product;
    if (!p) return { meta: [{ title: "Product — River Steels" }] };
    return {
      meta: [
        { title: `${p.name} — ${p.category} | River Steels` },
        { name: "description", content: `${p.name}: ${p.tagline}. Grades, specifications and applications from River Steels, Mumbai.` },
        { property: "og:title", content: `${p.name} — River Steels` },
        { property: "og:description", content: p.tagline },
        { property: "og:type", content: "product" },
        { property: "og:url", content: `/products/${p.slug}` },
      ],
      links: [{ rel: "canonical", href: `/products/${p.slug}` }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: p.name,
          description: p.description,
          category: p.category,
          brand: { "@type": "Brand", name: "River Steels" },
        }),
      }],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-[60vh] grid place-items-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Product not found</h1>
        <Link to="/products" className="mt-4 inline-block text-navy font-semibold">← Back to products</Link>
      </div>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const data = Route.useLoaderData() as { product: import("@/data/products").Product };
  const p = data.product;
  const related = PRODUCTS.filter((x) => x.category === p.category && x.slug !== p.slug).slice(0, 3);

  return (
    <>
      <section className="relative bg-navy-deep text-primary-foreground -mt-16 md:-mt-[7.5rem] pt-32 md:pt-40 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="container-x relative">
          <Link to="/products" className="inline-flex items-center gap-2 text-sm opacity-80 hover:text-accent transition mb-6"><ArrowLeft className="w-4 h-4" /> Back to Products</Link>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs uppercase tracking-widest text-accent font-semibold">{p.category}</span>
              <h1 className="mt-3 text-4xl md:text-6xl font-bold">{p.name}</h1>
              <p className="mt-4 text-lg opacity-85 max-w-xl">{p.tagline}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`#inquiry`} className="bg-accent text-accent-foreground px-6 py-3 rounded-md font-semibold">Request a Quote</a>
                <a href={`tel:${SITE.primaryPhone}`} className="border border-white/30 px-6 py-3 rounded-md font-semibold inline-flex items-center gap-2 hover:bg-white/10"><Phone className="w-4 h-4" /> Call Now</a>
              </div>
            </div>
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-steel to-navy border border-white/10 grid place-items-center relative overflow-hidden">
              <div className="absolute inset-0 bg-grid opacity-30" />
              <div className="text-5xl md:text-7xl font-bold text-white/90 text-center px-8 relative">{p.name}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-bold text-navy-deep">Overview</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{p.description}</p>
            </Reveal>

            <Reveal>
              <h2 className="text-2xl md:text-3xl font-bold text-navy-deep">Technical Specifications</h2>
              <div className="mt-5 overflow-hidden rounded-xl border border-border">
                <table className="w-full text-sm">
                  <tbody>
                    {p.specs.map((s, i) => (
                      <tr key={s.label} className={i % 2 ? "bg-secondary/40" : "bg-card"}>
                        <td className="px-5 py-3 font-semibold w-1/3">{s.label}</td>
                        <td className="px-5 py-3 text-muted-foreground">{s.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

            <Reveal>
              <h2 className="text-2xl md:text-3xl font-bold text-navy-deep">Grades Available</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.grades.map((g) => (
                  <span key={g} className="px-3 py-1.5 rounded-md bg-secondary border border-border text-sm font-medium">{g}</span>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <h2 className="text-2xl md:text-3xl font-bold text-navy-deep">Applications</h2>
              <ul className="mt-5 grid sm:grid-cols-2 gap-3">
                {p.applications.map((a) => (
                  <li key={a} className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />{a}</li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h2 className="text-2xl md:text-3xl font-bold text-navy-deep">Standards & Specifications</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.standards.map((s) => (
                  <span key={s} className="px-3 py-1.5 rounded-md bg-navy text-primary-foreground text-sm font-medium">{s}</span>
                ))}
              </div>
            </Reveal>
          </div>

          <aside className="lg:sticky lg:top-32 h-fit space-y-6">
            <div className="p-6 rounded-xl bg-navy-deep text-primary-foreground">
              <h3 className="font-bold text-lg">Need a quotation?</h3>
              <p className="text-sm opacity-80 mt-1">Talk to our material experts.</p>
              <div className="mt-5 space-y-2 text-sm">
                <a href={`tel:${SITE.primaryPhone}`} className="flex items-center gap-2 hover:text-accent"><Phone className="w-4 h-4" /> {SITE.contacts[0].phone}</a>
                <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-accent break-all"><Mail className="w-4 h-4" /> {SITE.email}</a>
              </div>
              <a href="/catalogue.pdf" download className="mt-5 w-full bg-accent text-accent-foreground py-3 rounded-md font-semibold inline-flex items-center justify-center gap-2"><Download className="w-4 h-4" /> Download Catalogue</a>
            </div>

            {related.length > 0 && (
              <div className="p-6 rounded-xl border border-border bg-card">
                <h3 className="font-bold">Related Products</h3>
                <ul className="mt-4 divide-y divide-border">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link to="/products/$slug" params={{ slug: r.slug }} className="block py-3 hover:text-navy font-medium">{r.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </div>
      </section>

      <section id="inquiry" className="section bg-secondary/40">
        <div className="container-x max-w-3xl">
          <Reveal className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-deep">Request a Quote — {p.name}</h2>
            <p className="mt-3 text-muted-foreground">Share your requirement, and we'll respond with pricing and lead time.</p>
          </Reveal>
          <div className="mt-10 bg-card p-6 md:p-8 rounded-xl shadow-xl border border-border">
            <InquiryForm defaultProduct={p.name} />
          </div>
        </div>
      </section>
    </>
  );
}
