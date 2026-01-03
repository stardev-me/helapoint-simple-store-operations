import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Wifi, Users, CreditCard, CheckCircle2, Building2, Store } from "lucide-react";
import connectionsImage from "@/assets/helapoint-connections.png";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden relative mesh-gradient-hero min-h-screen">
      {/* Floating glass orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-pink-300/40 to-purple-400/30 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-indigo-300/30 to-cyan-300/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 left-1/3 w-64 h-64 bg-gradient-to-br from-purple-300/35 to-pink-300/25 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Trust badge */}
        <div className="text-center mb-8 animate-slide-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
          <span className="text-sm text-muted-foreground">Trusted by stores across Africa & Asia</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              Sell Without Interruptions:{" "}
              <span className="gradient-text-animated">The Offline-First POS</span>{" "}
              with Built-in Customer Credit Tracking
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-slide-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
              Keep selling during network outages, track customer dues effortlessly, and manage multiple cashiers securely—all in one simple app designed for busy stores.
            </p>

            {/* Feature badges - glassmorphic */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8 animate-slide-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
              <div className="glass px-4 py-2 rounded-full flex items-center gap-2 hover:scale-105 transition-transform">
                <Wifi className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Works Offline</span>
              </div>
              <div className="glass px-4 py-2 rounded-full flex items-center gap-2 hover:scale-105 transition-transform">
                <CreditCard className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Credit Tracking</span>
              </div>
              <div className="glass px-4 py-2 rounded-full flex items-center gap-2 hover:scale-105 transition-transform">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Multi-Cashier</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-slide-up" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
              <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                Request a Demo
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 glass hover:scale-105 transition-all duration-300 group">
                <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Watch Walkthrough (2 min)
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-muted-foreground animate-slide-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-primary" /> No credit card required</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-primary" /> Free 30-day trial</span>
              <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-primary" /> Cancel anytime</span>
            </div>
          </div>

          <div className="relative animate-slide-in-right" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            {/* Glass container for image */}
            <div className="relative glass-strong rounded-3xl p-4 shadow-2xl">
              <img
                src={connectionsImage}
                alt="HelaPoint POS system showing all connected features"
                className="relative rounded-2xl w-full hover:scale-[1.02] transition-transform duration-500"
              />
              
              {/* Floating stat badges - glassmorphic */}
              <div className="absolute -right-4 md:-right-8 top-8 glass-strong rounded-xl p-4 shadow-lg animate-float">
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">100%</div>
                  <div className="text-xs text-muted-foreground">Works during outages</div>
                </div>
              </div>
              
              <div className="absolute -left-4 md:-left-8 bottom-8 glass-strong rounded-xl p-4 shadow-lg animate-float" style={{ animationDelay: '-2s' }}>
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">5x</div>
                  <div className="text-xs text-muted-foreground">Faster credit collection</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
