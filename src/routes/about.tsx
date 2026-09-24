import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | FIBC" },
      {
        name: "description",
        content: "Learn more about FIBC and our industrial bulk packaging solutions.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5">

          <Link to="/" className="flex items-center gap-3">
            <span className="grid size-11 place-items-center bg-primary text-lg font-black text-primary-foreground">
              F
            </span>

            <span>
              <strong className="block text-xl font-black leading-none tracking-wide">
                FIBC
              </strong>

              <small className="mt-1 block text-[9px] font-bold uppercase tracking-[0.18em] text-primary">
                Flexible bulk packaging
              </small>
            </span>
          </Link>

          <nav className="flex items-center gap-7 text-sm font-semibold">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>

            <Link to="/about" className="text-primary">
              About Us
            </Link>

            <Link to="/products" className="hover:text-primary">
              Products
            </Link>

            <Link to="/contact" className="hover:text-primary">
              Contact Us
            </Link>
          </nav>

        </div>
      </header>

      {/* Hero */}
      <section className="bg-ink py-24 text-ink-foreground">
        <div className="mx-auto max-w-7xl px-5">

          <p className="section-kicker">
            About FIBC
          </p>

          <h1 className="mt-3 max-w-3xl text-5xl font-black sm:text-6xl">
            Pioneering Industrial Bulk Packaging
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-muted">
            We deliver durable and dependable FIBC bulk packaging solutions
            for industries around the world.
          </p>

        </div>
      </section>

      {/* About content */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5">

          <div className="max-w-3xl">

            <p className="section-kicker">
              Who We Are
            </p>

            <h2 className="section-title">
              Reliable Packaging for Demanding Industries
            </h2>

            <p className="mt-7 leading-8 text-muted-foreground">
              FIBC specializes in flexible intermediate bulk containers
              designed for the safe storage, handling and transportation
              of dry bulk materials.
            </p>

            <p className="mt-5 leading-8 text-muted-foreground">
              Our solutions are designed for chemical, food, agricultural,
              mineral and other industrial applications. We focus on
              dependable construction, consistent quality and practical
              packaging solutions for our customers.
            </p>

            <div className="mt-8">
              <Button asChild size="lg">
                <Link to="/products">
                  Explore Our Products
                  <ArrowRight />
                </Link>
              </Button>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}