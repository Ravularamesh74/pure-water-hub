import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success("Message sent successfully! We'll get back to you soon.");
    };

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <main className="pt-32 pb-24">
                <section className="container">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-gradient-water">Contact Us</h1>
                            <p className="text-xl text-muted-foreground mb-12">
                                Have questions about our water quality or delivery? We're here to help. Reach out to us through any of the following channels.
                            </p>

                            <div className="space-y-8">
                                <div className="flex gap-6 group">
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                        <MapPin className="h-7 w-7" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-1">Our Location</h4>
                                        <p className="text-muted-foreground">
                                            11-3-362/1/B/1, Srinivas Nagar X Road<br />
                                            Parsigutta, Secunderabad, Hyderabad, TS – 500061
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-6 group">
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                        <Phone className="h-7 w-7" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-1">Contact Number</h4>
                                        <p className="text-muted-foreground text-lg font-semibold">090104 65929</p>
                                        <p className="text-sm text-primary">Direct call for quick delivery</p>
                                    </div>
                                </div>

                                <div className="flex gap-6 group">
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                                        <Clock className="h-7 w-7" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-1">Working Hours</h4>
                                        <p className="text-muted-foreground">Monday – Sunday<br /> 7:00 AM – 9:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-10 rounded-3xl border bg-card shadow-water-lg relative">
                            <div className="absolute -top-6 -right-6 p-4 rounded-2xl gradient-water text-primary-foreground">
                                <MessageSquare className="h-8 w-8" />
                            </div>
                            <h3 className="text-3xl font-bold font-heading mb-8">Send a Message</h3>
                            <form onSubmit={handleSubmit} className="space-y-6 text-foreground">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold">Full Name</label>
                                        <Input placeholder="Your name" className="h-12 border-2" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold">Phone Number</label>
                                        <Input placeholder="+91 00000 00000" className="h-12 border-2" required />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold">Email (Optional)</label>
                                    <Input type="email" placeholder="email@address.com" className="h-12 border-2" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold">Message</label>
                                    <Textarea placeholder="How can we help you?" className="min-h-[150px] border-2" required />
                                </div>
                                <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold gap-3 rounded-xl shadow-water">
                                    Send Message <Send className="h-5 w-5" />
                                </Button>
                            </form>
                        </div>
                    </div>
                </section>

                <section className="container mt-24">
                    <div className="h-[450px] rounded-3xl overflow-hidden border-2 border-primary/20 shadow-xl grayscale hover:grayscale-0 transition-all duration-700">
                        {/* Embedded Google Maps Placeholder */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.746193741!2d78.5085449!3d17.4239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9a263304561b%3A0xe54790089e9d6901!2sSrinivas%20Nagar%20X%20Road%20Parsigutta!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                        ></iframe>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;
