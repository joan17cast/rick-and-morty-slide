import { create } from "zustand";

interface CharacterModel {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
}

interface CharacterParams {
  characterList: CharacterModel[] | undefined;
  setCharacterList: (characterList: CharacterModel[] | undefined) => void;
}

export const useCharacterStorage = create<CharacterParams>()((set) => ({
  characterList: undefined,
  setCharacterList: (characterList) => set({ characterList }),
}));

