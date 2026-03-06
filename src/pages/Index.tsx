import { Droplets, Shield, Truck, Repeat, Zap, Phone, ArrowRight, CheckCircle2, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  { icon: Shield, title: "Multi-Stage Purification", desc: "RO + UV + Carbon + Sand + Ozone for 100% safe drinking water" },
  { icon: Truck, title: "Fast Doorstep Delivery", desc: "Reliable and timely water delivery across Secunderabad & Hyderabad" },
  { icon: Award, title: "Quality Certified", desc: "FSSAI approved standards with daily quality & batch testing" },
  { icon: Clock, title: "Flexible Scheduling", desc: "Daily, weekly, or event-based delivery to fit your routine" },
];

const plans = [
  { name: "20L Jar", price: "₹99", period: "/jar", desc: "Perfect for homes & offices", features: ["20L Purified Jar", "Next-day delivery", "Deep sanitized bottles", "Doorstep replacement"], popular: true },
  { name: "15L Jar", price: "₹85", period: "/jar", desc: "Ideal for small families", features: ["15L Purified Jar", "Easy to handle", "Balanced minerals", "Priority delivery"], popular: false },
  { name: "10L Bottle", price: "₹65", period: "/jar", desc: "Compact for individual use", features: ["10L Purified Bottle", "Travel friendly", "Same pure quality", "Individual use design"], popular: false },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-blue-500/5 to-transparent z-0" />

        {/* WAVE ANIMATION */}
        <div className="absolute bottom-0 left-0 w-full h-24 overflow-hidden z-0 pointer-events-none opacity-40">
          <div className="absolute bottom-0 w-[200%] h-full animate-wave">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-full w-full">
              <path d="M0,64L48,64C96,64,192,64,288,74.7C384,85,480,107,576,101.3C672,96,768,64,864,53.3C960,43,1056,53,1152,58.7L1200,64L1200,120L1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="hsl(var(--primary))"></path>
            </svg>
          </div>
          <div className="absolute bottom-0 w-[200%] h-full animate-wave-slow opacity-50 -left-[100px]">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block h-full w-full">
              <path d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,74.7C672,53,768,43,864,64C960,85,1056,139,1152,144L1200,149.3L1200,120L1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="hsl(var(--primary))"></path>
            </svg>
          </div>
        </div>

        {/* FLOATING BUBBLES */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/10 blur-sm animate-float pointer-events-none z-0"
            style={{
              width: `${Math.random() * 40 + 10}px`,
              height: `${Math.random() * 40 + 10}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 3}s`
            }}
          />
        ))}

        <div className="container relative grid lg:grid-cols-2 gap-12 items-center z-10">
          <div className="flex flex-col items-start gap-8 py-16 text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary">
              <Droplets className="h-4 w-4" />
              Trusted in Hyderabad Since 2016
            </div>
            <h1 className="max-w-xl font-heading text-5xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-6xl">
              Pure Water. <span className="text-gradient-water">Trusted Delivery.</span>
            </h1>
            <p className="max-w-lg text-xl text-muted-foreground leading-relaxed">
              Premium quality RO purified mineral water delivered to your doorstep. Serving Parsigutta, Secunderabad, and across Hyderabad with 100% safety.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" className="h-14 px-8 text-lg rounded-xl shadow-water gap-2" asChild>
                <Link to="/portal/order">
                  Start Subscription <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-xl gap-2" asChild>
                <Link to="/products">View Products</Link>
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-background bg-muted overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium text-muted-foreground">
                Joined by <span className="text-foreground font-bold">1,500+</span> happy families
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-30 animate-pulse" />
            <div className="relative bg-card rounded-[2.5rem] border border-border overflow-hidden shadow-water-lg">
              <img
                src="https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=2070&auto=format&fit=crop"
                alt="Pure mineral water showcase"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white">
                <p className="text-sm font-medium opacity-80">Our Bestseller</p>
                <h4 className="text-xl font-bold">20L Purified Mineral Jar</h4>
                <div className="flex items-center gap-2 mt-2">
                  <div className="flex text-yellow-400">
                    {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
                  </div>
                  <span className="text-sm font-semibold">4.4 / 5 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-12 text-primary-foreground">
        <div className="container overflow-hidden">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-4xl font-bold font-heading mb-1 text-white">8+</h3>
              <p className="text-primary-foreground/80 text-sm font-medium">Years Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold font-heading mb-1 text-white">1.5K+</h3>
              <p className="text-primary-foreground/80 text-sm font-medium">Active Families</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold font-heading mb-1 text-white">100%</h3>
              <p className="text-primary-foreground/80 text-sm font-medium">Safe & Purified</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold font-heading mb-1 text-white">24h</h3>
              <p className="text-primary-foreground/80 text-sm font-medium">Fast Delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 border-b border-border">
        <div className="container">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-4">Why Choose Shiva Ganga?</h2>
            <p className="text-lg text-muted-foreground">We don't just supply water; we deliver health and trust with every jar.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="group p-8 rounded-[2rem] border border-border bg-card transition-all hover:bg-primary/5 hover:border-primary/20 hover:shadow-water relative overflow-hidden">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <f.icon className="h-7 w-7" />
                </div>
                <h3 className="font-heading text-xl font-bold text-card-foreground mb-3">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing/Products */}
      <section id="pricing" className="py-24 bg-muted/30">
        <div className="container">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-4xl font-bold text-foreground mb-4">Our Best Plans</h2>
            <p className="text-lg text-muted-foreground">Competitive prices for all bottle sizes making it accessible for every customer.</p>
          </div>
          <div className="grid max-w-6xl mx-auto gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-[2.5rem] border p-10 transition-all hover:scale-[1.02] ${plan.popular ? "border-primary bg-card shadow-water-lg ring-1 ring-primary/20" : "border-border bg-card"
                  }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-6 py-1.5 text-xs font-bold text-primary-foreground shadow-lg uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <h3 className="font-heading text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{plan.desc}</p>
                <div className="mb-8">
                  <span className="font-heading text-5xl font-extrabold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground font-medium ml-1">{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                      <div className="h-5 w-5 rounded-full bg-success/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="h-3 w-3 text-success" />
                      </div>
                      {feat}
                    </li>
                  ))}
                </ul>
                <Button className="w-full h-14 rounded-xl text-lg font-bold shadow-water" variant={plan.popular ? "default" : "outline"} asChild>
                  <Link to="/portal/order">Select Plan</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-24">
        <div className="rounded-[3rem] gradient-water p-16 text-center text-primary-foreground shadow-water-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold font-heading mb-8">Ready for healthy hydration?</h2>
            <p className="text-xl mb-12 opacity-90 leading-relaxed">
              Join thousands of families in Secunderabad who trust Shiva Ganga for their daily drinking water.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <Button size="lg" variant="secondary" className="h-16 px-10 text-xl font-bold rounded-2xl" asChild>
                <Link to="/portal/order">Order Your First Jar</Link>
              </Button>
              <a href="tel:9949218640" className="flex items-center gap-3 text-2xl font-bold text-white hover:opacity-80 transition-opacity">
                <div className="h-12 w-12 rounded-full border-2 border-white/30 flex items-center justify-center">
                  <Phone className="h-6 w-6" />
                </div>
                91 99492 18640
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
