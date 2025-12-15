import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "HelaPoint saved my grocery during power blackouts—I collected all customer dues easily and never lost a sale!",
    author: "John Kamau",
    role: "Mini-Mart Owner",
    location: "Nairobi, Kenya",
    rating: 5
  },
  {
    quote: "Managing 3 cashiers was a nightmare before. Now I see exactly who sold what and track every shilling.",
    author: "Fatima Okonkwo",
    role: "Pharmacy Owner",
    location: "Lagos, Nigeria",
    rating: 5
  },
  {
    quote: "My customers love the credit system. They pay when they can, and I never forget who owes what.",
    author: "Priya Sharma",
    role: "Electronics Shop Owner",
    location: "Mumbai, India",
    rating: 5
  },
  {
    quote: "Even when internet is down for hours, my shop keeps running. This is exactly what we need in Tanzania.",
    author: "Emmanuel Mwanga",
    role: "Grocery Store Owner",
    location: "Dar es Salaam, Tanzania",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Store Owners Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of small and medium businesses across Africa and Asia who trust HelaPoint every day
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
            >
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 items-center opacity-60">
          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">500+</p>
            <p className="text-sm text-muted-foreground">Active Stores</p>
          </div>
          <div className="w-px h-12 bg-border" />
          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">4 Countries</p>
            <p className="text-sm text-muted-foreground">Kenya, Nigeria, Tanzania, India</p>
          </div>
          <div className="w-px h-12 bg-border" />
          <div className="text-center">
            <p className="text-2xl font-bold text-foreground">99.9%</p>
            <p className="text-sm text-muted-foreground">Uptime Offline</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;