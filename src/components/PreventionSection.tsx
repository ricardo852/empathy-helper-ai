import { Card } from "@/components/ui/card";
import preventionImage from "@/assets/prevention-image.jpg";
import { Shield, Heart, Eye, Users } from "lucide-react";

const PreventionSection = () => {
  const strategies = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Crear un ambiente seguro",
      tips: [
        "Promover el respeto y la empatía en el aula",
        "Establecer normas claras contra el acoso",
        "Fomentar la inclusión y la diversidad"
      ]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Educación emocional",
      tips: [
        "Enseñar a identificar y expresar emociones",
        "Desarrollar habilidades de comunicación asertiva",
        "Practicar la resolución pacífica de conflictos"
      ]
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Supervisión activa",
      tips: [
        "Vigilar espacios comunes y recreos",
        "Estar atentos a cambios de comportamiento",
        "Mantener canales de comunicación abiertos"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Participación comunitaria",
      tips: [
        "Involucrar a familias en la prevención",
        "Crear programas de mentores entre estudiantes",
        "Organizar charlas y talleres educativos"
      ]
    }
  ];

  return (
    <section id="prevencion" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-primary">Prevención:</span> La Mejor Herramienta
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Prevenir el bullying es responsabilidad de toda la comunidad educativa. 
              Cuando creamos ambientes seguros y respetuosos, protegemos el bienestar de todos los estudiantes.
            </p>
            <div className="rounded-2xl overflow-hidden shadow-soft">
              <img 
                src={preventionImage} 
                alt="Estudiantes diversos mostrando respeto y apoyo mutuo"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            {strategies.map((strategy, index) => (
              <Card key={index} className="p-6 hover:shadow-glow transition-smooth border-border bg-card">
                <div className="flex items-start gap-4">
                  <div className="text-primary mt-1">{strategy.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3">{strategy.title}</h3>
                    <ul className="space-y-2">
                      {strategy.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="text-muted-foreground flex items-start gap-2">
                          <span className="text-accent font-bold mt-1">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-accent/10 border border-accent/20 rounded-2xl p-8 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Recuerda:</h3>
          <p className="text-lg">
            La prevención comienza con pequeñas acciones diarias. Cada gesto de amabilidad, 
            cada conversación sobre respeto, cada límite establecido contribuye a crear un entorno más seguro.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PreventionSection;
