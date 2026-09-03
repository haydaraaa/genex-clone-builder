import logoAsset from "@/assets/cairo-sky-logo.png.asset.json";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <img
      src={logoAsset.url}
      alt="Cairo Sky — Egyptian Harvest"
      className="h-10 w-auto md:h-11"
      style={variant === "light" ? { filter: "brightness(0) invert(1)" } : undefined}
      loading="eager"
      decoding="async"
    />
  );
}
