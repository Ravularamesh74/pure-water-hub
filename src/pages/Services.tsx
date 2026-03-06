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

            <main className="pt-24 pb-16">
                <header className="container text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-gradient-water">Our Services</h1>
                    <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
                        From individual households to large corporate institutions, we provide tailored water supply solutions across Hyderabad.
                    </p>
                </header>

                <section className="container mb-24">
                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((s) => (
                            <div key={s.title} className="p-10 rounded-3xl border border-border bg-card hover:bg-primary/5 transition-all group">
                                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                    <s.icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-2xl font-bold font-heading mb-4 text-foreground">{s.title}</h3>
                                <p className="text-muted-foreground mb-8 text-lg leading-relaxed">{s.desc}</p>
                                <ul className="grid sm:grid-cols-2 gap-3">
                                    {s.features.map(f => (
                                        <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                                            <CheckCircle2 className="h-4 w-4 text-success" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
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
