import { createFileRoute } from "@tanstack/react-router";
import { CTAButton } from "@/components/CTAButton";
import { SectionReveal } from "@/components/SectionReveal";
import { Clock, MapPin, Phone } from "lucide-react";
import { useBooking } from "@/lib/BookingContext";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Visit Us — Artane Nails & Beauty Lounge, Dublin 5" },
      {
        name: "description",
        content:
          "Visit Artane Nails & Beauty Lounge at 58 Saint Brigid's Road, Artane, Dublin 5. Call (089) 950 8863 to book your appointment.",
      },
      { property: "og:title", content: "Visit Artane Nails & Beauty Lounge" },
      {
        property: "og:description",
        content: "58 Saint Brigid's Road, Artane, Dublin 5. (089) 950 8863",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { openModal } = useBooking();

  return (
    <>
      {/* HERO */}
      <section className="relative bg-ink text-white pt-40 pb-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-gold uppercase tracking-luxe text-xs">Contact</p>
          <h1 className="font-display text-5xl md:text-7xl mt-6 text-white">Visit Us</h1>
          <p className="mt-5 text-white/75 text-lg">We&apos;d love to welcome you to the lounge.</p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <SectionReveal>
            <p className="text-gold uppercase tracking-luxe text-xs">Get in Touch</p>
            <h2 className="font-display text-4xl md:text-5xl mt-4">Say Hello</h2>

            <ul className="mt-10 space-y-6 text-ink">
              <li className="flex gap-4">
                <MapPin className="text-rose mt-1" size={22} />
                <div>
                  <p className="font-medium">58 Saint Brigid&apos;s Road</p>
                  <p className="text-muted-foreground">Artane, Dublin 5, D05 H9W2</p>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="text-rose mt-1" size={22} />
                <a
                  href="tel:+353899508863"
                  className="text-ink font-medium hover:text-rose transition-colors text-lg"
                >
                  (089) 950 8863
                </a>
              </li>
              <li className="flex gap-4">
                <Clock className="text-rose mt-1" size={22} />
                <div>
                  <p className="font-medium">Opening Friday 15 May 2026</p>
                  <p className="text-muted-foreground">
                    Grand Opening weekend: Fri – Sun, 25% off all services.
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-10 rounded-[28px] bg-beige p-6">
              <p className="text-gold uppercase tracking-luxe text-xs">How to Find Us</p>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>📍 Near Artane Roundabout</li>
                <li>🏦 Beside AIB Bank</li>
                <li>🪒 Upstairs from Abbas Turkish Barber</li>
              </ul>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <CTAButton onClick={openModal} variant="primary">
                Call to Book
              </CTAButton>
              <CTAButton
                href="https://maps.google.com/?q=58+Saint+Brigid%27s+Road,+Artane,+Dublin+5"
                variant="rose"
              >
                Get Directions
              </CTAButton>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              For bookings, call or message us directly on (089) 950 8863.
            </p>
          </SectionReveal>

          <SectionReveal delay={120}>
            <div className="rounded-2xl overflow-hidden shadow-card aspect-[4/5]">
              <iframe
                title="Artane Nails & Beauty Lounge map"
                src="https://www.google.com/maps?q=58+Saint+Brigid%27s+Road,+Artane,+Dublin+5&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
