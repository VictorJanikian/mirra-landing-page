import { Construction, X } from "lucide-react";
import { Button } from "./ui/button";

interface UnderConstructionProps {
  title: string;
  onClose: () => void;
}

export function UnderConstruction({ title, onClose }: UnderConstructionProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Fechar"
        >
          <X className="h-5 w-5 text-gray-600" />
        </button>

        <div className="text-center">
          <div className="h-20 w-20 rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center mx-auto mb-6">
            <Construction className="h-10 w-10 text-blue-600" />
          </div>

          <h2 className="text-2xl text-gray-900 mb-4">{title}</h2>
          <p className="text-gray-600 mb-8">
            Esta página está em construção. Em breve você terá acesso a todo o conteúdo.
          </p>

          <Button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700"
          >
            Voltar
          </Button>
        </div>
      </div>
    </div>
  );
}
