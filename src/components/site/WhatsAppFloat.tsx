import { MessageCircle } from "lucide-react";
import { site } from "@/data/site";
import { useI18n } from "@/i18n/i18n";

export function WhatsAppFloat() {
  const { t } = useI18n();
  return (
    <a
      href={site.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label={t.contact.whatsapp}
      className="fixed bottom-5 end-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-xl hover:brightness-95 transition"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">{t.contact.whatsapp}</span>
    </a>
  );
}
