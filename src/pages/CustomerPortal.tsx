import {
  Package,
  CalendarDays,
  CreditCard,
  Droplets,
  ArrowRight,
  Truck,
  User,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Pencil,
  Save,
  X
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import Navbar from "@/components/Navbar";
import StatusBadge from "@/components/StatusBadge";
import { toast } from "sonner";

const CustomerPortal = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState<any[]>([]);

  // Profile State
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: "+91 99492 18640",
    address: ""
  });

  // Subscription State
  const [isEditingSub, setIsEditingSub] = useState(false);
  const [subscription, setSubscription] = useState("Weekly supply of 5 Jars (20L) delivered every Monday.");

  useEffect(() => {
    // Load Orders
    const savedOrders = JSON.parse(localStorage.getItem("shiva_orders") || "[]");
    const userOrders = user?.email
      ? savedOrders.filter((o: any) => o.customerEmail === user.email)
      : savedOrders;

    if (userOrders.length === 0 && savedOrders.length === 0) {
      const demoOrder = {
        id: "ORD-001",
        product: "20L Jar x1",
        date: "Today",
        status: "delivered",
        amount: "₹119",
        items: [{ name: "20L Purified Jar", qty: 1, price: 99 }],
        address: "Parsigutta, Secunderabad",
        time: "9:00 AM",
        customerEmail: user?.email
      };
      setOrders([demoOrder]);
    } else {
      setOrders(userOrders);
    }

    // Load Profile
    const savedProfile = JSON.parse(localStorage.getItem(`shiva_profile_${user?.email || "guest"}`) || "null");
    if (savedProfile) {
      setProfile(savedProfile);
    } else {
      setProfile({
        name: user?.username || "Guest Customer",
        email: user?.email || "",
        phone: "+91 99492 18640",
        address: userOrders[0]?.address || "Parsigutta, Secunderabad, Hyderabad"
      });
    }

    // Load Subscription
    const savedSub = localStorage.getItem(`shiva_sub_${user?.email || "guest"}`);
    if (savedSub) setSubscription(savedSub);

  }, [user]);

  const saveProfile = () => {
    localStorage.setItem(`shiva_profile_${user?.email || "guest"}`, JSON.stringify(profile));
    setIsEditingProfile(false);
    toast.success("Profile updated successfully!");
  };

  const saveSubscription = () => {
    localStorage.setItem(`shiva_sub_${user?.email || "guest"}`, subscription);
    setIsEditingSub(false);
    toast.success("Subscription updated!");
  };

  return (
    <div className="relative min-h-screen bg-background pb-20 overflow-hidden">
      <Navbar />

      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent z-0" />

      <div className="relative pt-32 pb-12 z-10 text-center container">
        <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-water-lg mb-6 animate-float">
          <User className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold font-heading mb-2">
          My Portal
        </h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          Welcome back, {profile.name}! Manage your water supply hub.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div className="p-6 rounded-3xl bg-card border shadow-sm flex flex-col items-center hover:shadow-md transition-shadow">
            <Package className="h-6 w-6 text-primary mb-2" />
            <span className="text-2xl font-bold">{orders.length}</span>
            <span className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">Total Orders</span>
          </div>
          <div className="p-6 rounded-3xl bg-card border shadow-sm flex flex-col items-center hover:shadow-md transition-shadow">
            <Truck className="h-6 w-6 text-primary mb-2" />
            <span className="text-2xl font-bold text-success">
              {orders.filter(o => o.status === 'out_for_delivery' || o.status === 'pending').length}
            </span>
            <span className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">In Progress</span>
          </div>
          <div className="p-6 rounded-3xl bg-card border shadow-sm flex flex-col items-center hover:shadow-md transition-shadow">
            <CalendarDays className="h-6 w-6 text-primary mb-2" />
            <span className="text-2xl font-bold text-primary">Active</span>
            <span className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">Delivery Mode</span>
          </div>
          <div className="p-6 rounded-3xl bg-card border shadow-sm flex flex-col items-center hover:shadow-md transition-shadow">
            <CreditCard className="h-6 w-6 text-primary mb-2" />
            <span className="text-xl font-bold">Verified</span>
            <span className="text-xs text-muted-foreground uppercase font-semibold tracking-wider">Payment Status</span>
          </div>
        </div>
      </div>

      <div className="container relative z-10 grid lg:grid-cols-3 gap-8 mt-4">

        {/* LEFT: CUSTOMER DETAILS */}
        <div className="space-y-6">
          <section className="p-8 rounded-3xl border bg-card shadow-sm relative overflow-hidden transition-all duration-300">
            <div className="absolute top-0 right-0 h-24 w-24 bg-primary/5 rounded-full -mr-8 -mt-8" />
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold font-heading flex items-center gap-2">
                <User className="h-5 w-5 text-primary" /> Profile Details
              </h2>
              {!isEditingProfile && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full bg-primary/5 text-primary hover:bg-primary/10"
                  onClick={() => setIsEditingProfile(true)}
                >
                  <Pencil className="h-3 w-3" />
                </Button>
              )}
            </div>

            {isEditingProfile ? (
              <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="space-y-1.5">
                  <Label className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Full Name</Label>
                  <Input
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="rounded-xl border-primary/20 focus:border-primary"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Phone Number</Label>
                  <Input
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    className="rounded-xl border-primary/20"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground">Delivery Address</Label>
                  <Textarea
                    value={profile.address}
                    onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                    className="rounded-xl border-primary/20 min-h-[80px]"
                  />
                </div>
                <div className="flex gap-2 pt-2">
                  <Button className="flex-1 rounded-xl gap-2" onClick={saveProfile}>
                    <Save className="h-4 w-4" /> Save
                  </Button>
                  <Button variant="outline" className="flex-1 rounded-xl" onClick={() => setIsEditingProfile(false)}>
                    <X className="h-4 w-4" /> Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Full Name</p>
                  <p className="font-semibold text-lg">{profile.name}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Email Address</p>
                  <p className="font-medium text-sm text-muted-foreground">{profile.email}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Phone</p>
                  <p className="font-medium">{profile.phone}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Address</p>
                  <p className="font-medium text-sm leading-relaxed text-balance">
                    {profile.address}
                  </p>
                </div>
              </div>
            )}
          </section>

          <section className="p-8 rounded-3xl border bg-primary/5 shadow-sm border-primary/10 relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold flex items-center gap-2">
                <Droplets className="h-4 w-4 text-primary" /> Active Plan
              </h3>
              {!isEditingSub && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 rounded-full hover:bg-primary/10 text-primary"
                  onClick={() => setIsEditingSub(true)}
                >
                  <Pencil className="h-3.5 w-3.5" />
                </Button>
              )}
            </div>

            {isEditingSub ? (
              <div className="space-y-3 animate-in zoom-in-95 duration-200">
                <Textarea
                  value={subscription}
                  onChange={(e) => setSubscription(e.target.value)}
                  className="bg-white rounded-xl text-sm min-h-[100px]"
                />
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 rounded-lg" onClick={saveSubscription}>Save Plan</Button>
                  <Button size="sm" variant="ghost" className="flex-1 rounded-lg" onClick={() => setIsEditingSub(false)}>Cancel</Button>
                </div>
              </div>
            ) : (
              <>
                <p className="text-sm text-muted-foreground leading-relaxed italic pr-4">
                  "{subscription}"
                </p>
                <div className="mt-6 flex gap-2">
                  <Button size="sm" className="flex-1 rounded-lg bg-primary hover:bg-primary/90">Pause Delivery</Button>
                  <Button size="sm" variant="outline" className="flex-1 rounded-lg border-primary/20 text-primary" onClick={() => setIsEditingSub(true)}>Change Plan</Button>
                </div>
              </>
            )}
          </section>
        </div>

        {/* RIGHT: ORDER HISTORY */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold font-heading">Recent Orders</h2>
            <Button variant="ghost" className="text-primary gap-1 group" onClick={() => window.print()}>
              Export History <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="space-y-6">
            {orders.length > 0 ? (
              orders.map((order) => (
                <div key={order.id} className="group p-8 rounded-3xl border bg-card hover:shadow-water-lg transition-all relative overflow-hidden border-transparent hover:border-primary/20 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 rounded-full bg-muted text-[10px] font-bold uppercase tracking-widest">{order.id}</span>
                        <StatusBadge status={order.status} showIcon />
                      </div>
                      <h3 className="text-xl font-bold font-heading pt-2 group-hover:text-primary transition-colors">{order.product}</h3>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <CalendarDays className="h-3 w-3" /> {order.date}
                      </p>
                    </div>
                    <div className="text-left md:text-right">
                      <p className="text-2xl font-bold text-primary">{order.amount}</p>
                      <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter mt-1">{order.time}</p>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-dashed flex flex-wrap gap-x-12 gap-y-6">
                    <div>
                      <h4 className="text-[10px] font-bold uppercase text-muted-foreground mb-3 tracking-widest flex items-center gap-2">
                        <Package className="h-3 w-3" /> Items Breakdown
                      </h4>
                      <ul className="space-y-1.5">
                        {order.items?.map((item: any, idx: number) => (
                          <li key={idx} className="text-sm flex items-center gap-2">
                            <span className="w-5 h-5 rounded-full bg-primary/10 text-primary text-[10px] flex items-center justify-center font-bold">{item.qty}</span>
                            <span className="font-medium">{item.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold uppercase text-muted-foreground mb-3 tracking-widest flex items-center gap-2">
                        <MapPin className="h-3 w-3" /> Delivery Point
                      </h4>
                      <p className="text-sm font-medium max-w-[250px]">{order.address}</p>
                    </div>
                  </div>

                  <div className="absolute top-0 right-0 h-full w-1.5 bg-gradient-to-b from-primary to-primary/40 translate-x-full group-hover:translate-x-0 transition-transform" />
                </div>
              ))
            ) : (
              <div className="p-20 text-center border-2 border-dashed rounded-3xl bg-muted/20">
                <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-semibold mb-2">No activity recorded</h3>
                <p className="text-muted-foreground mb-6 text-sm">You haven't placed any water orders yet. Let's get started!</p>
                <Button asChild className="rounded-2xl px-10 h-12 shadow-md">
                  <Link to="/portal/order">Order Water Now</Link>
                </Button>
              </div>
            )}
          </div>

          {orders.length > 5 && (
            <Button variant="outline" className="w-full h-14 rounded-2xl border-dashed border-2 text-muted-foreground hover:bg-primary/5 transition-colors">
              Load More Activity
            </Button>
          )}
        </div>

      </div>

      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-40">
        <Button size="lg" className="rounded-full h-16 px-10 shadow-water-lg text-lg font-bold gap-3 hover:scale-105 active:scale-95 transition-all animate-bounce" asChild>
          <Link to="/portal/order">
            <Droplets className="h-6 w-6" />
            Place New Order
          </Link>
        </Button>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 pointer-events-none opacity-5">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-full w-full">
          <path d="M0,64L48,64C96,64,192,64,288,74.7C384,85,480,107,576,101.3C672,96,768,64,864,53.3C960,43,1056,53,1152,58.7L1200,64L1200,120L1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="currentColor" className="text-primary" />
        </svg>
      </div>
    </div>
  );
};

export default CustomerPortal;