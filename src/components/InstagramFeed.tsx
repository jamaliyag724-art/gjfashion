import { Instagram } from "lucide-react";

const instagramPosts = [
  { id: 1, image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=300&h=300&fit=crop" },
  { id: 2, image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=300&h=300&fit=crop" },
  { id: 3, image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=300&h=300&fit=crop" },
  { id: 4, image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=300&h=300&fit=crop" },
  { id: 5, image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?w=300&h=300&fit=crop" },
  { id: 6, image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=300&h=300&fit=crop" },
];

const InstagramFeed = () => {
  return (
    <section className="py-16 md:py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Instagram className="h-5 w-5 text-primary" />
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground">
              @gjfashion
            </p>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground">
            Follow Us on Instagram
          </h2>
          <p className="text-muted-foreground mt-2">
            See how our customers style their GJ Fashion pieces
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <img
                src={post.image}
                alt="Instagram post"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/30 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="h-6 w-6 text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;