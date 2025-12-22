import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Heart, Trash2, ShoppingCart } from "lucide-react";
import { useWishlist } from "@/contexts/WishlistContext";
import { toast } from "@/hooks/use-toast";

const WishlistSheet = () => {
  const { items, removeItem, clearWishlist } = useWishlist();

  const handleAddToCart = (name: string) => {
    toast({
      title: "Added to Cart",
      description: `"${name}" has been added to your cart.`,
    });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="p-2.5 text-foreground hover:text-primary hover:bg-muted rounded-full transition-all duration-300 relative">
          <Heart className="h-5 w-5" />
          {items.length > 0 && (
            <span className="absolute -top-0.5 -right-0.5 bg-hot text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {items.length}
            </span>
          )}
        </button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="font-heading text-xl flex items-center gap-2">
            <Heart className="h-5 w-5 text-hot" />
            My Wishlist ({items.length})
          </SheetTitle>
        </SheetHeader>

        <div className="mt-6 flex flex-col h-[calc(100vh-120px)]">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center">
              <Heart className="h-16 w-16 text-muted-foreground/30 mb-4" />
              <p className="text-muted-foreground text-lg">Your wishlist is empty</p>
              <p className="text-muted-foreground text-sm mt-1">
                Save items you love by clicking the heart icon
              </p>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-4 p-3 bg-muted/50 rounded-xl border border-border"
                  >
                    <div className="w-20 h-24 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-foreground truncate">{item.name}</h4>
                      <p className="text-primary font-bold mt-1">
                        ₹{item.price.toLocaleString('en-IN')}
                      </p>
                      <div className="flex gap-2 mt-3">
                        <Button
                          variant="cart"
                          size="sm"
                          className="flex-1 text-xs"
                          onClick={() => handleAddToCart(item.name)}
                        >
                          <ShoppingCart className="h-3 w-3 mr-1" />
                          Add to Cart
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="px-2"
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {items.length > 0 && (
                <div className="pt-4 border-t border-border mt-4">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={clearWishlist}
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Clear Wishlist
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default WishlistSheet;
