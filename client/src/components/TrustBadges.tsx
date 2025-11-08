import { Lock, Zap, Shield } from 'lucide-react';

export default function TrustBadges() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 py-6">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Lock className="w-5 h-5 text-primary" />
        <span className="font-medium">Pagamento 100% seguro</span>
      </div>
      
      <div className="w-px h-6 bg-border hidden sm:block" />
      
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Zap className="w-5 h-5 text-primary" />
        <span className="font-medium">Acesso imediato após o pagamento</span>
      </div>
      
      <div className="w-px h-6 bg-border hidden sm:block" />
      
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Shield className="w-5 h-5 text-primary" />
        <span className="font-medium">Garantia de 7 dias</span>
      </div>
    </div>
  );
}
