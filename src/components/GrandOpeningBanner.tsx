export function GrandOpeningBanner() {
  return (
    <div className="relative overflow-hidden bg-rose text-ink">
      <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm md:text-[15px] font-medium tracking-wide">
        <span className="font-display text-base md:text-lg mr-2">✨ VIP Summer Package</span>
        Deluxe Pedicure + BIAB with French Tips — <s className="opacity-60">€110</s>{" "}
        <span className="font-semibold">€85</span>
      </div>
      <div className="pointer-events-none absolute inset-0 animate-shimmer" />
    </div>
  );
}
