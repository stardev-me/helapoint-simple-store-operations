import { Check, X, Minus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  { name: "Works Offline", helapoint: true, loyverse: "partial", square: false },
  { name: "Native Credit Tracking", helapoint: true, loyverse: false, square: false },
  { name: "Multi-Cashier with Accountability", helapoint: true, loyverse: "partial", square: true },
  { name: "Multi-Store Sync", helapoint: true, loyverse: true, square: true },
  { name: "Customer Due Dates", helapoint: true, loyverse: false, square: false },
  { name: "Barcode Scanning", helapoint: true, loyverse: true, square: true },
  { name: "Receipt Printing", helapoint: true, loyverse: true, square: true },
  { name: "Works in Low-Connectivity Areas", helapoint: true, loyverse: "partial", square: false },
  { name: "Owner Business Dashboard", helapoint: true, loyverse: "partial", square: true },
  { name: "Android & Desktop Apps", helapoint: true, loyverse: true, square: "partial" },
];

const FeatureIcon = ({ value }: { value: boolean | string }) => {
  if (value === true) {
    return <Check className="w-5 h-5 text-primary" />;
  }
  if (value === "partial") {
    return <Minus className="w-5 h-5 text-muted-foreground" />;
  }
  return <X className="w-5 h-5 text-muted-foreground/50" />;
};

const Comparison = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 mesh-gradient" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-slide-up" style={{ animationFillMode: 'both' }}>
            Why Choose{" "}
            <span className="gradient-text">HelaPoint?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            Built for real-world retail challenges—where connectivity can be unreliable, credit is essential, and every sale counts.
          </p>
        </div>

        {/* Pain Points */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { title: "Tired of Lost Sales from Outages?", description: "HelaPoint keeps selling even when internet and power are down. Your business never stops." },
            { title: "Manual Credit Books Causing Disputes?", description: "Digital credit tracking with due dates and payment history. No more \"I already paid\" arguments." },
            { title: "Staff Disputes Over Sales?", description: "Multi-cashier login tracks exactly who sold what. Full accountability for every transaction." }
          ].map((pain, index) => (
            <Card 
              key={index}
              className="glass-strong border-destructive/20 hover:-translate-y-2 hover:shadow-xl transition-all duration-500 group animate-slide-up"
              style={{ animationDelay: `${0.1 + index * 0.1}s`, animationFillMode: 'both' }}
            >
              <CardHeader>
                <CardTitle className="text-lg group-hover:text-destructive transition-colors duration-300">{pain.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  {pain.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="glass-strong rounded-2xl p-6 overflow-x-auto animate-slide-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 font-semibold">Feature</th>
                <th className="text-center py-4 px-4 font-semibold gradient-text">HelaPoint</th>
                <th className="text-center py-4 px-4 font-semibold text-muted-foreground">Loyverse</th>
                <th className="text-center py-4 px-4 font-semibold text-muted-foreground">Square</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr 
                  key={index} 
                  className="border-b border-border/50 hover:bg-primary/5 transition-all duration-300 group"
                >
                  <td className="py-4 px-4 group-hover:text-primary transition-all duration-300">{feature.name}</td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex justify-center">
                      <FeatureIcon value={feature.helapoint} />
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex justify-center">
                      <FeatureIcon value={feature.loyverse} />
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex justify-center">
                      <FeatureIcon value={feature.square} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6 animate-slide-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
          <Check className="w-4 h-4 inline text-primary" /> Full support &nbsp;
          <Minus className="w-4 h-4 inline text-muted-foreground" /> Partial support &nbsp;
          <X className="w-4 h-4 inline text-muted-foreground/50" /> Not available
        </p>
      </div>
    </section>
  );
};

export default Comparison;
