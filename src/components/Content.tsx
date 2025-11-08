import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const Content = () => {
  const modules = [
    "Fundamentos da Comunicação Magnética",
    "Mindset de palco e autoconfiança",
    "Estrutura de apresentações que encantam",
    "Storytelling e técnicas de influência",
    "Voz e dicção (ritmo, pausas e entonação)",
    "Linguagem corporal e presença de palco",
    "Slides que vendem e encantam",
    "Pitch de vendas e persuasão",
    "Treino prático com feedback guiado",
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

        <div className="max-w-3xl mx-auto">
          <Card className="p-8 bg-secondary border-primary/10">
            <div className="space-y-4">
              {modules.map((module, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-background transition-colors"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                    <Check className="text-yellow-soft" size={20} />
                  </div>
                  <span className="text-lg font-medium text-primary">{module}</span>
                </div>
              ))}
            </div>
          </Card>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-primary text-yellow-soft hover:bg-primary/90 font-bold text-lg px-8 py-6"
            >
              <a href="https://chk.eduzz.com/2084135" target="_blank" rel="noopener noreferrer">
                Quero acesso ao método
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
