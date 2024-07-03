import { CharacterModel } from "@/domain/character.domain";

interface VerticalListProps {
  listOfImages: CharacterModel[];
}

function VerticalList({ listOfImages }: VerticalListProps) {
  return (
    <div className="flex w-full flex-col justify-center gap-4 px-10">
      {listOfImages.map((character) => (
        <div className="flex flex-col rounded-md bg-white shadow-md sm:flex-row">
          <img
            className="rounded-md"
            src={character.image}
            alt={character.name}
          />
          <h1 className="p-2 text-center">{character.name}</h1>
        </div>
      ))}
    </div>
  );
}
export default VerticalList;
