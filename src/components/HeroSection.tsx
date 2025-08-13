import { Button } from "@/components/ui/button";
import { ArrowRight, Users, TrendingDown } from "lucide-react"; // Using TrendingDown
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  // Smooth scroll helper
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-healthcare-navy via-primary to-accent overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Healthcare BPO Team"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-healthcare-navy/70 via-primary/60 to-accent/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20">
              Revenues Care: Advancing Healthcare and Contact Center Efficiency Together.
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-accent to-white bg-clip-text text-transparent">
              We care About your growth
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed">
            Transform your healthcare operations and contact center with our
            end-to-end BPO solutions -- driving efficiency, reducing costs, and
            delivering long-term, sustainable growth.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              size="lg"
              className="bg-white text-healthcare-navy hover:bg-white/90 text-lg px-8 py-6 h-auto"
              onClick={() => scrollToSection("services")}
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              className="bg-white text-healthcare-navy hover:bg-white/90 text-lg px-8 py-6 h-auto"
              onClick={() => scrollToSection("contact")}
            >
              Get a Free Consultation
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="p-2 bg-accent rounded-lg">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-white/80 text-sm">Support Available</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="p-2 bg-accent rounded-lg">
                <TrendingDown
                  className="h-6 w-6 text-white"
                  style={{ transform: "rotate(0deg)" }} // Fully flipped
                />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">40%</div>
                <div className="text-white/80 text-sm">Cost Reduction</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <div className="p-2 bg-accent rounded-lg">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">99.99%</div>
                <div className="text-white/80 text-sm">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
