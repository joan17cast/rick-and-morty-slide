import { mockCharacters } from "@/utils/staticData";
import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";

import VerticalList from "./verticalList";

describe("Grid List tests", () => {
  beforeEach(() => {
    render(<VerticalList listOfImages={mockCharacters} />);
  });
  it("Check alt image names", async () => {
    mockCharacters.forEach((character) => {
      expect(screen.getByAltText(character.name)).toBeInTheDocument();
    });
  });
  it("Check text list names", async () => {
    mockCharacters.forEach((character) => {
      expect(screen.getByText(character.name)).toBeInTheDocument();
    });
  });
});
