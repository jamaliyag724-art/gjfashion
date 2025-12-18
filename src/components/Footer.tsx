import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-heading text-2xl font-semibold tracking-wide">
              ÉLÉGANCE
            </h3>
            <p className="text-background/70 text-sm leading-relaxed max-w-xs">
              Curated fashion for the modern individual. Timeless elegance meets contemporary style.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium tracking-widest uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="text-background/70 hover:text-background text-sm transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-background/70 hover:text-background text-sm transition-colors duration-300"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-background/70 hover:text-background text-sm transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium tracking-widest uppercase">
              Follow Us
            </h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-background/10 rounded-full hover:bg-background/20 transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-background/10 rounded-full hover:bg-background/20 transition-colors duration-300"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 bg-background/10 rounded-full hover:bg-background/20 transition-colors duration-300"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20">
          <p className="text-center text-background/50 text-sm">
            © {new Date().getFullYear()} ÉLÉGANCE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
