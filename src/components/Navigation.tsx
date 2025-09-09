import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <img 
                src="/lovable-uploads/0637d199-0284-4464-8db6-3cc30c6ade20.png" 
                alt="TECTONA Group UAE" 
                className="h-10 lg:h-12"
              />
              <span className={`font-bold text-lg lg:text-xl transition-colors ${
                isScrolled ? 'text-primary' : 'text-white'
              }`}>
                TECTONA
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors hover:text-tectona-orange ${
                    isScrolled ? 'text-foreground' : 'text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-tectona-orange hover:bg-tectona-orange-light text-white font-semibold"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md transition-colors ${
                isScrolled ? 'text-foreground hover:text-tectona-orange' : 'text-white hover:text-tectona-orange'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-border shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-tectona-orange hover:bg-muted rounded-md w-full text-left transition-colors"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2">
              <Button
                onClick={() => scrollToSection('contact')}
                className="w-full bg-tectona-orange hover:bg-tectona-orange-light text-white font-semibold"
              >
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;