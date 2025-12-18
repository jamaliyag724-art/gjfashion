import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  delay?: number;
}

const ProductCard = ({ id, name, price, image, delay = 0 }: ProductCardProps) => {
  const handleBuyNow = () => {
    // Placeholder for future payment integration
    console.log(`Buy Now clicked for product ${id}: ${name}`);
    alert(`"${name}" added! Payment integration coming soon.`);
  };

  return (
    <div 
      className="group bg-card rounded-lg overflow-hidden shadow-card hover:shadow-hover transition-all duration-500 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          loading="lazy"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-4 md:p-5 space-y-3">
        <div className="space-y-1">
          <h3 className="font-heading text-lg md:text-xl font-medium text-foreground leading-tight">
            {name}
          </h3>
          <p className="text-base md:text-lg font-sans font-semibold text-primary">
            ₹{price.toLocaleString('en-IN')}
          </p>
        </div>

        <Button
          variant="buy"
          className="w-full"
          onClick={handleBuyNow}
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
