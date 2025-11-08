import fitnessImage from '@assets/generated_images/Dynamic_fitness_deadlift_action_7e788b00.png';

export default function HeroSection() {
  return (
    <div className="grid lg:grid-cols-2 gap-8 items-center">
      <div className="relative overflow-hidden rounded-md h-[400px] lg:h-[500px]">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent z-10"
          aria-hidden="true"
        />
        <img
          src={fitnessImage}
          alt="Atleta realizando treino de levantamento terra com técnica perfeita"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="space-y-4">
        <p className="text-base text-muted-foreground">
          Garanta a versão essencial com os principais vídeos e correções.
        </p>

        <div>
          <h2 className="text-xl font-bold text-primary mb-2">
            Pack de Execuções Perfeitas
          </h2>
          <p className="text-sm text-foreground">
            Aprenda a treinar do jeito certo. Domine os movimentos e evite erros.
          </p>
        </div>
      </div>
    </div>
  );
}
