import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <img 
          src={heroBanner} 
          alt="Premium fashion collection" 
          className="w-full h-full object-cover scale-105 animate-slow-zoom" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm border border-background/20 rounded-full px-4 py-2 mb-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm tracking-[0.2em] uppercase text-background/90">
              New Collection 2025
            </span>
          </div>

          {/* Headline */}
          <h1 
            className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-background mb-6 leading-[1.1] animate-fade-in-up"
            style={{ animationDelay: '400ms' }}
          >
            Premium Fashion for{" "}
            <span className="font-semibold italic">Modern Style</span>
          </h1>

          {/* Subheadline */}
          <p 
            className="text-lg md:text-xl text-background/80 mb-10 max-w-lg leading-relaxed animate-fade-in-up font-sans"
            style={{ animationDelay: '600ms' }}
          >
            Discover the latest trends in men's and women's wear. Curated for confidence, designed for comfort.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: '800ms' }}
          >
            <Button 
              variant="hero"
              onClick={() => navigate('/shop?category=men')}
              className="group"
            >
              Shop Men
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="heroOutline"
              onClick={() => navigate('/shop?category=women')}
              className="group"
            >
              Shop Women
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Stats */}
          <div 
            className="flex gap-8 mt-12 pt-8 border-t border-background/20 animate-fade-in-up"
            style={{ animationDelay: '1000ms' }}
          >
            <div>
              <p className="font-heading text-3xl md:text-4xl font-semibold text-background">500+</p>
              <p className="text-sm text-background/60 uppercase tracking-wider">Products</p>
            </div>
            <div>
              <p className="font-heading text-3xl md:text-4xl font-semibold text-background">10K+</p>
              <p className="text-sm text-background/60 uppercase tracking-wider">Happy Customers</p>
            </div>
            <div>
              <p className="font-heading text-3xl md:text-4xl font-semibold text-background">4.9</p>
              <p className="text-sm text-background/60 uppercase tracking-wider">Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-background/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-background/60 rounded-full animate-scroll-down" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-32 h-32 border border-background/10 rounded-full hidden lg:block animate-pulse" />
      <div className="absolute bottom-1/4 right-20 w-16 h-16 border border-background/10 rounded-full hidden lg:block animate-pulse" style={{ animationDelay: '500ms' }} />
    </section>
  );
};

export default HeroSection;
