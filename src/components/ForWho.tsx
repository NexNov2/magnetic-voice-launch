import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Briefcase, TrendingUp, Lightbulb, Users } from "lucide-react";

const ForWho = () => {
  const audience = [
    {
      icon: Briefcase,
      title: "Profissionais e Gestores",
      description: "que desejam se comunicar com liderança e influenciar suas equipes",
    },
    {
      icon: TrendingUp,
      title: "Vendedores",
      description: "que querem encantar clientes e aumentar suas vendas com comunicação persuasiva",
    },
    {
      icon: Lightbulb,
      title: "Empreendedores",
      description: "que precisam inspirar confiança e transmitir sua visão com clareza",
    },
    {
      icon: Users,
      title: "Pessoas tímidas",
      description: "que querem superar o medo e falar em público com segurança",
    },
  ];

  return (
    <section id="para-quem" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Este curso é para você se...
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {audience.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-xl transition-shadow bg-background border-primary/10"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <Icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="text-center px-4">
          <Button
            asChild
            size="lg"
            variant="green"
            className="font-bold text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-4 sm:py-6 w-full sm:w-auto max-w-md mx-auto h-auto whitespace-normal text-center leading-tight"
          >
            <a href="https://chk.eduzz.com/2084135" target="_blank" rel="noopener noreferrer" className="block">
              Sim, quero desenvolver minha comunicação
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ForWho;
