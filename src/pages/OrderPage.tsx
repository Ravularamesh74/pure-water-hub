import { useState } from "react";
import {
  Minus,
  Plus,
  ShoppingCart,
  Trash2,
  Truck,
  Droplets,
  Package,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import Navbar from "@/components/Navbar";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: "jar20",
    name: "20 Litre Jar",
    price: 90,
    unit: "per jar",
    type: "jar",
    highlight: "Popular Choice",
  },
  {
    id: "jar10",
    name: "10 Litre Jar",
    price: 108,
    unit: "per jar",
    type: "jar",
  },
  {
    id: "jar5",
    name: "5 Litre Jar",
    price: 68,
    unit: "per jar",
    type: "jar",
  },
  {
    id: "case2L",
    name: "2L Case (9 pcs)",
    price: 243,
    unit: "per case",
    type: "case",
  },
  {
    id: "case1L",
    name: "1L Case (12 pcs)",
    price: 216,
    unit: "per case",
    type: "case",
  },
  {
    id: "case500",
    name: "500ml Case (24 pcs)",
    price: 216,
    unit: "per case",
    type: "case",
  },
  {
    id: "case250",
    name: "250ml Case (24 pcs)",
    price: 132,
    unit: "per case",
    type: "case",
  },
  {
    id: "case200",
    name: "200ml Case (48 pcs)",
    price: 216,
    unit: "per case",
    type: "case",
  }
];

const OrderPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [cart, setCart] = useState<Record<string, number>>({});
  const [deliveryType, setDeliveryType] = useState("one_time");
  const [address, setAddress] = useState("");
  const [time, setTime] = useState("morning");
  const [phone, setPhone] = useState("+91 ");

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

  const removeItem = (id: string) => {
    setCart((prev) => {
      const { [id]: _, ...rest } = prev;
      return rest;
    });
  };

  const subtotal = Object.entries(cart).reduce((sum, [id, qty]) => {
    const product = products.find((p) => p.id === id);
    return sum + (product?.price || 0) * qty;
  }, 0);

  const deliveryFee = subtotal > 0 ? 30 : 0;
  const total = subtotal + deliveryFee;

  const handleOrder = () => {
    if (Object.keys(cart).length === 0) {
      toast.error("Please add items to your cart");
      return;
    }

    if (!address) {
      toast.error("Please enter a delivery address");
      return;
    }

    const orderItems = Object.entries(cart).map(([id, qty]) => {
      const p = products.find(prod => prod.id === id);
      return { name: p?.name, qty, price: p?.price };
    });

    const orderId = `ORD-${Math.floor(Math.random() * 9000) + 1000}`;
    const preferredSlot = time === 'morning' ? '8AM - 11AM' : time === 'afternoon' ? '12PM - 3PM' : '4PM - 7PM';

    const newOrder = {
      id: orderId,
      product: orderItems.map(i => `${i.name} x${i.qty}`).join(', '),
      date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
      status: 'pending',
      amount: `₹${total}`,
      items: orderItems,
      address,
      time: preferredSlot,
      customerEmail: user?.email,
      customerPhone: phone
    };

    // Save to local storage for portal view
    const existingOrders = JSON.parse(localStorage.getItem('shiva_orders') || '[]');
    localStorage.setItem('shiva_orders', JSON.stringify([newOrder, ...existingOrders]));

    // GENERATE WHATSAPP MESSAGE
    const adminPhone = "919949218640";
    const itemsList = orderItems.map(i => `- ${i.name} x${i.qty}`).join('%0A');
    const message = `*NEW ORDER BOOKED*%0A%0A*Order ID:* ${orderId}%0A*Items:*%0A${itemsList}%0A%0A*Total:* ₹${total}%0A%0A*Address:* ${address}%0A*Preferred Slot:* ${preferredSlot}%0A*Phone:* ${phone}%0A%0A_Sent from Siva Ganga Water Supply Portal_`;

    toast.success("Order confirmed! Sending details to WhatsApp...");

    setCart({});

    // Open WhatsApp
    setTimeout(() => {
      window.open(`https://wa.me/${adminPhone}?text=${message}`, '_blank');
      navigate('/portal');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background pb-20">

      <Navbar />

      <div className="container max-w-5xl pt-32 pb-16">

        <div className="flex flex-col md:flex-row justify-between items-start gap-12">

          {/* LEFT: PRODUCT SELECTION */}
          <div className="flex-1 w-full">
            <h1 className="text-4xl font-heading font-bold mb-2 tracking-tight">
              Quick <span className="text-primary italic">Hydration</span> Ordering
            </h1>

            <p className="text-muted-foreground mb-8">
              Select your preferred jars or cases below.
            </p>

            <div className="grid gap-4">

              {products.map((product) => (

                <div
                  key={product.id}
                  className="flex items-center justify-between rounded-3xl border bg-card p-6 hover:shadow-md transition-all border-primary/5 hover:border-primary/20"
                >

                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {product.type === 'jar' ? <Droplets className="h-4 w-4 text-primary" /> : <Package className="h-4 w-4 text-primary" />}
                      <h3 className="font-heading font-bold text-lg">
                        {product.name}
                      </h3>
                    </div>

                    <p className="text-sm font-bold text-primary">
                      ₹{product.price} <span className="text-muted-foreground font-normal">{product.unit}</span>
                    </p>

                    {product.highlight && (
                      <span className="inline-block mt-2 px-3 py-1 bg-primary/5 text-primary text-[10px] uppercase font-bold tracking-widest rounded-full">
                        {product.highlight}
                      </span>
                    )}

                  </div>

                  <div className="flex items-center gap-4 bg-muted/30 p-2 rounded-2xl">

                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9 bg-white shadow-sm hover:bg-primary/5"
                      onClick={() => updateQty(product.id, -1)}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>

                    <span className="w-6 text-center font-bold text-lg">
                      {cart[product.id] || 0}
                    </span>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9 bg-white shadow-sm hover:bg-primary/5"
                      onClick={() => updateQty(product.id, 1)}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>

                  </div>

                </div>

              ))}

            </div>
          </div>

          {/* RIGHT: CHECKOUT PANELS */}
          <div className="w-full lg:w-[400px] space-y-6">

            {/* DELIVERY SELECTION */}
            <div className="rounded-[2.5rem] border bg-card p-8 shadow-sm">
              <h2 className="font-heading text-xl font-bold mb-6 flex items-center gap-2">
                <Truck className="h-5 w-5 text-primary" /> Delivery Setup
              </h2>

              <div className="space-y-5">
                <div className="space-y-2">
                  <Label className="uppercase text-[10px] font-bold tracking-widest text-muted-foreground">Address</Label>
                  <Input
                    placeholder="Plot No, Street, Landmark"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="rounded-2xl h-11 border-primary/10 focus:border-primary transition-all"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="uppercase text-[10px] font-bold tracking-widest text-muted-foreground">Preferred Slot</Label>
                    <Select value={time} onValueChange={setTime}>
                      <SelectTrigger className="rounded-xl h-11 border-primary/10">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">Morning (8-11)</SelectItem>
                        <SelectItem value="afternoon">Afternoon (12-3)</SelectItem>
                        <SelectItem value="evening">Evening (4-7)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label className="uppercase text-[10px] font-bold tracking-widest text-muted-foreground">Frequency</Label>
                    <Select value={deliveryType} onValueChange={setDeliveryType}>
                      <SelectTrigger className="rounded-xl h-11 border-primary/10">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="one_time">One-time</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="uppercase text-[10px] font-bold tracking-widest text-muted-foreground">WhatsApp No.</Label>
                  <Input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="rounded-2xl h-11 border-primary/10"
                  />
                </div>
              </div>
            </div>

            {/* FINAL SUMMARY */}
            <div className="rounded-[2.5rem] bg-primary text-primary-foreground p-8 shadow-water-lg">
              <h2 className="font-heading text-xl font-bold mb-6">Order Total</h2>

              <div className="space-y-3 mb-8 opacity-90">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Delivery Fee</span>
                  <span>₹{deliveryFee}</span>
                </div>
                <div className="h-[1px] bg-white/20 mt-2" />
                <div className="flex justify-between items-end pt-2">
                  <span className="font-bold text-lg">Pay Total</span>
                  <span className="text-3xl font-black italic">₹{total}</span>
                </div>
              </div>

              <Button
                size="lg"
                variant="secondary"
                className="w-full h-14 rounded-2xl text-lg font-bold gap-2 text-primary group"
                onClick={handleOrder}
                disabled={subtotal === 0}
              >
                <ShoppingCart className="h-5 w-5 transition-transform group-hover:scale-110" />
                Confirm & Place
              </Button>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default OrderPage;