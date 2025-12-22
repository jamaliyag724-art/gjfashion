import { createContext, useContext, useState, ReactNode } from "react";
import { toast } from "@/hooks/use-toast";

export interface WishlistItem {
  id: number;
  name: string;
  price: number;
  image: string;
  rating?: number;
}

interface WishlistContextType {
  items: WishlistItem[];
  addItem: (item: WishlistItem) => void;
  removeItem: (id: number) => void;
  isInWishlist: (id: number) => boolean;
  toggleItem: (item: WishlistItem) => void;
  clearWishlist: () => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<WishlistItem[]>([]);

  const addItem = (item: WishlistItem) => {
    if (!isInWishlist(item.id)) {
      setItems((prev) => [...prev, item]);
      toast({
        title: "Added to Wishlist",
        description: `"${item.name}" has been added to your wishlist.`,
      });
    }
  };

  const removeItem = (id: number) => {
    const item = items.find((i) => i.id === id);
    setItems((prev) => prev.filter((i) => i.id !== id));
    if (item) {
      toast({
        title: "Removed from Wishlist",
        description: `"${item.name}" has been removed from your wishlist.`,
      });
    }
  };

  const isInWishlist = (id: number) => {
    return items.some((item) => item.id === id);
  };

  const toggleItem = (item: WishlistItem) => {
    if (isInWishlist(item.id)) {
      removeItem(item.id);
    } else {
      addItem(item);
    }
  };

  const clearWishlist = () => {
    setItems([]);
    toast({
      title: "Wishlist Cleared",
      description: "All items have been removed from your wishlist.",
    });
  };

  return (
    <WishlistContext.Provider
      value={{ items, addItem, removeItem, isInWishlist, toggleItem, clearWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
