import { cn } from "@/lib/utils";

const statusStyles: Record<string, string> = {
  pending: "bg-warning/15 text-warning border-warning/30",
  confirmed: "bg-primary/15 text-primary border-primary/30",
  out_for_delivery: "bg-secondary/15 text-secondary border-secondary/30",
  delivered: "bg-success/15 text-success border-success/30",
  cancelled: "bg-destructive/15 text-destructive border-destructive/30",
  assigned: "bg-primary/15 text-primary border-primary/30",
  in_transit: "bg-secondary/15 text-secondary border-secondary/30",
  failed: "bg-destructive/15 text-destructive border-destructive/30",
  active: "bg-success/15 text-success border-success/30",
  inactive: "bg-muted text-muted-foreground border-border",
};

const statusLabels: Record<string, string> = {
  pending: "Pending",
  confirmed: "Confirmed",
  out_for_delivery: "Out for Delivery",
  delivered: "Delivered",
  cancelled: "Cancelled",
  assigned: "Assigned",
  in_transit: "In Transit",
  failed: "Failed",
  active: "Active",
  inactive: "Inactive",
};

const StatusBadge = ({ status }: { status: string }) => (
  <span className={cn(
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold",
    statusStyles[status] || "bg-muted text-muted-foreground"
  )}>
    {statusLabels[status] || status}
  </span>
);

export default StatusBadge;
