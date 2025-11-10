import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Shield } from "lucide-react";

const Offer = () => {
  const includes = [
    "Acesso imediato a todo o conteúdo",
    "Aulas práticas e diretas ao ponto",
    "Suporte e feedback personalizado",
    "Certificado de conclusão",
    "Garantia incondicional de 7 dias",
  ];

  return (
    <section id="garantia" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gold mb-4">
              Aproveite a oferta especial de Black Friday
            </h2>
            <div className="inline-block bg-gold text-primary px-6 py-3 rounded-full font-bold text-xl mb-8">
              R$199 de desconto por tempo limitado
            </div>
          </div>

          <Card className="p-8 md:p-12 bg-background/10 backdrop-blur-sm border-gold">
            <div className="text-center mb-8">
              <div className="text-yellow-soft/70 line-through text-2xl mb-2">
                <span className="text-lg">De </span>12x de R$ 51,40 ou R$ 497,00 à vista
              </div>
              <div className="text-gold text-5xl md:text-6xl font-black mb-2">
                12x de R$ 30,82
              </div>
              <div className="text-yellow-soft text-3xl font-bold">
                ou R$ 298,00 à vista
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-yellow-soft mb-6 text-center">
                O que está incluso:
              </h3>
              <div className="space-y-4">
                {includes.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="text-gold flex-shrink-0" size={24} />
                    <span className="text-yellow-soft text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gold/20 rounded-xl p-6 mb-8 border border-gold">
              <div className="flex items-start gap-4">
                <Shield className="text-gold flex-shrink-0" size={32} />
                <div>
                  <h4 className="text-xl font-bold text-gold mb-2">
                    Garantia Incondicional de 7 Dias
                  </h4>
                  <p className="text-yellow-soft">
                    Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu investimento. 
                    Sem perguntas, sem complicação.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                variant="green"
                className="flex-1 font-bold text-sm sm:text-base md:text-lg py-4 sm:py-6 h-auto whitespace-normal text-center leading-tight"
              >
                <a href="https://chk.eduzz.com/2084135" target="_blank" rel="noopener noreferrer" className="block">
                  Garantir meu desconto agora
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="flex-1 border-gold text-gold hover:bg-gold hover:text-primary font-bold text-sm sm:text-base md:text-lg py-4 sm:py-6 bg-transparent h-auto whitespace-normal text-center leading-tight"
              >
                <a href="http://wa.me/554184511341" target="_blank" rel="noopener noreferrer" className="block">
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Offer;
