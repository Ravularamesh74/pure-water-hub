import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  MessageCircle,
  Truck,
} from "lucide-react";

import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll contact you soon.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-24">

        {/* HERO */}
        <section className="container text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-gradient-water">
            Contact Shiva Ganga Water Supply
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Need purified drinking water delivered to your home or office?
            Contact us for quick service, bulk orders, or monthly water
            subscriptions.
          </p>
        </section>

        {/* QUICK CONTACT OPTIONS */}
        <section className="container mb-20">
          <div className="grid md:grid-cols-3 gap-8">

            {/* CALL */}
            <div className="p-8 border rounded-2xl bg-card text-center hover:shadow-water transition">
              <Phone className="h-10 w-10 text-primary mx-auto mb-4" />

              <h3 className="text-xl font-bold mb-2">
                Call Us
              </h3>

              <p className="text-muted-foreground mb-4">
                Speak directly with our team for fast water delivery.
              </p>

              <a
                href="tel:9949218640"
                className="text-primary font-semibold text-lg"
              >
                +91 99492 18640
              </a>
            </div>

            {/* WHATSAPP */}
            <div className="p-8 border rounded-2xl bg-card text-center hover:shadow-water transition">

              <MessageCircle className="h-10 w-10 text-green-500 mx-auto mb-4" />

              <h3 className="text-xl font-bold mb-2">
                WhatsApp Order
              </h3>

              <p className="text-muted-foreground mb-4">
                Send us a WhatsApp message and place your order instantly.
              </p>

              <a
                href="https://wa.me/919949218640"
                className="text-green-600 font-semibold"
              >
                Chat on WhatsApp
              </a>

            </div>

            {/* EMAIL */}
            <div className="p-8 border rounded-2xl bg-card text-center hover:shadow-water transition">

              <Mail className="h-10 w-10 text-primary mx-auto mb-4" />

              <h3 className="text-xl font-bold mb-2">
                Email Support
              </h3>

              <p className="text-muted-foreground mb-4">
                For bulk supply or business partnerships.
              </p>

              <p className="text-primary font-semibold">
                info@shivaganga.com
              </p>

            </div>

          </div>
        </section>

        {/* CONTACT GRID */}
        <section className="container">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* CONTACT INFO */}
            <div>

              <h2 className="text-3xl font-bold font-heading mb-8">
                Visit Our Location
              </h2>

              <div className="space-y-8">

                <div className="flex gap-6">
                  <MapPin className="h-8 w-8 text-primary" />

                  <div>
                    <h4 className="font-bold text-lg">
                      Address
                    </h4>

                    <p className="text-muted-foreground">
                      11-3-362/1/B/1 Srinivas Nagar X Road
                      <br />
                      Parsigutta, Secunderabad
                      <br />
                      Hyderabad – 500061
                    </p>

                  </div>
                </div>

                <div className="flex gap-6">
                  <Clock className="h-8 w-8 text-primary" />

                  <div>
                    <h4 className="font-bold text-lg">
                      Working Hours
                    </h4>

                    <p className="text-muted-foreground">
                      Monday – Sunday
                      <br />
                      7:00 AM – 9:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <Truck className="h-8 w-8 text-primary" />

                  <div>
                    <h4 className="font-bold text-lg">
                      Delivery Service
                    </h4>

                    <p className="text-muted-foreground">
                      Same-day water delivery available in
                      Secunderabad and nearby Hyderabad areas.
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* CONTACT FORM */}
            <div className="p-10 rounded-3xl border bg-card shadow-water-lg relative">

              <div className="absolute -top-6 -right-6 p-4 rounded-2xl gradient-water text-primary-foreground">
                <MessageSquare className="h-8 w-8" />
              </div>

              <h3 className="text-3xl font-bold font-heading mb-8">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">

                <div className="grid sm:grid-cols-2 gap-6">

                  <Input
                    placeholder="Full Name"
                    className="h-12 border-2"
                    required
                  />

                  <Input
                    placeholder="Phone Number"
                    className="h-12 border-2"
                    required
                  />

                </div>

                <Input
                  type="email"
                  placeholder="Email Address (optional)"
                  className="h-12 border-2"
                />

                <Textarea
                  placeholder="Write your message..."
                  className="min-h-[150px] border-2"
                  required
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 text-lg font-bold gap-3 rounded-xl shadow-water"
                >
                  Send Message
                  <Send className="h-5 w-5" />
                </Button>

              </form>

            </div>

          </div>
        </section>

        {/* MAP */}
        <section className="container mt-24">

          <div className="h-[450px] rounded-3xl overflow-hidden border shadow-xl">

            <iframe
              src="https://www.google.com/maps?q=Parsigutta%20Secunderabad&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
            />

          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Contact;