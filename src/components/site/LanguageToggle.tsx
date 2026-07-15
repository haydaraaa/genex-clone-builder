import { Languages } from "lucide-react";
import { useI18n } from "@/i18n/i18n";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang, t } = useI18n();
  return (
    <button
      type="button"
      onClick={() => setLang(lang === "en" ? "ar" : "en")}
      className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-semibold border border-border hover:bg-secondary transition-colors ${className}`}
      aria-label="Toggle language"
    >
      <Languages className="h-4 w-4" />
      {t.switchTo}
    </button>
  );
}
