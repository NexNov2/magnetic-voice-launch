import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Shield } from "lucide-react";
import apresentImg from "@/assets/apresent.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: 'hsl(var(--bordo))' }}>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${apresentImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-gold text-primary hover:bg-gold/90 text-base px-6 py-2">
            🔥 Black Friday - R$199 de desconto até o fim da promoção
          </Badge>

          <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-yellow-soft mb-6 leading-tight">
            Fale com <span className="text-gold">autoridade</span>, <span className="text-gold">confiança</span> e <span className="text-gold">persuasão</span> em qualquer situação
          </h1>

          <p className="text-xl md:text-2xl text-gold mb-8 font-light">
            Aprenda o método prático que transforma timidez em presença e voz em influência
          </p>

          <div className="bg-background/10 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-gold/30">
            <div className="aspect-video mb-6 rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Cf4uB3Qaeog"
                title="Comunicação Magnética para Sempre"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
              />
            </div>

            <div className="mb-6">
              <div className="text-yellow-soft/70 line-through text-lg mb-2">
                <span className="text-base">De </span>12x de R$ 51,40 ou R$ 497,00 à vista
              </div>
              <div className="text-gold text-4xl md:text-5xl font-black mb-2">
                12x de R$ 30,82
              </div>
              <div className="text-yellow-soft text-2xl font-bold">
                ou R$ 298,00 à vista
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button
                asChild
                size="lg"
                variant="green"
                className="font-bold text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-4 sm:py-6 w-full sm:w-auto h-auto whitespace-normal text-center leading-tight"
              >
                <a href="https://chk.eduzz.com/2084135" target="_blank" rel="noopener noreferrer" className="block">
                  Quero aproveitar meu desconto agora
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-gold text-gold hover:bg-gold hover:text-primary font-bold text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-4 sm:py-6 w-full sm:w-auto bg-transparent h-auto whitespace-normal text-center leading-tight"
              >
                <a href="http://wa.me/554184511341" target="_blank" rel="noopener noreferrer" className="block">
                  Falar no WhatsApp
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-yellow-soft">
              <div className="flex items-center gap-2">
                <Users className="text-gold" size={24} />
                <span className="font-semibold">+1.000 alunos</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="text-gold" size={24} />
                <span className="font-semibold">18 anos de experiência</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="text-gold" size={24} />
                <span className="font-semibold">Garantia 7 dias</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
