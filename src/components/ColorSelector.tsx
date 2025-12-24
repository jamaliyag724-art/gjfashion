import { cn } from "@/lib/utils";
import { ColorVariant } from "@/data/products";
import { Check } from "lucide-react";

interface ColorSelectorProps {
  variants: ColorVariant[];
  selectedColor: string;
  onColorChange: (colorName: string) => void;
}

const ColorSelector = ({ variants, selectedColor, onColorChange }: ColorSelectorProps) => {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h4 className="font-medium text-sm">Color</h4>
        <span className="text-sm text-muted-foreground">{selectedColor}</span>
      </div>
      <div className="flex flex-wrap gap-3">
        {variants.map((variant) => (
          <button
            key={variant.name}
            onClick={() => onColorChange(variant.name)}
            className={cn(
              "relative w-10 h-10 rounded-full transition-all duration-200 flex items-center justify-center",
              selectedColor === variant.name
                ? "ring-2 ring-primary ring-offset-2 ring-offset-background scale-110"
                : "hover:scale-105"
            )}
            style={{ backgroundColor: variant.hex }}
            aria-label={`Select ${variant.name} color`}
            title={variant.name}
          >
            {selectedColor === variant.name && (
              <Check 
                className={cn(
                  "h-5 w-5",
                  isLightColor(variant.hex) ? "text-foreground" : "text-background"
                )} 
              />
            )}
            {/* Border for light colors */}
            {isLightColor(variant.hex) && (
              <span className="absolute inset-0 rounded-full border border-border" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

// Helper to determine if color is light
function isLightColor(hex: string): boolean {
  const color = hex.replace("#", "");
  const r = parseInt(color.substring(0, 2), 16);
  const g = parseInt(color.substring(2, 4), 16);
  const b = parseInt(color.substring(4, 6), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 180;
}

export default ColorSelector;
