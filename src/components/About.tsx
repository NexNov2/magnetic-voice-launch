import { Button } from "@/components/ui/button";
import julianoImg from "@/assets/juliano.webp";

const About = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Sobre Juliano Silva
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="prose prose-lg">
                <p className="text-lg text-foreground mb-4">
                  Juliano Silva é especialista em comunicação e transformação pessoal, 
                  Coach Empresarial e referência nacional em treinamentos de liderança e oratória.
                </p>
                <p className="text-lg text-foreground mb-4">
                  Graduado e pós-graduado em Educação pela UTFPR, com MBA em Business 
                  Coaching pela Febracis e especialização em Marketing e Comunicação pela FGV.
                </p>
                <p className="text-lg text-foreground mb-4">
                  Há mais de 18 anos impacta profissionais, líderes e empresas em todo o 
                  Brasil com sua metodologia prática e transformadora.
                </p>
                <p className="text-lg text-foreground mb-6">
                  É membro do Conselho Jovem Empresário e instrutor de Comunicação e Vendas 
                  na Escola de Negócios da Associação Comercial do Paraná.
                </p>
                <p className="text-lg font-semibold text-primary">
                  Seu propósito é inspirar, conectar e transformar pessoas por meio da comunicação.
                </p>
              </div>

              <div className="mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-yellow-soft hover:bg-primary/90 font-bold text-lg px-8 py-6"
                >
                  <a href="https://chk.eduzz.com/2084135" target="_blank" rel="noopener noreferrer">
                    Quero aprender com o Juliano
                  </a>
                </Button>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <img
                src={julianoImg}
                alt="Juliano Silva - Especialista em Comunicação"
                className="rounded-2xl shadow-2xl w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
