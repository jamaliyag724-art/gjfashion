import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Package, Truck, CheckCircle, MapPin, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const TrackOrder = () => {
  const [orderId, setOrderId] = useState("");
  const [email, setEmail] = useState("");
  const [isTracking, setIsTracking] = useState(false);
  const [orderStatus, setOrderStatus] = useState<null | {
    orderId: string;
    status: string;
    steps: { label: string; completed: boolean; date?: string }[];
    estimatedDelivery: string;
  }>(null);

  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!orderId || !email) {
      toast({
        title: "Missing Information",
        description: "Please enter both Order ID and Email address.",
        variant: "destructive",
      });
      return;
    }

    setIsTracking(true);
    
    // Simulate API call
    setTimeout(() => {
      setOrderStatus({
        orderId: orderId.toUpperCase(),
        status: "In Transit",
        estimatedDelivery: "December 30, 2024",
        steps: [
          { label: "Order Placed", completed: true, date: "Dec 25, 2024" },
          { label: "Order Confirmed", completed: true, date: "Dec 25, 2024" },
          { label: "Shipped", completed: true, date: "Dec 26, 2024" },
          { label: "In Transit", completed: true, date: "Dec 27, 2024" },
          { label: "Out for Delivery", completed: false },
          { label: "Delivered", completed: false },
        ],
      });
      setIsTracking(false);
    }, 1500);
  };

  const trackOrderSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Track Your Order - GJ Fashion",
    description: "Track your GJ Fashion order status in real-time. Enter your order ID and email to get instant updates on delivery.",
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Track Your Order - Real-Time Order Status"
        description="Track your GJ Fashion order in real-time. Enter your order ID and email to check delivery status, estimated arrival, and shipping updates."
        keywords="track order, order status, delivery tracking, GJ Fashion order, shipping status, order tracking India"
        canonicalUrl="/track-order"
        structuredData={trackOrderSchema}
      />

      <Navbar />

      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-muted to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Package className="h-8 w-8 text-primary" />
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6 animate-fade-in-up">
            Track Your Order
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            Enter your order details to get real-time updates on your delivery
          </p>
        </div>
      </section>

      {/* Track Form Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleTrackOrder} className="bg-card rounded-2xl p-6 md:p-8 shadow-card space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="orderId" className="block text-sm font-medium text-foreground mb-2">
                  Order ID
                </label>
                <Input
                  id="orderId"
                  type="text"
                  placeholder="e.g., GJ12345678"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full"
                />
              </div>
            </div>
            <Button type="submit" className="w-full" disabled={isTracking}>
              {isTracking ? "Tracking..." : "Track Order"}
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              You can find your Order ID in the confirmation email we sent you.
            </p>
          </form>

          {/* Order Status Display */}
          {orderStatus && (
            <div className="mt-12 bg-card rounded-2xl p-6 md:p-8 shadow-card animate-fade-in-up">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-sm text-muted-foreground">Order ID</p>
                  <p className="font-heading text-xl font-medium text-foreground">{orderStatus.orderId}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Status</p>
                  <p className="font-medium text-primary">{orderStatus.status}</p>
                </div>
              </div>

              {/* Progress Steps */}
              <div className="space-y-4">
                {orderStatus.steps.map((step, index) => (
                  <div key={step.label} className="flex items-start gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          step.completed
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {step.completed ? (
                          <CheckCircle className="h-4 w-4" />
                        ) : (
                          <span className="text-xs">{index + 1}</span>
                        )}
                      </div>
                      {index < orderStatus.steps.length - 1 && (
                        <div
                          className={`w-0.5 h-8 ${
                            step.completed && orderStatus.steps[index + 1]?.completed
                              ? "bg-primary"
                              : "bg-border"
                          }`}
                        />
                      )}
                    </div>
                    <div className="flex-1 pb-4">
                      <p className={`font-medium ${step.completed ? "text-foreground" : "text-muted-foreground"}`}>
                        {step.label}
                      </p>
                      {step.date && (
                        <p className="text-sm text-muted-foreground">{step.date}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Estimated Delivery */}
              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center gap-3 text-primary">
                  <Clock className="h-5 w-5" />
                  <span className="font-medium">Estimated Delivery: {orderStatus.estimatedDelivery}</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Help Section */}
      <section className="py-12 bg-muted">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card rounded-xl p-6 text-center">
              <Truck className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-medium text-foreground mb-2">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground">5-7 days standard, 2-3 days express</p>
            </div>
            <div className="bg-card rounded-xl p-6 text-center">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-medium text-foreground mb-2">Pan-India Shipping</h3>
              <p className="text-sm text-muted-foreground">Delivering to 25,000+ pin codes</p>
            </div>
            <div className="bg-card rounded-xl p-6 text-center">
              <Package className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-medium text-foreground mb-2">Easy Returns</h3>
              <p className="text-sm text-muted-foreground">30-day hassle-free returns</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TrackOrder;
