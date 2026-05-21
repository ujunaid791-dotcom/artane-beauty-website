import { Link } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useBooking } from "@/lib/BookingContext";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/offers", label: "Offers" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { openModal } = useBooking();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const textColor = "text-ink";
  const textColorHover = "hover:text-rose";

  const handleMenuEnter = () => setDropdownOpen(true);
  const handleMenuLeave = () => setDropdownOpen(false);

  return (
    <header className="sticky-header-premium">
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Left: Dropdown Menu */}
        <div className="flex-1 flex justify-start items-center">
          <div
            className="hidden md:block relative"
            ref={dropdownRef}
            onMouseEnter={handleMenuEnter}
            onMouseLeave={handleMenuLeave}
          >
            <button
              className={`flex items-center gap-1.5 text-[14px] font-medium tracking-wide transition-colors ${textColor} ${textColorHover}`}
            >
              Menu
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`}
              />
            </button>

            {dropdownOpen && (
              <div className="absolute left-0 top-full pt-3 w-48 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="rounded-xl border border-border bg-white shadow-card py-2 overflow-hidden">
                  {links.map((l) => (
                    <Link
                      key={l.to}
                      to={l.to}
                      onClick={() => setDropdownOpen(false)}
                      activeOptions={{ exact: l.to === "/" }}
                      className="block px-5 py-2.5 text-[14px] font-medium text-ink hover:text-rose hover:bg-beige/40 transition-colors"
                      activeProps={{
                        className: "block px-5 py-2.5 text-[14px] font-medium !text-rose bg-beige/60",
                      }}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            aria-label="Toggle menu"
            className={`md:hidden p-2 ${textColor} ${textColorHover}`}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <Link
          to="/"
          className="flex items-center justify-center"
        >
          <img
            src="/logo.png"
            alt="Artane Nails & Beauty Lounge Logo"
            className="h-16 md:h-28 w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-transform hover:scale-105"
          />
        </Link>

        {/* Right: Book Now */}
        <div className="flex-1 flex justify-end items-center">
          <button
            onClick={() => openModal()}
            className="hidden md:inline-flex rounded-full bg-ink text-white hover:bg-rose hover:text-ink px-6 py-2.5 text-[13px] font-medium tracking-wide transition-all btn-premium btn-premium-primary"
          >
            Book Now
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {open && (
        <div className="md:hidden bg-[#fbf9f6] border-t border-border px-6 py-6 flex flex-col gap-5 animate-in fade-in slide-in-from-top duration-300">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: l.to === "/" }}
              className="text-base font-medium text-ink hover:text-rose transition-colors"
              activeProps={{ className: "!text-rose" }}
            >
              {l.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setOpen(false);
              openModal();
            }}
            className="rounded-full bg-ink text-white px-7 py-3 text-center text-[14px] font-medium transition-all btn-premium btn-premium-primary"
          >
            Book Now
          </button>
        </div>
      )}
    </header>
  );
}
