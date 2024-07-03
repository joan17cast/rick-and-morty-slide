import { z } from "zod";


export const characterSchema = z.object({
  id: z.number(),
  name: z.string(),
  status: z.string(),
  species: z.string(),
  image: z.string(),
}).passthrough();

export type CharacterModel = z.infer<typeof characterSchema>;

export const characterListSchema = z.object({
  info: z.object({
    count: z.number(),
    pages: z.number(),
    next: z.string(),
    prev: z.null(),
  }),
  results: z.array(
    characterSchema
  ),
});

export type CharacterListModel = z.infer<typeof characterListSchema>;
