export function GrandOpeningBanner() {
  return (
    <div className="relative overflow-hidden bg-rose text-ink">
      <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm md:text-[15px] font-medium tracking-wide">
        <span className="font-display text-base md:text-lg mr-2">Grand Opening</span>
        15 May 2026 · 25% OFF All Services · 3 Days Only — Fri, Sat &amp; Sun
      </div>
      <div className="pointer-events-none absolute inset-0 animate-shimmer" />
    </div>
  );
}
