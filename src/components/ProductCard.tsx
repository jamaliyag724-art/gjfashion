import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, Eye, ShoppingCart } from "lucide-react";
import StarRating from "@/components/StarRating";
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
  rating,
  badge,
  sizes: propSizes,
}: ProductCardProps) => {
  const navigate = useNavigate();

  const [showQuickView, setShowQuickView] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const { toggleItem, isInWishlist } = useWishlist();
  const isWishlisted = isInWishlist(id);

  const sizes = propSizes || ["XS", "S", "M", "L", "XL"];

  const discountPercentage =
    originalPrice && originalPrice > price
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : null;

  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };

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
      description: `"${name}" (Size: ${selectedSize}) added to cart.`,
    });
  };

  const handleQuickView = (e: React.MouseEvent) => {
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
        {/* Image */}
        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
          {/* Badges */}
          <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
            {badge && <Badge variant={badge}>{badge}</Badge>}
            {discountPercentage && (
              <span className="bg-hot text-white text-xs font-bold px-2 py-1 rounded-full">
                -{discountPercentage}%
              </span>
            )}
          </div>

          {/* Wishlist */}
          <button
            onClick={handleWishlist}
            className="absolute top-3 right-3 z-10 p-2 bg-white rounded-full shadow"
          >
            <Heart
              className={`h-4 w-4 ${
                isWishlisted ? "fill-hot text-hot" : "text-gray-700"
              }`}
            />
          </button>

          {/* Images */}
          <img
            src={image}
            alt={name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered && hoverImage ? "opacity-0" : "opacity-100"
            }`}
          />

          {hoverImage && (
            <img
              src={hoverImage}
              alt={`${name} hover`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            />
          )}

          {/* Hover Actions */}
          <div
            className={`absolute inset-0 bg-black/40 flex items-end justify-center p-4 transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <Button variant="quickView" onClick={handleQuickView} className="w-full">
              <Eye className="h-4 w-4 mr-2" />
              Quick View
            </Button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-2">
          <h3 className="font-semibold text-lg">{name}</h3>
          <StarRating rating={rating} showValue />
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

          <Button variant="cart" className="w-full" onClick={handleQuickView}>
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Quick View Dialog */}
      <Dialog open={showQuickView} onOpenChange={setShowQuickView}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{name}</DialogTitle>
            <DialogDescription className="sr-only">
              Quick view
            </DialogDescription>
          </DialogHeader>

          <div className="grid md:grid-cols-2 gap-6">
            <img
              src={image}
              alt={name}
              className="w-full aspect-[3/4] object-cover rounded-lg"
            />

            <div className="space-y-4">
              <StarRating rating={rating} showValue />
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-primary">
                  ₹{price.toLocaleString("en-IN")}
                </span>
                {originalPrice && (
                  <span className="line-through text-muted-foreground">
                    ₹{originalPrice.toLocaleString("en-IN")}
                  </span>
                )}
              </div>

              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">Select Size</span>
                  <SizeGuide />
                </div>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded ${
                        selectedSize === size
                          ? "bg-black text-white"
                          : "bg-white"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <Button variant="cart" onClick={handleAddToCart}>
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProductCard;
