import { Shield, Truck, RotateCcw, CreditCard } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "Premium Quality",
    description: "Handpicked fabrics and meticulous craftsmanship",
  },
  {
    icon: RotateCcw,
    title: "Easy Returns",
    description: "30-day hassle-free return policy",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Free shipping on orders above ₹2,999",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "100% secure payment gateway",
  },
];

const TrustBadges = () => {
  return (
    <section className="py-16 md:py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Why Choose Us
          </p>
          <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground">
            The GJ Fashion Promise
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <div
              key={item.title}
              className="group bg-card rounded-2xl p-6 text-center shadow-card hover:shadow-lg transition-all duration-500 hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-5 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
