import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Globe2, Mail, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  const isActive = (path: string) => pathname === path;

  const linkClass = (path: string) =>
    isActive(path)
      ? "text-primary font-semibold hover:opacity-70 transition-opacity"
      : "text-foreground hover:text-primary transition-colors";

  return (
    <>
      {/* Top contact bar */}
      <div className="bg-ink text-ink-foreground">
        <div className="mx-auto flex min-h-9 max-w-7xl items-center justify-between gap-4 px-5 text-xs">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1 py-2">
            <a href="mailto:sales@fibc.com" className="flex items-center gap-1.5 hover:text-accent">
              <Mail className="size-3.5" /> sales@fibc.com
            </a>
            <a href="tel:+910000000000" className="flex items-center gap-1.5 hover:text-accent">
              <Phone className="size-3.5" /> +91 00000 00000
            </a>
          </div>
          <span className="hidden items-center gap-2 sm:flex">
            <Globe2 className="size-3.5" /> Serving global industries
          </span>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-5">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
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

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 text-sm md:flex" aria-label="Main navigation">

            <Link to="/" className={linkClass("/")}>
              Home
            </Link>

            <Link to="/about" className={linkClass("/about")}>
              About Us
            </Link>

            <Link
              to="/products"
              className={`flex items-center gap-1 ${linkClass("/products")}`}
            >
              Products <ChevronDown className="size-3.5" />
            </Link>

            <Link to="/quality" className={linkClass("/quality")}>
              Quality
            </Link>

            <Link to="/infrastructure" className={linkClass("/infrastructure")}>
              Infrastructure
            </Link>

            <Link to="/gallery" className={linkClass("/gallery")}>
              Gallery
            </Link>

            <Button asChild>
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>

          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="grid size-10 place-items-center md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </button>

        </div>

        {/* Mobile Navigation */}
        {open && (
          <div className="border-t border-border bg-background md:hidden">

            <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4" aria-label="Mobile navigation">

              <Link
                to="/"
                className={`border-b border-border py-4 ${linkClass("/")}`}
                onClick={() => setOpen(false)}
              >
                Home
              </Link>

              <Link
                to="/about"
                className={`border-b border-border py-4 ${linkClass("/about")}`}
                onClick={() => setOpen(false)}
              >
                About Us
              </Link>

              <Link
                to="/products"
                className={`flex items-center gap-1 border-b border-border py-4 ${linkClass("/products")}`}
                onClick={() => setOpen(false)}
              >
                Products <ChevronDown className="size-3.5" />
              </Link>

              <Link
                to="/quality"
                className={`border-b border-border py-4 ${linkClass("/quality")}`}
                onClick={() => setOpen(false)}
              >
                Quality
              </Link>

              <Link
                to="/infrastructure"
                className={`border-b border-border py-4 ${linkClass("/infrastructure")}`}
                onClick={() => setOpen(false)}
              >
                Infrastructure
              </Link>

              <Link
                to="/gallery"
                className={`border-b border-border py-4 ${linkClass("/gallery")}`}
                onClick={() => setOpen(false)}
              >
                Gallery
              </Link>

              <Link
                to="/contact"
                className="mt-4"
                onClick={() => setOpen(false)}
              >
                <Button className="w-full">
                  Contact Us
                </Button>
              </Link>

            </nav>

          </div>
        )}

      </header>
    </>
  );
}
