import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";
import DeliveryAreas from "./pages/DeliveryAreas";
import Quality from "./pages/Quality";
import Contact from "./pages/Contact";
import CustomerPortal from "./pages/CustomerPortal";
import OrderPage from "./pages/OrderPage";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import NotFound from "./pages/NotFound";
import Welcome from "./pages/Login";
import Unauthorized from "./pages/Unauthorized";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";
import FloatingOrderWidget from "./components/FloatingOrderWidget";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <FloatingOrderWidget />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/services" element={<Services />} />
            <Route path="/delivery-areas" element={<DeliveryAreas />} />
            <Route path="/quality" element={<Quality />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Welcome />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-passwordhub" element={<ForgotPassword />} />
            <Route path="/unauthorized" element={<Unauthorized />} />

            {/* Protected Routes for Auth Users */}
            <Route path="/portal" element={<ProtectedRoute><CustomerPortal /></ProtectedRoute>} />
            <Route
              path="/portal/order"
              element={
                <ProtectedRoute>
                  <OrderPage />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
