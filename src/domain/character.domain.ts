import { z } from "zod";

export const characterListSchema = z.object({
  info: z.object({
    count: z.number(),
    pages: z.number(),
    next: z.string(),
    prev: z.null(),
  }),
  results: z.array(
    z
      .object({
        id: z.number(),
        name: z.string(),
        status: z.string(),
        species: z.string(),
        image: z.string(),
      })
      .passthrough(),
  ),
});

export type CharacterListModel = z.infer<typeof characterListSchema>;
