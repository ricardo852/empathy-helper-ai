import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
              Alto al Bullying
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Juntos podemos crear espacios seguros donde cada persona se sienta valorada y respetada. 
              Si necesitas ayuda, no estás solo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-3 text-primary">Recursos</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Líneas de ayuda</li>
                <li>Apoyo psicológico</li>
                <li>Material educativo</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-primary">Información</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Sobre nosotros</li>
                <li>Contacto</li>
                <li>Preguntas frecuentes</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 text-primary">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Privacidad</li>
                <li>Términos de uso</li>
                <li>Confidencialidad</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center">
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              Hecho con <Heart className="w-4 h-4 text-accent fill-accent" /> para un mundo mejor
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              © 2025 Alto al Bullying. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
