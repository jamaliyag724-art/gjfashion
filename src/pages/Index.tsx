import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

// Import images
import heroBanner from "@/assets/hero-banner.jpg";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";
import product9 from "@/assets/product-9.jpg";

// Product data
const products = [
  { id: 1, name: "Cream Linen Blazer", price: 8999, image: product1 },
  { id: 2, name: "Black Silk Dress", price: 12999, image: product2 },
  { id: 3, name: "Classic White Tee", price: 1999, image: product3 },
  { id: 4, name: "Beige Wool Sweater", price: 5499, image: product4 },
  { id: 5, name: "Navy Tailored Trousers", price: 6999, image: product5 },
  { id: 6, name: "Olive Linen Shirt", price: 3999, image: product6 },
  { id: 7, name: "Camel Wool Coat", price: 18999, image: product7 },
  { id: 8, name: "Gray Cashmere Cardigan", price: 7499, image: product8 },
  { id: 9, name: "Terracotta Midi Skirt", price: 4999, image: product9 },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={heroBanner}
            alt="Fashion hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/40 via-foreground/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-xl animate-fade-in-up">
            <p className="text-sm md:text-base tracking-[0.3em] uppercase text-background/80 mb-4">
              New Collection 2024
            </p>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-light text-background mb-6 leading-[1.1]">
              Timeless
              <br />
              <span className="font-semibold">Elegance</span>
            </h1>
            <p className="text-base md:text-lg text-background/80 mb-8 max-w-md leading-relaxed">
              Discover our curated collection of sophisticated essentials designed for the modern wardrobe.
            </p>
            <Button
              variant="hero"
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Shop Now
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-background/50 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-background/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 md:mb-20">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
              Our Collection
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
              Featured Products
            </h2>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                {...product}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left Column - Info */}
            <div className="space-y-8">
              <div>
                <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
                  Get in Touch
                </p>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground">
                  Contact Us
                </h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                Have a question about our products or need styling advice? 
                We'd love to hear from you. Send us a message and we'll 
                respond as soon as possible.
              </p>
              <div className="space-y-4 pt-4">
                <div>
                  <h4 className="text-sm font-medium tracking-wider uppercase text-muted-foreground mb-1">
                    Email
                  </h4>
                  <p className="text-foreground">hello@elegance.com</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium tracking-wider uppercase text-muted-foreground mb-1">
                    Phone
                  </h4>
                  <p className="text-foreground">+91 98765 43210</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium tracking-wider uppercase text-muted-foreground mb-1">
                    Location
                  </h4>
                  <p className="text-foreground">Mumbai, Maharashtra, India</p>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-card rounded-lg p-6 md:p-8 lg:p-10 shadow-soft">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
