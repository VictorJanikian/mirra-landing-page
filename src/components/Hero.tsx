import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logo from "figma:asset/Logo_Mirra.png";

export function Hero() {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Mirra AI" className="h-50 w-auto" />
          </div>
          <Button onClick={scrollToForm} size="sm">
            Acesso Antecipado
          </Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span className="text-sm text-blue-900">IA que Cria Conteúdo Automaticamente</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl text-gray-900 leading-tight">
              Conteúdo Escalável com <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">IA Criativa</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Agende e publique automaticamente em WordPress e Instagram. A Mirra AI aprende, cria e posta conteúdo personalizado para atrair audiência orgânica — enquanto você foca na estratégia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={scrollToForm} size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700">
                Quero Acesso Antecipado
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button onClick={scrollToForm} variant="outline" size="lg">
                Saiba Mais
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl text-gray-900">10x</div>
                <div className="text-sm text-gray-600">Mais Produtividade</div>
              </div>
              <div className="h-12 w-px bg-gray-300" />
              <div>
                <div className="text-3xl text-gray-900">80%</div>
                <div className="text-sm text-gray-600">Economia de Tempo</div>
              </div>
              <div className="h-12 w-px bg-gray-300" />
              <div>
                <div className="text-3xl text-gray-900">∞</div>
                <div className="text-sm text-gray-600">Escalabilidade</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-600/20 rounded-3xl blur-3xl" />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1628489529253-9f3164fcbd8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW50JTIwY3JlYXRvciUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjMxOTM4NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Criador de conteúdo trabalhando"
              className="relative rounded-3xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}