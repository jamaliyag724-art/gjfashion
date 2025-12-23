import { useSearchParams, Link } from "react-router-dom";
import { useMemo, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { 
  allProducts, 
  getProductsByCategory, 
  getCategoryTitle, 
  getCategoryDescription,
  type ProductCategory 
} from "@/data/products";
import { Users, ShoppingBag, Shirt, Briefcase, ChevronRight } from "lucide-react";

const categories = [
  { id: "men" as ProductCategory, name: "Men", icon: Users },
  { id: "women" as ProductCategory, name: "Women", icon: ShoppingBag },
  { id: "blazers" as ProductCategory, name: "Blazers", icon: Briefcase },
  { id: "shirts" as ProductCategory, name: "Shirts", icon: Shirt },
  { id: "trousers" as ProductCategory, name: "Trousers", icon: ShoppingBag },
];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category") as ProductCategory | null;
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const products = useMemo(() => {
    if (activeCategory) {
      let filtered = getProductsByCategory(activeCategory);
      if (selectedSize) {
        filtered = filtered.filter((p) => p.sizes.includes(selectedSize));
      }
      return filtered;
    }
    return allProducts;
  }, [activeCategory, selectedSize]);

  const handleCategoryClick = (categoryId: ProductCategory) => {
    setSearchParams({ category: categoryId });
    setSelectedSize(null);
  };

  const handleClearFilters = () => {
    setSearchParams({});
    setSelectedSize(null);
  };

  const title = activeCategory ? getCategoryTitle(activeCategory) : "All Products";
  const description = activeCategory 
    ? getCategoryDescription(activeCategory) 
    : "Discover our complete collection of premium fashion";

  const sizes = activeCategory === "trousers" 
    ? ["28", "30", "32", "34", "36", "38"]
    : ["XS", "S", "M", "L", "XL", "XXL"];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-muted py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link to="/shop" className="hover:text-foreground transition-colors">
              Shop
            </Link>
            {activeCategory && (
              <>
                <ChevronRight className="h-4 w-4 mx-2" />
                <span className="text-foreground capitalize">{activeCategory}</span>
              </>
            )}
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-muted to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4 animate-fade-in-up">
            {title}
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            {description}
          </p>
        </div>
      </section>

      {/* Category Pills */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              variant={!activeCategory ? "default" : "outline"}
              className="rounded-full"
              onClick={handleClearFilters}
            >
              All Products
            </Button>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                className="rounded-full gap-2"
                onClick={() => handleCategoryClick(category.id)}
              >
                <category.icon className="h-4 w-4" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Size Filter */}
      <section className="py-6 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="text-sm text-muted-foreground mr-2">Filter by Size:</span>
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(selectedSize === size ? null : size)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedSize === size
                    ? "bg-foreground text-background"
                    : "bg-muted hover:bg-muted/80 text-foreground"
                }`}
              >
                {size}
              </button>
            ))}
            {selectedSize && (
              <button
                onClick={() => setSelectedSize(null)}
                className="text-sm text-primary hover:underline ml-2"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              Showing <span className="text-foreground font-medium">{products.length}</span> products
            </p>
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  rating={product.rating}
                  badge={product.badge}
                  delay={index * 50}
                  sizes={product.sizes}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg mb-4">
                No products found with the selected filters.
              </p>
              <Button variant="outline" onClick={handleClearFilters}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;
