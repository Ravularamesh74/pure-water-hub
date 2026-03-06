import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Package, Droplets, ArrowRight, ShieldCheck, Zap } from "lucide-react";

const products = [
    {
        name: "20 Litre Water Bottles",
        description: "Perfect for homes, offices, and institutions. High-capacity water containers designed for regular daily usage.",
        price: "₹99",
        period: "per jar",
        image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=1976&auto=format&fit=crop",
        features: ["RO Purified", "UV Treated", "Home/Office Delivery"]
    },
    {
        name: "15 Litre Water Bottles",
        description: "Ideal for small offices and small families requiring moderate water consumption.",
        price: "₹85",
        period: "per jar",
        image: "https://images.unsplash.com/photo-1523363290067-da944df3c5bf?q=80&w=1964&auto=format&fit=crop",
        features: ["Balanced Minerals", "Compact Size", "Easy to handle"]
    },
    {
        name: "10 Litre Water Bottles",
        description: "Compact and convenient bottles suitable for individual use and small households.",
        price: "₹65",
        period: "per jar",
        image: "https://images.unsplash.com/photo-1559103623-ca655848bb0a?q=80&w=1974&auto=format&fit=crop",
        features: ["Travel Friendly", "Individual Use", "Same Purification"]
    }
];

const Products = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="pt-24 pb-16">
                <header className="container text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-gradient-water">Our Products</h1>
                    <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
                        Choose from multiple bottle sizes tailored for your specific needs – all processed with the same commitment to absolute purity.
                    </p>
                </header>

                <section className="container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((p) => (
                            <div key={p.name} className="flex flex-col rounded-3xl border border-border bg-card overflow-hidden hover:shadow-water-lg transition-all group">
                                <div className="relative h-64 overflow-hidden">
                                    <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                                        Premium Quality
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-1">
                                    <h3 className="text-2xl font-bold font-heading mb-2 text-foreground">{p.name}</h3>
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="text-3xl font-bold text-primary">{p.price}</span>
                                        <span className="text-muted-foreground">{p.period}</span>
                                    </div>
                                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-1">
                                        {p.description}
                                    </p>
                                    <ul className="space-y-3 mb-8">
                                        {p.features.map(f => (
                                            <li key={f} className="flex items-center gap-2 text-sm">
                                                <Droplets className="h-4 w-4 text-primary" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>
                                    <Button className="w-full h-12 text-lg rounded-xl gap-2 font-semibold" asChild>
                                        <Link to="/portal/order">
                                            View details <ArrowRight className="h-4 w-4" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="container mt-24">
                    <div className="rounded-3xl gradient-water p-12 text-primary-foreground relative overflow-hidden shadow-water-lg">
                        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <h2 className="text-3xl font-bold font-heading mb-6">Need bulk water for an event?</h2>
                                <p className="text-primary-foreground/90 text-lg mb-8">
                                    We specialize in high-volume water supply for weddings, functions, public events, and institutional needs at special rates.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Button size="lg" variant="secondary" className="font-bold" asChild>
                                        <Link to="/contact">Get a Quote</Link>
                                    </Button>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                                    <ShieldCheck className="h-8 w-8 mb-4" />
                                    <h4 className="font-bold mb-1">Quality Certified</h4>
                                    <p className="text-xs text-primary-foreground/80">FSSAI approved standards</p>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                                    <Zap className="h-8 w-8 mb-4" />
                                    <h4 className="font-bold mb-1">Fast Delivery</h4>
                                    <p className="text-xs text-primary-foreground/80">Within 24 hours of order</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Products;
