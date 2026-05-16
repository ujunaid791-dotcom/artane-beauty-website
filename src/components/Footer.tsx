import { Link } from "@tanstack/react-router";
import { Instagram, Facebook } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/offers", label: "Offers" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid gap-10 md:grid-cols-3">
        <div>
          <div className="font-display text-2xl text-white" style={{ letterSpacing: "0.04em" }}>
            Artane <span className="text-gold">·</span> Beauty Lounge
          </div>
          <p className="mt-4 text-sm text-white/60 max-w-xs">
            Enhance Your Beauty, Feel Your Best. A premium nail &amp; beauty destination in Artane,
            Dublin 5.
          </p>
        </div>

        <div className="flex flex-col gap-3 md:items-center">
          <div className="text-xs uppercase tracking-luxe text-gold">Explore</div>
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm text-white/80 hover:text-gold transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="md:text-right">
          <div className="text-xs uppercase tracking-luxe text-gold">Visit</div>
          <p className="mt-3 text-sm text-white/80 leading-relaxed">
            58 Saint Brigid&apos;s Road
            <br />
            Artane, Dublin 5, D05 H9W2
          </p>
          <a
            href="tel:+353899508863"
            className="mt-3 inline-block text-sm text-white hover:text-gold transition-colors"
          >
            (089) 950 8863
          </a>
          <div className="mt-5 flex gap-4 md:justify-end text-white/70">
            <a href="#" aria-label="Instagram" className="hover:text-gold transition-colors">
              <Instagram size={20} />
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="hover:text-gold transition-colors text-sm font-medium pt-[2px]"
            >
              TikTok
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-gold transition-colors">
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © 2026 Artane Nails &amp; Beauty Lounge · All Rights Reserved
      </div>
    </footer>
  );
}
