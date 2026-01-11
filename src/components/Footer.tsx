import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Send,
  Shield,
  RotateCcw,
  Truck,
  CreditCard,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!email) return;

      setIsSubmitting(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      toast({
        title: "Subscribed! 🎉",
        description: "Thank you for joining our style community.",
      });
      setEmail("");
      setIsSubmitting(false);
    },
    [email]
  );

  const quickLinks = [
    { name: "Shop All", href: "/shop" },
    { name: "New Arrivals", href: "/shop?category=new" },
    { name: "Best Sellers", href: "/shop" },
    { name: "Trending", href: "/shop" },
  ];

  const supportLinks = [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
    { name: "Track Order", href: "/track-order" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Shipping Policy", href: "/shipping" },
    { name: "Return Policy", href: "/returns" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const trustIndicators = [
    { icon: Shield, text: "Secure Payments" },
    { icon: RotateCcw, text: "Easy Returns" },
    { icon: Truck, text: "Free Shipping 999+" },
    { icon: CreditCard, text: "COD Available" },
  ];

  return (
    <footer className="bg-foreground text-background" role="contentinfo">
      {/* Trust Indicators */}
      <div className="border-b border-background/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustIndicators.map((item) => (
              <div
                key={item.text}
                className="flex items-center justify-center gap-2 text-sm text-background/80"
              >
                <item.icon className="h-4 w-4 text-primary" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-b border-background/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="font-heading text-2xl md:text-3xl font-semibold mb-2">
                Join Our Style Community
              </h3>
              <p className="text-background/70 text-sm md:text-base">
                Get 10% off your first order + exclusive offers & style tips
              </p>
            </div>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex w-full max-w-md gap-3"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50 flex-1 focus:border-primary"
                aria-label="Email for newsletter"
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 disabled:opacity-50"
                aria-label="Subscribe to newsletter"
              >
                <Send className={`h-4 w-4 ${isSubmitting ? "animate-pulse" : ""}`} />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2 space-y-5">
            <Link to="/" className="inline-block">
              <h3 className="font-heading text-3xl font-bold tracking-wide hover:text-primary transition-colors">
                GJ Fashion
              </h3>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed max-w-sm">
              GJ Fashion delivers modern elegance with premium quality designs
              for everyday confidence. Your style, our passion.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2.5 bg-background/10 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
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
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
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
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-5">
            <h4 className="text-sm font-semibold tracking-widest uppercase">
              Legal
            </h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-background/70 hover:text-primary text-sm transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment Methods & Copyright */}
        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} GJ Fashion. All rights reserved.
          </p>
          <div className="flex items-center gap-3 text-background/50">
            <span className="text-xs">Accepted Payments:</span>
            <div className="flex gap-2">
              <span className="px-2 py-1 bg-background/10 rounded text-xs">Visa</span>
              <span className="px-2 py-1 bg-background/10 rounded text-xs">Mastercard</span>
              <span className="px-2 py-1 bg-background/10 rounded text-xs">UPI</span>
              <span className="px-2 py-1 bg-background/10 rounded text-xs">COD</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;