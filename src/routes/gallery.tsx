import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery | FIBC" },
      {
        name: "description",
        content:
          "Explore our FIBC manufacturing, products and facility gallery.",
      },
    ],
  }),
  component: GalleryPage,
});

const galleryItems = [
  {
    number: "01",
    title: "Manufacturing Facility",
    text: "Our production environment supporting efficient FIBC manufacturing.",
  },
  {
    number: "02",
    title: "FIBC Production",
    text: "Production processes focused on consistency and reliable construction.",
  },
  {
    number: "03",
    title: "Bulk Packaging",
    text: "Flexible bulk packaging solutions designed for different industries.",
  },
  {
    number: "04",
    title: "Quality Inspection",
    text: "Inspection and quality checks performed throughout the production process.",
  },
  {
    number: "05",
    title: "Finished Products",
    text: "Completed FIBC bags prepared for packing and dispatch.",
  },
  {
    number: "06",
    title: "Packaging & Dispatch",
    text: "Organized handling and preparation of finished products for delivery.",
  },
];

function GalleryPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">

      <Navbar />

      {/* Hero */}
      <section className="bg-ink py-24 text-ink-foreground">
        <div className="mx-auto max-w-7xl px-5">

          <p className="section-kicker">
            Gallery
          </p>

          <h1 className="mt-3 max-w-3xl text-5xl font-black sm:text-6xl">
            A Look Inside Our FIBC World
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-muted">
            Explore our manufacturing environment, production processes,
            packaging solutions and finished products.
          </p>

        </div>
      </section>

      {/* Gallery */}
      <section className="bg-soft py-24">

        <div className="mx-auto max-w-7xl px-5">

          <p className="section-kicker">
            Our Gallery
          </p>

          <h2 className="section-title mt-2">
            Manufacturing & Products
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {galleryItems.map((item) => (
              <article
                key={item.number}
                className="group overflow-hidden border border-border bg-background"
              >

                {/* Image Placeholder */}
                <div className="grid aspect-[4/3] place-items-center bg-primary-subtle">
                  <ImageIcon
                    className="size-12 text-primary transition-transform duration-300 group-hover:scale-110"
                    strokeWidth={1.5}
                  />
                </div>

                <div className="p-7">

                  <span className="text-sm font-black text-primary">
                    {item.number}
                  </span>

                  <h3 className="mt-4 text-xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {item.text}
                  </p>

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-primary-subtle py-20">

        <div className="mx-auto max-w-7xl px-5 text-center">

          <p className="section-kicker">
            Explore Our Solutions
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            Looking for the right FIBC bag?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Explore our product range or contact us to discuss your
            packaging requirements.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">

            <Button asChild size="lg">
              <Link to="/products">
                View Products
                <ArrowRight />
              </Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>

          </div>

        </div>

      </section>

    </main>
  );
}