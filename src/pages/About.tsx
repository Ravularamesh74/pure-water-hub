import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import {
  Shield,
  Target,
  Users,
  History,
  Droplets,
  Truck,
  Award,
  CheckCircle,
} from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-20">

        {/* HERO */}
        <section className="container text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-gradient-water">
            About Shiva Ganga Water Supply
          </h1>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Shiva Ganga Water Supply has been delivering safe and purified
            drinking water across Hyderabad since 2016. Our mission is to
            provide reliable, hygienic, and affordable drinking water to
            households, apartments, and businesses.
          </p>
        </section>

        {/* COMPANY STORY */}
        <section className="container grid md:grid-cols-2 gap-14 items-center mb-24">

          <div className="space-y-6">

            <h2 className="text-3xl font-bold font-heading">
              Our Journey
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Founded in 2016 in Parsigutta, Secunderabad, Shiva Ganga Water
              Supply started as a small local mineral water distribution
              service. Through dedication to quality and customer satisfaction,
              we have expanded our services across multiple areas of Hyderabad.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Today, we supply purified RO drinking water to hundreds of homes,
              offices, apartments, restaurants, and institutions with a strong
              focus on hygiene, quality control, and fast delivery.
            </p>

            <div className="flex items-start gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10">
              <History className="h-6 w-6 text-primary mt-1" />

              <div>
                <h4 className="font-bold">Established in 2016</h4>
                <p className="text-sm text-muted-foreground">
                  8+ years of trusted mineral water supply in Hyderabad.
                </p>
              </div>

            </div>

          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://media.istockphoto.com/id/1207234372/photo/row-of-large-bottles-of-drinking-water-for-the-cooler.jpg?s=612x612&w=0&k=20&c=e6s6ESm9y0Tiov8wDTsHAR07lOYF2SYCrpzXyzHAV10="
              alt="Water purification plant"
              className="w-full h-full object-cover"
            />
          </div>

        </section>

        {/* COMPANY STATS */}
        <section className="container mb-24">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary">8+</h3>
              <p className="text-sm text-muted-foreground">
                Years Experience
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary">5000+</h3>
              <p className="text-sm text-muted-foreground">
                Happy Customers
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary">10000+</h3>
              <p className="text-sm text-muted-foreground">
                Deliveries Completed
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-bold text-primary">25+</h3>
              <p className="text-sm text-muted-foreground">
                Delivery Areas
              </p>
            </div>

          </div>

        </section>

        {/* MISSION / VISION */}
        <section className="container mb-24">

          <div className="grid md:grid-cols-3 gap-8">

            <div className="p-8 rounded-2xl border bg-card hover:shadow-water transition">
              <Target className="h-10 w-10 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To deliver safe and hygienic drinking water with reliable
                doorstep service while maintaining the highest purification
                standards.
              </p>
            </div>

            <div className="p-8 rounded-2xl border bg-card hover:shadow-water transition">
              <Shield className="h-10 w-10 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To become Hyderabad’s most trusted mineral water brand through
                consistent quality, affordable pricing, and exceptional
                customer service.
              </p>
            </div>

            <div className="p-8 rounded-2xl border bg-card hover:shadow-water transition">
              <Users className="h-10 w-10 text-primary mb-6" />
              <h3 className="text-xl font-bold mb-4">Customer First</h3>
              <p className="text-muted-foreground">
                Our customers are at the heart of everything we do. We build
                long-term relationships by providing dependable service.
              </p>
            </div>

          </div>

        </section>

        {/* WHY CHOOSE US */}
        <section className="container mb-24">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading">
              Why Choose Shiva Ganga
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="p-6 border rounded-xl bg-card text-center">
              <Droplets className="h-8 w-8 text-primary mx-auto mb-4" />
              <h4 className="font-bold mb-2">Advanced RO Purification</h4>
              <p className="text-sm text-muted-foreground">
                Multi-stage filtration ensures safe and healthy drinking water.
              </p>
            </div>

            <div className="p-6 border rounded-xl bg-card text-center">
              <Truck className="h-8 w-8 text-primary mx-auto mb-4" />
              <h4 className="font-bold mb-2">Fast Delivery</h4>
              <p className="text-sm text-muted-foreground">
                Same-day delivery available in most Hyderabad areas.
              </p>
            </div>

            <div className="p-6 border rounded-xl bg-card text-center">
              <Award className="h-8 w-8 text-primary mx-auto mb-4" />
              <h4 className="font-bold mb-2">Quality Assurance</h4>
              <p className="text-sm text-muted-foreground">
                Regular quality checks maintain water purity standards.
              </p>
            </div>

            <div className="p-6 border rounded-xl bg-card text-center">
              <CheckCircle className="h-8 w-8 text-primary mx-auto mb-4" />
              <h4 className="font-bold mb-2">Affordable Pricing</h4>
              <p className="text-sm text-muted-foreground">
                Premium mineral water at competitive local prices.
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