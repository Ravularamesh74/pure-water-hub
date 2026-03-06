import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MapPin, Search, Check, Truck, Clock } from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const areas = [
    "Parsigutta",
    "Secunderabad",
    "Warasiguda",
    "Padmarao Nagar",
    "Srinivas Nagar X Road",
    "Musheerabad",
    "Ramnagar",
    "Chilkalguda",
    "Mettuguda",
    "Tarnaka",
    "Sitaphalmandi",
    "Amberpet",
];

const DeliveryAreas = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredAreas = areas.filter(area =>
        area.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="pt-32 pb-24">
                <section className="container">
                    <div className="max-w-4xl mx-auto mb-16 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-gradient-water">Delivery Service Areas</h1>
                        <p className="text-xl text-muted-foreground">
                            Delivering pure mineral water across Secunderabad and nearby Hyderabad regions with lightning-fast service.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <div className="mb-10 relative">
                                <Input
                                    placeholder="Search your area..."
                                    className="h-14 pl-12 rounded-2xl border-2 border-primary/20 focus:border-primary transition-all text-lg shadow-water"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-6 w-6" />
                            </div>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                {filteredAreas.length > 0 ? (
                                    filteredAreas.map((area) => (
                                        <div key={area} className="group flex items-center gap-3 p-5 rounded-2xl border bg-card hover:bg-primary/5 hover:border-primary/30 transition-all cursor-pointer">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                                <MapPin className="h-5 w-5" />
                                            </div>
                                            <span className="font-bold text-foreground/90">{area}</span>
                                        </div>
                                    ))
                                ) : (
                                    <div className="col-span-full py-24 text-center border-2 border-dashed border-muted rounded-3xl">
                                        <p className="text-muted-foreground">We couldn't find "{searchTerm}". Try another location!</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="p-8 rounded-3xl gradient-water text-primary-foreground shadow-water-lg relative overflow-hidden">
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold font-heading mb-6">Delivery Promise</h3>
                                    <ul className="space-y-6">
                                        <li className="flex items-start gap-4">
                                            <Clock className="h-6 w-6 shrink-0" />
                                            <div>
                                                <p className="font-bold">Next Day Delivery</p>
                                                <p className="text-sm text-primary-foreground/80">Order before 5 PM to get delivery tomorrow.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-4">
                                            <Check className="h-6 w-6 shrink-0" />
                                            <div>
                                                <p className="font-bold">Free Shipping</p>
                                                <p className="text-sm text-primary-foreground/80">No delivery charges for subscription plans.</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start gap-4">
                                            <Truck className="h-6 w-6 shrink-0" />
                                            <div>
                                                <p className="font-bold">Contactless Service</p>
                                                <p className="text-sm text-primary-foreground/80">Safe and hygienic doorstep delivery.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="p-8 rounded-3xl border bg-card hover:shadow-water transition-all group">
                                <h4 className="text-xl font-bold font-heading mb-4 group-hover:text-primary transition-colors">Don't see your area?</h4>
                                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                                    We're constantly expanding! Call or message us to see if we can deliver to your specific location.
                                </p>
                                <a href="tel:09010465929" className="text-lg font-bold text-primary flex items-center gap-2">
                                    Call Now: 090104 65929
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default DeliveryAreas;
