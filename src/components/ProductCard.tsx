import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Eye, ShoppingCart } from "lucide-react";
import StarRating from "@/components/StarRating";
import Badge from "@/components/Badge";
import SizeGuide from "@/components/SizeGuide";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { toast } from "@/hooks/use-toast";
import { useWishlist } from "@/contexts/WishlistContext";

export interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  hoverImage?: string;
  delay?: number;
  rating?: number;
  badge?: "hot" | "new" | "sale" | "trending";
  sizes?: string[];
}

const ProductCard = ({ 
  id, 
  name, 
  price, 
  originalPrice,
  image, 
  hoverImage,
  delay = 0, 
  rating = 4.5, 
  badge, 
  sizes: propSizes 
}: ProductCardProps) => {
  const navigate = useNavigate();
  const [showQuickView, setShowQuickView] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const { toggleItem, isInWishlist } = useWishlist();

  const isWishlisted = isInWishlist(id);
  const sizes = propSizes || ["XS", "S", "M", "L", "XL"];
export function ProductCard({ product }: { product: Product }) {
  const discountPercentage =
    product.originalPrice && product.originalPrice > product.price
      ? Math.round(
          ((product.originalPrice - product.price) / product.originalPrice) * 100
        )
      : 0;

  return (
    <div className="relative">
      {discountPercentage > 0 && (
        <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
          {discountPercentage}% OFF
        </span>
      )}
      {/* rest of your card */}
    </div>
  );
}
  const discountPercentage: number | null =
  originalPrice && originalPrice > price
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : null;

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
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

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowQuickView(true);
  };

  return (
    <>
      <div 
        className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-lg transition-all duration-500 animate-fade-in-up cursor-pointer"
        style={{ animationDelay: `${delay}ms` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleCardClick}
      >
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
          {/* Badges */}
          <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
            {badge && <Badge variant={badge}>{badge}</Badge>}
            {discountPercentage && (
              <span className="bg-hot text-background text-xs font-bold px-2.5 py-1 rounded-full uppercase">
                -{discountPercentage}%
              </span>
            )}
          </div>
          
          {/* Wishlist Button */}
          <button
            onClick={handleWishlist}
            className="absolute top-3 right-3 z-10 p-2.5 bg-background/80 backdrop-blur-sm rounded-full border border-border/50 hover:bg-background hover:scale-110 transition-all duration-300"
          >
            <Heart
              className={`h-4 w-4 transition-all duration-300 ${
                isWishlisted ? "fill-hot text-hot scale-110" : "text-foreground"
              }`}
            />
          </button>

          {/* Primary Image */}
          <img
            src={image}
            alt={name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
              isHovered && hoverImage ? "opacity-0 scale-105" : "opacity-100 scale-100"
            }`}
            loading="lazy"
          />
          
          {/* Hover Image (if provided) */}
          {hoverImage && (
            <img
              src={hoverImage}
              alt={`${name} alternate view`}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
                isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              loading="lazy"
            />
          )}
          
          {/* Overlay with Quick View */}
          <div className={`absolute inset-0 bg-gradient-to-t from-charcoal/60 via-charcoal/20 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute bottom-0 left-0 right-0 p-4 space-y-3">
              {/* Size Quick Select */}
              <div className="flex flex-wrap gap-1.5 justify-center">
                {sizes.slice(0, 5).map((size) => (
                  <button
                    key={size}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedSize(size);
                    }}
                    className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all duration-200 ${
                      selectedSize === size
                        ? "bg-primary text-primary-foreground"
                        : "bg-background/90 text-foreground hover:bg-background"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              
              <Button
                variant="quickView"
                onClick={handleQuickAdd}
                className="w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
              >
                <Eye className="h-4 w-4 mr-2" />
                Quick View
              </Button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 md:p-5 space-y-3">
          <div className="space-y-2">
            <h3 className="font-heading text-lg md:text-xl font-medium text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
              {name}
            </h3>
            <StarRating rating={rating} showValue />
            <div className="flex items-center gap-2">
              <p className="text-lg md:text-xl font-sans font-bold text-primary">
                ₹{price.toLocaleString('en-IN')}
              </p>
              {originalPrice && (
                <p className="text-sm text-muted-foreground line-through">
                  ₹{originalPrice.toLocaleString('en-IN')}
                </p>
              )}
            </div>
          </div>

          <Button
            variant="cart"
            className="w-full group/btn"
            onClick={handleQuickAdd}
          >
            <ShoppingCart className="h-4 w-4 mr-1 group-hover/btn:scale-110 transition-transform" />
            Add to Cart
          </Button>
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
                <div className="flex items-center gap-3 mt-2">
                  <p className="text-2xl font-bold text-primary">
                    ₹{price.toLocaleString('en-IN')}
                  </p>
                  {originalPrice && (
                    <>
                      <p className="text-lg text-muted-foreground line-through">
                        ₹{originalPrice.toLocaleString('en-IN')}
                      </p>
                      <span className="bg-hot/10 text-hot text-xs font-bold px-2 py-1 rounded-full">
                        Save {discountPercentage}%
                      </span>
                    </>
                  )}
                </div>
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
                      className={`px-4 py-2.5 text-sm border-2 rounded-lg transition-all duration-200 font-medium ${
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

              <div className="space-y-2">
                <h4 className="font-medium text-sm">Product Details</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Premium quality fabric with exceptional craftsmanship. Perfect for any occasion, 
                  designed for comfort and style.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 100% Premium Cotton</li>
                  <li>• Machine washable</li>
                  <li>• True to size fit</li>
                </ul>
              </div>

              <div className="flex gap-3">
                <Button variant="cart" className="flex-1" onClick={handleAddToCart}>
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
                <Button
                  variant="wishlist"
                  onClick={handleWishlist}
                  className="hover:scale-105 transition-transform"
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
