import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={(e) => {
        const root = e.currentTarget as HTMLElement;
        const rect = root.getBoundingClientRect();
        const mx = ((e.clientX - rect.left) / rect.width) * 100;
        const my = ((e.clientY - rect.top) / rect.height) * 100;
        root.style.setProperty("--mx", `${mx}%`);
        root.style.setProperty("--my", `${my}%`);
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-white"></div>
        {/* Interactive spotlight layer */}
        <div className="absolute inset-0 pointer-events-none hero-spotlight"></div>
        {/* Subtle floating accent blobs */}
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-tectona-orange/10 blur-2xl animate-float-slow" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-emerald-600/10 blur-2xl animate-float-slow" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Logo */}
        <div className="mb-8 animate-fade-in-up">
          <img
            src="/lovable-uploads/0637d199-0284-4464-8db6-3cc30c6ade20.png"
            alt="TECTONA Group UAE"
            className="h-24 sm:h-32 mx-auto filter drop-shadow-2xl brightness-110 contrast-125"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-primary mb-6 animate-fade-in-up">
          TECTONA Group UAE
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl lg:text-3xl text-foreground/80 mb-4 animate-fade-in-up">
          Building Trust, Strength & Innovation Across UAE
        </p>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in-up">
          Rooted in Trust. Growing with Innovation.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center mb-16 animate-fade-in-up">
          <Button
            size="lg"
            className="bg-tectona-orange hover:bg-tectona-orange-light text-white font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            onClick={() => window.open("https://wa.me/916238533609", "_blank")}
          >
            Contact Us
          </Button>
        </div>

        {/* Scroll Indicator removed per request */}
      </div>
    </section>
  );
};

export default Hero;
