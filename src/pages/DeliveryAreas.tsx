import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import {
  MapPin,
  Search,
  Check,
  Truck,
  Clock,
  Droplets,
  Phone
} from "lucide-react";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const areas = [
  "Parsigutta",
  "Secunderabad",
  "Warasiguda",
  "Padmarao Nagar",
  "Srinivas Nagar X Road",
  "Musheerabad",
  "Ramnagar",
  "Chilkalguda",
  "Mettuguda",
  "Tarnaka",
  "Sitaphalmandi",
  "Amberpet",
];

const DeliveryAreas = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAreas = areas.filter((area) =>
    area.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">

      <Navbar />

      <main className="pt-32 pb-24">

        {/* HERO */}
        <section className="container text-center mb-20">

          <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-gradient-water">
            Delivery Service Areas
          </h1>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Shiva Ganga Water Supply delivers purified mineral water across
            Secunderabad and surrounding Hyderabad locations with reliable
            and fast doorstep delivery.
          </p>

        </section>

        {/* SERVICE STATS */}
        <section className="container mb-20">

          <div className="grid sm:grid-cols-3 gap-6">

            <div className="p-6 border rounded-2xl bg-card text-center">
              <Droplets className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="text-2xl font-bold">12+</h3>
              <p className="text-sm text-muted-foreground">
                Delivery Areas Covered
              </p>
            </div>

            <div className="p-6 border rounded-2xl bg-card text-center">
              <Truck className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="text-2xl font-bold">Same Day</h3>
              <p className="text-sm text-muted-foreground">
                Delivery Available
              </p>
            </div>

            <div className="p-6 border rounded-2xl bg-card text-center">
              <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="text-2xl font-bold">7AM – 9PM</h3>
              <p className="text-sm text-muted-foreground">
                Delivery Hours
              </p>
            </div>

          </div>

        </section>

        {/* MAIN GRID */}
        <section className="container">

          <div className="grid lg:grid-cols-3 gap-12">

            {/* AREA LIST */}
            <div className="lg:col-span-2">

              {/* SEARCH */}
              <div className="mb-10 relative">

                <Input
                  placeholder="Search your delivery area..."
                  className="h-14 pl-12 rounded-2xl border-2 border-primary/20 focus:border-primary text-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />

                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-6 w-6" />

              </div>

              {/* AREA GRID */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

                {filteredAreas.length > 0 ? (
                  filteredAreas.map((area) => (

                    <div
                      key={area}
                      className="group flex items-center gap-3 p-5 rounded-2xl border bg-card hover:bg-primary/5 hover:border-primary transition cursor-pointer"
                    >

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition">
                        <MapPin className="h-5 w-5" />
                      </div>

                      <div className="flex flex-col">

                        <span className="font-semibold">
                          {area}
                        </span>

                        <span className="text-xs text-green-600 flex items-center gap-1">
                          <Check className="h-3 w-3" />
                          Delivery Available
                        </span>

                      </div>

                    </div>

                  ))
                ) : (

                  <div className="col-span-full py-24 text-center border-2 border-dashed border-muted rounded-3xl">

                    <p className="text-muted-foreground text-lg">
                      No delivery service found for "{searchTerm}"
                    </p>

                    <p className="text-sm text-muted-foreground mt-2">
                      Try searching nearby areas or contact us.
                    </p>

                  </div>

                )}

              </div>

            </div>

            {/* SIDEBAR */}
            <div className="space-y-6">

              {/* DELIVERY PROMISE */}
              <div className="p-8 rounded-3xl gradient-water text-primary-foreground shadow-water-lg">

                <h3 className="text-2xl font-bold mb-6">
                  Delivery Promise
                </h3>

                <ul className="space-y-6">

                  <li className="flex items-start gap-4">
                    <Clock className="h-6 w-6" />

                    <div>
                      <p className="font-bold">
                        Next Day Delivery
                      </p>

                      <p className="text-sm text-primary-foreground/80">
                        Order before 5 PM to get delivery tomorrow.
                      </p>

                    </div>

                  </li>

                  <li className="flex items-start gap-4">
                    <Check className="h-6 w-6" />

                    <div>
                      <p className="font-bold">
                        Free Delivery
                      </p>

                      <p className="text-sm text-primary-foreground/80">
                        No shipping charges for regular customers.
                      </p>

                    </div>

                  </li>

                  <li className="flex items-start gap-4">
                    <Truck className="h-6 w-6" />

                    <div>
                      <p className="font-bold">
                        Safe Doorstep Delivery
                      </p>

                      <p className="text-sm text-primary-foreground/80">
                        Hygienic and contactless service.
                      </p>

                    </div>

                  </li>

                </ul>

              </div>

              {/* CTA CARD */}
              <div className="p-8 rounded-3xl border bg-card hover:shadow-water transition">

                <h4 className="text-xl font-bold mb-3">
                  Don't see your area?
                </h4>

                <p className="text-muted-foreground text-sm mb-6">
                  We're expanding our delivery network. Contact us to check
                  availability in your location.
                </p>

                <div className="space-y-3">

                  <Button className="w-full gap-2">
                    <Truck className="h-4 w-4" />
                    Request Delivery
                  </Button>

                  <a
                    href="tel:9949218640"
                    className="flex items-center justify-center gap-2 text-primary font-semibold"
                  >
                    <Phone className="h-4 w-4" />
                    Call: +91 99492 18640
                  </a>

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

export default DeliveryAreas;