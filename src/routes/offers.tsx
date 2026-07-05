import { createFileRoute } from "@tanstack/react-router";
import { CTAButton } from "@/components/CTAButton";
import { SectionReveal } from "@/components/SectionReveal";
import { MapPin, Phone, CheckCircle2 } from "lucide-react";
import { useBooking } from "@/lib/BookingContext";

export const Route = createFileRoute("/offers")({
  head: () => ({
    meta: [
      { title: "VIP Summer Beauty Package €85 — Special Offer | Artane Nails & Beauty Lounge" },
      {
        name: "description",
        content:
          "VIP Summer Beauty Package — Deluxe Pedicure + BIAB with French Tips for only €85 (save €25). At Artane Nails & Beauty Lounge, Dublin 5.",
      },
      { property: "og:title", content: "VIP Summer Beauty Package — €85 Special Offer" },
      {
        property: "og:description",
        content: "Deluxe Pedicure + BIAB with French Tips — only €85. Save €25 at Artane Nails & Beauty Lounge.",
      },
    ],
  }),
  component: OffersPage,
});

function OffersPage() {
  const { openModal } = useBooking();

  return (
    <>
      {/* HERO */}
      <section className="relative bg-ink text-white pt-40 pb-20 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--gold),_transparent_60%)]" />
        <div className="relative max-w-3xl mx-auto px-6">
          <p className="text-gold uppercase tracking-luxe text-xs">Special Offer</p>
          <h1 className="font-display text-5xl md:text-7xl mt-6 text-white">Special Offer</h1>
          <p className="mt-5 text-white/75 text-lg">
            A stunning deal to celebrate our new chapter — don&apos;t miss out.
          </p>
        </div>
      </section>

      {/* OFFER CARD */}
      <section className="bg-beige py-16 md:py-28">
        <div className="max-w-3xl mx-auto px-5 md:px-6">
          <SectionReveal>
            <div className="bg-card rounded-[36px] shadow-card-hover px-6 md:px-14 py-10 md:py-14 text-center">
              <span className="inline-block bg-rose text-ink text-xs uppercase tracking-luxe rounded-full px-5 py-2 font-medium">
                Limited Time
              </span>
              <h2 className="font-display text-5xl md:text-6xl mt-8 text-ink">
                VIP Summer Beauty Package
              </h2>
              <div className="mt-6 flex items-center justify-center gap-4">
                <span className="text-3xl text-muted-foreground line-through opacity-60">€110</span>
                <span className="font-display text-6xl md:text-7xl text-rose">€85</span>
              </div>
              <p className="mt-5 text-muted-foreground text-lg max-w-md mx-auto">
                Treat yourself! Enjoy a Deluxe Pedicure and BIAB with French Tips at an unbeatable price. Save €25!
              </p>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-muted-foreground">
                <div className="flex flex-col items-center p-3 bg-beige/50 rounded-xl">
                  <span className="text-xl mb-1">☕</span>
                  <span>Complimentary Tea/Coffee</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-beige/50 rounded-xl">
                  <span className="text-xl mb-1">✨</span>
                  <span>Relaxing Luxury Environment</span>
                </div>
                <div className="flex flex-col items-center p-3 bg-beige/50 rounded-xl">
                  <span className="text-xl mb-1">💖</span>
                  <span>Premium Quality Service</span>
                </div>
              </div>

              <div className="mt-8">
                <span className="rounded-full border border-rose/30 bg-rose/10 px-6 py-2.5 text-ink text-sm font-medium">
                  Bring a friend & both get 10% off your next visit!
                </span>
              </div>

              <div className="mt-10">
                <CTAButton onClick={openModal} variant="primary">
                  Book Now — (089) 950 8863
                </CTAButton>
              </div>
            </div>
          </SectionReveal>

          {/* POLICY */}
          <SectionReveal delay={120}>
            <div className="mt-10 rounded-[28px] bg-card shadow-card px-8 py-7">
              <p className="text-gold uppercase tracking-luxe text-xs">Salon Policy</p>
              <p className="mt-3 text-ink text-base md:text-lg flex items-center justify-center gap-2">
                <CheckCircle2 size={20} className="text-rose shrink-0" />
                <span><span className="text-rose font-medium">Shellac Removal:</span> No charge when booked together with a new Shellac treatment.</span>
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* LOCATION REMINDER */}
      <section className="py-16 md:py-28">
        <div className="max-w-3xl mx-auto px-5 md:px-6 text-center">
          <SectionReveal>
            <p className="text-gold uppercase tracking-luxe text-xs">Where to Find Us</p>
            <h2 className="font-display text-3xl md:text-4xl mt-4">
              58 Saint Brigid&apos;s Road (Upstairs Turkish Barber), Artane
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <MapPin size={18} className="text-rose" /> Dublin 5, D05 H9W2
              </span>
              <a
                href="tel:+353899508863"
                className="inline-flex items-center gap-2 hover:text-ink transition-colors"
              >
                <Phone size={18} className="text-rose" /> (089) 950 8863
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
