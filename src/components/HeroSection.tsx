import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="GJ Fashion premium collection"
          className="w-full h-full object-cover scale-105 animate-slow-zoom"
          loading="eager"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-charcoal/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-md border border-background/20 rounded-full px-5 py-2.5 mb-8 animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary" />
            </span>
            <span className="text-sm tracking-[0.2em] uppercase text-background/90 font-medium">
              New Collection 2025
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-heading text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-background mb-6 leading-[1.05] animate-fade-in-up"
            style={{ animationDelay: "400ms" }}
          >
            Premium Fashion for{" "}
            <span className="font-semibold italic bg-gradient-to-r from-primary to-gold bg-clip-text text-transparent">
              Modern Style
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl text-background/80 mb-10 max-w-lg leading-relaxed animate-fade-in-up font-sans"
            style={{ animationDelay: "600ms" }}
          >
            Discover the latest trends in men's and women's wear. Curated for
            confidence, designed for comfort.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: "800ms" }}
          >
            <Button
              variant="hero"
              onClick={() => navigate("/shop")}
              className="group"
              aria-label="Shop now"
            >
              Shop Now
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="heroOutline"
              onClick={() => navigate("/shop?category=new")}
              className="group"
              aria-label="Explore collection"
            >
              <Play className="h-4 w-4 mr-2" />
              Explore Collection
            </Button>
          </div>

          {/* Stats */}
          <div
            className="flex gap-8 md:gap-12 mt-14 pt-8 border-t border-background/20 animate-fade-in-up"
            style={{ animationDelay: "1000ms" }}
          >
            <div className="text-center sm:text-left">
              <p className="font-heading text-3xl md:text-4xl font-bold text-background">
                500+
              </p>
              <p className="text-xs md:text-sm text-background/60 uppercase tracking-wider mt-1">
                Products
              </p>
            </div>
            <div className="text-center sm:text-left">
              <p className="font-heading text-3xl md:text-4xl font-bold text-background">
                10K+
              </p>
              <p className="text-xs md:text-sm text-background/60 uppercase tracking-wider mt-1">
                Happy Customers
              </p>
            </div>
            <div className="text-center sm:text-left">
              <p className="font-heading text-3xl md:text-4xl font-bold text-background">
                4.9
              </p>
              <p className="text-xs md:text-sm text-background/60 uppercase tracking-wider mt-1">
                Rating
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-background/40 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-background/60 rounded-full animate-scroll-down" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-32 h-32 border border-background/10 rounded-full hidden lg:block animate-pulse" />
      <div
        className="absolute bottom-1/4 right-20 w-16 h-16 border border-background/10 rounded-full hidden lg:block animate-pulse"
        style={{ animationDelay: "500ms" }}
      />
    </section>
  );
};

export default HeroSection;
