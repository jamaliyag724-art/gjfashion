import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import PromoBanner from "@/components/PromoBanner";
import InstagramFeed from "@/components/InstagramFeed";
import SectionDivider from "@/components/SectionDivider";
import AboutBrand from "@/components/AboutBrand";
import ProductFilters from "@/components/ProductFilters";
import CompleteLook from "@/components/CompleteLook";
import HeroSection from "@/components/HeroSection";
import TrustBadges from "@/components/TrustBadges";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Users, ShoppingBag, Shirt, Briefcase, ArrowRight } from "lucide-react";

// Import images
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";
import product9 from "@/assets/product-9.jpg";
import product10 from "@/assets/product-10.jpg";
import product11 from "@/assets/product-11.jpg";
import product12 from "@/assets/product-12.jpg";

// Product data with badges and ratings
const trendingProducts = [
  { id: 1, name: "Cream Linen Blazer", price: 8999, originalPrice: 10999, image: product1, hoverImage: product2, rating: 4.8, badge: "hot" as const },
  { id: 2, name: "Black Silk Dress", price: 12999, image: product2, hoverImage: product1, rating: 4.9, badge: "trending" as const },
  { id: 3, name: "Classic White Tee", price: 1999, originalPrice: 2499, image: product3, hoverImage: product4, rating: 4.5 },
  { id: 4, name: "Beige Wool Sweater", price: 5499, image: product4, hoverImage: product3, rating: 4.7 },
];

const bestSellers = [
  { id: 5, name: "Navy Tailored Trousers", price: 6999, originalPrice: 8499, image: product5, hoverImage: product6, rating: 4.9, badge: "hot" as const },
  { id: 6, name: "Olive Linen Shirt", price: 3999, image: product6, hoverImage: product5, rating: 4.6 },
  { id: 7, name: "Camel Wool Coat", price: 18999, image: product7, hoverImage: product8, rating: 5.0, badge: "trending" as const },
  { id: 8, name: "Gray Cashmere Cardigan", price: 7499, originalPrice: 9499, image: product8, hoverImage: product7, rating: 4.8 },
];

const newArrivals = [
  { id: 9, name: "Terracotta Midi Skirt", price: 4999, image: product9, hoverImage: product10, rating: 4.7, badge: "new" as const },
  { id: 10, name: "Men's Navy Suit Jacket", price: 14999, originalPrice: 17999, image: product10, hoverImage: product9, rating: 4.9, badge: "new" as const },
  { id: 11, name: "Men's Oxford Shirt", price: 2999, image: product11, hoverImage: product12, rating: 4.5, badge: "new" as const },
  { id: 12, name: "Men's Slim Fit Chinos", price: 4499, originalPrice: 5499, image: product12, hoverImage: product11, rating: 4.6, badge: "new" as const },
];

const categories = [
  { name: "Men", icon: Users, count: 45, slug: "men" },
  { name: "Women", icon: ShoppingBag, count: 62, slug: "women" },
  { name: "Blazers", icon: Briefcase, count: 24, slug: "blazers" },
  { name: "Shirts", icon: Shirt, count: 48, slug: "shirts" },
  { name: "Trousers", icon: ShoppingBag, count: 32, slug: "trousers" },
];

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Premium Men's & Women's Fashion India | Online Clothing Store"
        description="Shop premium quality men's and women's fashion at GJ Fashion. Discover blazers, shirts, trousers, dresses & more. Free shipping across India on orders above ₹2999."
        keywords="GJ Fashion, online fashion store India, men's clothing, women's clothing, premium fashion, blazers, shirts, trousers, dresses"
        canonicalUrl="/"
      />
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Trust Badges */}
      <TrustBadges />

      {/* Categories Section */}
      <section id="categories" className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">Explore</p>
            <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground">Shop by Category</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {categories.map((category, index) => (
              <div
                key={category.name}
                onClick={() => navigate(`/shop?category=${category.slug}`)}
                className="group bg-card rounded-2xl p-6 text-center cursor-pointer shadow-card hover:shadow-lg transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <category.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-heading text-lg font-medium text-foreground mb-1 group-hover:text-primary transition-colors">{category.name}</h3>
                <p className="text-sm text-muted-foreground">{category.count} Items</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Trending Now */}
      <section id="trending" className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
            <div>
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">🔥 Hot Right Now</p>
              <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground">Trending Now</h2>
            </div>
            <div className="flex items-center gap-4">
              <ProductFilters />
              <Button 
                variant="ghost" 
                onClick={() => navigate('/shop')}
                className="group"
              >
                View All
                <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingProducts.map((product, index) => <ProductCard key={product.id} {...product} delay={index * 100} />)}
          </div>
        </div>
      </section>

      {/* Promo Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <PromoBanner title="Flat 20% Off on Summer Wear" subtitle="Use code SUMMER20 at checkout" variant="primary" />
      </div>

      {/* Best Sellers */}
      <section id="best-sellers" className="py-16 md:py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">⭐ Customer Favorites</p>
              <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground">Best Sellers</h2>
            </div>
            <Button 
              variant="ghost" 
              onClick={() => navigate('/shop')}
              className="group"
            >
              View All
              <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((product, index) => <ProductCard key={product.id} {...product} delay={index * 100} />)}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* New Arrivals */}
      <section id="new-arrivals" className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2">✨ Just Landed</p>
              <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground">New Arrivals</h2>
            </div>
            <Button 
              variant="ghost" 
              onClick={() => navigate('/shop')}
              className="group"
            >
              View All
              <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newArrivals.map((product, index) => <ProductCard key={product.id} {...product} delay={index * 100} />)}
          </div>
        </div>
      </section>

      {/* Complete the Look */}
      <CompleteLook />

      {/* Testimonials */}
      <Testimonials />

      {/* About Brand */}
      <AboutBrand />

      {/* Instagram Feed */}
      <InstagramFeed />

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-8">
              <div>
                <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">Get in Touch</p>
                <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground">Contact Us</h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                Have a question about our products or need styling advice? We'd love to hear from you.
              </p>
              <div className="space-y-4 pt-4">
                <div>
                  <h4 className="text-sm font-medium tracking-wider uppercase text-muted-foreground mb-1">Email</h4>
                  <p className="text-foreground">gaurangjamaliya67@gmail.com</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium tracking-wider uppercase text-muted-foreground mb-1">Location</h4>
                  <p className="text-foreground">Ahmedabad, Mumbai, Delhi, Kolkata, India</p>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-2xl p-6 md:p-8 lg:p-10 shadow-soft">
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
