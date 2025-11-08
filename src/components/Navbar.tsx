import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Benefícios", href: "#beneficios" },
    { label: "Para quem é", href: "#para-quem" },
    { label: "O que você vai aprender", href: "#conteudo" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Garantia", href: "#garantia" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary shadow-lg" : "bg-primary"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="text-gold text-2xl font-bold">Juliano Silva</div>
          </div>

          <div className="hidden lg:flex items-center gap-6">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gold hover:text-yellow-soft transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <Button
              asChild
              className="bg-gold text-primary hover:bg-gold/90 font-bold"
            >
              <a href="https://chk.eduzz.com/2084135" target="_blank" rel="noopener noreferrer">
                Garanta seu desconto
              </a>
            </Button>
          </div>

          <button
            className="lg:hidden text-gold"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden pb-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 text-gold hover:text-yellow-soft transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              asChild
              className="w-full mt-4 bg-gold text-primary hover:bg-gold/90 font-bold"
            >
              <a href="https://chk.eduzz.com/2084135" target="_blank" rel="noopener noreferrer">
                Garanta seu desconto
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
