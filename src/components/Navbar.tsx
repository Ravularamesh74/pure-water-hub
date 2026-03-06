import {
  Droplets,
  Menu,
  X,
  User,
  LogOut,
  LayoutDashboard
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Services", path: "/services" },
  { label: "Delivery Areas", path: "/delivery-areas" },
  { label: "Quality", path: "/quality" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isLanding = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-xl shadow-md border-b border-border/60"
          : "bg-background/80 backdrop-blur-xl border-b border-border/50"
      )}
    >
      <div className="container flex h-16 items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-water">
            <Droplets className="h-6 w-6 text-primary-foreground" />
          </div>

          <span className="font-heading text-xl font-bold text-gradient-water">
            Shiva Ganga
          </span>

        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex items-center gap-8">

          {navLinks.map((link) => {
            const active = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-sm font-semibold transition-colors",
                  active
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {link.label}
              </Link>
            );
          })}

        </div>

        {/* ACTIONS */}
        <div className="hidden md:flex items-center gap-3">

          {isAuthenticated ? (
            <>
              <Button variant="ghost" asChild>
                <Link to="/portal">
                  <User className="mr-2 h-4 w-4" />
                  My Portal
                </Link>
              </Button>

              <Button variant="destructive" onClick={() => {
                logout();
                window.location.href = "/";
              }}>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </>
          ) : (
            <Button variant="ghost" asChild>
              <Link to="/login">
                <User className="mr-2 h-4 w-4" />
                Login
              </Link>
            </Button>
          )}

          <Button className="rounded-xl shadow-water" asChild>
            <Link to="/portal/order">
              Order Water
            </Link>
          </Button>

        </div>

        {/* MOBILE BUTTON */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

      </div>

      {/* MOBILE MENU */}

      {mobileOpen && (
        <div className="lg:hidden border-t border-border/50 bg-background animate-in slide-in-from-top duration-300">

          <div className="container py-6 flex flex-col gap-4">

            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-lg font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <hr className="border-border/50 my-2" />

            {isAuthenticated ? (
              <>
                <Button variant="ghost" asChild onClick={() => setMobileOpen(false)}>
                  <Link to="/portal">
                    My Portal
                  </Link>
                </Button>

                <Button
                  variant="destructive"
                  onClick={() => {
                    logout();
                    setMobileOpen(false);
                    window.location.href = "/";
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button variant="ghost" asChild>
                <Link to="/login">
                  Login
                </Link>
              </Button>
            )}

            <Button
              className="w-full rounded-xl"
              asChild
              onClick={() => setMobileOpen(false)}
            >
              <Link to="/portal/order">
                Order Water
              </Link>
            </Button>

          </div>

        </div>
      )}

    </nav>
  );
};

export default Navbar;