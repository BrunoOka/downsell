import CTAButton from '../CTAButton';

export default function CTAButtonExample() {
  return (
    <CTAButton 
      onClick={() => console.log('CTA button clicked - redirect to checkout')} 
    />
  );
}
