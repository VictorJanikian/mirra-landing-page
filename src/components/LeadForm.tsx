import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, CheckCircle2, ChevronDown } from "lucide-react";
import { countries } from "../data/countries";

function CustomSelect({ value, onChange, options, placeholder }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchTerm("");
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredOptions = options.filter(option =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectedOption = options.find(opt => opt.name === value);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-12 px-3 py-2 text-left bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 flex items-center justify-between"
      >
        <span className="flex items-center gap-2">
          {selectedOption ? (
            <>
              <span>{selectedOption.flag}</span>
              <span>{selectedOption.name}</span>
              <span className="text-gray-500 text-sm">{selectedOption.code}</span>
            </>
          ) : (
            <span className="text-gray-400">{placeholder}</span>
          )}
        </span>
        <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-xl shadow-2xl">
          <div className="p-2 border-b border-gray-200">
            <input
              type="text"
              placeholder="Buscar país..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
          <div style={{ maxHeight: '240px', overflowY: 'auto' }}>
            {filteredOptions.map((option) => (
              <button
                key={option.name}
                type="button"
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                  setSearchTerm("");
                }}
                className="w-full px-4 py-3 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none flex items-center gap-2 transition-colors"
              >
                <span>{option.flag}</span>
                <span className="flex-1">{option.name}</span>
                <span className="text-gray-500 text-sm">{option.code}</span>
              </button>
            ))}
            {filteredOptions.length === 0 && (
              <div className="px-4 py-3 text-center text-gray-500 text-sm">
                Nenhum país encontrado
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "", 
    country: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://mirra-email-function.azurewebsites.net/api/PreOrderEmailFunction?code=8ixO7wS6_J_h0ddVKig_2982s22H5fBgl3Iv12uRX3F0AzFuYtpBxQ==",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Name: formData.name,
            Email: formData.email,
            Country: formData.country,
            Phone: formData.phone,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao enviar formulário");
      }

      setIsSubmitted(true);
      
      setTimeout(() => {
        setFormData({ name: "", email: "", country: "", phone: "" });
        setIsSubmitted(false);
      }, 15000);
    } catch (error) {
      console.error("Erro ao enviar:", error);
      alert("Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCountryChange = (country) => {
    setFormData({
      ...formData,
      country: country.name,
      phone: country.code + " "
    });
  };

  return (
    <section id="lead-form" className="py-24 bg-gradient-to-br from-blue-600 to-cyan-600 relative overflow-hidden">
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
              <div className="space-y-6">
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
                  <label htmlFor="country" className="block text-sm text-gray-700 mb-2">
                    País
                  </label>
                  <CustomSelect
                    value={formData.country}
                    onChange={handleCountryChange}
                    options={countries}
                    placeholder="Selecione seu país"
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
                    required
                    className="h-12"
                  />
                </div>

                <Button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full h-12 bg-gradient-to-r from-blue-700 to-cyan-700 hover:from-blue-800 hover:to-cyan-800"
                >
                  {isSubmitting ? "Enviando..." : "Quero Acesso Antecipado"}
                </Button>

                <p className="text-xs text-center text-gray-500">
                  Ao enviar, você concorda em receber comunicações sobre a Mirra AI. Seus dados estão seguros conosco.
                </p>
              </div>
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