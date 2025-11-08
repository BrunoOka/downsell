import { AlertTriangle } from 'lucide-react';

export default function WarningBanner() {
  return (
    <div className="bg-destructive/10 border border-destructive/30 rounded-md p-3">
      <div className="flex items-center gap-2">
        <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0" />
        <p className="font-bold text-destructive text-sm">
          Esta é a última vez que você verá essa oferta.
        </p>
      </div>
    </div>
  );
}
