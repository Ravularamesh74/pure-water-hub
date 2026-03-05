import { useState } from "react";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import { toast } from "sonner";

const products = [
  { id: "jar20", name: "20L Purified Jar", price: 99, unit: "per jar" },
  { id: "bottle1l", name: "1L Bottle (Pack of 24)", price: 480, unit: "per pack" },
  { id: "bottle500ml", name: "500ml Bottle (Pack of 48)", price: 720, unit: "per pack" },
  { id: "tanker5k", name: "Bulk Tanker (5,000L)", price: 5000, unit: "per tanker" },
];

const OrderPage = () => {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [deliveryType, setDeliveryType] = useState("one_time");

  const updateQty = (id: string, delta: number) => {
    setCart((prev) => {
      const next = (prev[id] || 0) + delta;
      if (next <= 0) {
        const { [id]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [id]: next };
    });
  };

  const total = Object.entries(cart).reduce((sum, [id, qty]) => {
    const product = products.find((p) => p.id === id);
    return sum + (product?.price || 0) * qty;
  }, 0);

  const handleOrder = () => {
    if (Object.keys(cart).length === 0) {
      toast.error("Please add items to your cart");
      return;
    }
    toast.success("Order placed successfully! You'll receive a confirmation shortly.");
    setCart({});
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container max-w-3xl pt-24 pb-12">
        <h1 className="font-heading text-3xl font-bold text-foreground">Place Your Order</h1>
        <p className="mt-1 text-muted-foreground">Select products and delivery preference</p>

        <div className="mt-8 space-y-4">
          {products.map((product) => (
            <div key={product.id} className="flex items-center justify-between rounded-xl border border-border bg-card p-5">
              <div>
                <h3 className="font-heading font-semibold text-card-foreground">{product.name}</h3>
                <p className="text-sm text-muted-foreground">₹{product.price} {product.unit}</p>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQty(product.id, -1)}>
                  <Minus className="h-3 w-3" />
                </Button>
                <span className="w-8 text-center font-heading font-semibold text-card-foreground">
                  {cart[product.id] || 0}
                </span>
                <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQty(product.id, 1)}>
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-border bg-card p-6">
          <h2 className="font-heading text-lg font-semibold text-card-foreground">Delivery Details</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <Label>Delivery Type</Label>
              <Select value={deliveryType} onValueChange={setDeliveryType}>
                <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="one_time">One-time Order</SelectItem>
                  <SelectItem value="daily">Daily Subscription</SelectItem>
                  <SelectItem value="weekly">Weekly Subscription</SelectItem>
                  <SelectItem value="monthly">Monthly Subscription</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Delivery Address</Label>
              <Input className="mt-1" placeholder="Enter your delivery address" />
            </div>
            <div>
              <Label>Preferred Time Slot</Label>
              <Select defaultValue="morning">
                <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Morning (8 AM - 11 AM)</SelectItem>
                  <SelectItem value="afternoon">Afternoon (12 PM - 3 PM)</SelectItem>
                  <SelectItem value="evening">Evening (4 PM - 7 PM)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Phone Number</Label>
              <Input className="mt-1" placeholder="+91 XXXXX XXXXX" />
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between rounded-xl border border-primary/20 bg-primary/5 p-6">
          <div>
            <p className="text-sm text-muted-foreground">Order Total</p>
            <p className="font-heading text-2xl font-bold text-foreground">₹{total.toLocaleString()}</p>
          </div>
          <Button size="lg" className="gap-2 shadow-water" onClick={handleOrder}>
            <ShoppingCart className="h-4 w-4" /> Place Order
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
