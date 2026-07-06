import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown, MapPin, Star, Sparkles, Heart, Gem, Eye, Crown, Building2, Scissors, Phone } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { GrandOpeningBanner } from "@/components/GrandOpeningBanner";
import { SectionReveal } from "@/components/SectionReveal";
import { useBooking } from "@/lib/BookingContext";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Artane Nails & Beauty Lounge — Luxury Salon in Dublin 5" },
      {
        name: "description",
        content:
          "Premium nail care, lashes, brows, facials & waxing in Artane, Dublin 5. VIP Summer Beauty Package — Deluxe Pedicure + BIAB with French Tips for only €85. Save €25!",
      },
      { property: "og:title", content: "Artane Nails & Beauty Lounge" },
      {
        property: "og:description",
        content: "Enhance your beauty, feel your best. VIP Summer Beauty Package €85 — Deluxe Pedicure + BIAB with French Tips. Save €25!",
      },
      {
        property: "og:image",
        content: "https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=1600&q=80",
      },
    ],
  }),
  component: HomePage,
});

const services = [
  {
    icon: <Sparkles className="text-gold" size={36} />,
    title: "Manicure & BIAB",
    desc: "File & polish, Shellac, BIAB overlays & refills.",
  },
  {
    icon: <Heart className="text-gold" size={36} />,
    title: "Pedicure",
    desc: "For women, men & children — from mini to full deluxe.",
  },
  {
    icon: <Gem className="text-gold" size={36} />,
    title: "Nail Extensions",
    desc: "Acrylic, full extension, BIAB extension & refills.",
  },
  {
    icon: <Eye className="text-gold" size={36} />,
    title: "Eyes, Brows & Face",
    desc: "Threading, lash lift, brow lamination, facials.",
  },
  {
    icon: <Sparkles className="text-gold" size={36} />,
    title: "Waxing & Lashes",
    desc: "Face & body waxing, classic, hybrid & volume lashes.",
  },
  {
    icon: <Crown className="text-gold" size={36} />,
    title: "Princess Services",
    desc: "Cute mini treatments designed just for kids.",
  },
];

const testimonials = [
  {
    name: "Aoife",
    quote:
      "Honestly the most relaxing nail appointment I've ever had. My BIAB set looks flawless two weeks in and the team made me feel completely at home.",
  },
  {
    name: "Sarah",
    quote:
      "The space is gorgeous and the attention to detail is unmatched in Dublin 5. My lash lift and brow lamination were perfect — I'll never go anywhere else.",
  },
  {
    name: "Ciara",
    quote:
      "From the moment I walked in I felt looked after. Beautiful interior, warm staff, and a deluxe pedicure that left my feet feeling brand new.",
  },
];

function HomePage() {
  const { openModal, openOfferModal, openStudentModal } = useBooking();

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/55" />
        <div className="relative z-10 h-full max-w-7xl mx-auto px-5 md:px-6 lg:px-10 flex items-center">
          <div className="max-w-2xl text-white">
            <p className="text-gold uppercase tracking-luxe text-xs md:text-sm font-semibold text-shadow-gold">
              Dublin 5&apos;s Premier Beauty Destination
            </p>
            <span className="inline-flex items-center gap-2 mt-4 bg-rose/90 text-ink text-xs md:text-sm font-semibold uppercase tracking-wide rounded-full px-5 py-2 animate-pulse">
              ✨ VIP Summer Package — €85 · Save €25
            </span>
            <h1 className="font-display mt-6 text-4xl md:text-7xl leading-[1.05] text-shadow-premium">
              Enhance Your Beauty,
              <br />
              Feel Your Best.
            </h1>
            <p className="mt-6 text-base md:text-xl text-white/90 max-w-xl text-shadow-premium">
              Expert nail care, beauty treatments &amp; a relaxing luxury atmosphere — right in
              Artane.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <CTAButton onClick={openModal} variant="ink-rose">
                Book Appointment
              </CTAButton>
              <CTAButton to="/services" variant="outline">
                View Services
              </CTAButton>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 animate-float-arrow">
          <ChevronDown size={28} />
        </div>
      </section>

      <GrandOpeningBanner />

      {/* ABOUT PREVIEW */}
      <section className="bg-beige py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-10 grid md:grid-cols-2 gap-8 md:gap-20 items-center">
          <SectionReveal>
            <img
              src="/team-girls.jpeg"
              alt="The team at Artane Nails & Beauty Lounge"
              className="rounded-2xl md:rounded-3xl object-cover w-full aspect-[4/5] shadow-card"
              style={{ objectPosition: "center 20%" }}
            />
          </SectionReveal>
          <SectionReveal delay={120}>
            <p className="text-gold uppercase tracking-luxe text-xs">Our Story</p>
            <h2 className="font-display text-3xl md:text-5xl mt-4 leading-tight">
              More Than a Salon.
              <br />A Place You&apos;ll Love.
            </h2>
            <p className="mt-6 text-muted-foreground text-lg max-w-lg">
              At Artane Nails &amp; Beauty Lounge, we believe every person deserves to feel
              beautiful, pampered and completely at ease. From precision nail care to expert beauty
              treatments, our friendly team delivers luxury results in a warm, welcoming
              environment.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-8 text-ink font-medium border-b border-ink pb-1 hover:text-rose hover:border-rose transition-colors"
            >
              Our Story <ArrowRight size={16} />
            </Link>
          </SectionReveal>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-10">
          <SectionReveal className="text-center max-w-2xl mx-auto">
            <p className="text-gold uppercase tracking-luxe text-xs">What We Offer</p>
            <h2 className="font-display text-3xl md:text-5xl mt-4">A Full Menu of Beauty</h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Professional services for nails, brows, lashes, skin &amp; more.
            </p>
          </SectionReveal>

          <div className="grid mt-16 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <SectionReveal key={s.title} delay={i * 80}>
                <div className="bg-card rounded-2xl md:rounded-[28px] p-7 md:p-9 shadow-card hover:-translate-y-2 hover:shadow-card-hover transition-all duration-400 h-full">
                  <div className="text-4xl">{s.icon}</div>
                  <h3 className="font-display text-2xl mt-5">{s.title}</h3>
                  <p className="text-muted-foreground mt-3">{s.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-ink font-medium border-b border-ink pb-1 hover:text-rose hover:border-rose transition-colors"
            >
              See Full Menu &amp; Pricing <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* STUDENT DISCOUNT */}
      <section className="bg-beige py-16 md:py-32">
        <div className="max-w-4xl mx-auto px-5 md:px-6 text-center">
          <SectionReveal>
            <div className="bg-card rounded-3xl md:rounded-[36px] shadow-card px-6 md:px-14 py-10 md:py-14">
              <span className="text-4xl md:text-5xl">🎓</span>
              <p className="text-gold uppercase tracking-luxe text-xs mt-6">For Students</p>
              <h2 className="font-display text-3xl md:text-5xl mt-4">Student Discount</h2>
              <p className="mt-6 text-muted-foreground text-lg max-w-lg mx-auto">
                Keep your nails looking flawless on a student budget. Enjoy a{" "}
                <span className="text-rose font-semibold">10% discount</span> on our services.
              </p>
              <p className="mt-4 text-sm text-muted-foreground italic">
                Valid student ID required at appointment.
              </p>
              <div className="mt-10">
                <CTAButton onClick={openStudentModal} variant="primary">
                  Book with Student Discount
                </CTAButton>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* OFFER HIGHLIGHT */}
      <section className="bg-ink text-white py-16 md:py-32">
        <div className="max-w-4xl mx-auto px-5 md:px-6 text-center">
          <SectionReveal>
            <p className="text-gold uppercase tracking-luxe text-xs">Special Offer</p>
            <h2 className="font-display text-3xl md:text-6xl mt-6 text-white">
              VIP Summer Beauty Package
            </h2>
            <div className="mt-6 flex items-center justify-center gap-4">
              <span className="text-2xl md:text-3xl text-white/50 line-through">€110</span>
              <span className="font-display text-5xl md:text-7xl text-rose">€85</span>
            </div>
            <p className="mt-4 text-white/60 text-base uppercase tracking-widest font-medium">Save €25!</p>
            <p className="mt-4 text-white/75 text-lg">
              Deluxe Pedicure + BIAB with French Tips — complimentary tea/coffee included.
            </p>
            <p className="mt-3 text-white/50 text-sm">Bring a friend &amp; both get 10% off your next visit!</p>
            <div className="mt-10">
              <CTAButton onClick={openOfferModal} variant="rose">
                Book Your Appointment
              </CTAButton>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* LOCATION */}
      <section className="bg-beige py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <SectionReveal>
            <p className="text-gold uppercase tracking-luxe text-xs">Visit Us</p>
            <h2 className="font-display text-3xl md:text-5xl mt-4">Find Us in Artane</h2>
            <div className="mt-8 space-y-2 text-ink text-lg">
              <p className="font-medium">58 Saint Brigid&apos;s Road (Upstairs Turkish Barber)</p>
              <p>Artane, Dublin 5</p>
              <p>D05 H9W2</p>
              <p className="text-sm text-muted-foreground italic mt-1">Formerly Roxy Studio</p>
            </div>
            <ul className="mt-8 space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-rose" /> Near Artane Roundabout
              </li>
              <li className="flex items-center gap-3">
                <Building2 size={18} className="text-rose" /> Beside AIB Bank
              </li>
              <li className="flex items-center gap-3">
                <Scissors size={18} className="text-rose" /> Upstairs from Abbas Turkish Barber
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-rose" />
                <a href="tel:+353899508863" className="hover:text-ink">
                  (089) 950 8863
                </a>
              </li>
            </ul>
            <div className="mt-10">
              <CTAButton
                href="https://maps.google.com/?q=58+Saint+Brigid%27s+Road,+Artane,+Dublin+5"
                variant="primary"
              >
                Get Directions
              </CTAButton>
            </div>
          </SectionReveal>
          <SectionReveal delay={120}>
            <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-card aspect-[4/5] md:aspect-square">
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

      {/* TESTIMONIALS */}
      <section className="py-16 md:py-32">
        <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-10">
          <SectionReveal className="text-center max-w-2xl mx-auto">
            <p className="text-gold uppercase tracking-luxe text-xs">Loved by Locals</p>
            <h2 className="font-display text-3xl md:text-5xl mt-4">What Our Clients Say</h2>
          </SectionReveal>

          <div className="grid mt-12 md:mt-16 gap-6 md:gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <SectionReveal key={t.name} delay={i * 100}>
                <div className="bg-card rounded-2xl md:rounded-[28px] p-7 md:p-8 shadow-card h-full flex flex-col">
                  <div className="flex gap-1 text-gold">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={16} fill="currentColor" stroke="none" />
                    ))}
                  </div>
                  <p className="mt-5 text-ink/80 italic font-display text-lg leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="mt-6 text-sm font-medium text-ink uppercase tracking-luxe">
                    — {t.name}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
