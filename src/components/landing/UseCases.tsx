import { Card, CardContent } from "@/components/ui/card";
import { ShoppingBasket, Pill, Cpu, Sparkles } from "lucide-react";

const useCases = [
  {
    icon: ShoppingBasket,
    title: "Grocery / Mini-mart",
    features: [
      "Fast barcode scanning",
      "Quick categories for common items",
      "Clear inventory list for restocking"
    ]
  },
  {
    icon: Pill,
    title: "Pharmacy / Health shop",
    features: [
      "Product lookup by barcode/item code",
      "Stock tracking and pricing",
      "Customer tracking for repeat buyers"
    ]
  },
  {
    icon: Cpu,
    title: "Electronics & Accessories",
    features: [
      "Large catalog search",
      "Inventory organization by category/brand",
      "Sales history for warranty/support"
    ]
  },
  {
    icon: Sparkles,
    title: "Wholesale + Retail",
    features: [
      "Retail and wholesale price modes",
      "Manage mixed customer types",
      "Consistent checkout workflows"
    ]
  }
];

const UseCases = () => {
  return (
    <section id="use-cases" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built for your industry
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            HelaPoint adapts to the unique needs of different retail businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:border-primary/50">
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <useCase.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  {useCase.title}
                </h3>
                <ul className="space-y-2">
                  {useCase.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
