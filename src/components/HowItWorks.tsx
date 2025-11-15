import { UserPlus, Link2, Settings, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Crie sua Conta",
    description: "Cadastre-se na Mirra AI em poucos segundos e acesse o painel de controle.",
  },
  {
    number: "02",
    icon: Link2,
    title: "Conecte suas Plataformas",
    description: "Vincule seu WordPress e Instagram de forma segura e rápida.",
  },
  {
    number: "03",
    icon: Settings,
    title: "Configure o Agendamento",
    description: "Preencha um formulário simples com tema, palavras-chave, público-alvo, estilo e horários. A Mirra cuida do resto.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Relaxe e Cresça",
    description: "A Mirra gera e posta conteúdo automaticamente. Você pode revisar antes de publicar ou deixar tudo no automático.",
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6">
            Como funciona a <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Mirra AI</span>
          </h2>
          <p className="text-xl text-gray-600">
            Em apenas 4 passos simples, você estará criando conteúdo escalável com IA
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-200" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <div className="flex flex-col items-center text-center">
                    {/* Icon Circle */}
                    <div className="relative mb-6">
                      <div className="h-20 w-20 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center shadow-lg">
                        <Icon className="h-10 w-10 text-white" />
                      </div>
                      <div className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center">
                        <span className="text-xs text-blue-600">{step.number}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl text-gray-900 mb-2">Quer mais controle?</h3>
              <p className="text-gray-600">
                Você pode revisar e editar cada conteúdo antes de publicar, configurar múltiplas campanhas, adicionar CTAs personalizados e muito mais. A Mirra se adapta ao seu fluxo de trabalho.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="px-6 py-3 rounded-xl bg-white border border-blue-300 shadow-sm">
                <div className="text-sm text-gray-600">Controle total quando precisar</div>
                <div className="text-2xl text-blue-600 mt-1">100% personalizável</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}