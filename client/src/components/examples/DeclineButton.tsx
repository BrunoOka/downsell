import DeclineButton from '../DeclineButton';

export default function DeclineButtonExample() {
  return (
    <DeclineButton 
      onClick={() => console.log('Decline button clicked - redirect to thank you page')} 
    />
  );
}
