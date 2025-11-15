import { Clock, DollarSign, Users, BarChart3 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const benefits = [
  {
    icon: Clock,
    title: "Economize Tempo Valioso",
    description: "Pare de passar horas criando posts manualmente. A Mirra faz tudo por você enquanto você foca no que realmente importa: estratégia e crescimento.",
    stat: "80% menos tempo",
  },
  {
    icon: DollarSign,
    title: "Reduza Custos",
    description: "Muito mais barato que investir em tráfego pago. Atraia audiência orgânica qualificada sem gastar fortunas em anúncios.",
    stat: "70% de economia",
  },
  {
    icon: Users,
    title: "Audiência Orgânica Qualificada",
    description: "Conteúdo relevante e consistente atrai seguidores genuinamente interessados, prontos para se tornarem clientes.",
    stat: "3x mais engajamento",
  },
  {
    icon: BarChart3,
    title: "Escalabilidade Ilimitada",
    description: "Gerencie vários blogs e páginas simultaneamente com uma única configuração. Cresça sem limites.",
    stat: "Blogs ilimitados",
  },
];

export function Benefits() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl lg:text-5xl text-gray-900 mb-6">
              Por que escolher a <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Mirra AI</span>?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              A Mirra revoluciona a forma como criadores de conteúdo e afiliados trabalham. É a diferença entre trabalhar duro e trabalhar inteligente.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="h-2 w-2 rounded-full bg-green-600" />
                </div>
                <div>
                  <div className="text-gray-900 mb-1">Mais Tempo para Estratégia</div>
                  <p className="text-gray-600">Libere-se da criação manual e foque em crescer seu negócio</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="h-2 w-2 rounded-full bg-green-600" />
                </div>
                <div>
                  <div className="text-gray-900 mb-1">Consistência Garantida</div>
                  <p className="text-gray-600">Nunca mais perca o timing de postar ou fique sem ideias</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="h-2 w-2 rounded-full bg-green-600" />
                </div>
                <div>
                  <div className="text-gray-900 mb-1">Monetização Simplificada</div>
                  <p className="text-gray-600">Integre links de afiliados e CTAs diretamente no conteúdo</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-cyan-600/20 rounded-3xl blur-3xl" />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1730324642019-e6d9eb6dfbf7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JkcHJlc3MlMjBpbnN0YWdyYW0lMjBzb2NpYWwlMjBtZWRpYXxlbnwxfHx8fDE3NjMyNDIyNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Marketing de conteúdo"
              className="relative rounded-3xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl text-blue-600 mb-2">{benefit.stat}</div>
                <h3 className="text-lg text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}