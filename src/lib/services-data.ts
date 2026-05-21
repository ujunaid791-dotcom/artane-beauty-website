export type Group = { title?: string; rows: { name: string; price: string; note?: string }[] };
export type Category = { id: string; title: string; subtitle?: string; groups: Group[] };

export const categories: Category[] = [
  {
    id: "manicure",
    title: "Manicure & BIAB",
    subtitle: "Polish, Shellac and Builder In A Bottle.",
    groups: [
      {
        title: "Manicure Essentials",
        rows: [
          { name: "File & Polish", price: "€20" },
          { name: "Mini Manicure & Polish", price: "€28" },
          { name: "File & Shellac", price: "€25" },
          { name: "Deluxe Manicure", price: "€55" },
          { name: "Add-ons (French Tip / Chrome / Ombre / Nail Art)", price: "From €5" },
        ],
      },
      {
        title: "BIAB (Builder In A Bottle)",
        rows: [
          { name: "BIAB Overlay", price: "€45" },
          { name: "BIAB Refill", price: "€45" },
          { name: "BIAB with Shellac", price: "€50" },
          { name: "Deluxe Manicure + BIAB + Shellac", price: "€75" },
        ],
      },
    ],
  },
  {
    id: "pedicure",
    title: "Pedicure",
    subtitle: "For women, men and children.",
    groups: [
      {
        title: "Women",
        rows: [
          { name: "File & Polish", price: "€20" },
          { name: "File & Shellac", price: "€30" },
          { name: "Mini Pedicure Polish", price: "€30" },
          { name: "Mini Pedicure + Shellac", price: "€40" },
          { name: "Full Pedicure + Polish", price: "€40" },
          { name: "Full Deluxe Pedicure + Shellac", price: "€50" },
        ],
      },
      {
        title: "Men's Grooming",
        rows: [
          { name: "Mini Pedicure", price: "€20" },
          { name: "Deluxe Feet & Hand Pedicure + Manicure", price: "€60" },
          { name: "Mini Manicure", price: "€30" },
        ],
      },
    ],
  },
  {
    id: "extensions",
    title: "Nail Extensions",
    subtitle: "Acrylic and BIAB extensions.",
    groups: [
      {
        rows: [
          { name: "Full Extension", price: "€60" },
          { name: "Full Extension Acrylic", price: "€60" },
          { name: "Extension Refill", price: "€50" },
          { name: "Extension with BIAB", price: "€80" },
        ],
      },
    ],
  },
  {
    id: "eyes",
    title: "Eyes, Brows & Face",
    subtitle: "Threading, lash lift, brow lamination and facials.",
    groups: [
      {
        title: "Threading",
        rows: [
          { name: "Full Face", price: "€42" },
          { name: "Full Face + Threading + Facial + Eyebrow & Lash Tint", price: "€67" },
          { name: "Lip Thread", price: "€9" },
          { name: "Side of Face", price: "€15" },
          { name: "Forehead", price: "€12" },
          { name: "Neck", price: "€10" },
          { name: "Any 3 Areas", price: "€28" },
        ],
      },
      {
        title: "Lash Lift & Brows",
        rows: [
          { name: "Lash Lift + Tint", price: "€56" },
          { name: "Brow Lamination + Tint", price: "€56" },
          { name: "Brow Lamination + Lash Lift", price: "€100" },
          { name: "Pre-session Brow Shape", price: "€10" },
          { name: "Shape + Tint", price: "€18" },
          { name: "Shape + Tint Keratine", price: "€23" },
          { name: "Shape + Henna Tint", price: "€25" },
          { name: "Shape + HD Tint", price: "€35" },
          { name: "Eye Trio", price: "€25" },
          { name: "Eyelash Tint", price: "€12" },
          { name: "HD Eyelash Tint", price: "€20" },
        ],
      },
      {
        title: "Facials (All 30 mins)",
        rows: [
          { name: "Classic Facial", price: "€62" },
          { name: "Mini Facial", price: "€40" },
          { name: "Relaxing Facial", price: "€40" },
        ],
      },
    ],
  },
  {
    id: "waxing",
    title: "Waxing",
    subtitle: "Face and body waxing.",
    groups: [
      {
        title: "Face",
        rows: [
          { name: "Lip / Chin / Nose / Ear / Brow", price: "€10 each" },
          { name: "Side Face", price: "€15" },
          { name: "Forehead", price: "€12" },
          { name: "Full Face Waxing", price: "€50" },
          { name: "Ear + Nose combo", price: "€18" },
          { name: "Eyebrow Tint + Wax", price: "€20" },
        ],
      },
      {
        title: "Body",
        rows: [
          { name: "Underarms", price: "€15" },
          { name: "Lower Arm", price: "€23" },
        ],
      },
    ],
  },
  {
    id: "lashes",
    title: "Lash Extensions",
    subtitle: "Classic, hybrid, volume and mega volume.",
    groups: [
      {
        rows: [
          { name: "Classic", price: "€65", note: "Refills: 1wk €40 / 2wk €50 / 3wk €55" },
          { name: "Hybrid", price: "€70", note: "Refills: 1wk €45 / 2wk €55 / 3wk €65" },
          { name: "Volume", price: "€75", note: "Refills: 1wk €60 / 2wk €60 / 3wk €65" },
          { name: "Mega Volume", price: "€80", note: "Refill €70" },
        ],
      },
    ],
  },
  {
    id: "princess",
    title: "Princess Services (Kids)",
    subtitle: "Cute mini treatments designed just for kids.",
    groups: [
      {
        rows: [
          { name: "File & Polish", price: "€10" },
          { name: "Mini Manicure with Polish", price: "€18" },
          { name: "File & Polish Feet", price: "€10" },
          { name: "File & Polish Hands & Feet", price: "€18" },
        ],
      },
    ],
  },
];
