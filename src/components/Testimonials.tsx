import { Button } from "@/components/ui/button";

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 bg-gold">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Resultados reais que inspiram
          </h2>
          <p className="text-xl text-primary/80">
            Assista aos depoimentos de quem aplicou o método e transformou sua forma de se comunicar
          </p>
        </div>

        <div className="max-w-md mx-auto mb-12">
          <div className="aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              src="https://player.vimeo.com/video/1133995540?autoplay=0&loop=0&autopause=0"
              className="w-full h-full"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Depoimentos"
              loading="lazy"
            />
          </div>
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-primary text-yellow-soft hover:bg-primary/90 font-bold text-lg px-8 py-6"
          >
            <a href="https://chk.eduzz.com/2084135" target="_blank" rel="noopener noreferrer">
              Quero ser o próximo caso de sucesso
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
