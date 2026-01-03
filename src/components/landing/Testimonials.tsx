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
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up" style={{ animationFillMode: 'both' }}>
            What Store Owners{" "}
            <span className="gradient-text">Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            Real stories from busy stores across Africa and Asia who trust HelaPoint to keep their business running.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="glass-strong hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group animate-slide-up"
              style={{ animationDelay: `${0.1 + index * 0.15}s`, animationFillMode: 'both' }}
            >
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary/40 mb-4" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "2,500+", label: "Active Stores" },
            { value: "15", label: "Countries" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "99%", label: "Customer Satisfaction" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="glass-strong rounded-2xl p-6 text-center animate-slide-up hover:scale-105 transition-transform duration-300" 
              style={{ animationDelay: `${0.5 + index * 0.1}s`, animationFillMode: 'both' }}
            >
              <p className="text-3xl font-bold gradient-text mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
