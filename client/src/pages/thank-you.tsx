import { CheckCircle } from 'lucide-react';

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center space-y-6">
        <CheckCircle className="w-20 h-20 text-primary mx-auto" />
        
        <h1 className="text-4xl font-bold text-foreground">
          Obrigado pela sua visita!
        </h1>
        
        <p className="text-xl text-muted-foreground">
          Entendemos sua decisão. Se mudar de ideia, estaremos aqui para ajudar você a alcançar seus objetivos de treino.
        </p>
        
        <div className="pt-8">
          <p className="text-sm text-muted-foreground">
            Continue treinando com segurança e dedicação.
          </p>
        </div>
      </div>
    </div>
  );
}
