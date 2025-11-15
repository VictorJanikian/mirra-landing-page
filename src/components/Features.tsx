import { Calendar, Zap, TrendingUp, Image, Target, Puzzle } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Agendamento Inteligente",
    description: "Configure uma vez e deixe a Mirra postar automaticamente no horário ideal. Sem preocupações, só resultados.",
  },
  {
    icon: Zap,
    title: "Criação Automática",
    description: "A IA gera textos e imagens cativantes baseados em suas configurações de tema, SEO, público-alvo e estilo.",
  },
  {
    icon: TrendingUp,
    title: "Aprende e Melhora",
    description: "A Mirra analisa seus posts de maior sucesso e replica o que funciona, otimizando continuamente seus resultados.",
  },
  {
    icon: Image,
    title: "Múltiplos Agendamentos",
    description: "Crie várias campanhas com temas diferentes para o mesmo blog. Desenvolva linhas editoriais e agende posts para eventos e datas comemorativas.",
  },
  {
    icon: Target,
    title: "CTAs Estratégicos",
    description: "Insira calls-to-action personalizados, links de afiliados e gatilhos para automações como ManyChat.",
  },
  {
    icon: Puzzle,
    title: "Plugin WordPress",
    description: "Instale o plugin direto no seu WordPress e configure tudo de forma simples, sem sair do seu painel.",
  },
];

export function Features() {
  return (
     <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6">
            Tudo que você precisa para <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">escalar seu conteúdo</span>
          </h2>
          <p className="text-xl text-gray-600">
            Uma plataforma completa que combina IA avançada com automação inteligente
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 bg-white"
              >
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}