import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { ProductImage } from "@/data/products";
import { cn } from "@/lib/utils";

interface ProductImageGalleryProps {
  images: ProductImage[];
  productName: string;
}

const ProductImageGallery = ({ images, productName }: ProductImageGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current || !isZoomed) return;
    
    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setZoomPosition({ x, y });
  };

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = useRef<number>(0);
  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = handleTouchStart.current - touchEndX;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrevious();
      }
    }
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div 
        ref={imageContainerRef}
        className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-muted cursor-zoom-in group"
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={(e) => { handleTouchStart.current = e.touches[0].clientX; }}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={images[activeIndex]?.src}
          alt={images[activeIndex]?.alt || productName}
          className={cn(
            "w-full h-full object-cover transition-transform duration-300",
            isZoomed && "scale-150"
          )}
          style={isZoomed ? { 
            transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%` 
          } : undefined}
          loading="eager"
        />
        
        {/* Zoom indicator */}
        <div className={cn(
          "absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-2 rounded-full flex items-center gap-2 transition-opacity",
          isZoomed ? "opacity-0" : "opacity-100 group-hover:opacity-100 md:opacity-0"
        )}>
          <ZoomIn className="h-4 w-4" />
          <span className="text-xs font-medium">Hover to zoom</span>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={handlePrevious}
          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-background/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-background/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
          aria-label="Next image"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        {/* Mobile pagination dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 md:hidden">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all",
                index === activeIndex 
                  ? "bg-primary w-6" 
                  : "bg-background/60"
              )}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

        {/* Image type badge */}
        <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full">
          <span className="text-xs font-medium capitalize tracking-wider">
            {images[activeIndex]?.type || "Product"}
          </span>
        </div>
      </div>

      {/* Thumbnail strip */}
      <div className="hidden md:flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              "relative flex-shrink-0 w-20 h-24 rounded-lg overflow-hidden transition-all duration-200",
              index === activeIndex 
                ? "ring-2 ring-primary ring-offset-2 ring-offset-background" 
                : "opacity-60 hover:opacity-100"
            )}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;
