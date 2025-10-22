import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">
            Alto al Bullying
          </h1>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection('que-es')} className="text-foreground hover:text-primary transition-smooth">
              ¿Qué es?
            </button>
            <button onClick={() => scrollToSection('prevencion')} className="text-foreground hover:text-primary transition-smooth">
              Prevención
            </button>
            <button onClick={() => scrollToSection('identificacion')} className="text-foreground hover:text-primary transition-smooth">
              Identificación
            </button>
            <Button variant="hero" onClick={() => scrollToSection('ia-apoyo')}>
              IA de Apoyo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-3 pb-4">
            <button onClick={() => scrollToSection('que-es')} className="text-left text-foreground hover:text-primary transition-smooth py-2">
              ¿Qué es el Bullying?
            </button>
            <button onClick={() => scrollToSection('prevencion')} className="text-left text-foreground hover:text-primary transition-smooth py-2">
              Cómo Prevenirlo
            </button>
            <button onClick={() => scrollToSection('identificacion')} className="text-left text-foreground hover:text-primary transition-smooth py-2">
              Cómo Identificarlo
            </button>
            <Button variant="hero" onClick={() => scrollToSection('ia-apoyo')} className="w-full">
              IA de Apoyo
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
