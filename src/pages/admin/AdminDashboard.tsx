import { IndianRupee, Package, Truck, Users, TrendingUp } from "lucide-react";
import AdminSidebar from "@/components/AdminSidebar";
import StatCard from "@/components/StatCard";
import StatusBadge from "@/components/StatusBadge";
import { mockOrders, revenueData } from "@/lib/mock-data";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const AdminDashboard = () => {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 pl-60 transition-all">
        <div className="border-b border-border bg-card px-8 py-5">
          <h1 className="font-heading text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-sm text-muted-foreground">Overview of your water supply operations</p>
        </div>

        <div className="p-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard icon={IndianRupee} title="Revenue (Mar)" value="₹2.8L" change="+12% vs Feb" changeType="positive" />
            <StatCard icon={Package} title="Orders Today" value="42" change="8 pending" changeType="neutral" />
            <StatCard icon={Truck} title="Active Deliveries" value="12" change="3 in transit" changeType="neutral" />
            <StatCard icon={Users} title="Active Customers" value="1,247" change="+38 this month" changeType="positive" />
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {/* Revenue Chart */}
            <div className="col-span-2 rounded-xl border border-border bg-card p-6">
              <div className="mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                <h2 className="font-heading text-lg font-semibold text-card-foreground">Revenue Trend</h2>
              </div>
              <ResponsiveContainer width="100%" height={280}>
                <AreaChart data={revenueData}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(210, 90%, 42%)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(210, 90%, 42%)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(210, 20%, 88%)" />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} stroke="hsl(215, 15%, 50%)" />
                  <YAxis tick={{ fontSize: 12 }} stroke="hsl(215, 15%, 50%)" tickFormatter={(v) => `₹${v / 1000}K`} />
                  <Tooltip formatter={(value: number) => [`₹${value.toLocaleString()}`, "Revenue"]} />
                  <Area type="monotone" dataKey="revenue" stroke="hsl(210, 90%, 42%)" fill="url(#colorRevenue)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Recent Orders */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h2 className="mb-4 font-heading text-lg font-semibold text-card-foreground">Recent Orders</h2>
              <div className="space-y-3">
                {mockOrders.slice(0, 5).map((order) => (
                  <div key={order.id} className="flex items-center justify-between rounded-lg border border-border bg-background p-3">
                    <div>
                      <p className="text-sm font-medium text-card-foreground">{order.customerName}</p>
                      <p className="text-xs text-muted-foreground">{order.id} · {order.product}</p>
                    </div>
                    <StatusBadge status={order.status} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
