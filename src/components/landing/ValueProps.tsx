import { Card, CardContent } from "@/components/ui/card";
import { Zap, Package, FileText, CreditCard, WifiOff } from "lucide-react";

const valueProps = [
  {
    icon: Zap,
    title: "Checkout that keeps up with customers",
    description: "Search products instantly, use quick category shortcuts, and keep the cart moving."
  },
  {
    icon: Package,
    title: "Know what's in stock—at a glance",
    description: "Manage products, categories, pricing, and stock levels with tools built for daily updates."
  },
  {
    icon: FileText,
    title: "Every sale is organized",
    description: "Track sales activity, understand what sells most, and keep history accessible."
  },
  {
    icon: CreditCard,
    title: "Track credit and payments",
    description: "Record customer balances and payments, monitor due dates, and reduce missed collections."
  },
  {
    icon: WifiOff,
    title: "Offline-first reliability",
    description: "Keep selling during network issues and sync when connectivity returns."
  }
];

const ValueProps = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up" style={{ animationFillMode: 'both' }}>
            Everything you need to run a{" "}
            <span className="gradient-text">modern retail store</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            Built for day-to-day operations with features that actually help you sell faster and manage better.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valueProps.map((prop, index) => (
            <Card 
              key={index} 
              className="glass-strong hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-slide-up cursor-default group"
              style={{ animationDelay: `${0.1 + index * 0.1}s`, animationFillMode: 'both' }}
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500">
                  <prop.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
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
