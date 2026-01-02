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
    <section className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-slide-up" style={{ animationFillMode: 'both' }}>
            What Store Owners{" "}
            <span className="animate-text-shimmer">Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            Join hundreds of small and medium businesses across Africa and Asia who trust HelaPoint every day
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group animate-slide-up"
              style={{ animationDelay: `${0.1 + index * 0.15}s`, animationFillMode: 'both' }}
            >
              <CardContent className="p-6 relative overflow-hidden">
                {/* Decorative gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-500" />
                
                <div className="relative z-10">
                  <Quote className="w-8 h-8 text-primary/30 mb-4 group-hover:text-primary/50 group-hover:scale-110 transition-all duration-300" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className="w-4 h-4 fill-primary text-primary transition-transform duration-300 group-hover:scale-110" 
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300">
                    "{testimonial.quote}"
                  </p>
                  <div className="transform group-hover:translate-x-2 transition-transform duration-300">
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 items-center">
          {[
            { value: "500+", label: "Active Stores" },
            { value: "4 Countries", label: "Kenya, Nigeria, Tanzania, India" },
            { value: "99.9%", label: "Uptime Offline" }
          ].map((stat, index) => (
            <div key={index} className="text-center group animate-slide-up" style={{ animationDelay: `${0.5 + index * 0.1}s`, animationFillMode: 'both' }}>
              <p className="text-2xl font-bold text-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300 animate-text-shimmer">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
