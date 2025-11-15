import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl text-white mb-6 leading-tight">
            Pare de perder tempo criando conteúdo
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Foque na estratégia enquanto a Mirra AI cuida da execução. Mais tempo para o que realmente importa: crescer seu negócio.
          </p>
          <Button 
            onClick={scrollToForm} 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 h-14 px-8"
          >
            Quero Acesso Antecipado
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
