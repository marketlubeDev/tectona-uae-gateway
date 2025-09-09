import { Building2, Wrench, Shield, Palette, Key } from "lucide-react";

const Services = () => {
  const divisions = [
    {
      icon: Building2,
      title: "Stone Works & Foundations",
      description: "Premium flooring, cladding, staircases, countertops, and structural stone solutions for residential and commercial projects.",
      features: ["Natural Stone Installation", "Marble & Granite Work", "Custom Countertops", "Structural Stone Solutions"],
      color: "from-tectona-green to-tectona-green-light"
    },
    {
      icon: Wrench,
      title: "Dar Al-Siyana – General Maintenance",
      description: "Comprehensive maintenance services including plumbing, electrical, AC systems, painting, and general repairs.",
      features: ["Plumbing Services", "Electrical Repairs", "HVAC Maintenance", "Painting & Repairs"],
      color: "from-corporate-blue to-corporate-blue-light"
    },
    {
      icon: Shield,
      title: "Dar Al-Aman – Safety & Security",
      description: "Complete safety and security solutions including fire safety systems, gas safety, CCTV, and security installations.",
      features: ["Fire Safety Systems", "Gas Safety Solutions", "CCTV Installation", "Security Systems"],
      color: "from-tectona-orange to-tectona-orange-light"
    },
    {
      icon: Palette,
      title: "Digital Roots – Creative & Digital",
      description: "Full-service digital agency offering social media management, web design, branding, and advertising solutions.",
      features: ["Social Media Management", "Web Design & Development", "Brand Identity", "Digital Advertising"],
      color: "from-corporate-navy to-corporate-navy-light"
    },
    {
      icon: Key,
      title: "Rent Easy UAE – Leasing & Rental",
      description: "Comprehensive leasing solutions for properties, vehicles, equipment, and facility management services.",
      features: ["Property Leasing", "Vehicle Rentals", "Equipment Leasing", "Facility Management"],
      color: "from-tectona-green-dark to-tectona-green"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="gradient-text">Divisions & Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Five specialized divisions working together to provide comprehensive solutions 
            for all your business and personal needs across the UAE.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {divisions.map((division, index) => {
            const Icon = division.icon;
            return (
              <div 
                key={division.title}
                className={`division-card group animate-fade-in-up`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Icon with Gradient Background */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${division.color} rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-tectona-orange transition-colors duration-300">
                  {division.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {division.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {division.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-2 h-2 bg-tectona-orange rounded-full mr-3 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-tectona-orange/5 to-tectona-green/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <p className="text-lg text-muted-foreground mb-6">
            Need a custom solution? Let's discuss your specific requirements.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-4 bg-gradient-accent text-white font-semibold rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            Get Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;