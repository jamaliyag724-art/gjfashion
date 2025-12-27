import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Users, Heart, Leaf, ArrowRight } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "We source only the finest fabrics and materials to ensure exceptional quality in every piece.",
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Your satisfaction is our priority. We're committed to providing an exceptional shopping experience.",
    },
    {
      icon: Heart,
      title: "Crafted with Care",
      description: "Each garment is designed with attention to detail and crafted with precision by skilled artisans.",
    },
    {
      icon: Leaf,
      title: "Sustainable Fashion",
      description: "We're committed to ethical practices and sustainable fashion that respects our planet.",
    },
  ];

  const milestones = [
    { year: "2018", event: "Founded in Ahmedabad with a vision to redefine Indian fashion" },
    { year: "2019", event: "Launched our first online store, reaching customers across India" },
    { year: "2020", event: "Expanded to 50+ cities with express delivery" },
    { year: "2022", event: "Introduced sustainable fashion line with eco-friendly fabrics" },
    { year: "2024", event: "Serving 100,000+ happy customers nationwide" },
  ];

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About GJ Fashion",
    description: "Learn about GJ Fashion, India's premier online fashion destination for premium men's and women's wear.",
    mainEntity: {
      "@type": "Organization",
      name: "GJ Fashion",
      foundingDate: "2018",
      founders: [{ "@type": "Person", name: "GJ Fashion Team" }],
      knowsAbout: ["Fashion", "Premium Clothing", "Indian Fashion"],
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="About Us - Premium Fashion Brand India"
        description="Discover GJ Fashion's story - India's premier destination for premium men's and women's fashion. Learn about our commitment to quality, sustainability, and style since 2018."
        keywords="about GJ Fashion, Indian fashion brand, premium clothing brand India, sustainable fashion, quality fashion wear"
        canonicalUrl="/about"
        structuredData={aboutSchema}
      />
      
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-muted to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">Our Story</p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6 animate-fade-in-up">
            About GJ Fashion
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            Crafting premium fashion for the modern Indian since 2018
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground">
                Our Mission
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                At GJ Fashion, we believe that great fashion should be accessible to everyone. Our mission is to provide 
                premium quality clothing that combines timeless elegance with contemporary style, all at prices that don't 
                compromise on quality.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                We're passionate about helping you express your unique style through carefully curated collections that 
                reflect the latest trends while maintaining a classic appeal. From office wear to casual outings, we've 
                got you covered.
              </p>
              <Button asChild className="group">
                <Link to="/shop">
                  Explore Our Collection
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="bg-muted rounded-2xl p-8 md:p-12">
              <blockquote className="text-2xl md:text-3xl font-heading font-light text-foreground italic">
                "Fashion is the armor to survive the reality of everyday life."
              </blockquote>
              <p className="mt-4 text-muted-foreground">— Bill Cunningham</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These principles guide everything we do at GJ Fashion
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-card rounded-2xl p-6 text-center shadow-card hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-medium text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-muted-foreground text-lg">
              From a small idea to a nationwide fashion destination
            </p>
          </div>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className="flex gap-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="font-heading text-xl font-semibold text-primary">{milestone.year}</span>
                </div>
                <div className="flex-shrink-0 w-px bg-border relative">
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary" />
                </div>
                <div className="flex-1 pb-8">
                  <p className="text-foreground">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-light mb-4">
            Ready to Explore Our Collection?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8">
            Discover premium fashion that speaks to your style
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link to="/shop">Shop Now</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
