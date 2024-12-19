// Ce composant affiche la liste des assignments
// Il prend en props le tableau d'assignments
export function AssignmentDisplay({ assignments }) {
  return (
    <ul className="flex flex-col gap-3 w-full">
      {assignments.map((assignment, index) => (
        <li key={index} class="flex bg-[var(--color-grey)] text-[var(--color-secondary)] py-2 rounded-lg w-full justify-center items-center">
          <span className="mr-1">{assignment.giver}</span> offre un {" "}
          <img src="./kdo.png" alt="kdo" class="px-3"/>
          <span>à {assignment.receiver}</span>
        </li>
      ))}
    </ul>
  );
}
