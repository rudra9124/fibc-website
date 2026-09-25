import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  PackageCheck,
  Factory,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { title: "Quality | FIBC" },
      {
        name: "description",
        content:
          "Quality standards and reliable manufacturing practices behind FIBC industrial bulk packaging.",
      },
    ],
  }),
  component: QualityPage,
});

const qualityPoints = [
  {
    icon: ShieldCheck,
    title: "Quality Conscious",
    text: "Every production batch follows defined quality checks and documented manufacturing standards.",
  },
  {
    icon: PackageCheck,
    title: "Reliable Performance",
    text: "Our bags are designed and tested to provide dependable performance during handling, storage and transportation.",
  },
  {
    icon: Factory,
    title: "Controlled Manufacturing",
    text: "Integrated production processes help maintain consistency across materials, construction and finishing.",
  },
];

function QualityPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">

      <Navbar />

      {/* Hero */}
      <section className="bg-ink py-24 text-ink-foreground">
        <div className="mx-auto max-w-7xl px-5">

          <p className="section-kicker">
            Quality & Standards
          </p>

          <h1 className="mt-3 max-w-3xl text-5xl font-black sm:text-6xl">
            Quality Built Into Every FIBC
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-muted">
            Consistent materials, controlled manufacturing and documented
            quality checks help us deliver dependable bulk packaging solutions.
          </p>

        </div>
      </section>

      {/* Quality introduction */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5">

          <div className="max-w-3xl">

            <p className="section-kicker">
              Our Commitment
            </p>

            <h2 className="section-title">
              Consistency You Can Depend On
            </h2>

            <p className="mt-7 leading-8 text-muted-foreground">
              Quality is an important part of every stage of our manufacturing
              process. From raw materials to finished FIBC bags, our production
              approach is focused on consistency, safety and dependable
              performance.
            </p>

            <p className="mt-5 leading-8 text-muted-foreground">
              We develop packaging solutions around the requirements of the
              material being transported, the filling and discharge process,
              handling conditions and destination.
            </p>

          </div>

        </div>
      </section>

      {/* Quality cards */}
      <section className="bg-soft py-24">

        <div className="mx-auto max-w-7xl px-5">

          <p className="section-kicker">
            Our Standards
          </p>

          <h2 className="section-title mt-2">
            Built Around Reliable Performance
          </h2>

          <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">

            {qualityPoints.map((item) => {
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

      {/* Quality checklist */}
      <section className="py-24">

        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2">

          <div>

            <p className="section-kicker">
              Quality Focus
            </p>

            <h2 className="section-title">
              Attention to Every Production Stage
            </h2>

            <p className="mt-6 leading-8 text-muted-foreground">
              Our quality approach covers the complete manufacturing journey,
              helping maintain consistency from material preparation through
              final inspection.
            </p>

          </div>

          <div>

            <ul className="space-y-5">

              {[
                "Raw material quality checks",
                "Controlled weaving and fabric production",
                "Accurate cutting and stitching",
                "Finished bag inspection",
                "Load and safety performance checks",
                "Packaging and dispatch inspection",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 border-b border-border pb-5 font-semibold"
                >
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                  {item}
                </li>
              ))}

            </ul>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-primary-subtle py-20">

        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-5 md:flex-row md:items-center">

          <div>

            <p className="section-kicker">
              Need More Information?
            </p>

            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Let's discuss your packaging requirements.
            </h2>

            <p className="mt-3 max-w-2xl text-muted-foreground">
              Contact our team for specifications, technical information and
              custom FIBC solutions.
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