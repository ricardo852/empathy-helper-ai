import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  const scrollToIA = () => {
    const element = document.getElementById('ia-apoyo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Juntos Contra el{" "}
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Bullying
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-xl">
              Un espacio seguro para aprender, prevenir y actuar contra el acoso escolar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button variant="hero" size="xl" onClick={scrollToIA}>
                Habla con nuestra IA
              </Button>
              <Button variant="outline" size="xl" onClick={() => {
                const element = document.getElementById('que-es');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}>
                Aprender Más
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-glow">
              <img 
                src={heroImage} 
                alt="Grupo diverso de jóvenes apoyándose mutuamente contra el bullying"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
