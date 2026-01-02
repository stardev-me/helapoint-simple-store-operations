import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import HelaPointLogo from "@/components/HelaPointLogo";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-background/80 backdrop-blur-md'} border-b border-border`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 group">
            <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              <HelaPointLogo className="w-10 h-10" />
            </div>
            <span className="text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">HelaPoint</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {['Features', 'How It Works', 'Use Cases', 'FAQ'].map((item, index) => (
              <a 
                key={item}
                href={`#${item.toLowerCase().replace(/ /g, '-')}`} 
                className="text-muted-foreground hover:text-foreground transition-all duration-300 relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <Button className="hover:scale-105 transition-transform animate-pulse-glow">Request Demo</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu className={`w-6 h-6 absolute transition-all duration-300 ${mobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
              <X className={`w-6 h-6 absolute transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${mobileMenuOpen ? 'max-h-80 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
          <div className="pb-4 border-t border-border pt-4">
            <nav className="flex flex-col gap-4">
              {['Features', 'How It Works', 'Use Cases', 'FAQ'].map((item, index) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase().replace(/ /g, '-')}`} 
                  className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:translate-x-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4">
                <Button className="hover:scale-105 transition-transform">Request Demo</Button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
