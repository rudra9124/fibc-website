import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | FIBC" },
      {
        name: "description",
        content:
          "Contact our team for FIBC bulk packaging solutions, specifications and custom requirements.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">

      <Navbar />

      {/* Hero */}
      <section className="bg-ink py-24 text-ink-foreground">
        <div className="mx-auto max-w-7xl px-5">

          <p className="section-kicker">
            Contact Us
          </p>

          <h1 className="mt-3 max-w-3xl text-5xl font-black sm:text-6xl">
            Let's Discuss Your FIBC Requirements
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-muted">
            Tell us about your packaging requirements and our team can help
            you find a suitable FIBC solution.
          </p>

        </div>
      </section>

      {/* Contact section */}
      <section className="py-24">

        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2">

          {/* Contact information */}
          <div>

            <p className="section-kicker">
              Get In Touch
            </p>

            <h2 className="section-title">
              We're Here to Help
            </h2>

            <p className="mt-7 max-w-xl leading-8 text-muted-foreground">
              Whether you need standard FIBC bags, custom specifications or
              technical information, contact our team to discuss your
              requirements.
            </p>

            <div className="mt-10 space-y-7">

              <div className="flex gap-4">
                <div className="grid size-11 shrink-0 place-items-center bg-primary-subtle">
                  <Phone className="size-5 text-primary" />
                </div>

                <div>
                  <p className="font-bold">
                    Phone
                  </p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="grid size-11 shrink-0 place-items-center bg-primary-subtle">
                  <Mail className="size-5 text-primary" />
                </div>

                <div>
                  <p className="font-bold">
                    Email
                  </p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    info@example.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="grid size-11 shrink-0 place-items-center bg-primary-subtle">
                  <MapPin className="size-5 text-primary" />
                </div>

                <div>
                  <p className="font-bold">
                    Location
                  </p>

                  <p className="mt-1 max-w-sm text-sm leading-6 text-muted-foreground">
                    Gujarat, India
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Contact form */}
          <div className="border border-border bg-soft p-7 sm:p-9">

            <h2 className="text-2xl font-black">
              Send an Enquiry
            </h2>

            <p className="mt-2 text-sm text-muted-foreground">
              Fill in your details and tell us what you need.
            </p>

            <form className="mt-8 space-y-5">

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="h-12 w-full border border-border bg-background px-4 text-sm outline-none transition focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Your email"
                  className="h-12 w-full border border-border bg-background px-4 text-sm outline-none transition focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Phone
                </label>

                <input
                  type="tel"
                  placeholder="Your phone number"
                  className="h-12 w-full border border-border bg-background px-4 text-sm outline-none transition focus:border-primary"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Message
                </label>

                <textarea
                  placeholder="Tell us about your requirements..."
                  rows={5}
                  className="w-full resize-none border border-border bg-background p-4 text-sm outline-none transition focus:border-primary"
                />
              </div>

              <Button type="submit" size="lg" className="w-full">
                Send Enquiry
                <Send />
              </Button>

            </form>

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
            Share your specifications with us and let's discuss the right
            packaging solution for your application.
          </p>

        </div>

      </section>

    </main>
  );
}