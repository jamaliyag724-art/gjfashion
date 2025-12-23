import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import look1 from "@/assets/look-1.jpg";
import look2 from "@/assets/look-2.jpg";
import look3 from "@/assets/look-3.jpg";
import look4 from "@/assets/look-4.jpg";

const looks = [
  {
    id: 1,
    title: "Office Classic Look",
    description: "Navy Blazer + White Shirt + Gray Trousers",
    image: look1,
    products: ["blazers", "shirts", "trousers"],
  },
  {
    id: 2,
    title: "Weekend Casual Look",
    description: "Beige Blazer + Blue Shirt + Navy Chinos",
    image: look2,
    products: ["blazers", "shirts", "trousers"],
  },
  {
    id: 3,
    title: "Evening Formal Look",
    description: "Black Blazer + White Dress Shirt + Charcoal Trousers",
    image: look3,
    products: ["blazers", "shirts", "trousers"],
  },
  {
    id: 4,
    title: "Summer Business Look",
    description: "Cream Blazer + Silk Blouse + Olive Trousers",
    image: look4,
    products: ["blazers", "shirts", "trousers"],
  },
];

const CompleteLook = () => {
  const navigate = useNavigate();

  const handleShopLook = (products: string[]) => {
    navigate(`/shop?category=${products[0]}`);
  };

  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Style Inspiration
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground">
            Complete the Look
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Curated outfit combinations for every occasion
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {looks.map((look, index) => (
            <div
              key={look.id}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-lg transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={look.image}
                  alt={look.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-background transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-heading text-xl font-medium mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {look.title}
                </h3>
                <p className="text-sm text-background/80 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                  {look.description}
                </p>
                <Button
                  variant="quickView"
                  className="w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"
                  onClick={() => handleShopLook(look.products)}
                >
                  Shop This Look
                </Button>
              </div>

              {/* Always visible title badge */}
              <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <span className="text-xs font-medium tracking-wider uppercase text-foreground">
                  {look.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompleteLook;
