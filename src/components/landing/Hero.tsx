import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Wifi, Users, CreditCard, Scan, Building2, Shield, Monitor, Smartphone } from "lucide-react";
import connectionsImage from "@/assets/helapoint-connections.png";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
              <Badge variant="secondary" className="inline-flex items-center gap-2 animate-bounce-gentle">
                <Smartphone className="w-3 h-3" />
                Google Play Store
              </Badge>
              <Badge variant="outline" className="inline-flex items-center gap-2 animate-bounce-gentle" style={{ animationDelay: '0.3s' }}>
                <Monitor className="w-3 h-3" />
                Desktop Available
              </Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <span className="inline-block animate-text-shimmer">Sell Without Interruptions:</span>{" "}
              <span className="text-primary relative">
                The Offline-First POS
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/50 rounded-full animate-scale-bounce" />
              </span>{" "}
              with Built-in Credit Tracking, Multi-Business & Multi-Store Support
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              Keep selling during network outages, track customer dues effortlessly, and manage multiple cashiers securely—all in one simple app built for busy stores.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-slide-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
              <Button size="lg" className="gap-2 animate-pulse-glow hover:scale-105 transition-transform">
                Request a Demo
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 hover:scale-105 transition-transform group">
                <Play className="w-4 h-4 group-hover:animate-wiggle" />
                Watch Walkthrough
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-muted-foreground animate-slide-up" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
              {[
                { icon: Wifi, label: "Offline-first", delay: 0 },
                { icon: Users, label: "Multi-cashier", delay: 0.1 },
                { icon: CreditCard, label: "Credit tracking", delay: 0.2 },
                { icon: Scan, label: "Barcode scanning", delay: 0.3 },
                { icon: Building2, label: "Multi-store sync", delay: 0.4 },
                { icon: Shield, label: "Secure & reliable", delay: 0.5 },
              ].map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 hover:scale-110 transition-transform cursor-default"
                  style={{ animationDelay: `${0.6 + feature.delay}s` }}
                >
                  <feature.icon className="w-4 h-4 text-primary animate-bounce-gentle" style={{ animationDelay: `${feature.delay}s` }} />
                  <span>{feature.label}</span>
                </div>
              ))}
            </div>

            <p className="mt-6 text-sm text-muted-foreground animate-slide-up" style={{ animationDelay: '0.7s', animationFillMode: 'both' }}>
              Trusted by <span className="font-bold text-primary animate-text-shimmer">500+</span> stores worldwide
            </p>
          </div>

          <div className="relative animate-slide-in-right" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            {/* Animated background glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/30 rounded-3xl blur-3xl opacity-50 animate-pulse" />
            
            {/* Orbiting decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-orbit opacity-60" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent-foreground rounded-full animate-orbit" style={{ animationDelay: '-5s' }} />
            
            <img
              src={connectionsImage}
              alt="HelaPoint POS system showing all connected features - cart, scanner, printer, customers"
              className="relative rounded-2xl shadow-2xl w-full border border-border hover:scale-[1.02] transition-transform duration-500 animate-float-slow"
            />
            
            {/* Floating feature badges */}
            <div className="absolute -right-4 top-1/4 bg-card border border-border rounded-xl p-3 shadow-lg animate-float" style={{ animationDelay: '-2s' }}>
              <div className="flex items-center gap-2">
                <Wifi className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Works Offline</span>
              </div>
            </div>
            
            <div className="absolute -left-4 bottom-1/4 bg-card border border-border rounded-xl p-3 shadow-lg animate-float" style={{ animationDelay: '-4s' }}>
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Multi-Store</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated marquee text */}
      <div className="mt-16 overflow-hidden bg-primary/5 py-4 border-y border-border">
        <div className="animate-marquee whitespace-nowrap">
          <span className="mx-8 text-lg font-medium text-muted-foreground">✨ Offline-First POS</span>
          <span className="mx-8 text-lg font-medium text-primary">📊 Real-time Analytics</span>
          <span className="mx-8 text-lg font-medium text-muted-foreground">💳 Credit Tracking</span>
          <span className="mx-8 text-lg font-medium text-primary">🏪 Multi-Store Support</span>
          <span className="mx-8 text-lg font-medium text-muted-foreground">📱 Barcode Scanning</span>
          <span className="mx-8 text-lg font-medium text-primary">👥 Multi-Cashier</span>
          <span className="mx-8 text-lg font-medium text-muted-foreground">🔒 Secure Backups</span>
          <span className="mx-8 text-lg font-medium text-primary">🧾 Receipt Printing</span>
          <span className="mx-8 text-lg font-medium text-muted-foreground">✨ Offline-First POS</span>
          <span className="mx-8 text-lg font-medium text-primary">📊 Real-time Analytics</span>
          <span className="mx-8 text-lg font-medium text-muted-foreground">💳 Credit Tracking</span>
          <span className="mx-8 text-lg font-medium text-primary">🏪 Multi-Store Support</span>
          <span className="mx-8 text-lg font-medium text-muted-foreground">📱 Barcode Scanning</span>
          <span className="mx-8 text-lg font-medium text-primary">👥 Multi-Cashier</span>
          <span className="mx-8 text-lg font-medium text-muted-foreground">🔒 Secure Backups</span>
          <span className="mx-8 text-lg font-medium text-primary">🧾 Receipt Printing</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
