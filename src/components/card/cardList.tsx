import { CharacterModel } from "@/domain/character.domain";

interface CardListProps {
  listOfImages: CharacterModel[];
}

function CardList({ listOfImages }: CardListProps) {
  return (
    <div className="flex w-full flex-wrap gap-2">
      {listOfImages.map((character) => (
        <div key={character.id} className="rounded-md bg-white py-2 shadow-md">
          <img
            className="rounded-md"
            src={character.image}
            alt={character.name}
          />
          <h1 className="pt-2 text-center">{character.name}</h1>
        </div>
      ))}
    </div>
  );
}
export default CardList;
