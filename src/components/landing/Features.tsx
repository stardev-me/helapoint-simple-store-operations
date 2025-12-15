import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Scan, Package, Users, BarChart3, Building2, Database, Printer, Cloud } from "lucide-react";

const features = [
  {
    id: "checkout",
    icon: ShoppingCart,
    title: "Checkout",
    description: "HelaPoint makes checkout simple—search fast, scan barcodes, and finalize sales with fewer taps.",
    details: [
      "Product search (by name, brand, barcode, item code)",
      "Quick category shortcuts for common items",
      "Cart management (add items, update quantities)",
      "Retail/Wholesale mode toggle (store-configurable)",
      "Receipt flow (generate order summary, receipt screens)"
    ]
  },
  {
    id: "barcode",
    icon: Scan,
    title: "Barcode Scanning",
    description: "Scan products instantly using your device camera—great for busy counters and large catalogs.",
    details: [
      "Camera-based barcode scanning",
      "Instant product lookup",
      "Multiple barcode format support",
      "Works offline"
    ]
  },
  {
    id: "inventory",
    icon: Package,
    title: "Inventory Management",
    description: "Keep your catalog organized and your stock accurate—with workflows designed for daily store operations.",
    details: [
      "Product catalog management",
      "Categories management",
      "Inventory list with search + filters",
      "Batch product creation workflows",
      "Soft delete + undo flows"
    ]
  },
  {
    id: "credit",
    icon: Users,
    title: "Sales & Credit Tracking",
    description: "Manage customer credit with clear balances, payment recording, and due-date visibility.",
    details: [
      "Customer credit balances tracking",
      "Record payments against balances",
      "View customer credit details",
      "Due-date status monitoring"
    ]
  },
  {
    id: "insights",
    icon: BarChart3,
    title: "Account & Insights",
    description: "Your store data stays accessible—review performance, history, and key actions from one place.",
    details: [
      "Store and business profile cards",
      "Overview metrics (dashboard-style)",
      "Sales history views",
      "Quick actions shortcuts"
    ]
  },
  {
    id: "multistore",
    icon: Building2,
    title: "Multi-Store Setup",
    description: "Built for growing businesses—manage one shop or multiple branches with structured business/store selection.",
    details: [
      "Create or select a business",
      "Add one or more stores",
      "Switch store context as needed",
      "Centralized management"
    ]
  },
  {
    id: "backups",
    icon: Database,
    title: "Backups & Restore",
    description: "Your data is yours—export backups whenever you want and restore quickly when needed.",
    details: [
      "Hourly local backups",
      "Manual export to Drive, Files, etc.",
      "Restore from backup JSON file",
      "Data ownership guaranteed"
    ]
  },
  {
    id: "sync",
    icon: Cloud,
    title: "Cloud Sync",
    description: "Sell offline and sync when online—designed to handle real retail conditions.",
    details: [
      "Background sync when connected",
      "Seamless offline-to-online transition",
      "Data consistency across devices",
      "Conflict resolution"
    ]
  },
  {
    id: "printing",
    icon: Printer,
    title: "Receipt Printing",
    description: "Connect to a compatible Bluetooth printer and streamline receipt workflows.",
    details: [
      "Bluetooth device scanning + connect",
      "Save preferred printer",
      "Auto-print preferences",
      "Multiple printer support"
    ]
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Powerful features for modern retail
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every tool you need to run efficient store operations, all in one place.
          </p>
        </div>

        <Tabs defaultValue="checkout" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent h-auto mb-8">
            {features.map((feature) => (
              <TabsTrigger
                key={feature.id}
                value={feature.id}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-4 py-2 rounded-full border border-border data-[state=active]:border-primary"
              >
                <feature.icon className="w-4 h-4 mr-2" />
                {feature.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {features.map((feature) => (
            <TabsContent key={feature.id} value={feature.id} className="mt-0">
              <div className="bg-card rounded-2xl p-8 border border-border">
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
                  <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-xl p-8 flex items-center justify-center min-h-[300px]">
                    <feature.icon className="w-32 h-32 text-primary/30" />
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
