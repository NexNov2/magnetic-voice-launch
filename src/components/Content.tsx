import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const Content = () => {
  const modules = [
    {
      title: "Fundamentos da Comunicação Magnética",
      description: "Base sólida para comunicar com impacto em qualquer situação"
    },
    {
      title: "Mindset de palco: confiança e controle emocional",
      description: "Técnicas para eliminar o medo e desenvolver confiança genuína"
    },
    {
      title: "Estrutura de apresentação profissional",
      description: "Abertura impactante, trilha lógica envolvente e fechamento memorável"
    },
    {
      title: "Storytelling e persuasão (ethos, pathos, logos)",
      description: "Como criar narrativas que convencem e emocionam sua audiência"
    },
    {
      title: "Voz e dicção (projeção, ritmo, pausas)",
      description: "Domine sua voz para transmitir autoridade e clareza"
    },
    {
      title: "Linguagem corporal e presença cênica",
      description: "Postura, gestos e movimento que reforçam sua mensagem"
    },
    {
      title: "Treino prático guiado (feedback e melhorias)",
      description: "Exercícios hands-on com análise detalhada para evolução contínua"
    }
  ];

  return (
    <section id="conteudo" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            O que você vai aprender
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A metodologia prática que desbloqueia o seu poder de comunicação
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {modules.map((module, index) => (
            <Card key={index} className="p-6 bg-secondary border-primary/10 hover:border-gold/30 transition-all">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <Check className="text-yellow-soft" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">{module.title}</h3>
                  <p className="text-sm text-muted-foreground">{module.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center px-4">
          <Button
            asChild
            size="lg"
            variant="green"
            className="font-bold text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-4 sm:py-6 w-full sm:w-auto max-w-md mx-auto h-auto whitespace-normal text-center leading-tight"
          >
            <a href="https://chk.eduzz.com/2084135" target="_blank" rel="noopener noreferrer" className="block">
              Quero acesso ao método
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Content;
