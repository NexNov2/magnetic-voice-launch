import logoJuliano from "@/assets/logo_juliano.png";

const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <img src={logoJuliano} alt="Juliano Mentor" className="h-16 w-auto mx-auto mb-4" />
          <p className="text-gray-400 mb-2">
            © 2025 Método Comunicação de Alta Performance!. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-sm">
            Site desenvolvido por{" "}
            <a
              href="https://www.nexnov.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-yellow-soft transition-colors"
            >
              NexNov
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
