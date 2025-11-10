import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gold via-primary to-bordo">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-yellow-soft mb-6">
            Últimos dias com R$199 de desconto
          </h2>
          <p className="text-2xl text-gold mb-12">
            Desbloqueie sua comunicação e aproveite o preço especial de Black Friday antes que acabe
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="green"
              className="font-bold text-base sm:text-lg px-6 sm:px-8 py-6 w-full sm:w-auto"
            >
              <a href="https://chk.eduzz.com/2084135" target="_blank" rel="noopener noreferrer">
                Garantir meu desconto agora
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-yellow-soft text-yellow-soft hover:bg-yellow-soft hover:text-primary font-bold text-base sm:text-lg px-6 sm:px-8 py-6 w-full sm:w-auto bg-transparent"
            >
              <a href="http://wa.me/554184511341" target="_blank" rel="noopener noreferrer">
                Falar com especialista no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
