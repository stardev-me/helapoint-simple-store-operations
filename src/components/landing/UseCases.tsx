import { Card, CardContent } from "@/components/ui/card";
import { 
  ShoppingBasket, 
  Pill, 
  Cpu, 
  Sparkles, 
  Coffee, 
  Shirt, 
  Wrench, 
  BookOpen,
  Flower2,
  Beer,
  Scissors,
  Gift
} from "lucide-react";

const useCases = [
  {
    icon: ShoppingBasket,
    title: "Grocery / Mini-mart",
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=400&h=300&fit=crop",
    features: [
      "Fast barcode scanning at checkout",
      "Quick categories for common items",
      "Clear inventory list for restocking",
      "Track customer credit balances"
    ]
  },
  {
    icon: Pill,
    title: "Pharmacy / Health Shop",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400&h=300&fit=crop",
    features: [
      "Product lookup by barcode/item code",
      "Expiry date tracking",
      "Customer records for prescriptions",
      "Stock alerts for essential medicines"
    ]
  },
  {
    icon: Cpu,
    title: "Electronics & Accessories",
    image: "https://images.unsplash.com/photo-1491933382434-500287f9b54b?w=400&h=300&fit=crop",
    features: [
      "Large catalog search capability",
      "Warranty tracking via sales history",
      "Serial number management",
      "Customer support reference"
    ]
  },
  {
    icon: Sparkles,
    title: "Cosmetics & Beauty",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop",
    features: [
      "Product variants (colors, sizes)",
      "Loyalty customer tracking",
      "Promotional pricing support",
      "Beauty product categories"
    ]
  },
  {
    icon: Shirt,
    title: "Clothing & Fashion",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
    features: [
      "Size and color variants",
      "Seasonal inventory management",
      "Wholesale and retail pricing",
      "Returns and exchange tracking"
    ]
  },
  {
    icon: Coffee,
    title: "Café & Restaurant",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=400&h=300&fit=crop",
    features: [
      "Quick menu item selection",
      "Table or takeaway orders",
      "Daily sales reports",
      "Staff shift management"
    ]
  },
  {
    icon: Wrench,
    title: "Hardware & Tools",
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=400&h=300&fit=crop",
    features: [
      "Heavy inventory management",
      "Bulk pricing for contractors",
      "Parts and accessories catalog",
      "Customer project tracking"
    ]
  },
  {
    icon: BookOpen,
    title: "Bookshop & Stationery",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
    features: [
      "ISBN barcode scanning",
      "School supply categories",
      "Bulk orders for institutions",
      "Seasonal stock planning"
    ]
  },
  {
    icon: Flower2,
    title: "Florist & Garden",
    image: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=400&h=300&fit=crop",
    features: [
      "Perishable inventory alerts",
      "Event and occasion tracking",
      "Customer preferences notes",
      "Delivery order management"
    ]
  },
  {
    icon: Beer,
    title: "Liquor & Beverages",
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=400&h=300&fit=crop",
    features: [
      "Age verification reminders",
      "Case and unit pricing",
      "Supplier order tracking",
      "Happy hour pricing modes"
    ]
  },
  {
    icon: Scissors,
    title: "Salon & Barbershop",
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=400&h=300&fit=crop",
    features: [
      "Service and product sales",
      "Appointment integration ready",
      "Staff commission tracking",
      "Customer visit history"
    ]
  },
  {
    icon: Gift,
    title: "Gift Shop & Souvenirs",
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?w=400&h=300&fit=crop",
    features: [
      "Seasonal product rotation",
      "Gift wrapping add-ons",
      "Tourist-friendly interface",
      "Multi-currency ready"
    ]
  }
];

const UseCases = () => {
  return (
    <section id="use-cases" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built for your industry
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            HelaPoint adapts to the unique needs of different retail businesses—from corner shops to multi-branch chains.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:border-primary/50 hover:-translate-y-2 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 0.05}s`, animationFillMode: 'both' }}
            >
              <div className="relative h-40 overflow-hidden">
                <img 
                  src={useCase.image} 
                  alt={useCase.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute bottom-3 left-3 w-10 h-10 bg-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <useCase.icon className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {useCase.title}
                </h3>
                <ul className="space-y-1.5">
                  {useCase.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
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