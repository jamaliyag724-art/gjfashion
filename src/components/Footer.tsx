import { useState } from "react";
import { Instagram, Facebook, Twitter, Youtube, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Subscribed!",
        description: "Thank you for joining our style community.",
      });
      setEmail("");
    }
  };

  const quickLinks = [
    { name: "Shop All", href: "#products" },
    { name: "New Arrivals", href: "#new-arrivals" },
    { name: "Best Sellers", href: "#best-sellers" },
    { name: "Trending", href: "#trending" },
  ];

  const supportLinks = [
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
    { name: "Size Guide", href: "#" },
    { name: "Shipping Info", href: "#" },
  ];

  return (
    <footer className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="border-b border-background/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="font-heading text-2xl md:text-3xl font-semibold mb-2">
                Join Our Style Community
              </h3>
              <p className="text-background/70 text-sm md:text-base">
                Get exclusive offers, style tips & new arrival updates
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex w-full max-w-md gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50 flex-1"
              />
              <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="space-y-5 lg:col-span-1">
            <h3 className="font-heading text-3xl font-bold tracking-wide">
              GJ Fashion
            </h3>
            <p className="text-background/70 text-sm leading-relaxed">
              GJ Fashion is built to deliver modern elegance with premium quality designs for everyday confidence.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="p-2.5 bg-background/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2.5 bg-background/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2.5 bg-background/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2.5 bg-background/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4 className="text-sm font-semibold tracking-widest uppercase">
              Shop
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-5">
            <h4 className="text-sm font-semibold tracking-widest uppercase">
              Support
            </h4>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-primary text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <h4 className="text-sm font-semibold tracking-widest uppercase">
              Contact
            </h4>
            <div className="space-y-3 text-sm">
              <p className="text-background/70">
                <span className="block text-background font-medium">Email</span>
                gaurangjamaliya67@gmail.com
              </p>
              <p className="text-background/70">
                <span className="block text-background font-medium">Location</span>
                Ahmedabad, Mumbai, Delhi, Kolkata, India
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <p className="text-center text-background/50 text-sm">
            © {new Date().getFullYear()} GJ Fashion. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;