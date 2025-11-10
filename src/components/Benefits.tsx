import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

const Benefits = () => {
  const beforeAfter = [
    {
      before: "Medo de falar em público",
      after: "Confiança e presença de palco",
    },
    {
      before: "Esquecimento do que dizer",
      after: "Clareza e estrutura nas apresentações",
    },
    {
      before: "Voz trêmula e insegura",
      after: "Voz firme e envolvente",
    },
    {
      before: "Dificuldade em convencer",
      after: "Comunicação persuasiva e magnética",
    },
    {
      before: "Apresentações monótonas",
      after: "Histórias que emocionam e inspiram",
    },
    {
      before: "Nervosismo e ansiedade",
      after: "Domínio emocional e naturalidade",
    },
  ];

  return (
    <section id="beneficios" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gold mb-4">
            Antes e Depois da Comunicação Magnética
          </h2>
          <p className="text-xl text-yellow-soft">
            Veja a transformação que você vai experimentar
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <div className="bg-background/5 backdrop-blur-sm rounded-2xl p-8 border border-yellow-soft/20">
            <h3 className="text-2xl font-bold text-yellow-soft mb-6 text-center">
              Antes
            </h3>
            <div className="space-y-4">
              {beforeAfter.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <X className="text-destructive flex-shrink-0 mt-1" size={20} />
                  <span className="text-yellow-soft/80">{item.before}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gold/10 backdrop-blur-sm rounded-2xl p-8 border border-gold">
            <h3 className="text-2xl font-bold text-gold mb-6 text-center">
              Depois
            </h3>
            <div className="space-y-4">
              {beforeAfter.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="text-gold flex-shrink-0 mt-1" size={20} />
                  <span className="text-yellow-soft font-semibold">{item.after}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            variant="green"
            className="font-bold text-base sm:text-lg px-6 sm:px-8 py-6 w-full sm:w-auto max-w-md mx-auto"
          >
            <a href="https://chk.eduzz.com/2084135" target="_blank" rel="noopener noreferrer">
              Quero essa transformação
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
