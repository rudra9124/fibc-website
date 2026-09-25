import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Factory,
  Globe2,
  Mail,
  PackageCheck,
  Phone,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import heroImage from "@/assets/fibc-hero.jpg";
import facilityImage from "@/assets/fibc-facility.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FIBC | Premium Jumbo Bags Manufacturer" },
      { name: "description", content: "Premium FIBC jumbo bags and industrial bulk packaging engineered for safe global transport." },
      { property: "og:title", content: "FIBC | Premium Jumbo Bags Manufacturer" },
      { property: "og:description", content: "High-performance bulk packaging for demanding industries worldwide." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const products = [
  ["01", "U-Panel Bags", "Strong, economical bulk containers for powders, granules and general industrial materials."],
  ["02", "Circular Bags", "Seam-minimized tubular construction designed for fine materials and dependable handling."],
  ["03", "Baffle (Q) Bags", "Space-efficient square-profile bags that maximize warehouse and container capacity."],
  ["04", "Ventilated Bags", "Breathable woven construction for potatoes, onions, firewood and fresh produce."],
  ["05", "UN Certified Bags", "Tested bulk packaging developed for controlled transport of hazardous materials."],
  ["06", "Food-Grade FIBCs", "Clean, contamination-conscious packaging for food ingredients and agricultural products."],
];

const values = [
  { icon: ShieldCheck, title: "Quality Conscious", text: "Every production batch follows exacting quality checks and documented standards." },
  { icon: PackageCheck, title: "Absolute Reliability", text: "Mechanical testing supports dependable 5:1 and 6:1 safety-factor performance." },
  { icon: Factory, title: "Innovation Focused", text: "Purpose-built designs solve complex filling, storage and discharge challenges." },
  { icon: Truck, title: "On-time Delivery", text: "Disciplined manufacturing and logistics keep international orders moving." },
];

function BrandMark() {
  return (
    <a href="#home" className="flex items-center gap-3" aria-label="FIBC home">
      <span className="grid size-11 place-items-center bg-primary text-lg font-black text-primary-foreground">F</span>
      <span>
        <strong className="block text-xl font-black leading-none tracking-wide">FIBC</strong>
        <small className="mt-1 block text-[9px] font-bold uppercase tracking-[0.18em] text-primary">Flexible bulk packaging</small>
      </span>
    </a>
  );
}

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />

      <section id="home" className="relative min-h-[670px] scroll-mt-28 overflow-hidden lg:min-h-[calc(100vh-110px)]">
        <img src={heroImage} alt="White FIBC bulk bags ready for industrial transport" width={1920} height={1080} className="absolute inset-0 size-full object-cover object-[64%_center]" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto flex min-h-[670px] max-w-7xl items-center px-5 py-20 lg:min-h-[calc(100vh-110px)]">
          <div className="max-w-2xl text-ink-foreground">
            <span className="inline-block bg-primary px-3 py-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-primary-foreground">ISO 9001:2015 Certified</span>
            <h1 className="mt-6 max-w-xl text-5xl font-black leading-[1.06] sm:text-6xl lg:text-7xl">Premium FIBC Jumbo Bags Manufacturer</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-ink-muted">High-performance Flexible Intermediate Bulk Containers engineered for secure global dry bulk transport.</p>
            <Button asChild size="lg" className="mt-9 h-12 px-6"><a href="#products">Explore FIBC Bags <ArrowRight /></a></Button>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1.05fr_.95fr]">
          <div>
            <p className="section-kicker">Welcome to FIBC</p>
            <h2 className="section-title">Pioneering Industrial Bulk Packaging Globally</h2>
            <p className="mt-7 text-base leading-8 text-muted-foreground"><strong className="text-foreground">FIBC</strong> delivers durable, customizable bulk packaging for chemical, food, agricultural and mineral markets. Our bags combine lightweight handling with dependable load performance from 500 kg to 2,000 kg and beyond.</p>
            <p className="mt-4 text-base leading-8 text-muted-foreground">From space-saving baffle construction to conductive, antistatic and food-grade solutions, every product is developed around your filling process, cargo and destination.</p>
            <Button asChild variant="outline" size="lg" className="mt-8"><a href="#quality">Discover Our Standards <ArrowRight /></a></Button>
          </div>
          <div className="grid gap-px bg-border sm:grid-cols-2">
            {values.map(({ icon: Icon, title, text }) => (
              <article key={title} className="bg-background p-7">
                <Icon className="size-8 text-primary" strokeWidth={1.7} />
                <h3 className="mt-5 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="mx-auto mt-20 grid max-w-7xl divide-y divide-border border-y border-border px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[['ISO', '9001:2015 Certified'], ['25+', 'Export Countries'], ['2.5M+', 'Annual Bag Capacity']].map(([value, label]) => (
            <div key={label} className="py-8 text-center"><strong className="block text-4xl font-black text-primary">{value}</strong><span className="mt-2 block text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground">{label}</span></div>
          ))}
        </div>
      </section>

      <section id="products" className="scroll-mt-24 bg-soft py-24">
        <div className="mx-auto max-w-7xl px-5">
          <p className="section-kicker">Product Catalog</p>
          <div className="mt-2 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="section-title max-w-2xl">Featured FIBC Categories</h2>
            <p className="max-w-md text-sm leading-6 text-muted-foreground">Purpose-built industrial containers engineered for demanding materials, environments and supply chains.</p>
          </div>
          <div className="mt-12 grid gap-px bg-border border border-border md:grid-cols-2 lg:grid-cols-3">
            {products.map(([number, title, text]) => (
              <article key={title} className="group min-h-64 bg-background p-8 transition-colors hover:bg-primary-subtle">
                <span className="text-sm font-black text-primary">{number}</span>
                <h3 className="mt-10 text-2xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
                <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary">Request details <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="infrastructure" className="scroll-mt-24 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2">
          <div className="relative">
            <img loading="lazy" src={facilityImage} alt="Integrated FIBC weaving and manufacturing facility" width={1600} height={1100} className="aspect-[4/3] w-full object-cover" />
            <div className="absolute bottom-0 right-0 bg-primary px-7 py-6 text-primary-foreground"><strong className="block text-3xl font-black">2.5M+</strong><span className="text-xs font-bold uppercase tracking-wider">Bags annually</span></div>
          </div>
          <div>
            <p className="section-kicker">World-Class Facility</p>
            <h2 className="section-title">State-of-the-Art Integrated Infrastructure</h2>
            <p className="mt-6 leading-8 text-muted-foreground">Our advanced manufacturing setup combines polymer extrusion, circular weaving, precision cutting, sewing and final inspection under one controlled roof.</p>
            <ul className="mt-7 space-y-5">
              {["Food-grade clean manufacturing practices", "High-capacity integrated production lines", "Strategic access to global shipping networks"].map((item) => <li key={item} className="flex items-start gap-3 font-semibold"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section id="quality" className="scroll-mt-24 bg-ink py-24 text-ink-foreground">
        <div className="mx-auto max-w-7xl px-5 text-center">
          <p className="section-kicker">Our Foundations</p>
          <h2 className="mx-auto mt-3 max-w-2xl text-4xl font-black sm:text-5xl">Why Industries Trust FIBC</h2>
          <div className="mt-14 grid gap-10 text-left md:grid-cols-3">
            {[['Our Mission','To deliver zero-defect industrial packaging that protects materials through handling, shipping and storage.'],['Our Vision','To be the world’s most dependable partner for FIBC jumbo bags and high-performance woven packaging.'],['Our Values','Safety, quality, integrity and sustainable innovation guide every partnership and production decision.']].map(([title,text]) => <article key={title} className="border-t-2 border-primary pt-6"><h3 className="text-2xl font-bold">{title}</h3><p className="mt-4 leading-7 text-ink-muted">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section id="gallery" className="scroll-mt-24 bg-primary-subtle py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-5 md:flex-row md:items-center">
          <div><p className="section-kicker">Built for your business</p><h2 className="mt-2 text-3xl font-black sm:text-4xl">Ready to secure your cargo with FIBC?</h2><p className="mt-3 max-w-2xl text-muted-foreground">Request custom specifications, technical guidance and competitive bulk pricing.</p></div>
         <Button asChild>
  <Link to="/contact">
    Contact Us
  </Link>
</Button>
        </div>
      </section>

      <footer id="contact" className="scroll-mt-24 bg-footer py-16 text-ink-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[1.2fr_.8fr_.8fr]">
          <div><BrandMark /><p className="mt-5 max-w-sm text-sm leading-7 text-ink-muted">Engineered bulk packaging for safer storage, smarter transport and dependable global supply.</p></div>
          <div><h3 className="text-sm font-bold uppercase tracking-wider">Quick links</h3><div className="mt-5 grid gap-3 text-sm text-ink-muted"><a href="#about">About Us</a><a href="#products">Products</a><a href="#quality">Quality</a><a href="#infrastructure">Infrastructure</a></div></div>
          <div><h3 className="text-sm font-bold uppercase tracking-wider">Contact</h3><div className="mt-5 grid gap-4 text-sm text-ink-muted"><a className="flex gap-2" href="mailto:sales@fibc.com"><Mail className="size-4 text-primary" />sales@fibc.com</a><a className="flex gap-2" href="tel:+910000000000"><Phone className="size-4 text-primary" />+91 00000 00000</a><span className="flex gap-2"><Globe2 className="size-4 text-primary" />India · Global exports</span></div></div>
        </div>
        <div className="mx-auto mt-12 max-w-7xl border-t border-ink-border px-5 pt-6 text-xs text-ink-muted">© 2026 FIBC. All rights reserved.</div>
      </footer>
    </main>
  );
}