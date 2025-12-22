import { cn } from "@/lib/utils";

interface BadgeProps {
  variant: "hot" | "new" | "sale" | "trending";
  children: React.ReactNode;
  className?: string;
}

const Badge = ({ variant, children, className }: BadgeProps) => {
  const variants = {
    hot: "bg-hot text-background",
    new: "bg-new text-background",
    sale: "bg-success text-background",
    trending: "bg-gold text-foreground",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;