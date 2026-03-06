import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Droplets, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-background overflow-hidden p-6 text-center">
      <div className="absolute inset-0 bg-primary/5 z-0" />

      {/* WATER WAVE BACKGROUND */}
      <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden z-0 pointer-events-none opacity-20">
        <div className="absolute bottom-0 w-[200%] h-full animate-wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-full w-full">
            <path d="M0,64L48,64C96,64,192,64,288,74.7C384,85,480,107,576,101.3C672,96,768,64,864,53.3C960,43,1056,53,1152,58.7L1200,64L1200,120L1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="hsl(var(--primary))" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-md w-full p-10 rounded-3xl border bg-card shadow-water-lg">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl gradient-water text-white mb-6">
          <Droplets className="h-10 w-10" />
        </div>
        <h1 className="mb-2 text-6xl font-bold font-heading text-primary">404</h1>
        <h2 className="mb-4 text-2xl font-bold font-heading">Page Not Found</h2>
        <p className="mb-8 text-muted-foreground leading-relaxed">
          The page you are looking for doesn't exist or has been moved.
          Let's get you back logic.
        </p>
        <Button size="lg" className="w-full h-14 rounded-xl shadow-water gap-2 text-lg font-bold" asChild>
          <Link to="/">
            <Home className="h-5 w-5" />
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
