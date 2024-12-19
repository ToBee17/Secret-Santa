// Ce composant affiche la liste des participants
// Il prend en props le tableau de participants : participants
// Il prend en props une fonction pour ajouter un participant : onAddParticipant
// Il prend en props une fonction pour supprimer un participant : onRemoveParticipant

import { useState } from "react";

export function ParticipantInput({
  participants,
  onAddParticipant,
  onRemoveParticipant,
}) {
  const [currentName, setCurrentName] = useState("");

  const addParticipant = () => {
    // On ajoute le participant seulement si le currentName n'est pas vide
    if (currentName !== "") {
      // Appel de la fonction onAddParticipant avec le nom courant
      onAddParticipant(currentName);
      // Reset du currentName
      setCurrentName("");
    }
  };

  return (
    <div className="bg-[var(--color-grey)] p-7 w-full rounded-lg">
      <section class="flex justify-center"> <h2 className="text-4xl font-bold mb-6 text-center text-[var(--color-green)] border-b-2 border-[var(--color-green)] w-fit pb-7 font-secondary">
              Participants
            </h2></section>
     
      <div className="flex flex-col gap-3">
        <input
          type="text"
          className="input flex-grow outline rounded-sm p-2 focus:outline-secondary focus:text-secondary text-xl"
          placeholder="Saisir un nom"
          value={currentName}
          onChange={(e) => setCurrentName(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && addParticipant()}
          class="outline rounded-lg p-2"
        />
        <button className="button" class="bg-green text-white py-3 rounded-lg font-bold text-xl" onClick={addParticipant}>
          Ajouter
        </button>
      </div>
      <ul className="mt-8">
        {participants.map((name, index) => (
          <li key={index} className="list-item" class="flex gap-2 mb-4">
            <p class="flex bg-secondary text-white py-2 rounded-lg w-full justify-center items-center text-xl">{name}</p>
              <button
                className="bg-red py-4 px-6 rounded-lg"
                onClick={() => onRemoveParticipant(index)}
              >
                <img src="./close.png" alt="X" />
              </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
