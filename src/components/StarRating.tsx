import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
}

const StarRating = ({ rating, maxRating = 5, size = "sm", showValue = false }: StarRatingProps) => {
  const sizeClasses = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5",
  };

  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {Array.from({ length: maxRating }).map((_, index) => (
          <Star
            key={index}
            className={`${sizeClasses[size]} ${
              index < Math.floor(rating)
                ? "fill-gold text-gold"
                : index < rating
                ? "fill-gold/50 text-gold"
                : "fill-muted text-muted"
            }`}
          />
        ))}
      </div>
      {showValue && (
        <span className="text-xs text-muted-foreground ml-1">({rating.toFixed(1)})</span>
      )}
    </div>
  );
};

export default StarRating;