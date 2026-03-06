import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Target, Users, History } from "lucide-react";

const About = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="pt-24 pb-16">
                <section className="container">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-gradient-water">About Shiva Ganga Water Supply</h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Established in 2016, Shiva Ganga Water Supply has been a cornerstone of the Hyderabad community,
                            providing pure, safe, and high-quality mineral water to thousands of homes and businesses.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold font-heading">Our Story</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                What started as a small local distribution service in Parsigutta has grown into a major water supply network across Secunderabad and nearby Hyderabad areas.
                                Our journey has always been guided by a single principle: Water is life, and life deserves the purest water.
                            </p>
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
                                <History className="h-6 w-6 text-primary mt-1" />
                                <div>
                                    <h4 className="font-bold">Founded in 2016</h4>
                                    <p className="text-sm text-muted-foreground">Over 8 years of trusted service in Hyderabad.</p>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1523362624602-0e86f918ee91?q=80&w=2070&auto=format&fit=crop"
                                alt="Water purification plant"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="p-8 rounded-2xl border bg-card hover:shadow-water transition-all">
                            <Target className="h-10 w-10 text-primary mb-6" />
                            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                            <p className="text-muted-foreground">
                                To provide pure, safe, and reliable drinking water to every household and business while maintaining the highest standards of purification and customer service.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl border bg-card hover:shadow-water transition-all">
                            <Shield className="h-10 w-10 text-primary mb-6" />
                            <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                            <p className="text-muted-foreground">
                                To become the most trusted mineral water supplier in Hyderabad, known for quality, affordability, and lightning-fast doorstep delivery.
                            </p>
                        </div>
                        <div className="p-8 rounded-2xl border bg-card hover:shadow-water transition-all">
                            <Users className="h-10 w-10 text-primary mb-6" />
                            <h3 className="text-xl font-bold mb-4">Customer First</h3>
                            <p className="text-muted-foreground">
                                We believe in building long-term relationships with our clients through consistent quality and professional support.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default About;
