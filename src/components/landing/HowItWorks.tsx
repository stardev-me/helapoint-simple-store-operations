import { Building2, Package, ShoppingCart, Users, Database } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Building2,
    title: "Set up your business and store",
    description: "Create a business, add your store(s), and configure the basics."
  },
  {
    number: "02",
    icon: Package,
    title: "Add products and categories",
    description: "Build your catalog with products, categories, pricing, and stock. Use batch workflows to onboard faster."
  },
  {
    number: "03",
    icon: ShoppingCart,
    title: "Start selling",
    description: "Search or scan items, add to cart, and complete checkout."
  },
  {
    number: "04",
    icon: Users,
    title: "Track sales and customer credit",
    description: "Record customer payments, monitor balances, and review history."
  },
  {
    number: "05",
    icon: Database,
    title: "Stay protected with backups",
    description: "Automatic local backups and optional exports help keep your business data safe."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-card relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-slide-up" style={{ animationFillMode: 'both' }}>
            How it{" "}
            <span className="animate-text-shimmer">works</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            Get started in minutes and transform your store operations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="relative flex gap-6 pb-12 last:pb-0 group animate-slide-in-left"
              style={{ animationDelay: `${0.1 + index * 0.15}s`, animationFillMode: 'both' }}
            >
              {/* Connecting line with animation */}
              {index !== steps.length - 1 && (
                <div className="absolute left-6 top-14 w-0.5 h-full bg-border overflow-hidden">
                  <div className="w-full h-full bg-primary/50 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top" />
                </div>
              )}
              
              {/* Step number and icon */}
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 animate-pulse-glow">
                  <step.icon className="w-6 h-6 text-primary-foreground group-hover:animate-bounce-gentle" />
                </div>
                {/* Orbiting dot */}
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent-foreground rounded-full animate-orbit opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="flex-1 pt-1 group-hover:translate-x-2 transition-transform duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-mono text-primary group-hover:animate-text-shimmer">{step.number}</span>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                </div>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
