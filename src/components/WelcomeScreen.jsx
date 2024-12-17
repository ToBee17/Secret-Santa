// Ecran d'accueil de l'application
// Ce composant prend en props une fonction pour démarrer l'application : onStart

export function WelcomeScreen({ onStart }) {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-4xl font-bold text-primary">Secret Santa</h1>
      <img src="./santa.png" alt="Père Noël" />
      <h1 className="text-3xl">Bienvenue !</h1>
      <p className="text-lg text-[var(--color-text-grey)]">
        Organisez facilement votre échange de cadeaux entre amis ou collègues.
      </p>
      <button onClick={onStart} className="button bg-[var(--color-green)] text-xl px-8 py-3 rounded-lg text-white font-semibold">
        Commencer
      </button>
    </div>
  );
}
