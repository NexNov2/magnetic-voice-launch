import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "O curso é para iniciantes?",
      answer: "Sim! O curso é pensado tanto para quem nunca fez um treinamento de comunicação quanto para quem já tem experiência e quer aprimorar suas habilidades.",
    },
    {
      question: "Preciso ter experiência em oratória?",
      answer: "Não é necessário. O método é progressivo e adaptado para todos os níveis, desde o completo iniciante até profissionais experientes.",
    },
    {
      question: "Como acesso as aulas?",
      answer: "Após a confirmação do pagamento, você recebe imediatamente o acesso à plataforma de ensino por email, podendo assistir quando e onde quiser.",
    },
    {
      question: "Há certificado?",
      answer: "Sim! Ao concluir o curso, você recebe um certificado digital de conclusão.",
    },
    {
      question: "O que está incluso no valor?",
      answer: "Acesso completo a todas as aulas, materiais de apoio, suporte personalizado, feedback nas atividades práticas e certificado de conclusão.",
    },
    {
      question: "Até quando vai a promoção?",
      answer: "A promoção de Black Friday é por tempo limitado. Recomendamos garantir sua vaga o quanto antes para não perder o desconto de R$199.",
    },
    {
      question: "E se eu não gostar?",
      answer: "Você tem 7 dias de garantia incondicional. Se não ficar satisfeito, devolvemos 100% do seu investimento, sem perguntas.",
    },
    {
      question: "Posso assistir pelo celular?",
      answer: "Sim! A plataforma é totalmente responsiva e funciona perfeitamente em celulares, tablets e computadores.",
    },
    {
      question: "Posso parcelar no cartão?",
      answer: "Sim! Você pode parcelar em até 12x no cartão de crédito ou pagar à vista com desconto adicional.",
    },
    {
      question: "Há suporte durante o curso?",
      answer: "Sim! Você terá suporte direto com a equipe e feedback personalizado nas suas atividades práticas.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Tire suas dúvidas sobre o curso
            </p>
          </div>

          <Accordion type="single" collapsible className="mb-12">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              variant="green"
              className="font-bold text-base sm:text-lg px-6 sm:px-8 py-6 w-full sm:w-auto max-w-md mx-auto"
            >
              <a href="https://chk.eduzz.com/2084135" target="_blank" rel="noopener noreferrer">
                Aproveitar o desconto agora
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
