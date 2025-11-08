const Footer = () => {
  return (
    <footer className="bg-black py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="text-gold text-2xl font-bold mb-4">Juliano Silva</div>
          <p className="text-gray-400 mb-2">
            © 2025 Comunicação Magnética para Sempre. Todos os direitos reservados.
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
