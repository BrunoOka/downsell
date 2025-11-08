import { Flame } from 'lucide-react';

export default function PricingSection() {
  return (
    <div className="text-center space-y-3 py-4">
      <div className="flex items-center justify-center gap-2">
        <Flame className="w-6 h-6 text-primary" />
        <h3 className="text-lg font-semibold text-foreground">
          De <span className="line-through text-muted-foreground">R$49,00</span> por apenas
        </h3>
      </div>
      
      <div className="relative inline-block">
        <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 blur-xl rounded-full" />
        <div className="relative text-5xl lg:text-6xl font-black bg-gradient-to-r from-[#FF6B35] via-[#FFB347] to-[#FF6B35] bg-clip-text text-transparent">
          R$4,99!
        </div>
      </div>
    </div>
  );
}
