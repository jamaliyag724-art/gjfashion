import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Ruler } from "lucide-react";

const SizeGuide = () => {
  const sizes = [
    { size: "XS", chest: "32-34", waist: "24-26", hip: "34-36" },
    { size: "S", chest: "34-36", waist: "26-28", hip: "36-38" },
    { size: "M", chest: "36-38", waist: "28-30", hip: "38-40" },
    { size: "L", chest: "38-40", waist: "30-32", hip: "40-42" },
    { size: "XL", chest: "40-42", waist: "32-34", hip: "42-44" },
    { size: "XXL", chest: "42-44", waist: "34-36", hip: "44-46" },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="text-xs text-muted-foreground hover:text-foreground">
          <Ruler className="h-3 w-3 mr-1" />
          Size Guide
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl">Size Guide</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <p className="text-sm text-muted-foreground mb-4">
            All measurements are in inches. For the best fit, measure your body and compare with the chart below.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 px-2 text-left font-medium">Size</th>
                  <th className="py-3 px-2 text-left font-medium">Chest</th>
                  <th className="py-3 px-2 text-left font-medium">Waist</th>
                  <th className="py-3 px-2 text-left font-medium">Hip</th>
                </tr>
              </thead>
              <tbody>
                {sizes.map((row) => (
                  <tr key={row.size} className="border-b border-border/50">
                    <td className="py-3 px-2 font-medium">{row.size}</td>
                    <td className="py-3 px-2 text-muted-foreground">{row.chest}</td>
                    <td className="py-3 px-2 text-muted-foreground">{row.waist}</td>
                    <td className="py-3 px-2 text-muted-foreground">{row.hip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SizeGuide;