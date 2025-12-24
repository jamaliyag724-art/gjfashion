import { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Heart, ShoppingCart, Truck, RotateCcw, Shield, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductImageGallery from "@/components/ProductImageGallery";
import ColorSelector from "@/components/ColorSelector";
import StarRating from "@/components/StarRating";
import SizeGuide from "@/components/SizeGuide";
import Badge from "@/components/Badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import { useWishlist } from "@/contexts/WishlistContext";
import { getProductById, allProducts, ProductImage } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = getProductById(Number(id));
  const { toggleItem, isInWishlist } = useWishlist();

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState(
    product?.colorVariants?.[0]?.name || ""
  );
  const [quantity, setQuantity] = useState(1);

  // Get images based on selected color
  const currentImages = useMemo((): ProductImage[] => {
    if (!product) return [];
    
    if (product.colorVariants && selectedColor) {
      const variant = product.colorVariants.find((v) => v.name === selectedColor);
      if (variant) return variant.images;
    }
    
    return product.images;
  }, [product, selectedColor]);

  // Related products
  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return allProducts
      .filter(
        (p) =>
          p.id !== product.id &&
          p.category.some((cat) => product.category.includes(cat))
      )
      .slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="font-heading text-3xl mb-4">Product Not Found</h1>
            <Button onClick={() => navigate("/shop")}>Continue Shopping</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const isWishlisted = isInWishlist(product.id);
  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

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
      description: `${quantity}x "${product.name}" (Size: ${selectedSize}, Color: ${selectedColor}) added to cart.`,
    });
  };

  const handleWishlist = () => {
    toggleItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      rating: product.rating,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <button onClick={() => navigate("/")} className="hover:text-foreground transition-colors">
            Home
          </button>
          <ChevronRight className="h-4 w-4" />
          <button onClick={() => navigate("/shop")} className="hover:text-foreground transition-colors">
            Shop
          </button>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground">{product.name}</span>
        </nav>

        {/* Product Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-20">
          {/* Image Gallery */}
          <ProductImageGallery images={currentImages} productName={product.name} />

          {/* Product Info */}
          <div className="space-y-6">
            {/* Badges */}
            {product.badge && (
              <div className="flex gap-2">
                <Badge variant={product.badge}>{product.badge}</Badge>
                {discountPercentage && (
                  <span className="bg-hot text-background text-xs font-bold px-3 py-1 rounded-full uppercase">
                    -{discountPercentage}% OFF
                  </span>
                )}
              </div>
            )}

            {/* Title & Rating */}
            <div>
              <h1 className="font-heading text-3xl md:text-4xl font-light text-foreground mb-3">
                {product.name}
              </h1>
              <StarRating rating={product.rating} size="md" showValue />
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold text-primary">
                ₹{product.price.toLocaleString("en-IN")}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-muted-foreground line-through">
                    ₹{product.originalPrice.toLocaleString("en-IN")}
                  </span>
                  <span className="bg-hot/10 text-hot text-sm font-semibold px-3 py-1 rounded-full">
                    Save ₹{(product.originalPrice - product.price).toLocaleString("en-IN")}
                  </span>
                </>
              )}
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Color Selector */}
            {product.colorVariants && product.colorVariants.length > 0 && (
              <ColorSelector
                variants={product.colorVariants}
                selectedColor={selectedColor}
                onColorChange={setSelectedColor}
              />
            )}

            {/* Size Selector */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-medium text-sm">Size</h4>
                <SizeGuide />
              </div>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-5 py-3 text-sm border-2 rounded-lg transition-all duration-200 font-medium ${
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

            {/* Quantity */}
            <div className="space-y-3">
              <h4 className="font-medium text-sm">Quantity</h4>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-border rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-muted transition-colors"
                    disabled={quantity <= 1}
                  >
                    −
                  </button>
                  <span className="px-4 py-2 font-medium min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-muted transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <Button
                variant="cart"
                size="lg"
                className="flex-1"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              <Button
                variant="wishlist"
                size="lg"
                onClick={handleWishlist}
                className={isWishlisted ? "border-hot text-hot" : ""}
              >
                <Heart
                  className={`h-5 w-5 ${isWishlisted ? "fill-hot" : ""}`}
                />
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="p-2 rounded-full bg-muted">
                  <Truck className="h-5 w-5 text-primary" />
                </div>
                <span className="text-xs text-muted-foreground">Free Shipping</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="p-2 rounded-full bg-muted">
                  <RotateCcw className="h-5 w-5 text-primary" />
                </div>
                <span className="text-xs text-muted-foreground">Easy Returns</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="p-2 rounded-full bg-muted">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <span className="text-xs text-muted-foreground">Secure Payment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-20">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
              <TabsTrigger
                value="details"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4"
              >
                Details
              </TabsTrigger>
              <TabsTrigger
                value="fabric"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4"
              >
                Fabric & Care
              </TabsTrigger>
              <TabsTrigger
                value="shipping"
                className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-4"
              >
                Shipping & Returns
              </TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="pt-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-heading text-xl mb-4">Product Information</h3>
                  <dl className="space-y-3">
                    <div className="flex justify-between border-b border-border pb-2">
                      <dt className="text-muted-foreground">Fabric</dt>
                      <dd className="font-medium">{product.fabric}</dd>
                    </div>
                    <div className="flex justify-between border-b border-border pb-2">
                      <dt className="text-muted-foreground">Fit</dt>
                      <dd className="font-medium">{product.fit}</dd>
                    </div>
                    <div className="flex justify-between border-b border-border pb-2">
                      <dt className="text-muted-foreground">Category</dt>
                      <dd className="font-medium capitalize">
                        {product.category.join(", ")}
                      </dd>
                    </div>
                  </dl>
                </div>
                <div>
                  <h3 className="font-heading text-xl mb-4">Perfect For</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.occasion?.map((occ) => (
                      <span
                        key={occ}
                        className="px-4 py-2 bg-muted rounded-full text-sm"
                      >
                        {occ}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="fabric" className="pt-6">
              <div className="max-w-2xl">
                <h3 className="font-heading text-xl mb-4">Care Instructions</h3>
                <ul className="space-y-3">
                  {product.care?.map((instruction, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-medium">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground">{instruction}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="shipping" className="pt-6">
              <div className="max-w-2xl space-y-6">
                <div>
                  <h3 className="font-heading text-xl mb-3">Shipping</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Free standard shipping on orders over ₹2,999</li>
                    <li>• Express delivery available (2-3 business days)</li>
                    <li>• Delivery across India</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-heading text-xl mb-3">Returns</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• 30-day easy return policy</li>
                    <li>• Items must be unworn with tags attached</li>
                    <li>• Free return pickup for defective items</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section>
            <div className="text-center mb-10">
              <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
                You May Also Like
              </p>
              <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground">
                Related Products
              </h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((relatedProduct, index) => (
                <div
                  key={relatedProduct.id}
                  onClick={() => navigate(`/product/${relatedProduct.id}`)}
                  className="cursor-pointer"
                >
                  <ProductCard
                    id={relatedProduct.id}
                    name={relatedProduct.name}
                    price={relatedProduct.price}
                    originalPrice={relatedProduct.originalPrice}
                    image={relatedProduct.image}
                    hoverImage={relatedProduct.hoverImage}
                    rating={relatedProduct.rating}
                    badge={relatedProduct.badge}
                    sizes={relatedProduct.sizes}
                    delay={index * 100}
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
