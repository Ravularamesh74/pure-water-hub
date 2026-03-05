import { Droplets, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const isLanding = location.pathname === "/";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-water">
            <Droplets className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-heading text-xl font-bold text-gradient-water">AquaPure</span>
        </Link>

        {isLanding && (
          <>
            <div className="hidden items-center gap-8 md:flex">
              <a href="#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Features</a>
              <a href="#pricing" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Pricing</a>
              <a href="#quality" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Quality</a>
            </div>
            <div className="hidden items-center gap-3 md:flex">
              <Button variant="ghost" asChild><Link to="/portal">My Account</Link></Button>
              <Button asChild><Link to="/portal/order">Order Now</Link></Button>
            </div>
            <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </>
        )}

        {!isLanding && (
          <div className="flex items-center gap-3">
            <Button variant="ghost" asChild><Link to="/">Home</Link></Button>
            <Button variant="ghost" asChild><Link to="/portal">Dashboard</Link></Button>
            <Button variant="outline" asChild><Link to="/admin">Admin</Link></Button>
          </div>
        )}
      </div>

      {mobileOpen && isLanding && (
        <div className="border-t border-border bg-background p-4 md:hidden">
          <div className="flex flex-col gap-3">
            <a href="#features" className="text-sm font-medium" onClick={() => setMobileOpen(false)}>Features</a>
            <a href="#pricing" className="text-sm font-medium" onClick={() => setMobileOpen(false)}>Pricing</a>
            <Button asChild className="w-full"><Link to="/portal/order">Order Now</Link></Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
