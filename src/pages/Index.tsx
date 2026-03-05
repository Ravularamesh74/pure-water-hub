import { Droplets, Shield, Truck, Repeat, Zap, Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import heroImage from "@/assets/hero-water.jpg";

const features = [
  { icon: Shield, title: "7-Stage Purification", desc: "RO + UV + Ozone + Remineralization for WHO-compliant water quality" },
  { icon: Truck, title: "Doorstep Delivery", desc: "Same-day delivery with GPS tracking and real-time updates" },
  { icon: Repeat, title: "Flexible Subscriptions", desc: "Daily, weekly, or monthly plans with easy pause & modify" },
  { icon: Zap, title: "IoT Monitored", desc: "Real-time TDS, pH, and quality monitoring at our plant 24/7" },
];

const plans = [
  { name: "Starter", price: "₹99", period: "/jar", desc: "For individuals & small families", features: ["20L Purified Jar", "Weekly delivery", "App tracking", "Quality reports"], popular: false },
  { name: "Family", price: "₹399", period: "/week", desc: "Most popular for households", features: ["5 Jars per week", "Priority delivery", "Free jar sanitization", "Dedicated support"], popular: true },
  { name: "Business", price: "₹1,499", period: "/week", desc: "For offices & institutions", features: ["20 Jars per week", "Daily delivery", "Bulk tanker option", "Custom SLA & billing"], popular: false },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-16">
        <div className="absolute inset-0 gradient-water opacity-5" />
        <div className="container relative flex flex-col items-center gap-8 py-24 text-center lg:py-32">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            <Droplets className="h-4 w-4" />
            Trusted by 1,500+ families in Hyderabad
          </div>
          <h1 className="max-w-4xl font-heading text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Pure Water, <span className="text-gradient-water">Delivered Fresh</span> to Your Door
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            7-stage purified drinking water with real-time quality monitoring. Subscribe for daily, weekly, or monthly delivery — residential, commercial, or institutional.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="gap-2 shadow-water" asChild>
              <Link to="/portal/order">
                Start Your Subscription <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="#pricing">View Plans</a>
            </Button>
          </div>
          <div className="mt-8 w-full max-w-5xl overflow-hidden rounded-2xl shadow-water-lg">
            <img src={heroImage} alt="Crystal clear purified water" className="h-auto w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-border bg-muted/30 py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground">Why Choose AquaPure?</h2>
            <p className="mt-3 text-muted-foreground">Industry-leading purification with technology-driven delivery</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="rounded-xl border border-border bg-card p-6 transition-all hover:shadow-water">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <f.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-card-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground">Simple, Transparent Pricing</h2>
            <p className="mt-3 text-muted-foreground">No hidden charges. Cancel or modify anytime.</p>
          </div>
          <div className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-6 transition-all hover:shadow-water ${
                  plan.popular ? "border-primary bg-primary/5 shadow-water" : "border-border bg-card"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <h3 className="font-heading text-xl font-bold text-card-foreground">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.desc}</p>
                <div className="mt-4">
                  <span className="font-heading text-3xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-sm text-card-foreground">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-success" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Button className="mt-6 w-full" variant={plan.popular ? "default" : "outline"} asChild>
                  <Link to="/portal/order">Get Started</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality */}
      <section id="quality" className="border-t border-border bg-muted/30 py-20">
        <div className="container text-center">
          <h2 className="font-heading text-3xl font-bold text-foreground">Quality You Can Trust</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            FSSAI certified, BIS ISI marked, and Pollution Control Board approved. Every batch tested for TDS, pH, turbidity, heavy metals, and microbial safety.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-sm font-semibold text-muted-foreground">
            {["FSSAI Certified", "BIS ISI Mark", "WHO Standards", "ISO 22000", "24/7 IoT Monitoring"].map((cert) => (
              <div key={cert} className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2">
                <Shield className="h-4 w-4 text-primary" />
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-12">
        <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <Droplets className="h-5 w-5 text-primary" />
            <span className="font-heading text-lg font-bold text-foreground">AquaPure</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4" />
            +91 40-1234-5678 · support@aquapure.in
          </div>
          <p className="text-xs text-muted-foreground">© 2026 AquaPure Water Supply. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
