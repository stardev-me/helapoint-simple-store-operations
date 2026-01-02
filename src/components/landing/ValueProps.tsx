import { Card, CardContent } from "@/components/ui/card";
import { Zap, Package, FileText, CreditCard, WifiOff } from "lucide-react";

const valueProps = [
  {
    icon: Zap,
    title: "Faster checkout",
    description: "Search products instantly, use quick category shortcuts, and keep the cart moving."
  },
  {
    icon: Package,
    title: "Inventory clarity",
    description: "Manage products, categories, pricing, and stock levels with tools built for daily updates."
  },
  {
    icon: FileText,
    title: "Sales records you can trust",
    description: "Track sales activity, understand what sells most, and keep history accessible."
  },
  {
    icon: CreditCard,
    title: "Customer credit management",
    description: "Record customer balances and payments, monitor due dates, and reduce missed collections."
  },
  {
    icon: WifiOff,
    title: "Built for unreliable connectivity",
    description: "Keep selling during network issues and sync when connectivity returns."
  }
];

const ValueProps = () => {
  return (
    <section className="py-16 md:py-24 bg-card relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-slide-up" style={{ animationFillMode: 'both' }}>
            Everything you need to{" "}
            <span className="animate-text-shimmer">run your store</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            From fast checkout to reliable backups, HelaPoint covers every aspect of daily retail operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valueProps.map((prop, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-500 border-border hover:border-primary/50 hover:-translate-y-2 animate-slide-up cursor-default"
              style={{ animationDelay: `${0.1 + index * 0.1}s`, animationFillMode: 'both' }}
            >
              <CardContent className="p-6 relative overflow-hidden">
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-accent/10 transition-all duration-500" />
                
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <prop.icon className="w-6 h-6 text-primary group-hover:animate-bounce-gentle" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {prop.title}
                  </h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {prop.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
