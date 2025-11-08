interface DeclineButtonProps {
  onClick?: () => void;
}

export default function DeclineButton({ onClick }: DeclineButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full max-w-md mx-auto py-3 px-6 rounded-md text-sm font-medium text-gray-400 transition-colors duration-200"
      style={{
        backgroundColor: '#2B2B2B',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#1F1F1F';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#2B2B2B';
      }}
      data-testid="button-decline"
    >
      ❌ Não quero aproveitar esta última chance
    </button>
  );
}
