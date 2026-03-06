import { Package, CalendarDays, CreditCard, Droplets, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import StatCard from "@/components/StatCard";
import StatusBadge from "@/components/StatusBadge";

const recentOrders = [
  { id: "ORD-008", product: "20L Jar x5", date: "Mar 5, 2026", status: "out_for_delivery" as const, amount: "₹500" },
  { id: "ORD-007", product: "20L Jar x5", date: "Mar 1, 2026", status: "delivered" as const, amount: "₹500" },
  { id: "ORD-006", product: "15L Jar x3", date: "Feb 25, 2026", status: "delivered" as const, amount: "₹255" },
];

const CustomerPortal = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container pt-24 pb-12">
        <div className="mb-8">
          <h1 className="font-heading text-3xl font-bold text-foreground">Welcome back, Raj 👋</h1>
          <p className="mt-1 text-muted-foreground">Your water subscription is active — next delivery tomorrow</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard icon={Package} title="Total Orders" value="48" change="+3 this month" changeType="positive" />
          <StatCard icon={CalendarDays} title="Active Plan" value="Weekly" change="5 Jars / week" changeType="neutral" />
          <StatCard icon={CreditCard} title="This Month" value="₹2,000" change="4 deliveries" changeType="neutral" />
          <StatCard icon={Droplets} title="Water Quality" value="99.8%" change="Last tested today" changeType="positive" />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* Recent orders */}
          <div className="col-span-2 rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-heading text-lg font-semibold text-card-foreground">Recent Orders</h2>
              <Button variant="ghost" size="sm" className="gap-1 text-primary" asChild>
                <Link to="/portal/order">View All <ArrowRight className="h-3 w-3" /></Link>
              </Button>
            </div>
            <div className="space-y-3">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between rounded-lg border border-border bg-background p-4">
                  <div>
                    <p className="font-medium text-card-foreground">{order.product}</p>
                    <p className="text-xs text-muted-foreground">{order.id} · {order.date}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-heading font-semibold text-card-foreground">{order.amount}</span>
                    <StatusBadge status={order.status} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick actions */}
          <div className="space-y-4">
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="font-heading text-lg font-semibold text-card-foreground">Quick Actions</h2>
              <div className="mt-4 space-y-2">
                <Button className="w-full justify-start gap-2" asChild>
                  <Link to="/portal/order"><Package className="h-4 w-4" /> Place New Order</Link>
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <CalendarDays className="h-4 w-4" /> Modify Subscription
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                  <CreditCard className="h-4 w-4" /> Payment History
                </Button>
              </div>
            </div>

            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6">
              <h3 className="font-heading font-semibold text-foreground">Next Delivery</h3>
              <p className="mt-1 text-sm text-muted-foreground">Tomorrow, 9:00 - 10:00 AM</p>
              <p className="mt-2 text-sm font-medium text-primary">5 × 20L Jars — Ramesh K (Driver)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerPortal;
