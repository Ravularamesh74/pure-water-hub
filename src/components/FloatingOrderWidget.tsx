import React, { useState } from "react";
import { MessageCircle, Phone, ShoppingCart, X, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const FloatingOrderWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const phoneNumber = "919949218640";
    const whatsappMsg = encodeURIComponent("Hello Shiva Ganga Water Supply, I want to order drinking water.");

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-3">

            {/* EXPANDABLE MENU */}
            <div className={cn(
                "flex flex-col items-end gap-3 transition-all duration-300 origin-bottom",
                isOpen ? "scale-100 opacity-100 translate-y-0" : "scale-0 opacity-0 translate-y-10 pointer-events-none"
            )}>

                {/* CALL */}
                <a
                    href={`tel:${phoneNumber}`}
                    className="group flex items-center gap-3"
                >
                    <span className="rounded-lg bg-card border border-border px-3 py-1.5 text-sm font-bold shadow-lg">
                        Call Now
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-transform hover:scale-110">
                        <Phone className="h-5 w-5" />
                    </div>
                </a>

                {/* WHATSAPP */}
                <a
                    href={`https://wa.me/${phoneNumber}?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3"
                >
                    <span className="rounded-lg bg-card border border-border px-3 py-1.5 text-sm font-bold shadow-lg">
                        WhatsApp Order
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110">
                        <MessageCircle className="h-5 w-5 fill-current" />
                    </div>
                </a>

                {/* DIRECT ORDER */}
                <Link
                    to="/portal/order"
                    className="group flex items-center gap-3"
                >
                    <span className="rounded-lg bg-card border border-border px-3 py-1.5 text-sm font-bold shadow-lg">
                        Order Online
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-water text-white shadow-lg transition-transform hover:scale-110">
                        <ShoppingCart className="h-5 w-5" />
                    </div>
                </Link>

            </div>

            {/* MAIN TOGGLE BUTTON */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "relative flex h-16 w-16 items-center justify-center rounded-full shadow-2xl transition-all duration-500",
                    isOpen ? "bg-destructive text-destructive-foreground rotate-45" : "bg-primary text-primary-foreground"
                )}
            >
                {/* Pulse Effect when closed */}
                {!isOpen && (
                    <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
                )}

                {isOpen ? (
                    <Plus className="h-8 w-8" />
                ) : (
                    <div className="flex flex-col items-center justify-center">
                        <ShoppingCart className="h-6 w-6 mb-0.5" />
                        <span className="text-[10px] font-bold uppercase leading-none">Order</span>
                    </div>
                )}
            </button>

        </div>
    );
};

export default FloatingOrderWidget;
