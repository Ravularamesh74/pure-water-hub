import { cn } from "@/lib/utils";
import { LucideIcon, TrendingUp, TrendingDown } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  loading?: boolean;
}

const StatCard = ({
  title,
  value,
  subtitle,
  change,
  changeType = "neutral",
  icon: Icon,
  loading = false,
}: StatCardProps) => {
  if (loading) {
    return (
      <div className="rounded-xl border border-border bg-card p-5 animate-pulse">
        <div className="h-4 w-24 bg-muted rounded mb-3"></div>
        <div className="h-6 w-32 bg-muted rounded mb-2"></div>
        <div className="h-3 w-16 bg-muted rounded"></div>
      </div>
    );
  }

  return (
    <div className="group rounded-xl border border-border bg-card p-5 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
      <div className="flex items-start justify-between">

        {/* TEXT CONTENT */}
        <div className="space-y-1">

          <p className="text-sm font-medium text-muted-foreground">
            {title}
          </p>

          <p className="font-heading text-2xl font-bold text-card-foreground">
            {value}
          </p>

          {subtitle && (
            <p className="text-xs text-muted-foreground">
              {subtitle}
            </p>
          )}

          {change && (
            <div
              className={cn(
                "flex items-center gap-1 text-xs font-semibold",
                changeType === "positive" && "text-green-600",
                changeType === "negative" && "text-red-600",
                changeType === "neutral" && "text-muted-foreground"
              )}
            >
              {changeType === "positive" && (
                <TrendingUp className="h-3.5 w-3.5" />
              )}

              {changeType === "negative" && (
                <TrendingDown className="h-3.5 w-3.5" />
              )}

              {change}
            </div>
          )}

        </div>

        {/* ICON */}
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 transition group-hover:bg-primary/20">
          <Icon className="h-5 w-5 text-primary" />
        </div>

      </div>
    </div>
  );
};

export default StatCard;