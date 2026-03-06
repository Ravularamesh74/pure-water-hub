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
          <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-water">
            <Droplets className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="font-heading text-xl font-bold text-gradient-water">Shiva Ganga</span>
        </Link>

        {isLanding && (
          <>
            <div className="hidden items-center gap-6 lg:flex">
              <Link to="/about" className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">About</Link>
              <Link to="/products" className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">Products</Link>
              <Link to="/services" className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">Services</Link>
              <Link to="/delivery-areas" className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">Delivery Areas</Link>
              <Link to="/quality" className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">Quality Control</Link>
              <Link to="/contact" className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">Contact</Link>
            </div>
            <div className="hidden items-center gap-3 md:flex">
              <Button variant="ghost" asChild><Link to="/portal">My Account</Link></Button>
              <Button asChild className="rounded-xl shadow-water"><Link to="/portal/order">Order Now</Link></Button>
            </div>
            <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </>
        )}

        {!isLanding && (
          <div className="flex items-center gap-4">
            <div className="hidden items-center gap-6 lg:flex mr-6">
              <Link to="/about" className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">About</Link>
              <Link to="/products" className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">Products</Link>
              <Link to="/services" className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary">Services</Link>
            </div>
            <Button variant="ghost" asChild><Link to="/">Home</Link></Button>
            <Button variant="ghost" asChild><Link to="/portal">Dashboard</Link></Button>
            <Button variant="outline" asChild className="rounded-xl"><Link to="/admin">Admin</Link></Button>
          </div>
        )}
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur-xl p-8 lg:hidden animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-6">
            <Link to="/about" className="text-lg font-bold" onClick={() => setMobileOpen(false)}>About Us</Link>
            <Link to="/products" className="text-lg font-bold" onClick={() => setMobileOpen(false)}>Our Products</Link>
            <Link to="/services" className="text-lg font-bold" onClick={() => setMobileOpen(false)}>Services</Link>
            <Link to="/delivery-areas" className="text-lg font-bold" onClick={() => setMobileOpen(false)}>Delivery Areas</Link>
            <Link to="/quality" className="text-lg font-bold" onClick={() => setMobileOpen(false)}>Quality Control</Link>
            <Link to="/contact" className="text-lg font-bold" onClick={() => setMobileOpen(false)}>Contact</Link>
            <hr className="border-border" />
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" asChild onClick={() => setMobileOpen(false)} className="rounded-xl"><Link to="/portal">Login</Link></Button>
              <Button asChild onClick={() => setMobileOpen(false)} className="rounded-xl shadow-water"><Link to="/portal/order">Order Now</Link></Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
