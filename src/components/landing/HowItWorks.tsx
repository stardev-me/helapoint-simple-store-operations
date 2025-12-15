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
    <section id="how-it-works" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How it works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started in minutes and transform your store operations.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative flex gap-6 pb-12 last:pb-0">
              {/* Connecting line */}
              {index !== steps.length - 1 && (
                <div className="absolute left-6 top-14 w-0.5 h-full bg-border" />
              )}
              
              {/* Step number and icon */}
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pt-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-mono text-primary">{step.number}</span>
                  <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                </div>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
