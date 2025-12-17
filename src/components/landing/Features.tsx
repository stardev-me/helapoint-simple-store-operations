import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ShoppingCart, 
  Scan, 
  Package, 
  Users, 
  BarChart3, 
  Building2, 
  Printer, 
  Cloud,
  LineChart,
  Smartphone,
  Shield,
  Bell
} from "lucide-react";

const features = [
  {
    id: "checkout",
    icon: ShoppingCart,
    title: "Fast Checkout",
    description: "Keep the queue moving—search fast, scan barcodes, and finalize sales with fewer taps.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    details: [
      "Product search (by name, brand, barcode, item code)",
      "Quick category shortcuts for common items",
      "Cart management with quantity updates",
      "Retail/Wholesale price mode toggle",
      "Receipt generation and printing"
    ]
  },
  {
    id: "barcode",
    icon: Scan,
    title: "Barcode Scanning",
    description: "Scan products instantly using your device camera—great for busy counters and large catalogs.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    details: [
      "Camera-based barcode scanning",
      "Instant product lookup",
      "Multiple barcode format support",
      "Works fully offline"
    ]
  },
  {
    id: "inventory",
    icon: Package,
    title: "Inventory Management",
    description: "Keep your catalog organized and your stock accurate—with workflows designed for daily store operations.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
    details: [
      "Product catalog management",
      "Categories and pricing",
      "Stock level tracking",
      "Batch product import",
      "Low stock alerts"
    ]
  },
  {
    id: "credit",
    icon: Users,
    title: "Customer Credit Tracking",
    description: "Track who owes what, record payments, and never lose money to forgotten debts again.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
    details: [
      "Customer credit balances",
      "Due date tracking",
      "Payment recording",
      "Credit history per customer",
      "Outstanding balance reports"
    ]
  },
  {
    id: "multicashier",
    icon: BarChart3,
    title: "Multi-Cashier Support",
    description: "Each staff member logs in separately. Know exactly who sold what and when.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop",
    details: [
      "Individual cashier logins",
      "Transaction accountability",
      "Shift reports per cashier",
      "Secure PIN or password access",
      "Manager oversight dashboard"
    ]
  },
  {
    id: "multistore",
    icon: Building2,
    title: "Multi-Store Sync",
    description: "Manage one shop or many—sync data across all locations when connected.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
    details: [
      "Create multiple stores",
      "Switch between stores easily",
      "Sync when online",
      "Offline operation per store",
      "Centralized business overview"
    ]
  },
  {
    id: "owner",
    icon: LineChart,
    title: "Owner Dashboard",
    description: "Business owners can track all stores and performance from one place—on mobile or desktop.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    details: [
      "Overview of all businesses & stores",
      "Real-time sales tracking",
      "Revenue and profit insights",
      "Cashier performance monitoring",
      "Cross-store comparison reports"
    ]
  },
  {
    id: "sync",
    icon: Cloud,
    title: "Background Sync",
    description: "Sell offline and sync automatically when internet returns. Your data stays safe.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop",
    details: [
      "Automatic background sync",
      "Conflict resolution",
      "Data consistency across devices",
      "Works in low-connectivity areas"
    ]
  },
  {
    id: "printing",
    icon: Printer,
    title: "Receipt Printing",
    description: "Connect to a Bluetooth printer and print receipts automatically after each sale.",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop",
    details: [
      "Bluetooth printer connection",
      "Save preferred printer",
      "Auto-print option",
      "Custom receipt format"
    ]
  },
  {
    id: "alerts",
    icon: Bell,
    title: "Smart Alerts",
    description: "Get notified about low stock, credit due dates, and important business events.",
    image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=600&h=400&fit=crop",
    details: [
      "Low stock notifications",
      "Credit payment reminders",
      "Sales milestone alerts",
      "System health updates"
    ]
  },
  {
    id: "security",
    icon: Shield,
    title: "Security & Access",
    description: "Control who can access what with role-based permissions and secure login.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    details: [
      "Role-based access control",
      "Secure PIN/password login",
      "Audit trail for transactions",
      "Data encryption"
    ]
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "Mobile & Desktop",
    description: "Use HelaPoint on Android phones, tablets, or desktop computers—your choice.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    details: [
      "Android mobile app",
      "Desktop web application",
      "Responsive tablet design",
      "Same experience everywhere"
    ]
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Powerful features for modern retail
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every tool you need to run efficient store operations, all in one place.
          </p>
        </div>

        <Tabs defaultValue="checkout" className="w-full animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto mb-8">
            {features.map((feature) => (
              <TabsTrigger
                key={feature.id}
                value={feature.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-3 py-2 rounded-full border border-border data-[state=active]:border-primary hover:scale-105 transition-transform text-sm"
              >
                <feature.icon className="w-4 h-4 mr-1.5" />
                {feature.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {features.map((feature) => (
            <TabsContent key={feature.id} value={feature.id} className="mt-0">
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground mb-6">{feature.description}</p>
                    <ul className="space-y-3">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                          </div>
                          <span className="text-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="relative rounded-xl overflow-hidden min-h-[300px] group">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover absolute inset-0 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                  </div>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Features;