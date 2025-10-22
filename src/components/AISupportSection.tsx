import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, MessageCircle, Heart, Lock } from "lucide-react";

const AISupportSection = () => {
  return (
    <section id="ia-apoyo" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-accent rounded-full mb-6 shadow-glow">
              <Bot className="w-10 h-10 text-accent-foreground" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              IA de <span className="text-primary">Apoyo</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Estamos desarrollando una inteligencia artificial diseñada para brindarte apoyo emocional, 
              orientación y recursos en momentos difíciles.
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-gradient-card shadow-glow border-primary/20">
            <div className="space-y-8">
              <div className="text-center">
                <div className="inline-block bg-accent/20 text-accent px-6 py-2 rounded-full font-semibold mb-6">
                  🚧 Próximamente
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Tu Compañero de Apoyo 24/7
                </h3>
                <p className="text-muted-foreground text-lg">
                  Nuestra IA estará disponible para ti en cualquier momento, 
                  ofreciendo un espacio seguro para hablar y recibir orientación.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 rounded-xl bg-background/50 border border-border">
                  <MessageCircle className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Conversación Empática</h4>
                  <p className="text-sm text-muted-foreground">
                    Escucha activa y respuestas comprensivas
                  </p>
                </div>
                <div className="text-center p-6 rounded-xl bg-background/50 border border-border">
                  <Heart className="w-10 h-10 text-accent mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Apoyo Emocional</h4>
                  <p className="text-sm text-muted-foreground">
                    Orientación en momentos de crisis
                  </p>
                </div>
                <div className="text-center p-6 rounded-xl bg-background/50 border border-border">
                  <Lock className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h4 className="font-semibold mb-2">Privacidad Total</h4>
                  <p className="text-sm text-muted-foreground">
                    Tus conversaciones son confidenciales
                  </p>
                </div>
              </div>

              <div className="bg-muted/50 rounded-xl p-6 border border-border">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span className="text-primary">•</span>
                  ¿Qué podrá hacer nuestra IA?
                </h4>
                <ul className="space-y-2 text-muted-foreground ml-6">
                  <li>✓ Ofrecer estrategias de afrontamiento personalizadas</li>
                  <li>✓ Proporcionar recursos educativos relevantes</li>
                  <li>✓ Guiarte hacia ayuda profesional cuando sea necesario</li>
                  <li>✓ Acompañarte en tu proceso de recuperación</li>
                  <li>✓ Ayudarte a identificar patrones y situaciones de riesgo</li>
                </ul>
              </div>

              <div className="text-center">
                <Button variant="hero" size="xl" disabled className="cursor-not-allowed opacity-60">
                  En Desarrollo
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Estamos trabajando arduamente para traerte esta herramienta lo antes posible
                </p>
              </div>
            </div>
          </Card>

          <div className="mt-8 bg-primary/10 border border-primary/20 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-center text-sm">
              <strong className="text-primary">Nota importante:</strong> La IA de apoyo es una herramienta complementaria 
              y no reemplaza la atención profesional. Si estás en una situación de crisis, 
              busca ayuda de un adulto de confianza, psicólogo o línea de ayuda especializada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISupportSection;
