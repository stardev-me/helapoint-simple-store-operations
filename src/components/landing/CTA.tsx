import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-primary/80 p-8 md:p-16 text-center animate-gradient-shift">
          {/* Animated background decoration */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 animate-float" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-foreground rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2 animate-float-slow" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-primary-foreground/20 rounded-full animate-spin-slow" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary-foreground/10 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
          </div>

          {/* Floating sparkles */}
          <Sparkles className="absolute top-8 left-8 w-6 h-6 text-primary-foreground/40 animate-bounce-gentle" />
          <Sparkles className="absolute top-12 right-12 w-4 h-4 text-primary-foreground/30 animate-bounce-gentle" style={{ animationDelay: '-1s' }} />
          <Sparkles className="absolute bottom-16 left-1/4 w-5 h-5 text-primary-foreground/35 animate-bounce-gentle" style={{ animationDelay: '-0.5s' }} />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 animate-slide-up" style={{ animationFillMode: 'both' }}>
              Ready to{" "}
              <span className="relative inline-block">
                modernize
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary-foreground/50 rounded-full animate-scale-bounce" />
              </span>{" "}
              your store?
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8 animate-slide-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
              Tell us about your store size and current workflow—we'll help you set up HelaPoint and migrate your catalog.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              <Button size="lg" variant="secondary" className="gap-2 hover:scale-105 transition-all duration-300 group animate-pulse-glow">
                Request Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground hover:scale-105 transition-all duration-300 group">
                <MessageSquare className="w-4 h-4 group-hover:animate-wiggle" />
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
