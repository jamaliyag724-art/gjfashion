import { Award, Truck, Shield, Headphones } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders above ₹999",
  },
  {
    icon: Shield,
    title: "Secure Payment",
    description: "100% secure checkout",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Finest fabrics only",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "We're here to help",
  },
];

const AboutBrand = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Content */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            About Us
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-6">
            The GJ Fashion Story
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            GJ Fashion is built to deliver modern elegance with premium quality designs 
            for everyday confidence. We believe that fashion should be accessible, 
            sustainable, and empowering. Every piece in our collection is crafted with 
            care, ensuring you look and feel your best.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-medium text-foreground mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutBrand;