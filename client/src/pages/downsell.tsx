import { useLocation } from 'wouter';
import CountdownTimer from '@/components/CountdownTimer';
import UrgencyHeadline from '@/components/UrgencyHeadline';
import PricingSection from '@/components/PricingSection';
import BenefitsGrid from '@/components/BenefitsGrid';
import CTAButton from '@/components/CTAButton';
import DeclineButton from '@/components/DeclineButton';
import TrustBadges from '@/components/TrustBadges';
import WarningBanner from '@/components/WarningBanner';

export default function DownsellPage() {
  const [, setLocation] = useLocation();

  const handleCheckout = () => {
    console.log('Redirecting to checkout...');
  };

  const handleDecline = () => {
    console.log('User declined offer');
    setLocation('/thank-you');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-6 space-y-8">
        <div className="max-w-2xl mx-auto">
          <CountdownTimer />
        </div>

        <UrgencyHeadline />

        <PricingSection />

        <BenefitsGrid />

        <div className="space-y-6 max-w-3xl mx-auto">
          <CTAButton onClick={handleCheckout} />
          
          <DeclineButton onClick={handleDecline} />
          
          <WarningBanner />
          
          <TrustBadges />
        </div>
      </div>
    </div>
  );
}
