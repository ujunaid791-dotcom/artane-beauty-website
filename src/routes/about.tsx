import { createFileRoute } from "@tanstack/react-router";
import { CTAButton } from "@/components/CTAButton";
import { SectionReveal } from "@/components/SectionReveal";
import { useBooking } from "@/lib/BookingContext";
import { Gem, Heart, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Artane Nails & Beauty Lounge" },
      {
        name: "description",
        content:
          "Born in Artane, built for you. Meet the team behind Dublin 5's premier nail and beauty lounge — luxury treatments in a warm, welcoming space.",
      },
      { property: "og:title", content: "Our Story — Artane Nails & Beauty Lounge" },
      {
        property: "og:description",
        content: "Luxury beauty in the heart of Artane, Dublin 5.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: <Gem className="text-gold" size={36} />,
    title: "Expert Craftsmanship",
    desc: "Highly trained technicians delivering precise, long-lasting results every visit.",
  },
  {
    icon: <Heart className="text-gold" size={36} />,
    title: "Warm & Welcoming",
    desc: "A calm, beautiful space where you can switch off and feel completely cared for.",
  },
  {
    icon: <CheckCircle2 className="text-gold" size={36} />,
    title: "Premium Products",
    desc: "We only use trusted, professional brands — never the cheapest shortcut.",
  },
];

const gallery = [
  "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=900&q=80",
  "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=900&q=80",
  "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=900&q=80",
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=80",
];

function AboutPage() {
  const { openModal } = useBooking();

  return (
    <>
      {/* HERO */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <img
          src="/team-girls.jpeg"
          alt="The Team at Artane Nails & Beauty Lounge"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: "center 30%" }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
          <p className="text-gold uppercase tracking-luxe text-xs">About</p>
          <h1 className="font-display text-5xl md:text-7xl mt-5">Our Story</h1>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <SectionReveal>
            <p className="text-gold uppercase tracking-luxe text-xs">Our Beginning</p>
            <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight">
              Born in Artane.
              <br />
              Built for You.
            </h2>
            <div className="mt-6 space-y-5 text-muted-foreground text-lg max-w-lg">
              <p>
                Artane Nails &amp; Beauty Lounge was born from a simple idea: that everyone in our
                community deserves a beauty experience that feels truly special. We saw a gap for a
                salon that combined luxury results with a genuinely warm, friendly atmosphere — and
                we set out to build it, right here on Saint Brigid&apos;s Road.
              </p>
              <p>
                Every detail of the lounge — from the soft lighting and curated interior to the
                premium products on our shelves — has been designed to make you feel calm, looked
                after and genuinely pampered the moment you step through the door.
              </p>
              <p>
                Our team blends years of professional training with a love for what they do, so
                whether you&apos;re here for a quick file and polish or a full transformation,
                you&apos;ll leave feeling more like yourself.
              </p>
            </div>
          </SectionReveal>
          <SectionReveal delay={120}>
            <img
              src="/environ-moisturiser.jpeg"
              alt="Environ Skin EssentiA AVST Moisturiser 5"
              className="rounded-2xl object-contain w-full aspect-[4/5] shadow-card bg-white"
            />
          </SectionReveal>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-ink text-white py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionReveal>
            <p className="text-gold uppercase tracking-luxe text-xs">Our Mission</p>
            <p className="mt-8 font-display italic text-3xl md:text-5xl leading-snug text-white">
              &ldquo;We believe beauty should feel effortless, luxurious and accessible to
              everyone.&rdquo;
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal className="text-center max-w-2xl mx-auto">
            <p className="text-gold uppercase tracking-luxe text-xs">What We Stand For</p>
            <h2 className="font-display text-4xl md:text-5xl mt-4">Our Values</h2>
          </SectionReveal>
          <div className="grid mt-16 gap-6 md:gap-8 md:grid-cols-3">
            {values.map((v, i) => (
              <SectionReveal key={v.title} delay={i * 100}>
                <div className="bg-card rounded-[28px] p-9 shadow-card h-full hover:-translate-y-2 hover:shadow-card-hover transition-all duration-300">
                  <div className="text-4xl">{v.icon}</div>
                  <h3 className="font-display text-2xl mt-5">{v.title}</h3>
                  <p className="text-muted-foreground mt-3">{v.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-beige py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionReveal className="text-center max-w-2xl mx-auto">
            <p className="text-gold uppercase tracking-luxe text-xs">A Glimpse Inside</p>
            <h2 className="font-display text-4xl md:text-5xl mt-4">The Lounge</h2>
          </SectionReveal>
          <div className="grid mt-12 gap-4 md:gap-6 grid-cols-2 md:grid-cols-4">
            {gallery.map((src, i) => (
              <SectionReveal key={src} delay={i * 80}>
                <img
                  src={src}
                  alt="Artane Nails & Beauty Lounge gallery"
                  className="rounded-2xl object-cover w-full aspect-[3/4] shadow-card"
                />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionReveal>
            <h2 className="font-display text-4xl md:text-5xl">
              Ready to Experience the Difference?
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Treat yourself, or someone you love. We can&apos;t wait to welcome you.
            </p>
            <div className="mt-10">
              <CTAButton onClick={openModal} variant="primary">
                Book Now — (089) 950 8863
              </CTAButton>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
