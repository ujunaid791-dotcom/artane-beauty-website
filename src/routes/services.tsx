import { createFileRoute } from "@tanstack/react-router";
import { CTAButton } from "@/components/CTAButton";
import { GrandOpeningBanner } from "@/components/GrandOpeningBanner";
import { PriceRow } from "@/components/PriceRow";
import { SectionReveal } from "@/components/SectionReveal";
import { CheckCircle2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services & Pricing — Artane Nails & Beauty Lounge" },
      {
        name: "description",
        content:
          "Full menu and pricing for nails, BIAB, pedicures, lash extensions, brows, threading, waxing and facials at Artane Nails & Beauty Lounge, Dublin 5.",
      },
      { property: "og:title", content: "Services & Pricing — Artane Nails & Beauty Lounge" },
      {
        property: "og:description",
        content: "Manicure, pedicure, lashes, brows, facials & waxing in Artane, Dublin 5.",
      },
    ],
  }),
  component: ServicesPage,
});

import { categories, type Category } from "@/lib/services-data";
import { useBooking } from "@/lib/BookingContext";

function ServicesPage() {
  const { openModal } = useBooking();
  return (
    <>
      {/* HERO */}
      <section className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=1800&q=80"
          alt="Manicure detailing at Artane Nails & Beauty Lounge"
          className="absolute inset-0 w-full h-full object-cover animate-ken-burns"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
          <p className="text-gold uppercase tracking-luxe text-xs">The Menu</p>
          <h1 className="font-display text-5xl md:text-7xl mt-5">Our Services &amp; Pricing</h1>
          <p className="mt-5 max-w-xl text-white/85 text-lg">
            Professional beauty treatments in the heart of Artane, Dublin 5.
          </p>
        </div>
      </section>

      <GrandOpeningBanner />

      {/* SERVICES ACCORDION */}
      <section className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <Accordion type="multiple" defaultValue={["manicure"]} className="space-y-5">
            {categories.map((cat) => (
              <SectionReveal key={cat.id}>
                <AccordionItem
                  value={cat.id}
                  className="bg-card rounded-[28px] shadow-card border-0 overflow-hidden"
                >
                  <AccordionTrigger className="px-8 py-7 hover:no-underline group">
                    <div className="text-left">
                      <h3 className="font-display text-2xl md:text-3xl text-ink">{cat.title}</h3>
                      {cat.subtitle && (
                        <p className="text-muted-foreground mt-1 text-sm">{cat.subtitle}</p>
                      )}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-8">
                    <div className="space-y-8">
                      {cat.groups.map((g, gi) => (
                        <div key={gi}>
                          {g.title && (
                            <p className="text-gold uppercase tracking-luxe text-xs mb-3">
                              {g.title}
                            </p>
                          )}
                          <div>
                            {g.rows.map((r) => (
                              <PriceRow
                                key={r.name + r.price}
                                name={r.name}
                                price={r.price}
                                note={r.note}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </SectionReveal>
            ))}
          </Accordion>

          {/* POLICY */}
          <SectionReveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              <div className="rounded-[28px] bg-rose/10 border border-rose/40 px-8 py-7 text-center shadow-sm">
                <p className="text-ink text-base md:text-lg flex items-center justify-center gap-2">
                  <span className="text-rose text-lg">🎓</span>
                  <span><span className="text-rose font-semibold">Special Offer:</span> Students get a <span className="font-semibold text-rose">10% discount</span> on all services!</span>
                </p>
              </div>
              <div className="rounded-[28px] bg-beige border border-rose/30 px-8 py-7 text-center">
                <p className="text-ink text-base md:text-lg flex items-center justify-center gap-2">
                  <CheckCircle2 size={20} className="text-rose shrink-0" />
                  <span><span className="text-rose font-medium">Policy:</span> No charge for Shellac removal when booking a new Shellac service.</span>
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink text-white py-20 md:py-28 text-center">
        <SectionReveal>
          <p className="text-gold uppercase tracking-luxe text-xs">Ready to book?</p>
          <h2 className="font-display text-4xl md:text-5xl mt-5 text-white">
            Call us on (089) 950 8863
          </h2>
          <div className="mt-10">
            <CTAButton onClick={openModal} variant="rose">
              Book Your Appointment
            </CTAButton>
          </div>
        </SectionReveal>
      </section>
    </>
  );
}
