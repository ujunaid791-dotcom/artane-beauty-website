import { createFileRoute } from "@tanstack/react-router";
import { CTAButton } from "@/components/CTAButton";
import { SectionReveal } from "@/components/SectionReveal";
import { MapPin, Phone, CheckCircle2 } from "lucide-react";
import { useBooking } from "@/lib/BookingContext";

export const Route = createFileRoute("/offers")({
  head: () => ({
    meta: [
      { title: "Grand Opening — 25% Off | Artane Nails & Beauty Lounge" },
      {
        name: "description",
        content:
          "Celebrate our Grand Opening: 25% off all services on Friday 15, Saturday 16 and Sunday 17 May 2026 at Artane Nails & Beauty Lounge, Dublin 5.",
      },
      { property: "og:title", content: "Grand Opening — 25% Off All Services" },
      {
        property: "og:description",
        content: "3 days only — Fri, Sat & Sun 15–17 May 2026 in Artane, Dublin 5.",
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
          <h1 className="font-display text-5xl md:text-7xl mt-6 text-white">Grand Opening Offer</h1>
          <p className="mt-5 text-white/75 text-lg">
            We&apos;re celebrating our launch — and we want you to be there.
          </p>
        </div>
      </section>

      {/* OFFER CARD */}
      <section className="bg-beige py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6">
          <SectionReveal>
            <div className="bg-card rounded-[36px] shadow-card-hover px-8 md:px-14 py-14 text-center">
              <span className="inline-block bg-rose text-ink text-xs uppercase tracking-luxe rounded-full px-5 py-2 font-medium">
                Limited Time
              </span>
              <h2 className="font-display text-5xl md:text-6xl mt-8 text-ink">
                25% Off All Services
              </h2>
              <p className="mt-5 text-muted-foreground text-lg max-w-md mx-auto">
                Celebrating our Grand Opening on Friday 15<sup>th</sup> May 2026.
              </p>

              <div className="mt-10 inline-flex flex-wrap justify-center gap-3 text-sm">
                {["Fri 15 May", "Sat 16 May", "Sun 17 May"].map((d) => (
                  <span
                    key={d}
                    className="rounded-full border border-ink/15 px-5 py-2 text-ink font-medium bg-ivory"
                  >
                    {d}
                  </span>
                ))}
              </div>

              <p className="mt-6 text-xs text-muted-foreground uppercase tracking-luxe">
                3 days only
              </p>

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
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionReveal>
            <p className="text-gold uppercase tracking-luxe text-xs">Where to Find Us</p>
            <h2 className="font-display text-3xl md:text-4xl mt-4">
              58 Saint Brigid&apos;s Road, Artane
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
