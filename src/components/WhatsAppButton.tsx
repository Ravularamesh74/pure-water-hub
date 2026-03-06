import React from "react";
import { MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhatsAppButtonProps {
  phone?: string;
  message?: string;
  showLabel?: boolean;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phone = "919949218640",
  message = "Hello Shiva Ganga Water Supply, I want to order drinking water.",
  showLabel = true,
}) => {
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={cn(
        "fixed bottom-6 right-6 z-[60]",
        "flex items-center gap-3",
        "group"
      )}
    >
      {/* LABEL */}
      {showLabel && (
        <span className="hidden md:block rounded-full bg-card border border-border px-4 py-2 text-sm font-semibold shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2 transition-all duration-300 whitespace-nowrap">
          Order Water
        </span>
      )}

      {/* BUTTON */}
      <div
        className={cn(
          "relative flex h-16 w-16 items-center justify-center",
          "rounded-full bg-[#25D366] text-white shadow-xl",
          "transition-transform duration-200",
          "hover:scale-110 active:scale-95"
        )}
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />

        {/* Icon */}
        <MessageCircle className="h-8 w-8 fill-current relative z-10" />
      </div>
    </a>
  );
};

export default WhatsAppButton;