import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Sparkles, CheckCircle2 } from "lucide-react";
import { toast } from "sonner@2.0.3";

export function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simula envio do email para mirra-ai@outlook.com
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Enviando para mirra-ai@outlook.com:", formData);
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success("Inscrição realizada com sucesso! Em breve entraremos em contato.");
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="lead-form" className="py-24 bg-gradient-to-br from-blue-600 to-cyan-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
              <Sparkles className="h-4 w-4 text-white" />
              <span className="text-sm text-white">Lançamento em Breve</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl text-white mb-6">
              Seja um dos primeiros a usar a Mirra AI
            </h2>
            <p className="text-xl text-cyan-100">
              Preencha o formulário e garanta acesso antecipado. Vagas limitadas!
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
                    Nome Completo
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Seu nome"
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
                    E-mail
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm text-gray-700 mb-2">
                    Telefone
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    required
                    className="h-12"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-gradient-to-r from-blue-700 to-cyan-700 hover:from-blue-800 hover:to-cyan-800"
                  size="lg"
                >
                  {isSubmitting ? "Enviando..." : "Quero Acesso Antecipado"}
                </Button>

                <p className="text-xs text-center text-gray-500">
                  Ao enviar, você concorda em receber comunicações sobre a Mirra AI. Seus dados estão seguros conosco.
                </p>
              </form>
            ) : (
              <div className="text-center py-12">
                <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-2xl text-gray-900 mb-3">Inscrição Confirmada!</h3>
                <p className="text-gray-600">
                  Obrigado pelo interesse. Em breve você receberá mais informações no seu e-mail.
                </p>
              </div>
            )}
          </div>

          <div className="mt-12 grid sm:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl text-white mb-2">🚀</div>
              <div className="text-white">Acesso prioritário</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl text-white mb-2">💎</div>
              <div className="text-white">Condições especiais</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="text-3xl text-white mb-2">🎯</div>
              <div className="text-white">Suporte dedicado</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}