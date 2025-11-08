import { AlertCircle } from 'lucide-react';

export default function UrgencyHeadline() {
  return (
    <div className="flex items-center justify-center gap-2 text-destructive">
      <AlertCircle className="w-6 h-6 flex-shrink-0" />
      <h1 className="text-2xl lg:text-3xl font-bold text-center">
        ÚLTIMA OPORTUNIDADE
      </h1>
    </div>
  );
}
