import { ShieldAlert, Home, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Unauthorized = () => {
    return (
        <div className="relative min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center overflow-hidden">
            <div className="absolute inset-0 bg-destructive/5 z-0" />

            {/* WATER WAVE BACKGROUND (Red tinted for alert) */}
            <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden z-0 pointer-events-none opacity-10">
                <div className="absolute bottom-0 w-[200%] h-full animate-wave">
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-full w-full">
                        <path d="M0,64L48,64C96,64,192,64,288,74.7C384,85,480,107,576,101.3C672,96,768,64,864,53.3C960,43,1056,53,1152,58.7L1200,64L1200,120L1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="hsl(var(--destructive))" />
                    </svg>
                </div>
            </div>

            <div className="relative z-10 max-w-md w-full p-10 rounded-3xl border bg-card shadow-lg ring-1 ring-destructive/10">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-destructive/10 text-destructive mb-6">
                    <ShieldAlert className="h-10 w-10" />
                </div>

                <h1 className="mb-2 text-3xl font-bold font-heading">Access Denied</h1>
                <p className="mb-8 text-muted-foreground leading-relaxed">
                    You don't have the required permissions to view this section.
                    This area is restricted to authorized personnel only.
                </p>

                <div className="flex flex-col gap-3">
                    <Button size="lg" className="w-full h-14 rounded-xl shadow-water gap-2 font-bold text-lg" asChild>
                        <Link to="/">
                            <Home className="h-5 w-5" />
                            Back to Home
                        </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="w-full h-14 rounded-xl gap-2 font-bold" asChild>
                        <Link to="/contact">
                            <Phone className="h-5 w-5" />
                            Contact Support
                        </Link>
                    </Button>
                </div>

                <p className="mt-8 text-xs text-muted-foreground uppercase tracking-widest font-semibold">
                    Shiva Ganga Water Security
                </p>
            </div>
        </div>
    );
};

export default Unauthorized;
