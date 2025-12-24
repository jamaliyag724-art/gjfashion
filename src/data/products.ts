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

export interface ProductImage {
  src: string;
  alt: string;
  type: "front" | "back" | "side" | "detail" | "model" | "lifestyle";
}

export interface ColorVariant {
  name: string;
  hex: string;
  images: ProductImage[];
}

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  hoverImage?: string;
  images: ProductImage[];
  colorVariants?: ColorVariant[];
  rating: number;
  badge?: "hot" | "new" | "sale" | "trending";
  category: ProductCategory[];
  sizes: string[];
  description?: string;
  fabric?: string;
  fit?: string;
  care?: string[];
  occasion?: string[];
}

export const allProducts: Product[] = [
  // Men's Products
  {
    id: 1,
    name: "Cream Linen Blazer",
    price: 8999,
    originalPrice: 12999,
    image: product1,
    hoverImage: product10,
    images: [
      { src: product1, alt: "Cream Linen Blazer Front View", type: "front" },
      { src: product10, alt: "Cream Linen Blazer Back View", type: "back" },
      { src: product14, alt: "Cream Linen Blazer Side View", type: "side" },
      { src: product3, alt: "Fabric Detail Close-up", type: "detail" },
      { src: product1, alt: "Model Wearing Blazer", type: "model" },
    ],
    colorVariants: [
      {
        name: "Cream",
        hex: "#F5F5DC",
        images: [
          { src: product1, alt: "Cream Linen Blazer Front", type: "front" },
          { src: product10, alt: "Cream Linen Blazer Back", type: "back" },
        ],
      },
      {
        name: "Navy",
        hex: "#1B2A4A",
        images: [
          { src: product10, alt: "Navy Linen Blazer Front", type: "front" },
          { src: product14, alt: "Navy Linen Blazer Back", type: "back" },
        ],
      },
      {
        name: "Black",
        hex: "#1A1A1A",
        images: [
          { src: product14, alt: "Black Linen Blazer Front", type: "front" },
          { src: product1, alt: "Black Linen Blazer Back", type: "back" },
        ],
      },
    ],
    rating: 4.8,
    badge: "hot",
    category: ["men", "blazers"],
    sizes: ["S", "M", "L", "XL"],
    description: "Premium linen blazer for summer occasions. Expertly tailored with attention to every detail.",
    fabric: "100% Premium Italian Linen",
    fit: "Slim Fit",
    care: ["Dry clean only", "Iron on low heat", "Store on padded hanger"],
    occasion: ["Business Casual", "Summer Events", "Evening Wear"],
  },
  {
    id: 2,
    name: "Black Silk Dress",
    price: 12999,
    originalPrice: 16999,
    image: product2,
    hoverImage: product4,
    images: [
      { src: product2, alt: "Black Silk Dress Front View", type: "front" },
      { src: product4, alt: "Black Silk Dress Back View", type: "back" },
      { src: product7, alt: "Black Silk Dress Side View", type: "side" },
      { src: product9, alt: "Silk Fabric Detail", type: "detail" },
      { src: product2, alt: "Model Wearing Dress", type: "model" },
    ],
    colorVariants: [
      {
        name: "Black",
        hex: "#1A1A1A",
        images: [
          { src: product2, alt: "Black Silk Dress Front", type: "front" },
          { src: product4, alt: "Black Silk Dress Back", type: "back" },
        ],
      },
      {
        name: "Burgundy",
        hex: "#722F37",
        images: [
          { src: product7, alt: "Burgundy Silk Dress Front", type: "front" },
          { src: product9, alt: "Burgundy Silk Dress Back", type: "back" },
        ],
      },
    ],
    rating: 4.9,
    badge: "trending",
    category: ["women"],
    sizes: ["XS", "S", "M", "L"],
    description: "Elegant silk dress for evening events. Luxurious drape with a timeless silhouette.",
    fabric: "100% Mulberry Silk",
    fit: "Regular Fit",
    care: ["Dry clean only", "Steam to remove wrinkles", "Store in garment bag"],
    occasion: ["Evening Events", "Formal Dinners", "Cocktail Parties"],
  },
  {
    id: 3,
    name: "Classic White Oxford Shirt",
    price: 1999,
    image: product3,
    hoverImage: product11,
    images: [
      { src: product3, alt: "White Oxford Shirt Front View", type: "front" },
      { src: product11, alt: "White Oxford Shirt Back View", type: "back" },
      { src: product6, alt: "Oxford Shirt Side View", type: "side" },
      { src: product3, alt: "Oxford Weave Detail", type: "detail" },
      { src: product3, alt: "Model Wearing Shirt", type: "model" },
    ],
    colorVariants: [
      {
        name: "White",
        hex: "#FFFFFF",
        images: [
          { src: product3, alt: "White Oxford Front", type: "front" },
          { src: product11, alt: "White Oxford Back", type: "back" },
        ],
      },
      {
        name: "Light Blue",
        hex: "#ADD8E6",
        images: [
          { src: product11, alt: "Light Blue Oxford Front", type: "front" },
          { src: product3, alt: "Light Blue Oxford Back", type: "back" },
        ],
      },
      {
        name: "Pink",
        hex: "#FFB6C1",
        images: [
          { src: product6, alt: "Pink Oxford Front", type: "front" },
          { src: product11, alt: "Pink Oxford Back", type: "back" },
        ],
      },
    ],
    rating: 4.5,
    category: ["men", "shirts"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Timeless oxford shirt for any occasion. Crisp, breathable, and effortlessly stylish.",
    fabric: "100% Cotton Oxford",
    fit: "Classic Fit",
    care: ["Machine wash cold", "Tumble dry low", "Iron on medium heat"],
    occasion: ["Office Wear", "Casual Friday", "Business Meetings"],
  },
  {
    id: 4,
    name: "Beige Wool Sweater",
    price: 5499,
    image: product4,
    hoverImage: product8,
    images: [
      { src: product4, alt: "Beige Wool Sweater Front View", type: "front" },
      { src: product8, alt: "Beige Wool Sweater Back View", type: "back" },
      { src: product4, alt: "Sweater Side View", type: "side" },
      { src: product8, alt: "Wool Texture Detail", type: "detail" },
      { src: product4, alt: "Model Wearing Sweater", type: "model" },
    ],
    colorVariants: [
      {
        name: "Beige",
        hex: "#F5F5DC",
        images: [
          { src: product4, alt: "Beige Sweater Front", type: "front" },
          { src: product8, alt: "Beige Sweater Back", type: "back" },
        ],
      },
      {
        name: "Gray",
        hex: "#808080",
        images: [
          { src: product8, alt: "Gray Sweater Front", type: "front" },
          { src: product4, alt: "Gray Sweater Back", type: "back" },
        ],
      },
    ],
    rating: 4.7,
    category: ["women"],
    sizes: ["XS", "S", "M", "L"],
    description: "Cozy wool sweater for cold days. Soft, warm, and elegantly simple.",
    fabric: "90% Merino Wool, 10% Cashmere",
    fit: "Relaxed Fit",
    care: ["Hand wash cold", "Lay flat to dry", "Do not iron"],
    occasion: ["Casual Wear", "Weekend Outings", "Cozy Nights"],
  },
  {
    id: 5,
    name: "Navy Tailored Trousers",
    price: 6999,
    originalPrice: 8999,
    image: product5,
    hoverImage: product13,
    images: [
      { src: product5, alt: "Navy Trousers Front View", type: "front" },
      { src: product13, alt: "Navy Trousers Back View", type: "back" },
      { src: product12, alt: "Trousers Side View", type: "side" },
      { src: product5, alt: "Fabric Detail", type: "detail" },
      { src: product5, alt: "Model Wearing Trousers", type: "model" },
    ],
    colorVariants: [
      {
        name: "Navy",
        hex: "#1B2A4A",
        images: [
          { src: product5, alt: "Navy Trousers Front", type: "front" },
          { src: product13, alt: "Navy Trousers Back", type: "back" },
        ],
      },
      {
        name: "Charcoal",
        hex: "#36454F",
        images: [
          { src: product13, alt: "Charcoal Trousers Front", type: "front" },
          { src: product5, alt: "Charcoal Trousers Back", type: "back" },
        ],
      },
      {
        name: "Khaki",
        hex: "#C3B091",
        images: [
          { src: product12, alt: "Khaki Trousers Front", type: "front" },
          { src: product13, alt: "Khaki Trousers Back", type: "back" },
        ],
      },
    ],
    rating: 4.9,
    badge: "hot",
    category: ["men", "trousers"],
    sizes: ["28", "30", "32", "34", "36"],
    description: "Perfectly tailored trousers for formal wear. Impeccable cut for a refined silhouette.",
    fabric: "98% Wool, 2% Elastane",
    fit: "Tailored Fit",
    care: ["Dry clean only", "Iron on low heat", "Hang to maintain crease"],
    occasion: ["Formal Events", "Business Meetings", "Office Wear"],
  },
  {
    id: 6,
    name: "Olive Linen Shirt",
    price: 3999,
    image: product6,
    hoverImage: product3,
    images: [
      { src: product6, alt: "Olive Linen Shirt Front View", type: "front" },
      { src: product3, alt: "Olive Linen Shirt Back View", type: "back" },
      { src: product11, alt: "Shirt Side View", type: "side" },
      { src: product6, alt: "Linen Texture Detail", type: "detail" },
      { src: product6, alt: "Model Wearing Shirt", type: "model" },
    ],
    colorVariants: [
      {
        name: "Olive",
        hex: "#556B2F",
        images: [
          { src: product6, alt: "Olive Shirt Front", type: "front" },
          { src: product3, alt: "Olive Shirt Back", type: "back" },
        ],
      },
      {
        name: "White",
        hex: "#FFFFFF",
        images: [
          { src: product3, alt: "White Shirt Front", type: "front" },
          { src: product6, alt: "White Shirt Back", type: "back" },
        ],
      },
    ],
    rating: 4.6,
    category: ["men", "shirts"],
    sizes: ["S", "M", "L", "XL"],
    description: "Breathable linen shirt for summer. Relaxed elegance for warm days.",
    fabric: "100% European Linen",
    fit: "Regular Fit",
    care: ["Machine wash cold", "Tumble dry low", "Iron while damp"],
    occasion: ["Beach Days", "Summer Parties", "Casual Dining"],
  },
  {
    id: 7,
    name: "Camel Wool Coat",
    price: 18999,
    originalPrice: 24999,
    image: product7,
    hoverImage: product2,
    images: [
      { src: product7, alt: "Camel Wool Coat Front View", type: "front" },
      { src: product2, alt: "Camel Wool Coat Back View", type: "back" },
      { src: product4, alt: "Coat Side View", type: "side" },
      { src: product7, alt: "Wool Texture Detail", type: "detail" },
      { src: product7, alt: "Model Wearing Coat", type: "model" },
    ],
    colorVariants: [
      {
        name: "Camel",
        hex: "#C19A6B",
        images: [
          { src: product7, alt: "Camel Coat Front", type: "front" },
          { src: product2, alt: "Camel Coat Back", type: "back" },
        ],
      },
      {
        name: "Black",
        hex: "#1A1A1A",
        images: [
          { src: product2, alt: "Black Coat Front", type: "front" },
          { src: product7, alt: "Black Coat Back", type: "back" },
        ],
      },
    ],
    rating: 5.0,
    badge: "trending",
    category: ["women"],
    sizes: ["XS", "S", "M", "L"],
    description: "Luxurious wool coat for winter elegance. A timeless investment piece.",
    fabric: "80% Virgin Wool, 20% Cashmere",
    fit: "Classic Fit",
    care: ["Dry clean only", "Store in breathable garment bag", "Use cedar blocks"],
    occasion: ["Winter Events", "Evening Outings", "Formal Occasions"],
  },
  {
    id: 8,
    name: "Gray Cashmere Cardigan",
    price: 7499,
    image: product8,
    hoverImage: product4,
    images: [
      { src: product8, alt: "Gray Cashmere Cardigan Front View", type: "front" },
      { src: product4, alt: "Gray Cashmere Cardigan Back View", type: "back" },
      { src: product8, alt: "Cardigan Side View", type: "side" },
      { src: product4, alt: "Cashmere Texture Detail", type: "detail" },
      { src: product8, alt: "Model Wearing Cardigan", type: "model" },
    ],
    colorVariants: [
      {
        name: "Gray",
        hex: "#808080",
        images: [
          { src: product8, alt: "Gray Cardigan Front", type: "front" },
          { src: product4, alt: "Gray Cardigan Back", type: "back" },
        ],
      },
      {
        name: "Cream",
        hex: "#FFFDD0",
        images: [
          { src: product4, alt: "Cream Cardigan Front", type: "front" },
          { src: product8, alt: "Cream Cardigan Back", type: "back" },
        ],
      },
    ],
    rating: 4.8,
    category: ["women"],
    sizes: ["XS", "S", "M", "L", "XL"],
    description: "Soft cashmere cardigan for layering. Ultimate comfort meets understated luxury.",
    fabric: "100% Mongolian Cashmere",
    fit: "Relaxed Fit",
    care: ["Hand wash cold", "Lay flat to dry", "Fold, do not hang"],
    occasion: ["Everyday Luxury", "Office Layering", "Weekend Comfort"],
  },
  {
    id: 9,
    name: "Terracotta Midi Skirt",
    price: 4999,
    image: product9,
    hoverImage: product2,
    images: [
      { src: product9, alt: "Terracotta Midi Skirt Front View", type: "front" },
      { src: product2, alt: "Terracotta Midi Skirt Back View", type: "back" },
      { src: product7, alt: "Skirt Side View", type: "side" },
      { src: product9, alt: "Fabric Detail", type: "detail" },
      { src: product9, alt: "Model Wearing Skirt", type: "model" },
    ],
    colorVariants: [
      {
        name: "Terracotta",
        hex: "#E2725B",
        images: [
          { src: product9, alt: "Terracotta Skirt Front", type: "front" },
          { src: product2, alt: "Terracotta Skirt Back", type: "back" },
        ],
      },
      {
        name: "Black",
        hex: "#1A1A1A",
        images: [
          { src: product2, alt: "Black Skirt Front", type: "front" },
          { src: product9, alt: "Black Skirt Back", type: "back" },
        ],
      },
    ],
    rating: 4.7,
    badge: "new",
    category: ["women"],
    sizes: ["XS", "S", "M", "L"],
    description: "Elegant midi skirt in warm terracotta. Flattering silhouette for any occasion.",
    fabric: "100% Tencel",
    fit: "A-Line",
    care: ["Machine wash cold", "Line dry", "Iron on low"],
    occasion: ["Brunch", "Office Wear", "Date Night"],
  },
  {
    id: 10,
    name: "Navy Suit Blazer",
    price: 14999,
    originalPrice: 19999,
    image: product10,
    hoverImage: product1,
    images: [
      { src: product10, alt: "Navy Suit Blazer Front View", type: "front" },
      { src: product1, alt: "Navy Suit Blazer Back View", type: "back" },
      { src: product14, alt: "Blazer Side View", type: "side" },
      { src: product10, alt: "Lapel Detail", type: "detail" },
      { src: product10, alt: "Model Wearing Blazer", type: "model" },
    ],
    colorVariants: [
      {
        name: "Navy",
        hex: "#1B2A4A",
        images: [
          { src: product10, alt: "Navy Blazer Front", type: "front" },
          { src: product1, alt: "Navy Blazer Back", type: "back" },
        ],
      },
      {
        name: "Charcoal",
        hex: "#36454F",
        images: [
          { src: product14, alt: "Charcoal Blazer Front", type: "front" },
          { src: product10, alt: "Charcoal Blazer Back", type: "back" },
        ],
      },
    ],
    rating: 4.9,
    badge: "new",
    category: ["men", "blazers"],
    sizes: ["S", "M", "L", "XL"],
    description: "Classic navy blazer for business. The cornerstone of every gentleman's wardrobe.",
    fabric: "Super 120s Wool",
    fit: "Slim Fit",
    care: ["Dry clean only", "Store on suit hanger", "Brush after each wear"],
    occasion: ["Business Meetings", "Formal Events", "Interviews"],
  },
  {
    id: 11,
    name: "Blue Oxford Shirt",
    price: 2999,
    image: product11,
    hoverImage: product6,
    images: [
      { src: product11, alt: "Blue Oxford Shirt Front View", type: "front" },
      { src: product6, alt: "Blue Oxford Shirt Back View", type: "back" },
      { src: product3, alt: "Shirt Side View", type: "side" },
      { src: product11, alt: "Oxford Weave Detail", type: "detail" },
      { src: product11, alt: "Model Wearing Shirt", type: "model" },
    ],
    colorVariants: [
      {
        name: "Blue",
        hex: "#4169E1",
        images: [
          { src: product11, alt: "Blue Oxford Front", type: "front" },
          { src: product6, alt: "Blue Oxford Back", type: "back" },
        ],
      },
      {
        name: "White",
        hex: "#FFFFFF",
        images: [
          { src: product3, alt: "White Oxford Front", type: "front" },
          { src: product11, alt: "White Oxford Back", type: "back" },
        ],
      },
    ],
    rating: 4.5,
    badge: "new",
    category: ["men", "shirts"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Classic blue oxford for everyday wear. Versatile and effortlessly stylish.",
    fabric: "100% Cotton Oxford",
    fit: "Classic Fit",
    care: ["Machine wash cold", "Tumble dry low", "Iron on medium heat"],
    occasion: ["Office Wear", "Casual Friday", "Weekend Outings"],
  },
  {
    id: 12,
    name: "Slim Fit Chinos",
    price: 4499,
    image: product12,
    hoverImage: product5,
    images: [
      { src: product12, alt: "Slim Fit Chinos Front View", type: "front" },
      { src: product5, alt: "Slim Fit Chinos Back View", type: "back" },
      { src: product13, alt: "Chinos Side View", type: "side" },
      { src: product12, alt: "Fabric Detail", type: "detail" },
      { src: product12, alt: "Model Wearing Chinos", type: "model" },
    ],
    colorVariants: [
      {
        name: "Khaki",
        hex: "#C3B091",
        images: [
          { src: product12, alt: "Khaki Chinos Front", type: "front" },
          { src: product5, alt: "Khaki Chinos Back", type: "back" },
        ],
      },
      {
        name: "Navy",
        hex: "#1B2A4A",
        images: [
          { src: product5, alt: "Navy Chinos Front", type: "front" },
          { src: product12, alt: "Navy Chinos Back", type: "back" },
        ],
      },
      {
        name: "Olive",
        hex: "#556B2F",
        images: [
          { src: product13, alt: "Olive Chinos Front", type: "front" },
          { src: product12, alt: "Olive Chinos Back", type: "back" },
        ],
      },
    ],
    rating: 4.6,
    badge: "new",
    category: ["men", "trousers"],
    sizes: ["28", "30", "32", "34", "36"],
    description: "Modern slim fit chinos for casual style. The perfect blend of comfort and sophistication.",
    fabric: "98% Cotton, 2% Elastane",
    fit: "Slim Fit",
    care: ["Machine wash cold", "Tumble dry low", "Iron on medium heat"],
    occasion: ["Casual Wear", "Smart Casual", "Weekend Outings"],
  },
  {
    id: 13,
    name: "Charcoal Dress Trousers",
    price: 5999,
    image: product13,
    hoverImage: product12,
    images: [
      { src: product13, alt: "Charcoal Dress Trousers Front View", type: "front" },
      { src: product12, alt: "Charcoal Dress Trousers Back View", type: "back" },
      { src: product5, alt: "Trousers Side View", type: "side" },
      { src: product13, alt: "Fabric Detail", type: "detail" },
      { src: product13, alt: "Model Wearing Trousers", type: "model" },
    ],
    colorVariants: [
      {
        name: "Charcoal",
        hex: "#36454F",
        images: [
          { src: product13, alt: "Charcoal Trousers Front", type: "front" },
          { src: product12, alt: "Charcoal Trousers Back", type: "back" },
        ],
      },
      {
        name: "Black",
        hex: "#1A1A1A",
        images: [
          { src: product5, alt: "Black Trousers Front", type: "front" },
          { src: product13, alt: "Black Trousers Back", type: "back" },
        ],
      },
    ],
    rating: 4.8,
    category: ["men", "trousers"],
    sizes: ["28", "30", "32", "34", "36", "38"],
    description: "Elegant dress trousers for formal occasions. Tailored perfection for the discerning gentleman.",
    fabric: "100% Wool",
    fit: "Tailored Fit",
    care: ["Dry clean only", "Iron on low heat", "Hang to maintain crease"],
    occasion: ["Formal Events", "Business Meetings", "Evening Wear"],
  },
  {
    id: 14,
    name: "Black Fitted Blazer",
    price: 11999,
    image: product14,
    hoverImage: product10,
    images: [
      { src: product14, alt: "Black Fitted Blazer Front View", type: "front" },
      { src: product10, alt: "Black Fitted Blazer Back View", type: "back" },
      { src: product1, alt: "Blazer Side View", type: "side" },
      { src: product14, alt: "Button Detail", type: "detail" },
      { src: product14, alt: "Model Wearing Blazer", type: "model" },
    ],
    colorVariants: [
      {
        name: "Black",
        hex: "#1A1A1A",
        images: [
          { src: product14, alt: "Black Blazer Front", type: "front" },
          { src: product10, alt: "Black Blazer Back", type: "back" },
        ],
      },
      {
        name: "Navy",
        hex: "#1B2A4A",
        images: [
          { src: product10, alt: "Navy Blazer Front", type: "front" },
          { src: product14, alt: "Navy Blazer Back", type: "back" },
        ],
      },
    ],
    rating: 4.7,
    category: ["men", "blazers"],
    sizes: ["S", "M", "L", "XL"],
    description: "Sharp black blazer for evening wear. Sleek, modern, and undeniably sophisticated.",
    fabric: "Super 110s Wool",
    fit: "Fitted",
    care: ["Dry clean only", "Store on padded hanger", "Brush regularly"],
    occasion: ["Evening Events", "Formal Dinners", "Special Occasions"],
  },
];

export const getProductsByCategory = (category: ProductCategory): Product[] => {
  return allProducts.filter((product) => product.category.includes(category));
};

export const getProductById = (id: number): Product | undefined => {
  return allProducts.find((product) => product.id === id);
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
