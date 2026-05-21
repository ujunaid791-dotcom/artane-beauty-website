export function GrandOpeningBanner() {
  return (
    <div className="relative overflow-hidden bg-rose text-ink">
      <div className="max-w-7xl mx-auto px-6 py-4 text-center text-sm md:text-[15px] font-medium tracking-wide">
        <span className="font-display text-base md:text-lg mr-2">✨ Special Offer</span>
        BIAB with French Tip — <s className="opacity-60">€50</s>{" "}
        <span className="font-semibold">€35</span> · Valid until 24 May 2026
      </div>
      <div className="pointer-events-none absolute inset-0 animate-shimmer" />
    </div>
  );
}
