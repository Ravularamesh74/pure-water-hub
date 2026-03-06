import { cn } from "@/lib/utils";
import { CheckCircle, Clock, Truck, XCircle, AlertCircle } from "lucide-react";

type Status =
  | "pending"
  | "confirmed"
  | "out_for_delivery"
  | "delivered"
  | "cancelled"
  | "assigned"
  | "in_transit"
  | "failed"
  | "active"
  | "inactive";

interface StatusConfig {
  label: string;
  className: string;
  icon?: React.ElementType;
}

const statusConfig: Record<Status, StatusConfig> = {
  pending: {
    label: "Pending",
    className: "bg-warning/15 text-warning border-warning/30",
    icon: Clock,
  },
  confirmed: {
    label: "Confirmed",
    className: "bg-primary/15 text-primary border-primary/30",
    icon: CheckCircle,
  },
  out_for_delivery: {
    label: "Out for Delivery",
    className: "bg-secondary/15 text-secondary border-secondary/30",
    icon: Truck,
  },
  delivered: {
    label: "Delivered",
    className: "bg-success/15 text-success border-success/30",
    icon: CheckCircle,
  },
  cancelled: {
    label: "Cancelled",
    className: "bg-destructive/15 text-destructive border-destructive/30",
    icon: XCircle,
  },
  assigned: {
    label: "Assigned",
    className: "bg-primary/15 text-primary border-primary/30",
    icon: AlertCircle,
  },
  in_transit: {
    label: "In Transit",
    className: "bg-secondary/15 text-secondary border-secondary/30",
    icon: Truck,
  },
  failed: {
    label: "Failed",
    className: "bg-destructive/15 text-destructive border-destructive/30",
    icon: XCircle,
  },
  active: {
    label: "Active",
    className: "bg-success/15 text-success border-success/30",
    icon: CheckCircle,
  },
  inactive: {
    label: "Inactive",
    className: "bg-muted text-muted-foreground border-border",
    icon: AlertCircle,
  },
};

interface StatusBadgeProps {
  status: Status;
  size?: "sm" | "md";
  showIcon?: boolean;
}

const StatusBadge = ({
  status,
  size = "sm",
  showIcon = false,
}: StatusBadgeProps) => {
  const config = statusConfig[status];

  const Icon = config?.icon;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border font-semibold",
        size === "sm" && "px-2.5 py-0.5 text-xs",
        size === "md" && "px-3 py-1 text-sm",
        config?.className
      )}
    >
      {showIcon && Icon && <Icon className="h-3.5 w-3.5" />}
      {config?.label ?? status}
    </span>
  );
};

export default StatusBadge;