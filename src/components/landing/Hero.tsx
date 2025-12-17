import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Wifi, Users, CreditCard, Scan, Building2, Shield, Monitor, Smartphone } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <div className="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start">
              <Badge variant="secondary" className="inline-flex items-center gap-2">
                <Smartphone className="w-3 h-3" />
                Google Play Store
              </Badge>
              <Badge variant="outline" className="inline-flex items-center gap-2">
                <Monitor className="w-3 h-3" />
                Desktop Available
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Sell Without Interruptions:{" "}
              <span className="text-primary">The Offline-First POS</span> with Built-in Credit Tracking
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Keep selling during network outages, track customer dues effortlessly, and manage multiple cashiers securely—all in one simple app built for busy stores.
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
                <Users className="w-4 h-4 text-primary" />
                <span>Multi-cashier</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-primary" />
                <span>Credit tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <Scan className="w-4 h-4 text-primary" />
                <span>Barcode scanning</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-primary" />
                <span>Multi-store sync</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>Secure & reliable</span>
              </div>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Trusted by 500+ stores worldwide
            </p>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/30 rounded-3xl blur-3xl opacity-50 animate-pulse" />
            <img
              src={heroImage}
              alt="HelaPoint POS system showing checkout and credit tracking on Android tablet"
              className="relative rounded-2xl shadow-2xl w-full border border-border hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
