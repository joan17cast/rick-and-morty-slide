import { mockCharacters } from "@/utils/staticData";
import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";

import GridList from "./gridList";

describe("Grid List tests", () => {
  beforeEach(() => {
    render(<GridList listOfImages={mockCharacters} />);
  });
  it("Check alt image names", async () => {
    mockCharacters.forEach((character) => {
      expect(screen.getByAltText(character.name)).toBeInTheDocument();
    });
  });
});
