import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products | FIBC" },
      {
        name: "description",
        content: "Explore our range of premium FIBC jumbo bags.",
      },
    ],
  }),
  component: ProductsPage,
});

const products = [
  {
    number: "01",
    title: "U-Panel Bags",
    text: "Strong, economical bulk containers for powders, granules and general industrial materials.",
  },
  {
    number: "02",
    title: "Circular Bags",
    text: "Seam-minimized tubular construction designed for fine materials and dependable handling.",
  },
  {
    number: "03",
    title: "Baffle (Q) Bags",
    text: "Space-efficient square-profile bags that maximize warehouse and container capacity.",
  },
  {
    number: "04",
    title: "Ventilated Bags",
    text: "Breathable woven construction for potatoes, onions, firewood and fresh produce.",
  },
  {
    number: "05",
    title: "UN Certified Bags",
    text: "Tested bulk packaging developed for controlled transport of hazardous materials.",
  },
  {
    number: "06",
    title: "Food-Grade FIBCs",
    text: "Clean, contamination-conscious packaging for food ingredients and agricultural products.",
  },
];

function ProductsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">

     <Navbar />

      {/* Page heading */}
      <section className="bg-ink py-24 text-ink-foreground">
        <div className="mx-auto max-w-7xl px-5">

          <p className="section-kicker">
            Product Catalog
          </p>

          <h1 className="mt-3 max-w-3xl text-5xl font-black sm:text-6xl">
            Premium FIBC Bags for Every Application
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-muted">
            Explore our range of industrial bulk packaging solutions
            engineered for safe handling, storage and transportation.
          </p>

        </div>
      </section>

      {/* Products */}
      <section className="bg-soft py-24">

        <div className="mx-auto max-w-7xl px-5">

          <div className="grid gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-3">

            {products.map((product) => (
              <article
                key={product.title}
                className="group min-h-72 bg-background p-8 transition-colors hover:bg-primary-subtle"
              >

                <span className="text-sm font-black text-primary">
                  {product.number}
                </span>

                <h2 className="mt-10 text-2xl font-bold">
                  {product.title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {product.text}
                </p>

                <Link
                  to="/contact"
                  className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary"
                >
                  Request details
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* Bottom CTA */}
      <section className="bg-primary-subtle py-20">

        <div className="mx-auto max-w-7xl px-5 text-center">

          <h2 className="text-3xl font-black sm:text-4xl">
            Need a custom FIBC solution?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Contact our team for custom specifications, technical guidance
            and bulk pricing.
          </p>

          <Button asChild size="lg" className="mt-8">
            <Link to="/contact">
              Get a Custom Quote
              <ArrowRight />
            </Link>
          </Button>

        </div>

      </section>

    </main>
  );
}