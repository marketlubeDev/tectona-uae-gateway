import { Target, Eye, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To provide exceptional construction, maintenance, and digital solutions that build lasting partnerships across the UAE."
    },
    {
      icon: Eye,
      title: "Vision",
      description: "To be the most trusted multi-division corporate group in the UAE, known for innovation, quality, and reliability."
    },
    {
      icon: Heart,
      title: "Values",
      description: "Trust, Innovation, Excellence, and Sustainability guide every project and relationship we build."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About <span className="gradient-text">TECTONA Group</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A multi-division corporate entity rooted in trust and growing with innovation. 
            We deliver comprehensive solutions across construction, maintenance, security, 
            digital services, and leasing throughout the UAE.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={value.title}
                className={`text-center group animate-fade-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-accent rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "5", label: "Service Divisions" },
            { number: "100+", label: "Projects Completed" },
            { number: "50+", label: "Expert Team Members" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className={`text-center animate-fade-in-up`}
              style={{ animationDelay: `${(index + 3) * 200}ms` }}
            >
              <div className="text-3xl lg:text-4xl font-bold text-tectona-green mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;