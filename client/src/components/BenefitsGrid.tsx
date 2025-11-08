import { Video, FileText, Smartphone, DollarSign } from 'lucide-react';
import { Card } from '@/components/ui/card';

const benefits = [
  {
    icon: Video,
    title: '25 vídeos práticos',
    description: 'Execuções mais importantes',
  },
  {
    icon: FileText,
    title: 'PDF essencial',
    description: 'Dicas de postura',
  },
  {
    icon: Smartphone,
    title: 'Acesso vitalício',
    description: 'Em qualquer dispositivo',
  },
  {
    icon: DollarSign,
    title: 'Garantia 7 dias',
    description: 'Risco zero',
  },
];

export default function BenefitsGrid() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-center">O que você recebe:</h3>
      
      <div className="grid md:grid-cols-2 gap-3">
        {benefits.map((benefit, index) => (
          <Card 
            key={index} 
            className="p-4 hover-elevate transition-all duration-300"
            data-testid={`benefit-card-${index}`}
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                <benefit.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="space-y-0.5 flex-1">
                <h4 className="font-bold text-base text-foreground">
                  {benefit.title}
                </h4>
                <p className="text-xs text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
