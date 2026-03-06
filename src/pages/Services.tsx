import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Home, Building2, PartyPopper, GraduationCap, CheckCircle2, Clock, MapPin, Truck } from "lucide-react";

const services = [
    {
        icon: Home,
        title: "Residential Water Supply",
        desc: "Daily and weekly water supply for homes and apartments. We ensure your family never runs out of clean, healthy water.",
        features: ["Reliable daily scheduling", "Doorstep delivery", "Flexible subscription", "Easy jar replacement"]
    },
    {
        icon: Building2,
        title: "Office Water Supply",
        desc: "Bulk water supply for offices, companies, and workplaces. We offer specialized billing and priority support for our corporate clients.",
        features: ["Bulk delivery 20L jars", "Customized scheduling", "Monthly invoicing", "Dedicated account manager"]
    },
    {
        icon: PartyPopper,
        title: "Event Water Supply",
        desc: "Comprehensive water supply for weddings, functions, and public events or any major gathering in Hyderabad.",
        features: ["Large volume capacity", "On-time delivery", "Professional handling", "Competitive bulk rates"]
    },
    {
        icon: GraduationCap,
        title: "Institutional Supply",
        desc: "Safe water delivery for schools, colleges, and hospitals. We adhere to the strictest health and safety protocols for institutional needs.",
        features: ["FSSAI certified quality", "Regular batch testing", "Consistent supply", "Safe & hygienic handling"]
    }
];

const Services = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="pt-24 pb-20">

                {/* HERO SECTION */}
                <section className="relative overflow-hidden pt-12 pb-24 text-center">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-blue-500/5 to-transparent z-0" />

                    <div className="container relative z-10">
                        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-gradient-water">
                            Our Professional Services
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
                            From residential homes to corporate establishments, we provide
                            consistent, pure, and healthy water supply solutions across Hyderabad.
                        </p>
                    </div>

                    {/* WATER WAVE BACKGROUND */}
                    <div className="absolute bottom-0 left-0 w-full h-16 overflow-hidden z-0 pointer-events-none opacity-20">
                        <div className="absolute bottom-0 w-[200%] h-full animate-wave">
                            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-full w-full">
                                <path d="M0,64L48,64C96,64,192,64,288,74.7C384,85,480,107,576,101.3C672,96,768,64,864,53.3C960,43,1056,53,1152,58.7L1200,64L1200,120L1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="hsl(var(--primary))" />
                            </svg>
                        </div>
                    </div>
                </section>

                {/* SERVICES GRID */}
                <section className="container mb-24">
                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((s) => (
                            <div key={s.title} className="p-10 rounded-3xl border bg-card hover:shadow-water-lg transition-all group overflow-hidden relative">
                                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <s.icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-2xl font-bold font-heading mb-4">{s.title}</h3>
                                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">{s.desc}</p>
                                <ul className="grid sm:grid-cols-2 gap-4 relative z-10">
                                    {s.features.map(f => (
                                        <li key={f} className="flex items-center gap-2 text-sm font-medium">
                                            <div className="h-2 w-2 rounded-full bg-primary/40 shrink-0" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <div className="absolute -bottom-12 -right-12 h-40 w-40 gradient-water opacity-0 group-hover:opacity-5 rounded-full transition-opacity duration-700" />
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-muted/30 py-24 border-y border-border">
                    <div className="container">
                        <div className="grid lg:grid-cols-4 gap-12 text-center">
                            <div className="space-y-4">
                                <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <Clock className="h-6 w-6" />
                                </div>
                                <h4 className="font-bold text-xl">On-time Delivery</h4>
                                <p className="text-sm text-muted-foreground">We value your time. Reliable scheduling for every order.</p>
                            </div>
                            <div className="space-y-4">
                                <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <h4 className="font-bold text-xl">Wide Service Area</h4>
                                <p className="text-sm text-muted-foreground">Delivering across Secunderabad and nearby areas.</p>
                            </div>
                            <div className="space-y-4">
                                <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <Truck className="h-6 w-6" />
                                </div>
                                <h4 className="font-bold text-xl">Free Delivery</h4>
                                <p className="text-sm text-muted-foreground">Doorstep delivery included with all subscriptions.</p>
                            </div>
                            <div className="space-y-4">
                                <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <CheckCircle2 className="h-6 w-6" />
                                </div>
                                <h4 className="font-bold text-xl">Hygienic Jars</h4>
                                <p className="text-sm text-muted-foreground">Every jar is sanitized before it reaches you.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Services;
