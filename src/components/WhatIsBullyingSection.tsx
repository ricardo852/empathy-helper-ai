import { Card } from "@/components/ui/card";
import { AlertCircle, Users, MessageCircle, Smartphone } from "lucide-react";

const WhatIsBullyingSection = () => {
  const types = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Verbal",
      description: "Insultos, burlas, amenazas o comentarios ofensivos repetidos"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Social",
      description: "Exclusión, rumores, humillación pública o aislamiento intencional"
    },
    {
      icon: <AlertCircle className="w-8 h-8" />,
      title: "Físico",
      description: "Golpes, empujones, daño a pertenencias o cualquier agresión física"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Ciberbullying",
      description: "Acoso a través de redes sociales, mensajes o plataformas digitales"
    }
  ];

  return (
    <section id="que-es" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ¿Qué es el <span className="text-primary">Bullying?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            El bullying o acoso escolar es un comportamiento agresivo e intencional que se repite a lo largo del tiempo. 
            Implica un desequilibrio de poder donde una o más personas atacan, humillan o excluyen a otra de manera sistemática.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {types.map((type, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-glow transition-smooth border-border bg-card"
            >
              <div className="text-primary mb-4">{type.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{type.title}</h3>
              <p className="text-muted-foreground">{type.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-primary/10 border border-primary/20 rounded-2xl p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-primary">Importante recordar:</h3>
          <ul className="space-y-3 text-foreground">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span>El bullying NO es un conflicto normal entre compañeros</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Siempre implica un desequilibrio de poder</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Se caracteriza por ser repetitivo y sistemático</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">•</span>
              <span>Puede tener consecuencias graves para la salud mental y física</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhatIsBullyingSection;
