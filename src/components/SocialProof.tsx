const SocialProof = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Treinamentos realizados com as principais instituições do Brasil
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          <div className="text-6xl font-bold text-primary/20">FGV</div>
          <div className="text-6xl font-bold text-primary/20">UTFPR</div>
          <div className="text-6xl font-bold text-primary/20">ACP</div>
          <div className="text-6xl font-bold text-primary/20">Febracis</div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
