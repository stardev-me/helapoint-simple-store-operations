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
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything you need to run your store
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From fast checkout to reliable backups, HelaPoint covers every aspect of daily retail operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valueProps.map((prop, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/50 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <prop.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {prop.title}
                </h3>
                <p className="text-muted-foreground">
                  {prop.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
