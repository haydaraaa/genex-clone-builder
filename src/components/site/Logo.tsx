import { Leaf } from "lucide-react";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const text = variant === "light" ? "text-primary-foreground" : "text-foreground";
  return (
    <div className="flex items-center gap-2">
      <div className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground shadow-md">
        <Leaf className="h-5 w-5" />
      </div>
      <div className="leading-tight">
        <div className={`font-serif text-lg font-bold ${text}`}>
          Cairo <span className="text-accent-foreground/90" style={{ color: "var(--brand-gold)" }}>Sky</span>
        </div>
        <div className={`text-[10px] uppercase tracking-[0.18em] ${text} opacity-70`}>
          Egyptian Harvest
        </div>
      </div>
    </div>
  );
}
