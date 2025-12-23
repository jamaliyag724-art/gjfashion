import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";
import product9 from "@/assets/product-9.jpg";
import product10 from "@/assets/product-10.jpg";
import product11 from "@/assets/product-11.jpg";
import product12 from "@/assets/product-12.jpg";
import product13 from "@/assets/product-13.jpg";
import product14 from "@/assets/product-14.jpg";

export type ProductCategory = "men" | "women" | "blazers" | "shirts" | "trousers";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  badge?: "hot" | "new" | "sale" | "trending";
  category: ProductCategory[];
  sizes: string[];
  description?: string;
}

export const allProducts: Product[] = [
  // Men's Products
  {
    id: 1,
    name: "Cream Linen Blazer",
    price: 8999,
    image: product1,
    rating: 4.8,
    badge: "hot",
    category: ["men", "blazers"],
    sizes: ["S", "M", "L", "XL"],
    description: "Premium linen blazer for summer occasions",
  },
  {
    id: 2,
    name: "Black Silk Dress",
    price: 12999,
    image: product2,
    rating: 4.9,
    badge: "trending",
    category: ["women"],
    sizes: ["XS", "S", "M", "L"],
    description: "Elegant silk dress for evening events",
  },
  {
    id: 3,
    name: "Classic White Oxford Shirt",
    price: 1999,
    image: product3,
    rating: 4.5,
    category: ["men", "shirts"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Timeless oxford shirt for any occasion",
  },
  {
    id: 4,
    name: "Beige Wool Sweater",
    price: 5499,
    image: product4,
    rating: 4.7,
    category: ["women"],
    sizes: ["XS", "S", "M", "L"],
    description: "Cozy wool sweater for cold days",
  },
  {
    id: 5,
    name: "Navy Tailored Trousers",
    price: 6999,
    image: product5,
    rating: 4.9,
    badge: "hot",
    category: ["men", "trousers"],
    sizes: ["28", "30", "32", "34", "36"],
    description: "Perfectly tailored trousers for formal wear",
  },
  {
    id: 6,
    name: "Olive Linen Shirt",
    price: 3999,
    image: product6,
    rating: 4.6,
    category: ["men", "shirts"],
    sizes: ["S", "M", "L", "XL"],
    description: "Breathable linen shirt for summer",
  },
  {
    id: 7,
    name: "Camel Wool Coat",
    price: 18999,
    image: product7,
    rating: 5.0,
    badge: "trending",
    category: ["women"],
    sizes: ["XS", "S", "M", "L"],
    description: "Luxurious wool coat for winter elegance",
  },
  {
    id: 8,
    name: "Gray Cashmere Cardigan",
    price: 7499,
    image: product8,
    rating: 4.8,
    category: ["women"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Soft cashmere cardigan for layering",
  },
  {
    id: 9,
    name: "Terracotta Midi Skirt",
    price: 4999,
    image: product9,
    rating: 4.7,
    badge: "new",
    category: ["women"],
    sizes: ["XS", "S", "M", "L"],
    description: "Elegant midi skirt in warm terracotta",
  },
  {
    id: 10,
    name: "Navy Suit Blazer",
    price: 14999,
    image: product10,
    rating: 4.9,
    badge: "new",
    category: ["men", "blazers"],
    sizes: ["S", "M", "L", "XL"],
    description: "Classic navy blazer for business",
  },
  {
    id: 11,
    name: "Blue Oxford Shirt",
    price: 2999,
    image: product11,
    rating: 4.5,
    badge: "new",
    category: ["men", "shirts"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Classic blue oxford for everyday wear",
  },
  {
    id: 12,
    name: "Slim Fit Chinos",
    price: 4499,
    image: product12,
    rating: 4.6,
    badge: "new",
    category: ["men", "trousers"],
    sizes: ["28", "30", "32", "34", "36"],
    description: "Modern slim fit chinos for casual style",
  },
  {
    id: 13,
    name: "Charcoal Dress Trousers",
    price: 5999,
    image: product13,
    rating: 4.8,
    category: ["men", "trousers"],
    sizes: ["28", "30", "32", "34", "36", "38"],
    description: "Elegant dress trousers for formal occasions",
  },
  {
    id: 14,
    name: "Black Fitted Blazer",
    price: 11999,
    image: product14,
    rating: 4.7,
    category: ["men", "blazers"],
    sizes: ["S", "M", "L", "XL"],
    description: "Sharp black blazer for evening wear",
  },
];

export const getProductsByCategory = (category: ProductCategory): Product[] => {
  return allProducts.filter((product) => product.category.includes(category));
};

export const getCategoryTitle = (category: ProductCategory): string => {
  const titles: Record<ProductCategory, string> = {
    men: "Men's Collection",
    women: "Women's Collection",
    blazers: "Blazers",
    shirts: "Shirts",
    trousers: "Trousers",
  };
  return titles[category];
};

export const getCategoryDescription = (category: ProductCategory): string => {
  const descriptions: Record<ProductCategory, string> = {
    men: "Premium menswear curated for the modern gentleman",
    women: "Elegant womenswear for every occasion",
    blazers: "Tailored blazers for a refined look",
    shirts: "Quality shirts for work and leisure",
    trousers: "Perfectly fitted trousers for any style",
  };
  return descriptions[category];
};
