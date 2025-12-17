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
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose HelaPoint?
          </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built for real-world retail challenges—where connectivity can be unreliable, credit is essential, and every sale counts.
          </p>
        </div>

        {/* Pain Points */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="bg-destructive/5 border-destructive/20 animate-fade-in hover:-translate-y-1 transition-transform" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            <CardHeader>
              <CardTitle className="text-lg">Tired of Lost Sales from Outages?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                HelaPoint keeps selling even when internet and power are down. Your business never stops.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-destructive/5 border-destructive/20 animate-fade-in hover:-translate-y-1 transition-transform" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <CardHeader>
              <CardTitle className="text-lg">Manual Credit Books Causing Disputes?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Digital credit tracking with due dates and payment history. No more "I already paid" arguments.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-destructive/5 border-destructive/20 animate-fade-in hover:-translate-y-1 transition-transform" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            <CardHeader>
              <CardTitle className="text-lg">Staff Disputes Over Sales?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Multi-cashier login tracks exactly who sold what. Full accountability for every transaction.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 font-semibold text-foreground">Feature</th>
                <th className="text-center py-4 px-4 font-semibold text-primary">HelaPoint</th>
                <th className="text-center py-4 px-4 font-semibold text-muted-foreground">Loyverse</th>
                <th className="text-center py-4 px-4 font-semibold text-muted-foreground">Square</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                  <td className="py-4 px-4 text-foreground">{feature.name}</td>
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

        <p className="text-center text-sm text-muted-foreground mt-6">
          <Check className="w-4 h-4 inline text-primary" /> Full support &nbsp;
          <Minus className="w-4 h-4 inline text-muted-foreground" /> Partial support &nbsp;
          <X className="w-4 h-4 inline text-muted-foreground/50" /> Not available
        </p>
      </div>
    </section>
  );
};

export default Comparison;