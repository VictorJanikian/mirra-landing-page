import { Sparkles, Instagram, Linkedin, Mail } from "lucide-react";
import logo from "figma:asset/Logo_Mirra.png";

interface FooterProps {
  onTermsClick: () => void;
  onPrivacyClick: () => void;
}

export function Footer({ onTermsClick, onPrivacyClick }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-8">
          {/* Brand */}
          <div className="mb-6">
            <div className="flex items-center gap-3 justify-center mb-4">
              <img src={logo} alt="Mirra AI" className="h-50 w-auto brightness-0 invert" />
            </div>
            <p className="text-gray-400 max-w-md mx-auto">
              A revolução na criação de conteúdo escalável. Use IA para atrair audiência orgânica e qualificada com muito menos esforço.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mb-8">
            <a
              href="#"
              className="h-10 w-10 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="h-10 w-10 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:mirra-ai@outlook.com"
              className="h-10 w-10 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2025 Mirra AI. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <button 
              onClick={onTermsClick}
              className="hover:text-white transition-colors"
            >
              Termos de Uso
            </button>
            <button 
              onClick={onPrivacyClick}
              className="hover:text-white transition-colors"
            >
              Privacidade
            </button>
            <a 
              href="mailto:mirra-ai@outlook.com" 
              className="hover:text-white transition-colors"
            >
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}