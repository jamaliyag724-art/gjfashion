import StarRating from "@/components/StarRating";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai",
    rating: 5,
    review: "Amazing quality! The fabric is so soft and the fit is perfect. Will definitely order again.",
    avatar: "PS",
  },
  {
    id: 2,
    name: "Rahul Mehta",
    location: "Delhi",
    rating: 5,
    review: "Best fashion store I've found online. The delivery was quick and packaging was premium.",
    avatar: "RM",
  },
  {
    id: 3,
    name: "Ananya Patel",
    location: "Ahmedabad",
    rating: 4,
    review: "Love the collection! Every piece I've bought has exceeded my expectations. Highly recommend!",
    avatar: "AP",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Customer Love
          </p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-4">
            Loved by 1,000+ Happy Customers
          </h2>
          <div className="flex items-center justify-center gap-2">
            <StarRating rating={4.9} size="lg" />
            <span className="text-muted-foreground">(4.9 out of 5)</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-2xl p-6 md:p-8 shadow-card hover:shadow-hover transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <StarRating rating={testimonial.rating} size="md" />
              <p className="mt-4 text-foreground leading-relaxed">
                "{testimonial.review}"
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;