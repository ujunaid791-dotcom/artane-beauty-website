import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";

type Props = {
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "outline-ink" | "rose" | "ink-rose";
  children: ReactNode;
  className?: string;
};

const base =
  "inline-flex items-center justify-center rounded-full px-8 py-4 text-[15px] font-medium tracking-wide cursor-pointer btn-premium";

const variants: Record<NonNullable<Props["variant"]>, string> = {
  primary: "bg-ink text-white hover:bg-rose hover:text-ink btn-premium-primary",
  outline: "border-2 border-white text-white hover:bg-white hover:text-ink btn-premium-outline",
  "outline-ink": "border-2 border-ink text-ink hover:bg-ink hover:text-white btn-premium-primary",
  rose: "bg-rose text-ink hover:bg-ink hover:text-white btn-premium-rose",
  "ink-rose": "bg-ink text-white border border-white/10 hover:bg-rose hover:text-ink btn-premium-primary",
};

export function CTAButton({
  to,
  href,
  onClick,
  variant = "primary",
  children,
  className = "",
}: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;

  if (onClick) {
    return (
      <button onClick={onClick} className={cls}>
        {children}
      </button>
    );
  }

  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={cls}>
      {children}
    </a>
  );
}
