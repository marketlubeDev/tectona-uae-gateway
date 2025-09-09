import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectStoneWorks from "@/assets/project-stone-works.jpg";
import projectMaintenance from "@/assets/project-maintenance.jpg";
import projectSecurity from "@/assets/project-security.jpg";

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Luxury Villa Stone Installation",
      category: "Stone Works & Foundations",
      description: "Complete stone flooring and cladding installation for a luxury villa in Dubai, featuring premium marble and granite work.",
      image: projectStoneWorks,
      details: "3,000 sq ft installation"
    },
    {
      id: 2,
      title: "Commercial Building Maintenance",
      category: "Dar Al-Siyana",
      description: "Comprehensive maintenance services for a 20-story commercial complex including HVAC, electrical, and plumbing systems.",
      image: projectMaintenance,
      details: "24/7 maintenance support"
    },
    {
      id: 3,
      title: "Corporate Security System",
      category: "Dar Al-Aman",
      description: "Advanced security and fire safety installation for corporate headquarters including CCTV, access control, and fire suppression.",
      image: projectSecurity,
      details: "50+ cameras installed"
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="projects" className="py-20 bg-gradient-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Showcasing our expertise across all divisions with successful projects 
            that demonstrate our commitment to quality and innovation.
          </p>
        </div>

        {/* Project Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl shadow-xl overflow-hidden animate-fade-in-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Project Image */}
              <div className="relative h-64 lg:h-96 overflow-hidden">
                <img 
                  src={projects[currentProject].image} 
                  alt={projects[currentProject].title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-tectona-orange/10 text-tectona-orange text-sm font-medium rounded-full">
                    {projects[currentProject].category}
                  </span>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                  {projects[currentProject].title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {projects[currentProject].description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-tectona-green">
                    {projects[currentProject].details}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-tectona-orange text-tectona-orange hover:bg-tectona-orange hover:text-white"
                  >
                    View Details
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-primary rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 z-10"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-primary rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 z-10"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Project Indicators */}
        <div className="flex justify-center mt-8 space-x-3">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentProject 
                  ? 'bg-tectona-orange scale-125' 
                  : 'bg-muted hover:bg-muted-foreground/50'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        {/* All Projects CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <p className="text-lg text-muted-foreground mb-6">
            Want to see more of our work?
          </p>
          <Button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-accent text-white font-semibold px-8 py-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;