import { ArrowRight } from "lucide-react";
import SEO from "../components/SEO.jsx";
import PageHeader from "../components/PageHeader.jsx";
import { Item, Stagger } from "../components/Reveal.jsx";
import CTABanner from "../sections/CTABanner.jsx";
import { posts } from "../data.js";

export default function Blog() {
  return (
    <>
      <SEO title="Blog" path="/blog" description="Travel tips, safety updates and product news from the Antixor taxi.com team." />
      <PageHeader title="Blog" text="Travel tips, safety updates and product news from our team." />
      <section className="bg-white py-16 sm:py-20">
        <div className="container-x">
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.1}>
            {posts.map(({ title, excerpt, category, date, read, cover, icon: Icon }) => (
              <Item key={title}>
                <article className="group h-full overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-md shadow-slate-200/60 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl">
                  <div className={`relative grid h-40 place-items-center overflow-hidden bg-linear-to-br ${cover}`}>
                    <Icon className="size-14 text-white/90 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-ink">{category}</span>
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-slate-400">{date} · {read}</p>
                    <h2 className="mt-2 text-lg font-bold leading-snug text-ink">{title}</h2>
                    <p className="mt-2 text-sm text-slate-500">{excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-royal transition-all group-hover:gap-2.5">
                      Read more <ArrowRight className="size-4" />
                    </span>
                  </div>
                </article>
              </Item>
            ))}
          </Stagger>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
