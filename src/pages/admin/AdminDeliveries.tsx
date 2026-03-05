import { MapPin, Clock } from "lucide-react";
import AdminSidebar from "@/components/AdminSidebar";
import StatusBadge from "@/components/StatusBadge";
import { mockDeliveries } from "@/lib/mock-data";

const AdminDeliveries = () => {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <main className="flex-1 pl-60">
        <div className="border-b border-border bg-card px-8 py-5">
          <h1 className="font-heading text-2xl font-bold text-foreground">Deliveries</h1>
          <p className="text-sm text-muted-foreground">Track and manage today's delivery schedule</p>
        </div>
        <div className="p-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {mockDeliveries.map((delivery) => (
              <div key={delivery.id} className="rounded-xl border border-border bg-card p-5 transition-all hover:shadow-water">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="font-heading font-semibold text-card-foreground">{delivery.customerName}</p>
                    <p className="text-xs text-muted-foreground">{delivery.orderId}</p>
                  </div>
                  <StatusBadge status={delivery.status} />
                </div>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 shrink-0" />
                    {delivery.address}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 shrink-0" />
                    {delivery.scheduledTime} — ETA {delivery.estimatedArrival}
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-2 rounded-lg bg-muted px-3 py-2">
                  <div className="h-6 w-6 rounded-full gradient-water" />
                  <span className="text-sm font-medium text-foreground">{delivery.driver}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDeliveries;
