import { Skeleton } from "@/components/ui/skeleton";

interface ProductCardSkeletonProps {
  count?: number;
}

const ProductCardSkeleton = ({ count = 1 }: ProductCardSkeletonProps) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="bg-card rounded-2xl overflow-hidden shadow-card animate-pulse"
        >
          {/* Image skeleton */}
          <div className="relative aspect-[3/4] bg-muted">
            <div className="absolute inset-0 shimmer" />
          </div>

          {/* Content skeleton */}
          <div className="p-4 space-y-3">
            {/* Title */}
            <Skeleton className="h-5 w-3/4" />
            
            {/* Rating */}
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-4 w-4 rounded-full" />
              ))}
            </div>
            
            {/* Price */}
            <div className="flex items-center gap-2">
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-4 w-16" />
            </div>
            
            {/* Button */}
            <Skeleton className="h-12 w-full rounded-full" />
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCardSkeleton;