import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import {
    Droplets,
    ArrowRight,
    ShieldCheck,
    Truck,
    Users,
    Home,
    Calendar,
    CheckCircle
} from "lucide-react";

const products = [
    {
        name: "20 Litre Jar",
        price: "₹40",
        desc: "The classic family choice. Purified and mineral-enriched water in a returnable jar.",
        image: "https://media.istockphoto.com/id/598247856/photo/water-cooler-bottles.webp?a=1&b=1&s=612x612&w=0&k=20&c=krAbvwEM8XBwv4R_iS8Az-j84guNFHiSNDSvo1k4XZM=",
        features: ["RO + UV Purified", "Sanitized Jars", "Free Home Delivery"]
    },
    {
        name: "10 Litre Jar",
        price: "₹20",
        desc: "Compact 10L jar. Convenient size for small families, easy to handle and pour.",
        image: "https://www.bisleri.com/on/demandware.static/-/Sites-Bis-Catalog/default/dwef5b6981/Product%20Images_Desktop/Bisleri/Bisleri10Litre/PDP/Bisleri_1000x1000_10Ltr_01.png",
        features: ["One-way Packaging", "Tamper Evident Seal", "Mineral Enriched"]
    },
    {
        name: "5 Litre Jar",
        price: "₹10",
        desc: "Perfect for quick trips or small kitchen spaces. High purity in a 5L pack.",
        image: "https://www.bisleri.com/on/demandware.static/-/Library-Sites-RefArchSharedLibrary/default/dw0c34e016/images/blog30.jpg",
        features: ["Easy Grip Handle", "BPA Free Plastic", "Pure & Safe"]
    },
    {
        name: "2 Litre Case (9 Bottles)",
        price: "₹243",
        desc: "Case of 9 bottles. Ideal for long-distance travel and bulk home storage.",
        image: "https://www.bisleri.com/on/demandware.static/-/Sites-Bis-Catalog/default/dw6bfaf393/Product%20Images_Desktop/Bisleri/Bisleri2Litre/PDP/Bisleri_1000x1000_2Ltr_01.png",
        features: ["Case of 9", "Travel Friendly", "₹27 per bottle"]
    },
    {
        name: "1 Litre Case (12 Bottles)",
        price: "₹216",
        desc: "The most popular retail size. Case of 12 bottles for events and offices.",
        image: "https://www.bisleri.com/on/demandware.static/-/Sites-Bis-Catalog/default/dw237bf865/Product%20Images_Desktop/Bisleri/Bisleri1Litre/PDP/Bisleri-1000x1000-1Ltr-01.png",
        features: ["Case of 12", "Event Favorite", "₹18 per bottle"]
    },
    {
        name: "500ml Case (24 Bottles)",
        price: "₹216",
        desc: "Convenient half-litre bottles. Perfect for meetings, gyms, and quick hydration.",
        image: "https://www.bisleri.com/on/demandware.static/-/Sites-Bis-Catalog/default/dw737a29a5/Product%20Images_Desktop/Bisleri/Bisleri500ml/PDP/Bisleri_1000x1000_500ml_01.png",
        features: ["Case of 24", "Meeting Ready", "₹9 per bottle"]
    },
    {
        name: "250ml Case (24 Bottles)",
        price: "₹132",
        desc: "Small and portable. Great for kids' school bags and pocket-friendly hydration.",
        image: "https://www.bisleri.com/on/demandware.static/-/Sites-Bis-Catalog/default/dwedc1e50d/Product%20Images_Desktop/Bisleri/Bisleri250ml/PDP/Bisleri_1000x1000_250ml_01.png",
        features: ["Case of 24", "Kid Friendly", "₹5.5 per bottle"]
    },
    {
        name: "200ml Case (48 Bottles)",
        price: "₹216",
        desc: "Bulk mini bottles. The ultimate choice for mass events and distribution.",
        image: "https://www.bisleri.com/on/demandware.static/-/Sites-Bis-Catalog/default/dw850c1643/Product%20Images_Desktop/Bisleri/Bisleri200ml/PDP/Bisleri_1000x1000_200ml_01.png",
        features: ["Case of 48", "Event Bulk Pack", "₹4.5 per bottle"]
    }
];

const faqs = [
    {
        q: "How long does delivery take?",
        a: "Orders placed before 5PM are delivered the same or next day depending on your location."
    },
    {
        q: "Are the jars returnable?",
        a: "The 20L jars are returnable. 10L, 5L and smaller retail bottles are non-returnable."
    },
    {
        q: "Do you provide bulk orders for weddings?",
        a: "Yes. We specialize in bulk supply for weddings, events, and corporate offices."
    }
];

const Products = () => {
    return (
        <div className="min-h-screen bg-background pb-12">
            <Navbar />

            <main className="pt-32">

                {/* HERO */}
                <section className="container text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold font-heading mb-6 tracking-tight text-gradient-water">
                        Our Pure Water Range
                    </h1>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        From the classic 20L jars to convenient pocket-sized bottles, we bring you the purity
                        of mineral-enriched water in every drop.
                    </p>
                </section>

                {/* PRODUCTS GRID */}
                <section className="container">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {products.map((p) => (
                            <div
                                key={p.name}
                                className="group flex flex-col rounded-[2rem] border bg-card overflow-hidden hover:shadow-water-lg transition-all duration-300 border-primary/5 hover:border-primary/20"
                            >
                                <div className="h-56 w-full overflow-hidden relative">
                                    <img
                                        src={p.image}
                                        alt={p.name}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm">
                                        <span className="text-primary font-bold text-lg">{p.price}</span>
                                    </div>
                                </div>

                                <div className="p-6 flex flex-col flex-1">
                                    <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-primary transition-colors">
                                        {p.name}
                                    </h3>
                                    <p className="text-muted-foreground text-xs mb-6 flex-1 line-clamp-2">
                                        {p.desc}
                                    </p>

                                    <div className="space-y-2 mb-6">
                                        {p.features.slice(0, 2).map(f => (
                                            <div key={f} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                                                <CheckCircle className="h-3 w-3 text-primary" />
                                                {f}
                                            </div>
                                        ))}
                                    </div>

                                    <Button className="w-full rounded-2xl h-11 group/btn" asChild>
                                        <Link to="/portal/order">
                                            Order Now <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* BULK CTA */}
                <section className="container mt-24">
                    <div className="rounded-[3rem] bg-card border-4 border-primary/5 p-12 md:p-20 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 h-64 w-64 bg-primary/5 rounded-full -mr-32 -mt-32" />
                        <div className="absolute bottom-0 left-0 h-64 w-64 bg-primary/5 rounded-full -ml-32 -mb-32" />

                        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 relative z-10">
                            Planning a <span className="text-primary">Grand Event?</span>
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 relative z-10">
                            We provide seamless bulk water distribution for weddings, corporate gatherings,
                            and large festivals. Get a customized quote today.
                        </p>
                        <Button size="lg" className="rounded-full px-12 h-14 text-lg relative z-10 shadow-lg" asChild>
                            <Link to="/contact">Discuss Bulk Supply</Link>
                        </Button>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <section className="container mt-24">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h2 className="text-3xl font-bold font-heading mb-4">Water Purity FAQ</h2>
                        <p className="text-muted-foreground">Everything you need to know about our sourcing and delivery.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
                        {faqs.map((f, i) => (
                            <div key={i} className="p-8 rounded-3xl border bg-card hover:bg-primary/5 transition-colors">
                                <h3 className="font-bold mb-3 flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-primary" /> {f.q}
                                </h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{f.a}</p>
                            </div>
                        ))}
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
};

export default Products;