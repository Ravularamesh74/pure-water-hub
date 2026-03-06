import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Filter, Droplets, Zap, ShieldCheck, Microscope, History, CheckCircle2 } from "lucide-react";

const stages = [
    { icon: Filter, title: "1. Raw water filtration", desc: "Initial filtration to remove large suspended particles." },
    { icon: Filter, title: "2. Sand filtration", desc: "Granular sand filter traps sediment and biological matter." },
    { icon: History, title: "3. Carbon filtration", desc: "Activated carbon removes chlorine, color, and bad odors." },
    { icon: Zap, title: "4. Reverse Osmosis (RO)", desc: "Hyper-filtration to eliminate dissolved salts and chemicals." },
    { icon: Microscope, title: "5. UV sterilization", desc: "Exposes water to UV rays to kill pathogens and bacteria." },
    { icon: ShieldCheck, title: "6. Ozonization", desc: "Final disinfection for extreme purity and long shelf life." }
];

const Quality = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="pt-24 pb-16">
                <header className="container text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-gradient-water">Our Purification Process</h1>
                    <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
                        Shiva Ganga Water Supply follows a rigorous multi-stage purification process to ensure every drop is 100% safe.
                    </p>
                </header>

                <section className="container mb-24">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {stages.map((stage) => (
                            <div key={stage.title} className="p-8 rounded-3xl border border-border bg-card shadow-sm hover:shadow-water-lg transition-all group">
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                    <stage.icon className="h-7 w-7" />
                                </div>
                                <h3 className="text-xl font-bold font-heading mb-3 text-foreground">{stage.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{stage.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-primary/5 py-24 border-y border-border">
                    <div className="container overflow-hidden">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div className="rounded-3xl overflow-hidden shadow-2xl relative aspect-video">
                                <img
                                    src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=2070&auto=format&fit=crop"
                                    alt="Quality Laboratory"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px]" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
                                    <Droplets className="h-16 w-16 mx-auto mb-4 animate-bounce" />
                                    <p className="text-3xl font-bold font-heading drop-shadow-lg">100% Pure & Safe</p>
                                </div>
                            </div>
                            <div className="space-y-8">
                                <h2 className="text-3xl font-bold font-heading">Quality You Can Trust</h2>
                                <div className="space-y-6">
                                    <div className="flex gap-4 p-5 rounded-2xl bg-card border">
                                        <CheckCircle2 className="h-6 w-6 text-success shrink-0" />
                                        <div>
                                            <h4 className="font-bold mb-1">FSSAI Certified</h4>
                                            <p className="text-muted-foreground text-sm">Strict adherence to Indian food & safety standards.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 p-5 rounded-2xl bg-card border focus-within:ring-2 focus-within:ring-primary transition-all">
                                        <CheckCircle2 className="h-6 w-6 text-success shrink-0" />
                                        <div>
                                            <h4 className="font-bold mb-1">Daily Lab Testing</h4>
                                            <p className="text-muted-foreground text-sm">Every batch is internally tested for TDS and pH balance.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 p-5 rounded-2xl bg-card border">
                                        <CheckCircle2 className="h-6 w-6 text-success shrink-0" />
                                        <div>
                                            <h4 className="font-bold mb-1">Hygienic Sanitization</h4>
                                            <p className="text-muted-foreground text-sm">Jars are cleaned and sanitized before every refill.</p>
                                        </div>
                                    </div>
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

export default Quality;
