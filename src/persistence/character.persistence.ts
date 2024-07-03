import {
  CharacterListModel,
  characterListSchema,
} from "@/domain/character.domain";
import { useCharacterStorage } from "@/zustand/characters.zustand";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// ** GET List of Characters

export const getAllCharacters = async () => {
  try {
    const envUrl = import.meta.env.VITE_CUSTOM_API_URL;
    const url = new URL(`${envUrl}/api/character`);

    const response = await axios.get(url.href);
    console.log(response.data);
    const checkedResponse = characterListSchema.safeParse(response.data);

    if (checkedResponse.success) {
      useCharacterStorage
        .getState()
        .setCharacterList(checkedResponse.data.results);
      return checkedResponse.data;
    }

    return Promise.reject(console.error(checkedResponse.error.stack));
  } catch (error) {
    return Promise.reject(console.error(error));
  }
};

export const useGetAllCharacters = () => {
  const response = useQuery<CharacterListModel, void>({
    queryKey: ["getAllCharacters"],
    queryFn: async () => {
      return getAllCharacters();
    },
  });
  return response;
};
