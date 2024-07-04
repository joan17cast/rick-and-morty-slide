import { CharacterModel } from "@/domain/character.domain";

interface GridListProps {
  listOfImages: CharacterModel[];
}

function GridList({ listOfImages }: GridListProps) {
  return (
    <div className="grid w-full grid-cols-1 justify-center gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {listOfImages.map((character) => (
        <div key={character.id} className="flex items-center justify-center bg-white py-2">
          <img
            className="rounded-md"
            src={character.image}
            alt={character.name}
          />
        </div>
      ))}
    </div>
  );
}
export default GridList;
