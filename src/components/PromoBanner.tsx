import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface PromoBannerProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  variant?: "primary" | "accent" | "dark";
}

const PromoBanner = ({ 
  title, 
  subtitle, 
  buttonText = "Shop Now",
  variant = "primary" 
}: PromoBannerProps) => {
  const variants = {
    primary: "bg-gradient-to-r from-primary to-terracotta-dark",
    accent: "bg-gradient-to-r from-gold to-primary",
    dark: "bg-gradient-to-r from-foreground to-charcoal",
  };

  return (
    <div className={`${variants[variant]} rounded-2xl p-8 md:p-12 text-center`}>
      <h3 className="font-heading text-2xl md:text-4xl font-semibold text-background mb-2">
        {title}
      </h3>
      {subtitle && (
        <p className="text-background/80 mb-6">{subtitle}</p>
      )}
      <Button 
        variant="outline" 
        className="bg-background/10 border-background/30 text-background hover:bg-background hover:text-foreground"
      >
        {buttonText}
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};

export default PromoBanner;