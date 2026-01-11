import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Eye, ShoppingCart, Star } from "lucide-react";
import Badge from "@/components/Badge";
import SizeGuide from "@/components/SizeGuide";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
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
  sizes: propSizes,
}: ProductCardProps) => {
  const navigate = useNavigate();
  const [showQuickView, setShowQuickView] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const { toggleItem, isInWishlist } = useWishlist();
  const isWishlisted = isInWishlist(id);

  const sizes = propSizes || ["XS", "S", "M", "L", "XL"];

  const discountPercentage =
    originalPrice && originalPrice > price
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : null;

  const handleCardClick = useCallback(() => {
    navigate(`/product/${id}`);
  }, [navigate, id]);

  const handleWishlist = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    toggleItem({ id, name, price, image, rating });
  }, [toggleItem, id, name, price, image, rating]);

  const handleAddToCart = useCallback(() => {
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
      description: `"${name}" (Size: ${selectedSize}) added to cart.`,
    });
    setShowQuickView(false);
  }, [selectedSize, name]);

  const handleQuickView = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setShowQuickView(true);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-3.5 w-3.5 ${
          i < Math.floor(rating)
            ? "fill-gold text-gold"
            : i < rating
            ? "fill-gold/50 text-gold"
            : "fill-muted text-muted"
        }`}
      />
    ));
  };

  return (
    <>
      <article
        className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-500 animate-fade-in-up cursor-pointer focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
        style={{ animationDelay: `${delay}ms` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleCardClick}
        role="article"
        aria-label={`${name} - ₹${price.toLocaleString("en-IN")}`}
      >
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
          {/* Badges */}
          <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
            {badge && <Badge variant={badge}>{badge}</Badge>}
            {discountPercentage && (
              <span className="bg-hot text-background text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
                -{discountPercentage}%
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            onClick={handleWishlist}
            className="absolute top-3 right-3 z-10 p-2.5 bg-background/90 backdrop-blur-sm rounded-full shadow-soft hover:bg-background hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart
              className={`h-4 w-4 transition-colors ${
                isWishlisted ? "fill-hot text-hot" : "text-muted-foreground hover:text-hot"
              }`}
            />
          </button>

          {/* Main Image */}
          <img
            src={image}
            alt={`${name} - GJ Fashion premium clothing`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              isHovered && hoverImage ? "opacity-0 scale-105" : "opacity-100 scale-100"
            } ${imageLoaded ? "" : "blur-sm"}`}
          />

          {/* Hover Image */}
          {hoverImage && (
            <img
              src={hoverImage}
              alt={`${name} alternate view`}
              loading="lazy"
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            />
          )}

          {/* Quick View Overlay */}
          <div
            className={`absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent flex items-end justify-center p-4 transition-all duration-400 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <Button
              variant="quickView"
              onClick={handleQuickView}
              className="w-full transform transition-transform duration-300 hover:scale-[1.02]"
              aria-label={`Quick view ${name}`}
            >
              <Eye className="h-4 w-4 mr-2" />
              Quick View
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-2.5">
          <h3 className="font-heading font-semibold text-lg text-foreground line-clamp-1 group-hover:text-primary transition-colors">
            {name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1.5" aria-label={`Rating: ${rating} out of 5 stars`}>
            <div className="flex gap-0.5">{renderStars(rating)}</div>
            <span className="text-xs text-muted-foreground">({rating})</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">
              ₹{price.toLocaleString("en-IN")}
            </span>
            {originalPrice && (
              <span className="text-sm line-through text-muted-foreground">
                ₹{originalPrice.toLocaleString("en-IN")}
              </span>
            )}
          </div>

          {/* Add to Cart Button */}
          <Button
            variant="cart"
            className="w-full group/btn hover:scale-[1.02] active:scale-[0.98] transition-transform"
            onClick={handleQuickView}
            aria-label={`Add ${name} to cart`}
          >
            <ShoppingCart className="h-4 w-4 mr-2 group-hover/btn:animate-bounce" />
            Add to Cart
          </Button>
        </div>
      </article>

      {/* Quick View Dialog */}
      <Dialog open={showQuickView} onOpenChange={setShowQuickView}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden">
          <DialogHeader className="sr-only">
            <DialogTitle>{name}</DialogTitle>
            <DialogDescription>Quick view product details</DialogDescription>
          </DialogHeader>

          <div className="grid md:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative aspect-square md:aspect-auto bg-muted">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
              />
              {discountPercentage && (
                <span className="absolute top-4 left-4 bg-hot text-background text-sm font-bold px-3 py-1.5 rounded-full">
                  -{discountPercentage}% OFF
                </span>
              )}
            </div>

            {/* Details */}
            <div className="p-6 space-y-5">
              <div>
                <h2 className="font-heading text-2xl font-semibold text-foreground mb-2">
                  {name}
                </h2>
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">{renderStars(rating)}</div>
                  <span className="text-sm text-muted-foreground">({rating} rating)</span>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-primary">
                  ₹{price.toLocaleString("en-IN")}
                </span>
                {originalPrice && (
                  <>
                    <span className="text-lg line-through text-muted-foreground">
                      ₹{originalPrice.toLocaleString("en-IN")}
                    </span>
                    <span className="text-sm font-medium text-success">
                      {discountPercentage}% off
                    </span>
                  </>
                )}
              </div>

              {/* Size Selection */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="font-medium text-foreground">Select Size</span>
                  <SizeGuide />
                </div>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`min-w-[48px] px-4 py-2.5 border-2 rounded-lg font-medium text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                        selectedSize === size
                          ? "bg-foreground text-background border-foreground"
                          : "bg-background text-foreground border-border hover:border-foreground"
                      }`}
                      aria-pressed={selectedSize === size}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart */}
              <Button
                variant="cart"
                size="lg"
                className="w-full hover:scale-[1.02] active:scale-[0.98] transition-transform"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>

              {/* Trust Indicators */}
              <div className="pt-4 border-t border-border space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-success rounded-full" />
                  Free shipping on orders above ₹999
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-success rounded-full" />
                  Easy 7-day returns
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductCard;
