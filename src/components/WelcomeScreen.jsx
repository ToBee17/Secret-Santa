// Ecran d'accueil de l'application
// Ce composant prend en props une fonction pour démarrer l'application : onStart

export function WelcomeScreen({ onStart }) {
  return (
    <div className="text-center space-y-6 flex flex-col items-center justify-center h-full text-grey ">
      <img src="./santa.png" alt="Père Noël" />
      <h1 className="text-3xl font-bold font-secondary">Bienvenue !</h1>
      <p className="text-xl text-[var(--color-text-grey)]">
        Organisez facilement votre échange de cadeaux entre amis ou collègues.
      </p>
      <button onClick={onStart} className="button bg-green text-xl px-8 py-3 rounded-lg text-white font-semibold">
        Commencer
      </button>
    </div>
  );
}
