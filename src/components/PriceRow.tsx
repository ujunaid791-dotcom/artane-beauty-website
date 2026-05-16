export function PriceRow({ name, price, note }: { name: string; price: string; note?: string }) {
  return (
    <div className="flex items-baseline gap-3 py-3 border-b border-border/60 last:border-0">
      <span className="text-ink text-[15px]">{name}</span>
      <span
        className="flex-1 mx-2 border-b border-dotted border-muted-foreground/40 translate-y-[-4px]"
        aria-hidden
      />
      <span className="text-ink font-medium text-[15px] whitespace-nowrap">{price}</span>
      {note && <span className="text-xs text-muted-foreground ml-2">{note}</span>}
    </div>
  );
}
