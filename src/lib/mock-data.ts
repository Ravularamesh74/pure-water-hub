export interface Order {
  id: string;
  customerName: string;
  customerId: string;
  product: string;
  quantity: number;
  status: "pending" | "confirmed" | "out_for_delivery" | "delivered" | "cancelled";
  date: string;
  amount: number;
  address: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  type: "residential" | "commercial" | "institutional";
  subscriptionPlan: string | null;
  totalOrders: number;
  joinedDate: string;
  status: "active" | "inactive";
}

export interface Delivery {
  id: string;
  orderId: string;
  customerName: string;
  address: string;
  driver: string;
  status: "assigned" | "in_transit" | "delivered" | "failed";
  scheduledTime: string;
  estimatedArrival: string;
}

export const mockOrders: Order[] = [
  { id: "ORD-001", customerName: "Raj Kumar", customerId: "C-001", product: "20L Jar", quantity: 5, status: "delivered", date: "2026-03-05", amount: 500, address: "12 MG Road, Hyderabad" },
  { id: "ORD-002", customerName: "Priya Sharma", customerId: "C-002", product: "1L Bottle (Pack of 24)", quantity: 2, status: "out_for_delivery", date: "2026-03-05", amount: 960, address: "45 Jubilee Hills, Hyderabad" },
  { id: "ORD-003", customerName: "Tech Solutions Pvt Ltd", customerId: "C-003", product: "20L Jar", quantity: 20, status: "confirmed", date: "2026-03-05", amount: 2000, address: "HITEC City, Hyderabad" },
  { id: "ORD-004", customerName: "Ananya Reddy", customerId: "C-004", product: "500ml Bottle (Pack of 48)", quantity: 1, status: "pending", date: "2026-03-04", amount: 720, address: "Banjara Hills, Hyderabad" },
  { id: "ORD-005", customerName: "City Hospital", customerId: "C-005", product: "Bulk Tanker (5000L)", quantity: 1, status: "confirmed", date: "2026-03-04", amount: 5000, address: "Secunderabad, Hyderabad" },
  { id: "ORD-006", customerName: "Meera Patel", customerId: "C-006", product: "20L Jar", quantity: 3, status: "delivered", date: "2026-03-03", amount: 300, address: "Gachibowli, Hyderabad" },
  { id: "ORD-007", customerName: "Green Valley School", customerId: "C-007", product: "20L Jar", quantity: 15, status: "delivered", date: "2026-03-03", amount: 1500, address: "Madhapur, Hyderabad" },
  { id: "ORD-008", customerName: "Vikram Singh", customerId: "C-008", product: "1L Bottle (Pack of 24)", quantity: 3, status: "pending", date: "2026-03-04", amount: 1440, address: "Kukatpally, Hyderabad" },
];

export const mockCustomers: Customer[] = [
  { id: "C-001", name: "Raj Kumar", email: "raj@email.com", phone: "+91 9876543210", address: "12 MG Road, Hyderabad", type: "residential", subscriptionPlan: "Weekly - 5 Jars", totalOrders: 48, joinedDate: "2025-06-15", status: "active" },
  { id: "C-002", name: "Priya Sharma", email: "priya@email.com", phone: "+91 9876543211", address: "45 Jubilee Hills, Hyderabad", type: "residential", subscriptionPlan: "Monthly - Bottles", totalOrders: 12, joinedDate: "2025-11-01", status: "active" },
  { id: "C-003", name: "Tech Solutions Pvt Ltd", email: "admin@techsol.com", phone: "+91 4012345678", address: "HITEC City, Hyderabad", type: "commercial", subscriptionPlan: "Daily - 20 Jars", totalOrders: 280, joinedDate: "2025-01-10", status: "active" },
  { id: "C-004", name: "Ananya Reddy", email: "ananya@email.com", phone: "+91 9876543212", address: "Banjara Hills, Hyderabad", type: "residential", subscriptionPlan: null, totalOrders: 5, joinedDate: "2026-01-20", status: "active" },
  { id: "C-005", name: "City Hospital", email: "procurement@cityhospital.com", phone: "+91 4012345679", address: "Secunderabad, Hyderabad", type: "institutional", subscriptionPlan: "Weekly - Tanker", totalOrders: 104, joinedDate: "2024-08-01", status: "active" },
  { id: "C-006", name: "Meera Patel", email: "meera@email.com", phone: "+91 9876543213", address: "Gachibowli, Hyderabad", type: "residential", subscriptionPlan: "Bi-weekly - 3 Jars", totalOrders: 22, joinedDate: "2025-09-12", status: "active" },
  { id: "C-007", name: "Green Valley School", email: "office@gvs.edu", phone: "+91 4012345680", address: "Madhapur, Hyderabad", type: "institutional", subscriptionPlan: "Daily - 15 Jars", totalOrders: 350, joinedDate: "2024-04-01", status: "active" },
  { id: "C-008", name: "Vikram Singh", email: "vikram@email.com", phone: "+91 9876543214", address: "Kukatpally, Hyderabad", type: "residential", subscriptionPlan: null, totalOrders: 3, joinedDate: "2026-02-01", status: "inactive" },
];

export const mockDeliveries: Delivery[] = [
  { id: "DEL-001", orderId: "ORD-002", customerName: "Priya Sharma", address: "45 Jubilee Hills", driver: "Ramesh K", status: "in_transit", scheduledTime: "10:00 AM", estimatedArrival: "10:45 AM" },
  { id: "DEL-002", orderId: "ORD-003", customerName: "Tech Solutions Pvt Ltd", address: "HITEC City", driver: "Suresh M", status: "assigned", scheduledTime: "11:00 AM", estimatedArrival: "11:30 AM" },
  { id: "DEL-003", orderId: "ORD-005", customerName: "City Hospital", address: "Secunderabad", driver: "Tanker-01", status: "assigned", scheduledTime: "2:00 PM", estimatedArrival: "3:00 PM" },
  { id: "DEL-004", orderId: "ORD-001", customerName: "Raj Kumar", address: "12 MG Road", driver: "Ramesh K", status: "delivered", scheduledTime: "9:00 AM", estimatedArrival: "9:20 AM" },
  { id: "DEL-005", orderId: "ORD-006", customerName: "Meera Patel", address: "Gachibowli", driver: "Suresh M", status: "delivered", scheduledTime: "8:30 AM", estimatedArrival: "9:00 AM" },
];

export const revenueData = [
  { month: "Oct", revenue: 185000, orders: 420 },
  { month: "Nov", revenue: 210000, orders: 480 },
  { month: "Dec", revenue: 195000, orders: 450 },
  { month: "Jan", revenue: 240000, orders: 520 },
  { month: "Feb", revenue: 265000, orders: 580 },
  { month: "Mar", revenue: 280000, orders: 610 },
];
