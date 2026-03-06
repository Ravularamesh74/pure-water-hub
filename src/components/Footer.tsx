import { Droplets, Phone, MapPin, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-card border-t border-border pt-20 pb-10">
            <div className="container">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <Link to="/" className="flex items-center gap-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-water">
                                <Droplets className="h-6 w-6 text-primary-foreground" />
                            </div>
                            <span className="font-heading text-2xl font-bold text-gradient-water">Shiva Ganga</span>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Hyderabad's most trusted mineral water supplier, providing pure and safe RO drinking water since 2016.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-all">
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-all">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="h-10 w-10 flex items-center justify-center rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-all">
                                <Instagram className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6 font-heading">Quick Links</h4>
                        <ul className="space-y-4">
                            <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</Link></li>
                            <li><Link to="/products" className="text-muted-foreground hover:text-primary transition-colors text-sm">Our Products</Link></li>
                            <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Our Services</Link></li>
                            <li><Link to="/delivery-areas" className="text-muted-foreground hover:text-primary transition-colors text-sm">Delivery Areas</Link></li>
                            <li><Link to="/quality" className="text-muted-foreground hover:text-primary transition-colors text-sm">Quality Shield</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6 font-heading">Support</h4>
                        <ul className="space-y-4">
                            <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact Us</Link></li>
                            <li><Link to="/portal" className="text-muted-foreground hover:text-primary transition-colors text-sm">Customer Login</Link></li>
                            <li><Link to="/portal/order" className="text-muted-foreground hover:text-primary transition-colors text-sm">Track Order</Link></li>
                            <li><Link to="/admin" className="text-muted-foreground hover:text-primary transition-colors text-sm">Admin Portal</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6 font-heading">Contact Info</h4>
                        <ul className="space-y-4">
                            <li className="flex gap-3 text-sm text-muted-foreground">
                                <MapPin className="h-5 w-5 text-primary shrink-0" />
                                <span>11-3-362/1/B/1, Parsigutta, Secunderabad, TS – 500061</span>
                            </li>
                            <li className="flex gap-3 text-sm text-muted-foreground">
                                <Phone className="h-5 w-5 text-primary shrink-0" />
                                <span>090104 65929</span>
                            </li>
                            <li className="flex gap-3 text-sm text-muted-foreground">
                                <Mail className="h-5 w-5 text-primary shrink-0" />
                                <span>info@shivaganga.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs text-muted-foreground">
                        © 2026 Shiva Ganga Water Supply. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-xs text-muted-foreground">
                        <a href="#" className="hover:text-primary">Privacy Policy</a>
                        <a href="#" className="hover:text-primary">Terms of Service</a>
                        <a href="#" className="hover:text-primary">Refund Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
