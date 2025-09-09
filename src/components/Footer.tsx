import { Building2, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  const services = [
    "Stone Works & Foundations",
    "General Maintenance",
    "Safety & Security",
    "Digital Solutions",
    "Leasing & Rental"
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/0637d199-0284-4464-8db6-3cc30c6ade20.png" 
                alt="TECTONA Group UAE" 
                className="h-12 filter brightness-0 invert"
              />
              <div>
                <h3 className="text-xl font-bold">TECTONA Group UAE</h3>
                <p className="text-primary-foreground/80 text-sm">Building Trust, Strength & Innovation</p>
              </div>
            </div>
            
            <p className="text-primary-foreground/80 mb-6 leading-relaxed max-w-md">
              A multi-division corporate entity providing comprehensive solutions across 
              construction, maintenance, security, digital services, and leasing throughout the UAE.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-tectona-orange" />
                <span className="text-primary-foreground/80">+971 4 XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-tectona-orange" />
                <span className="text-primary-foreground/80">info@tectonagroup.ae</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-tectona-orange" />
                <span className="text-primary-foreground/80">Dubai, UAE</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <Building2 className="w-5 h-5 mr-2 text-tectona-orange" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/80 hover:text-tectona-orange transition-colors duration-300 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/80 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-primary-foreground/80 text-sm">
              © {currentYear} TECTONA Group UAE. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-primary-foreground/80">
              <button className="hover:text-tectona-orange transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="hover:text-tectona-orange transition-colors duration-300">
                Terms of Service
              </button>
              <button className="hover:text-tectona-orange transition-colors duration-300">
                Cookie Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;