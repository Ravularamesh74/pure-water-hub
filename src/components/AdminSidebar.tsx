import {
  LayoutDashboard,
  Package,
  Users,
  Truck,
  BarChart3,
  Settings,
  Droplets,
  CreditCard,
  ClipboardList,
  Bell,
  ChevronLeft,
  ChevronRight,
  User,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";

type NavItem = {
  icon: any;
  label: string;
  path: string;
  badge?: number;
};

type NavGroup = {
  title: string;
  items: NavItem[];
};

const navGroups: NavGroup[] = [
  {
    title: "Overview",
    items: [
      { icon: LayoutDashboard, label: "Dashboard", path: "/shiva-admin" },
      { icon: BarChart3, label: "Analytics", path: "/shiva-admin/analytics" },
    ],
  },
  {
    title: "Operations",
    items: [
      { icon: Package, label: "Orders", path: "/shiva-admin/orders", badge: 12 },
      { icon: Truck, label: "Deliveries", path: "/shiva-admin/deliveries" },
      { icon: ClipboardList, label: "Subscriptions", path: "/shiva-admin/subscriptions" },
    ],
  },
  {
    title: "Management",
    items: [
      { icon: Users, label: "Customers", path: "/shiva-admin/customers" },
      { icon: CreditCard, label: "Payments", path: "/shiva-admin/payments" },
      { icon: Bell, label: "Notifications", path: "/shiva-admin/notifications" },
    ],
  },
  {
    title: "System",
    items: [
      { icon: Settings, label: "Settings", path: "/shiva-admin/settings" },
    ],
  },
];

const AdminSidebar = () => {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-50 flex h-screen flex-col border-r border-sidebar-border bg-sidebar transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="flex h-16 items-center gap-3 border-b border-sidebar-border px-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
          <Droplets className="h-5 w-5 text-white" />
        </div>

        {!collapsed && (
          <div>
            <p className="text-sm font-semibold text-sidebar-foreground">
              Shiva Ganga
            </p>
            <p className="text-xs text-muted-foreground">Water Supply Admin</p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto p-3 space-y-6">

        {navGroups.map((group) => (
          <div key={group.title}>
            {!collapsed && (
              <p className="px-2 pb-2 text-xs font-semibold text-muted-foreground uppercase">
                {group.title}
              </p>
            )}

            <div className="space-y-1">
              {group.items.map((item) => {
                const active = location.pathname === item.path;

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={cn(
                      "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all",
                      active
                        ? "bg-sidebar-accent text-sidebar-primary"
                        : "text-sidebar-foreground/70 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground"
                    )}
                  >
                    <item.icon className="h-5 w-5 shrink-0" />

                    {!collapsed && (
                      <>
                        <span className="flex-1">{item.label}</span>

                        {item.badge && (
                          <span className="rounded-md bg-primary px-2 py-0.5 text-xs text-white">
                            {item.badge}
                          </span>
                        )}
                      </>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}

      </div>

      {/* User Profile */}
      <div className="border-t border-sidebar-border p-3">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted">
            <User className="h-4 w-4" />
          </div>

          {!collapsed && (
            <div className="flex flex-col">
              <span className="text-sm font-medium">Admin</span>
              <span className="text-xs text-muted-foreground">
                admin@shivaganga.com
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Collapse Button */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="flex h-12 items-center justify-center border-t border-sidebar-border hover:bg-sidebar-accent"
      >
        {collapsed ? (
          <ChevronRight className="h-4 w-4" />
        ) : (
          <ChevronLeft className="h-4 w-4" />
        )}
      </button>
    </aside>
  );
};

export default AdminSidebar;