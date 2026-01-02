import { Separator } from "@/components/ui/separator";
import HelaPointLogo from "@/components/HelaPointLogo";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-slow" />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1 animate-slide-up" style={{ animationFillMode: 'both' }}>
            <div className="flex items-center gap-2 mb-4 group">
              <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                <HelaPointLogo className="w-10 h-10" />
              </div>
              <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">HelaPoint</span>
            </div>
            <p className="text-muted-foreground text-sm">
              The offline-first POS app with inventory, barcode scanning, customer credit tracking, receipts, and backups—built for modern retail.
            </p>
          </div>

          {/* Product */}
          <div className="animate-slide-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-3 text-sm">
              {['Features', 'How It Works', 'Use Cases', 'Pricing'].map((item, index) => (
                <li key={item}>
                  <a 
                    href={item === 'Pricing' ? '#' : `#${item.toLowerCase().replace(/ /g, '-')}`} 
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block relative group"
                  >
                    {item}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3 text-sm">
              {['FAQ', 'Documentation', 'Support', 'Blog'].map((item) => (
                <li key={item}>
                  <a 
                    href={item === 'FAQ' ? '#faq' : '#'} 
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block relative group"
                  >
                    {item}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="animate-slide-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              {['About', 'Contact', 'Privacy Policy', 'Terms of Service'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block relative group"
                  >
                    {item}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground animate-slide-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
          <p>© 2025 HelaPoint. All rights reserved.</p>
          <div className="flex gap-6">
            {['Twitter', 'LinkedIn', 'Facebook'].map((social) => (
              <a 
                key={social}
                href="#" 
                className="hover:text-primary transition-all duration-300 hover:scale-110 relative group"
              >
                {social}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
