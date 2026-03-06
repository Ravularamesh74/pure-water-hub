import {
  Droplets,
  Phone,
  MapPin,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  MessageCircle,
  Clock,
  Send
} from "lucide-react";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border pt-20 pb-10 relative overflow-hidden">

      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500"></div>

      <div className="container">

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

          {/* COMPANY */}
          <div className="space-y-6">

            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-water">
                <Droplets className="h-6 w-6 text-primary-foreground" />
              </div>

              <span className="font-heading text-2xl font-bold text-gradient-water">
                Shiva Ganga
              </span>
            </Link>

            <p className="text-muted-foreground text-sm leading-relaxed">
              Hyderabad’s trusted mineral water supplier delivering purified RO
              drinking water for homes, offices, apartments, and businesses.
              Safe, hygienic, and fast doorstep delivery.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-4">

              <a
                href="#"
                className="h-10 w-10 flex items-center justify-center rounded-full border border-border hover:bg-blue-600 hover:text-white transition"
              >
                <Facebook className="h-5 w-5" />
              </a>

              <a
                href="#"
                className="h-10 w-10 flex items-center justify-center rounded-full border border-border hover:bg-sky-500 hover:text-white transition"
              >
                <Twitter className="h-5 w-5" />
              </a>

              <a
                href="#"
                className="h-10 w-10 flex items-center justify-center rounded-full border border-border hover:bg-pink-500 hover:text-white transition"
              >
                <Instagram className="h-5 w-5" />
              </a>

            </div>

          </div>

          {/* PRODUCTS */}
          <div>
            <h4 className="font-bold text-lg mb-6 font-heading">
              Our Products
            </h4>

            <ul className="space-y-4 text-sm">

              <li>
                <Link
                  to="/products/20l-water"
                  className="text-muted-foreground hover:text-primary transition"
                >
                  20L Water Can
                </Link>
              </li>

              <li>
                <Link
                  to="/products/15l-water"
                  className="text-muted-foreground hover:text-primary transition"
                >
                  15L Water Can
                </Link>
              </li>

              <li>
                <Link
                  to="/products/10l-water"
                  className="text-muted-foreground hover:text-primary transition"
                >
                  10L Water Bottle
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="text-muted-foreground hover:text-primary transition"
                >
                  All Products
                </Link>
              </li>

            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-bold text-lg mb-6 font-heading">
              Quick Links
            </h4>

            <ul className="space-y-4 text-sm">

              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>

              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary">
                  Services
                </Link>
              </li>

              <li>
                <Link to="/quality" className="text-muted-foreground hover:text-primary">
                  Quality Control
                </Link>
              </li>

              <li>
                <Link to="/delivery-areas" className="text-muted-foreground hover:text-primary">
                  Delivery Areas
                </Link>
              </li>

            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className="font-bold text-lg mb-6 font-heading">
              Customer Support
            </h4>

            <ul className="space-y-4 text-sm">

              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary">
                  Contact Us
                </Link>
              </li>

              <li>
                <Link to="/portal/order" className="text-muted-foreground hover:text-primary">
                  Track Order
                </Link>
              </li>

              <li>
                <Link to="/subscriptions" className="text-muted-foreground hover:text-primary">
                  Subscription Plans
                </Link>
              </li>

              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary">
                  Help Center
                </Link>
              </li>

            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-bold text-lg mb-6 font-heading">
              Contact Info
            </h4>

            <ul className="space-y-4 text-sm text-muted-foreground">

              <li className="flex gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0" />
                <span>
                  Parsigutta, Secunderabad  
                  Hyderabad – 500061
                </span>
              </li>

              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span>+91 99492 18640</span>
              </li>

              <li className="flex gap-3">
                <MessageCircle className="h-5 w-5 text-[#25D366]" />
                <a
                  href="https://wa.me/919949218640"
                  target="_blank"
                  className="hover:text-primary underline decoration-dotted"
                >
                  WhatsApp Order
                </a>
              </li>

              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span>info@shivaganga.com</span>
              </li>

              <li className="flex gap-3">
                <Clock className="h-5 w-5 text-primary shrink-0" />
                <span>6:00 AM – 10:00 PM</span>
              </li>

            </ul>
          </div>

        </div>

        {/* NEWSLETTER */}
        <div className="border-t border-border pt-10 pb-10">

          <div className="max-w-xl mx-auto text-center">

            <h3 className="text-xl font-bold mb-3">
              Get Water Delivery Updates
            </h3>

            <p className="text-muted-foreground text-sm mb-6">
              Subscribe to receive delivery updates and offers.
            </p>

            <div className="flex gap-3">

              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-sm"
              />

              <button className="px-6 py-3 rounded-lg bg-primary text-white flex items-center gap-2 hover:opacity-90">
                Subscribe
                <Send className="h-4 w-4" />
              </button>

            </div>

          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">

          <p>
            © 2026 Shiva Ganga Water Supply. All rights reserved.
          </p>

          <div className="flex gap-8">

            <a href="#" className="hover:text-primary">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-primary">
              Terms of Service
            </a>

            <a href="#" className="hover:text-primary">
              Refund Policy
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;