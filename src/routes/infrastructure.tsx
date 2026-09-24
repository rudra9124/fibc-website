import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Factory,
  Settings,
  Boxes,
  Truck,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/infrastructure")({
  head: () => ({
    meta: [
      { title: "Infrastructure | FIBC" },
      {
        name: "description",
        content:
          "Explore the manufacturing infrastructure and production capabilities behind our FIBC bulk packaging solutions.",
      },
    ],
  }),
  component: InfrastructurePage,
});

const infrastructurePoints = [
  {
    icon: Factory,
    title: "Modern Manufacturing",
    text: "Dedicated production facilities support the manufacturing of reliable FIBC bags for a wide range of industrial applications.",
  },
  {
    icon: Settings,
    title: "Controlled Processes",
    text: "Structured production processes help maintain consistency across fabric, cutting, stitching and finishing operations.",
  },
  {
    icon: Boxes,
    title: "Material Handling",
    text: "Organized material handling and storage systems support efficient movement of raw materials and finished products.",
  },
  {
    icon: Truck,
    title: "Dispatch & Logistics",
    text: "Efficient packing and dispatch processes help prepare finished FIBC bags for safe transportation and delivery.",
  },
];

function InfrastructurePage() {
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

            <Link to="/about" className="hover:text-primary">
              About Us
            </Link>

            <Link to="/products" className="hover:text-primary">
              Products
            </Link>

            <Link to="/quality" className="hover:text-primary">
              Quality
            </Link>

            <Link to="/infrastructure" className="text-primary">
              Infrastructure
            </Link>

            <Link to="/gallery" className="hover:text-primary">
              Gallery
            </Link>

            <Button asChild>
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>

          </nav>

        </div>
      </header>

      {/* Hero */}
      <section className="bg-ink py-24 text-ink-foreground">
        <div className="mx-auto max-w-7xl px-5">

          <p className="section-kicker">
            Infrastructure
          </p>

          <h1 className="mt-3 max-w-3xl text-5xl font-black sm:text-6xl">
            Built for Consistent FIBC Production
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-muted">
            Our manufacturing infrastructure supports efficient production,
            quality control and reliable delivery of flexible bulk packaging
            solutions.
          </p>

        </div>
      </section>

      {/* Introduction */}
      <section className="py-24">

        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2">

          <div>

            <p className="section-kicker">
              Our Facility
            </p>

            <h2 className="section-title">
              Production Designed Around Reliability
            </h2>

            <p className="mt-7 leading-8 text-muted-foreground">
              Our production setup is organized around the key stages involved
              in manufacturing FIBC bags, from material preparation through
              final inspection and dispatch.
            </p>

            <p className="mt-5 leading-8 text-muted-foreground">
              By maintaining controlled processes and organized workflows,
              we aim to deliver consistent packaging solutions for different
              materials, applications and handling requirements.
            </p>

          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            {[
              "Fabric Production",
              "Cutting & Stitching",
              "Inspection & Testing",
              "Packing & Dispatch",
            ].map((item, index) => (
              <div
                key={item}
                className="border border-border bg-soft p-6"
              >
                <span className="text-sm font-black text-primary">
                  0{index + 1}
                </span>

                <h3 className="mt-8 text-lg font-bold">
                  {item}
                </h3>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Infrastructure cards */}
      <section className="bg-soft py-24">

        <div className="mx-auto max-w-7xl px-5">

          <p className="section-kicker">
            Capabilities
          </p>

          <h2 className="section-title mt-2">
            Infrastructure Supporting Every Stage
          </h2>

          <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2">

            {infrastructurePoints.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="bg-background p-8"
                >
                  <Icon
                    className="size-9 text-primary"
                    strokeWidth={1.7}
                  />

                  <h3 className="mt-6 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {item.text}
                  </p>
                </article>
              );
            })}

          </div>

        </div>

      </section>

      {/* Workflow */}
      <section className="py-24">

        <div className="mx-auto max-w-7xl px-5">

          <div className="max-w-3xl">

            <p className="section-kicker">
              Production Workflow
            </p>

            <h2 className="section-title">
              From Material to Finished Bag
            </h2>

            <p className="mt-6 leading-8 text-muted-foreground">
              Our production workflow follows a structured sequence designed
              to maintain consistency and efficiency throughout manufacturing.
            </p>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">

            {[
              "Raw Material",
              "Fabric & Cutting",
              "Stitching & Inspection",
              "Packing & Dispatch",
            ].map((step, index) => (
              <div
                key={step}
                className="relative border border-border p-6"
              >
                <Workflow className="size-7 text-primary" />

                <span className="mt-6 block text-sm font-black text-primary">
                  STEP 0{index + 1}
                </span>

                <h3 className="mt-2 text-lg font-bold">
                  {step}
                </h3>
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-primary-subtle py-20">

        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-5 md:flex-row md:items-center">

          <div>

            <p className="section-kicker">
              Work With Us
            </p>

            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Looking for reliable bulk packaging?
            </h2>

            <p className="mt-3 max-w-2xl text-muted-foreground">
              Contact our team to discuss your FIBC requirements and
              application-specific packaging solutions.
            </p>

          </div>

          <Button asChild size="lg" className="h-12 shrink-0 px-7">
            <Link to="/contact">
              Contact Us
              <ArrowRight />
            </Link>
          </Button>

        </div>

      </section>

    </main>
  );
}