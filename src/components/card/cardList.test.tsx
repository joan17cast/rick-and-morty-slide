import { mockCharacters } from "@/utils/staticData";
import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";

import CardList from "./cardList";

describe("Card List tests", () => {
  beforeEach(() => {
    render(<CardList listOfImages={mockCharacters} />);
  });
  it("Check alt image names", async () => {
    mockCharacters.forEach((character) => {
      expect(screen.getByAltText(character.name)).toBeInTheDocument();
    });
  });
  it("Check text card names", async () => {
    mockCharacters.forEach((character) => {
      expect(screen.getByText(character.name)).toBeInTheDocument();
    });
  });
});
