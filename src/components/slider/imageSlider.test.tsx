import { mockCharacters } from "@/utils/staticData";
import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";

import ImageSlider from "./imageSlider"; // Fix the casing of the import statement

describe("Image slider tests", () => {
  beforeEach(() => {
    render(<ImageSlider listOfImages={mockCharacters} />);
  });
  it("Check alt image names", () => {
    mockCharacters.forEach((character) => {
      expect(screen.getAllByAltText(character.name).length).toBeGreaterThan(0);
    });
  });

  it("Check text list names", () => {
    mockCharacters.forEach((character) => {
      expect(screen.getAllByText(character.name).length).toBeGreaterThan(0);
    });
  });

  it("Check render button previous", () => {
    expect(
      screen.getByRole("button", { name: /previous/i }),
    ).toBeInTheDocument();
  });

  it("Check render button next", () => {
    expect(screen.getByRole("button", { name: /next/i })).toBeInTheDocument();
  });
});
