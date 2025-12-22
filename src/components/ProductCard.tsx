import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Eye, ShoppingCart } from "lucide-react";
import StarRating from "@/components/StarRating";
import Badge from "@/components/Badge";
import SizeGuide from "@/components/SizeGuide";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import { useWishlist } from "@/contexts/WishlistContext";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  delay?: number;
  rating?: number;
  badge?: "hot" | "new" | "sale" | "trending";
}

const ProductCard = ({ id, name, price, image, delay = 0, rating = 4.5, badge }: ProductCardProps) => {
  const [showQuickView, setShowQuickView] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const { toggleItem, isInWishlist } = useWishlist();

  const isWishlisted = isInWishlist(id);
  const sizes = ["XS", "S", "M", "L", "XL"];

  const handleWishlist = () => {
    toggleItem({ id, name, price, image, rating });
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Select a Size",
        description: "Please select a size before adding to cart.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Added to Cart",
      description: `"${name}" (Size: ${selectedSize}) has been added to your cart.`,
    });
  };

  const handleBuyNow = () => {
    console.log(`Buy Now clicked for product ${id}: ${name}`);
    toast({
      title: "Proceeding to Checkout",
      description: `"${name}" - Payment integration coming soon.`,
    });
  };

  return (
    <>
      <div 
        className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-lg transition-all duration-500 animate-fade-in-up"
        style={{ animationDelay: `${delay}ms` }}
      >
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
          {badge && (
            <div className="absolute top-3 left-3 z-10">
              <Badge variant={badge}>{badge}</Badge>
            </div>
          )}
          
          {/* Wishlist Button */}
          <button
            onClick={handleWishlist}
            className="absolute top-3 right-3 z-10 p-2.5 bg-background/80 backdrop-blur-sm rounded-full border border-border/50 hover:bg-background transition-all duration-300"
          >
            <Heart
              className={`h-4 w-4 transition-colors ${
                isWishlisted ? "fill-hot text-hot" : "text-foreground"
              }`}
            />
          </button>

          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          
          {/* Overlay with Quick View */}
          <div className="absolute inset-0 bg-foreground/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <Button
              variant="quickView"
              onClick={() => setShowQuickView(true)}
              className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            >
              <Eye className="h-4 w-4 mr-2" />
              Quick View
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 md:p-5 space-y-3">
          <div className="space-y-2">
            <h3 className="font-heading text-lg md:text-xl font-medium text-foreground leading-tight">
              {name}
            </h3>
            <StarRating rating={rating} showValue />
            <p className="text-lg md:text-xl font-sans font-bold text-primary">
              ₹{price.toLocaleString('en-IN')}
            </p>
          </div>

          <div className="flex gap-2">
            <Button
              variant="cart"
              className="flex-1"
              onClick={handleBuyNow}
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>

      {/* Quick View Dialog */}
      <Dialog open={showQuickView} onOpenChange={setShowQuickView}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl">{name}</DialogTitle>
            <DialogDescription className="sr-only">
              Quick view for {name} - ₹{price.toLocaleString('en-IN')}
            </DialogDescription>
          </DialogHeader>
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div className="aspect-[3/4] rounded-lg overflow-hidden bg-muted">
              <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
            <div className="space-y-6">
              <div>
                <StarRating rating={rating} size="md" showValue />
                <p className="text-2xl font-bold text-primary mt-2">
                  ₹{price.toLocaleString('en-IN')}
                </p>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium">Select Size</h4>
                  <SizeGuide />
                </div>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 text-sm border rounded-full transition-colors ${
                        selectedSize === size
                          ? "bg-foreground text-background border-foreground"
                          : "bg-background text-foreground border-border hover:border-foreground"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <p className="text-muted-foreground text-sm leading-relaxed">
                Premium quality fabric with exceptional craftsmanship. Perfect for any occasion, 
                designed for comfort and style.
              </p>

              <div className="flex gap-3">
                <Button variant="cart" className="flex-1" onClick={handleAddToCart}>
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
                <Button
                  variant="wishlist"
                  onClick={handleWishlist}
                >
                  <Heart className={`h-5 w-5 ${isWishlisted ? "fill-hot text-hot" : ""}`} />
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductCard;