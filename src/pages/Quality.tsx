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

            <main className="pt-24 pb-20">

                {/* HERO SECTION */}
                <section className="relative overflow-hidden pt-12 pb-24 text-center">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-blue-500/5 to-transparent z-0" />

                    <div className="container relative z-10">
                        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-gradient-water">
                            Our Purification Process
                        </h1>
                        <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
                            At Shiva Ganga Water Supply, we follow a rigorous 6-stage purification
                            system ensuring every drop is 100% safe, pure, and healthy.
                        </p>
                    </div>

                    {/* WAVE ANIMATION BACKGROUND */}
                    <div className="absolute bottom-0 left-0 w-full h-16 overflow-hidden z-0 pointer-events-none opacity-20">
                        <div className="absolute bottom-0 w-[200%] h-full animate-wave">
                            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-full w-full">
                                <path d="M0,64L48,64C96,64,192,64,288,74.7C384,85,480,107,576,101.3C672,96,768,64,864,53.3C960,43,1056,53,1152,58.7L1200,64L1200,120L1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="hsl(var(--primary))" />
                            </svg>
                        </div>
                    </div>
                </section>

                {/* STAGES GRID */}
                <section className="container mb-24">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {stages.map((stage) => (
                            <div key={stage.title} className="p-8 rounded-3xl border bg-card shadow-sm hover:shadow-water-lg transition-all group overflow-hidden relative">
                                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <stage.icon className="h-7 w-7" />
                                </div>
                                <h3 className="text-xl font-bold font-heading mb-3">{stage.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{stage.desc}</p>
                                <div className="absolute -bottom-8 -right-8 h-24 w-24 bg-primary/5 rounded-full group-hover:scale-150 transition-transform duration-500" />
                            </div>
                        ))}
                    </div>
                </section>

                {/* QUALITY STANDARDS SECTION */}
                <section className="bg-muted/30 py-24 border-y overflow-hidden">
                    <div className="container">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">

                            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video group">
                                <img
                                    src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d"
                                    alt="Quality Laboratory"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1.5px]" />
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center w-full px-4">
                                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 mx-auto mb-6 animate-float">
                                        <Droplets className="h-10 w-10 text-white" />
                                    </div>
                                    <h3 className="text-3xl font-bold font-heading drop-shadow-lg">100% Pure & Safe</h3>
                                    <p className="mt-2 text-white/80 font-medium">Tested daily for your health</p>
                                </div>
                            </div>

                            <div className="space-y-8">
                                <h2 className="text-3xl font-bold font-heading">Our Quality Seal</h2>
                                <div className="space-y-6">

                                    <div className="flex gap-4 p-6 rounded-2xl bg-card border hover:border-primary transition duration-300">
                                        <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-full bg-green-100 text-green-600">
                                            <CheckCircle2 className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold mb-1">FSSAI Certified</h4>
                                            <p className="text-muted-foreground text-sm">Strictly following Indian food & safety guidelines for drinking water.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 p-6 rounded-2xl bg-card border hover:border-primary transition duration-300">
                                        <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-full bg-green-100 text-green-600">
                                            <CheckCircle2 className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold mb-1">Internal Lab Testing</h4>
                                            <p className="text-muted-foreground text-sm">Every batch undergoes rigorous TDS and pH balancing at our local plant.</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4 p-6 rounded-2xl bg-card border hover:border-primary transition duration-300">
                                        <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-full bg-green-100 text-green-600">
                                            <CheckCircle2 className="h-6 w-6" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold mb-1">Sanitized Bottling</h4>
                                            <p className="text-muted-foreground text-sm">Jars are sanitized with multi-stage cleaning before every refill.</p>
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
