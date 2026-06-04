import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Search, Phone } from "lucide-react";
import { NAV, SITE } from "@/data/site";
import { PRODUCTS } from "@/data/products";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setSearchOpen(false);
  }, [path]);

  const results = search.trim()
    ? PRODUCTS.filter((p) => p.name.toLowerCase().includes(search.toLowerCase())).slice(0, 6)
    : [];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="hidden md:block bg-navy-deep text-primary-foreground text-xs">
        <div className="container-x flex justify-between py-2">
          <span className="opacity-80">ISO 9001:2015 Certified • Mumbai, India</span>
          <div className="flex gap-5 opacity-90">
            <a href={`tel:${SITE.primaryPhone}`} className="hover:text-accent">{SITE.contacts[0].phone}</a>
            <a href={`mailto:${SITE.email}`} className="hover:text-accent">{SITE.email}</a>
          </div>
        </div>
      </div>

      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-md bg-gradient-to-br from-navy to-navy-deep grid place-items-center text-primary-foreground font-black text-lg shadow-lg">RS</div>
          <div className="leading-tight">
            <div className={`font-bold text-base md:text-lg ${scrolled ? "text-foreground" : "text-foreground"}`}>River Steels</div>
            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Steel & Alloys</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-navy relative group"
              activeProps={{ className: "px-4 py-2 text-sm font-semibold text-navy" }}
            >
              {n.label}
              <span className="absolute left-4 right-4 -bottom-0.5 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button onClick={() => setSearchOpen((s) => !s)} className="p-2 rounded-md hover:bg-secondary" aria-label="Search">
            <Search className="w-5 h-5" />
          </button>
          <a href={`tel:${SITE.primaryPhone}`} className="hidden md:inline-flex items-center gap-2 bg-navy text-primary-foreground px-4 py-2 rounded-md text-sm font-semibold hover:bg-navy-deep transition">
            <Phone className="w-4 h-4" /> Call Now
          </a>
          <button className="lg:hidden p-2" onClick={() => setOpen((s) => !s)} aria-label="Menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-border bg-background">
          <div className="container-x py-4">
            <input
              autoFocus
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products, grades, fittings..."
              className="w-full px-4 py-3 rounded-md border border-input bg-secondary/50 focus:outline-none focus:ring-2 focus:ring-ring"
            />
            {results.length > 0 && (
              <ul className="mt-3 divide-y divide-border bg-card rounded-md border border-border overflow-hidden">
                {results.map((r) => (
                  <li key={r.slug}>
                    <Link to="/products/$slug" params={{ slug: r.slug }} className="flex justify-between p-3 hover:bg-secondary">
                      <span className="font-medium">{r.name}</span>
                      <span className="text-xs text-muted-foreground">{r.category}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-x py-4 flex flex-col">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} className="py-3 border-b border-border text-foreground font-medium">
                {n.label}
              </Link>
            ))}
            <a href={`tel:${SITE.primaryPhone}`} className="mt-4 bg-navy text-primary-foreground px-4 py-3 rounded-md text-center font-semibold">
              Call Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
