import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Wifi, Building2, Scan, Printer, Database } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <Badge variant="secondary" className="mb-6 inline-flex items-center gap-2">
              <Wifi className="w-3 h-3" />
              Offline-First Technology
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Run your store with confidence —{" "}
              <span className="text-primary">even offline.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              HelaPoint combines checkout, inventory, customer credit, receipts, and backups in one simple app—built to keep working when networks don't.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" className="gap-2">
                Request a Demo
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Play className="w-4 h-4" />
                Watch Walkthrough
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Wifi className="w-4 h-4 text-primary" />
                <span>Offline-first</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-primary" />
                <span>Multi-store ready</span>
              </div>
              <div className="flex items-center gap-2">
                <Scan className="w-4 h-4 text-primary" />
                <span>Barcode scanning</span>
              </div>
              <div className="flex items-center gap-2">
                <Printer className="w-4 h-4 text-primary" />
                <span>Receipt printing</span>
              </div>
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-primary" />
                <span>Backups & restore</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/30 rounded-3xl blur-3xl opacity-50" />
            <img
              src={heroImage}
              alt="HelaPoint POS system on tablet with barcode scanner"
              className="relative rounded-2xl shadow-2xl w-full border border-border"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
