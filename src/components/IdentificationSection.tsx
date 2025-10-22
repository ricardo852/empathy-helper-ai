import { Card } from "@/components/ui/card";
import identificationImage from "@/assets/identification-image.jpg";
import { AlertTriangle, TrendingDown, UserX, Frown } from "lucide-react";

const IdentificationSection = () => {
  const signs = [
    {
      icon: <Frown className="w-8 h-8" />,
      category: "Signos emocionales",
      indicators: [
        "Cambios bruscos de humor o personalidad",
        "Ansiedad, tristeza o irritabilidad constante",
        "Baja autoestima o inseguridad",
        "Miedo a ir a la escuela o eventos sociales"
      ]
    },
    {
      icon: <TrendingDown className="w-8 h-8" />,
      category: "Signos académicos",
      indicators: [
        "Descenso repentino en el rendimiento escolar",
        "Pérdida de interés en actividades académicas",
        "Dificultad para concentrarse",
        "Ausentismo escolar frecuente"
      ]
    },
    {
      icon: <UserX className="w-8 h-8" />,
      category: "Signos sociales",
      indicators: [
        "Aislamiento de amigos y familiares",
        "Dificultad para hacer o mantener amistades",
        "No ser invitado a eventos sociales",
        "Comer solo o evitar áreas comunes"
      ]
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      category: "Signos físicos",
      indicators: [
        "Lesiones inexplicables o frecuentes",
        "Ropa o pertenencias dañadas o perdidas",
        "Dolores de cabeza o estómago recurrentes",
        "Alteraciones en el sueño o apetito"
      ]
    }
  ];

  return (
    <section id="identificacion" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Identificar</span> las Señales
          </h2>
          <p className="text-lg text-muted-foreground">
            Reconocer los signos del bullying es fundamental para poder intervenir a tiempo. 
            Estos son algunos indicadores que pueden alertarnos de que alguien está sufriendo acoso.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          <div className="space-y-6">
            {signs.map((sign, index) => (
              <Card key={index} className="p-6 hover:shadow-glow transition-smooth border-border bg-card">
                <div className="flex items-start gap-4">
                  <div className="text-destructive mt-1">{sign.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-destructive">{sign.category}</h3>
                    <ul className="space-y-2">
                      {sign.indicators.map((indicator, indicatorIndex) => (
                        <li key={indicatorIndex} className="text-muted-foreground flex items-start gap-2">
                          <span className="text-primary font-bold mt-1">•</span>
                          <span>{indicator}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl overflow-hidden shadow-soft sticky top-24">
              <img 
                src={identificationImage} 
                alt="Adulto brindando apoyo a un joven preocupado"
                className="w-full h-auto object-cover"
              />
            </div>

            <Card className="p-6 bg-primary/10 border-primary/20">
              <h3 className="text-2xl font-bold mb-4 text-primary">¿Qué hacer si identificas estas señales?</h3>
              <ol className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">1.</span>
                  <span><strong>Habla con la persona</strong> de manera calmada y empática</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">2.</span>
                  <span><strong>Escucha activamente</strong> sin juzgar ni minimizar</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">3.</span>
                  <span><strong>Documenta</strong> los incidentes con fechas y detalles</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">4.</span>
                  <span><strong>Contacta</strong> a profesionales (maestros, psicólogos, directivos)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">5.</span>
                  <span><strong>Brinda apoyo</strong> constante y seguimiento</span>
                </li>
              </ol>
            </Card>
          </div>
        </div>

        <div className="bg-destructive/10 border border-destructive/20 rounded-2xl p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-destructive flex items-center gap-3">
            <AlertTriangle className="w-7 h-7" />
            Importante:
          </h3>
          <p className="text-lg">
            Ningún signo por sí solo confirma que alguien está sufriendo bullying, pero la combinación de varios 
            o su persistencia en el tiempo son señales de alerta. Confía en tu instinto y actúa con sensibilidad.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IdentificationSection;
