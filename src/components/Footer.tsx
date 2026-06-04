import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import { NAV, SITE } from "@/data/site";
import { PRODUCTS } from "@/data/products";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-primary-foreground">
      <div className="container-x py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-md bg-gradient-to-br from-accent to-gold grid place-items-center text-navy-deep font-black">RS</div>
            <div className="font-bold text-lg">River Steels</div>
          </div>
          <p className="text-sm opacity-80 leading-relaxed">{SITE.tagline}.</p>
          <p className="text-xs opacity-60 mt-4">ISO 9001:2015 Certified • Established Trust</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm tracking-wider uppercase opacity-90">Navigate</h4>
          <ul className="space-y-2 text-sm opacity-80">
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-accent transition">{n.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm tracking-wider uppercase opacity-90">Top Products</h4>
          <ul className="space-y-2 text-sm opacity-80">
            {PRODUCTS.slice(0, 7).map((p) => (
              <li key={p.slug}><Link to="/products/$slug" params={{ slug: p.slug }} className="hover:text-accent transition">{p.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4 text-sm tracking-wider uppercase opacity-90">Reach Us</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex gap-3"><MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent" /><span>{SITE.address.line1}, {SITE.address.line2}, {SITE.address.line3}, {SITE.address.line4}</span></li>
            {SITE.contacts.map((c) => (
              <li key={c.phone} className="flex gap-3"><Phone className="w-4 h-4 mt-0.5 shrink-0 text-accent" /><a href={`tel:${c.phone.replace(/\s/g, "")}`} className="hover:text-accent">{c.name} — {c.phone}</a></li>
            ))}
            <li className="flex gap-3"><Mail className="w-4 h-4 mt-0.5 shrink-0 text-accent" /><a href={`mailto:${SITE.email}`} className="hover:text-accent break-all">{SITE.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col md:flex-row justify-between text-xs opacity-70 gap-2">
          <p>© {new Date().getFullYear()} River Steels. All rights reserved.</p>
          <a href="https://cre8digi.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            © {new Date().getFullYear()} Developed By Cre8digi The Digital Agency
          </a>
          <p>Manufacturers, Stockists & Suppliers of Industrial Raw Materials.</p>
        </div>
      </div>
    </footer>
  );
}
