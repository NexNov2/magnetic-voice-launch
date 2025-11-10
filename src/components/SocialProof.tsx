const SocialProof = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Ampla formação acadêmica
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-primary/30 mb-2">FGV</div>
            <p className="text-sm text-muted-foreground max-w-[200px]">Fundação Getulio Vargas</p>
          </div>
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-primary/30 mb-2">UTFPR</div>
            <p className="text-sm text-muted-foreground max-w-[200px]">Universidade Tecnológica Federal do Paraná</p>
          </div>
          <div className="text-center">
            <div className="text-5xl md:text-6xl font-bold text-primary/30 mb-2">FEBRACIS</div>
            <p className="text-sm text-muted-foreground max-w-[200px]">Federação Brasileira de Coaching</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
