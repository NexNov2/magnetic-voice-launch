import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ForWho from "@/components/ForWho";
import Benefits from "@/components/Benefits";
import Content from "@/components/Content";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Offer from "@/components/Offer";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  useEffect(() => {
    // Schema.org JSON-LD markup
    const schemaProduct = {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Comunicação Magnética para Sempre",
      description: "Aprenda o método prático que transforma timidez em presença e voz em influência",
      brand: {
        "@type": "Brand",
        name: "Juliano Silva"
      },
      offers: {
        "@type": "Offer",
        price: "298.00",
        priceCurrency: "BRL",
        priceValidUntil: "2025-12-31",
        availability: "https://schema.org/InStock",
        url: "https://chk.eduzz.com/2084135"
      }
    };

    const schemaVideo = {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: "Comunicação Magnética para Sempre - Apresentação",
      description: "Conheça o curso de comunicação com Juliano Silva",
      thumbnailUrl: "https://564346e0-74c1-4950-8f2a-b0017d90e318.lovableproject.com/apresent.jpg",
      uploadDate: "2025-01-01",
      contentUrl: "https://www.youtube.com/watch?v=Cf4uB3Qaeog"
    };

    const schemaFAQ = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "O curso é para iniciantes?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sim! O curso é pensado tanto para quem nunca fez um treinamento de comunicação quanto para quem já tem experiência e quer aprimorar suas habilidades."
          }
        },
        {
          "@type": "Question",
          name: "Até quando vai a promoção?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A promoção de Black Friday é por tempo limitado. Recomendamos garantir sua vaga o quanto antes para não perder o desconto de R$199."
          }
        }
      ]
    };

    const script1 = document.createElement("script");
    script1.type = "application/ld+json";
    script1.text = JSON.stringify(schemaProduct);
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.type = "application/ld+json";
    script2.text = JSON.stringify(schemaVideo);
    document.head.appendChild(script2);

    const script3 = document.createElement("script");
    script3.type = "application/ld+json";
    script3.text = JSON.stringify(schemaFAQ);
    document.head.appendChild(script3);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
      document.head.removeChild(script3);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <ForWho />
        <Benefits />
        <Content />
        <Testimonials />
        <About />
        <Offer />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
