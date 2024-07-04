import { useState } from "react";
import { TabType } from "@/components/tabs";
import { tabsData } from "@/utils/staticData";
import { fireEvent, render, screen } from "@testing-library/react";

import Tabs from "./tabs";

const TabsWrapper = () => {
  const [selectedTab, setSelectedTab] = useState(TabType.CARRUSEL);

  return (
    <Tabs
      tabList={tabsData}
      selectedTab={selectedTab}
      onChange={setSelectedTab}
    />
  );
};

describe("Tabs component tests", () => {
  beforeEach(() => {
    render(<TabsWrapper />);
  });

  it("Check if the correct tab is selected initially", async () => {
    expect(screen.getByText(TabType.CARRUSEL)).toHaveClass(
      "active bg-gray-600 text-white",
    );
  });

  it("Check if all tabs are rendered", () => {
    const tabs = screen.getAllByText(/(Carrusel|Cards|Grid|List)/);
    expect(tabs).toHaveLength(tabsData.length);
  });

  it("Check if clicking on a tab calls the onChange function and updates the selected tab", () => {
    const tab = screen.getByText(TabType.CARDS);
    fireEvent.click(tab);
    expect(tab).toHaveClass("active bg-gray-600 text-white");
  });
  it("Check if clicking on a tab changes the selected tab", () => {
    // Click on the CARDS tab
    const cardsTab = screen.getByText(TabType.CARDS);
    fireEvent.click(cardsTab);
    expect(cardsTab).toHaveClass("active bg-gray-600 text-white");

    // The previous selected tab (CARRUSEL) should no longer have the active class
    const carruselTab = screen.getByText(TabType.CARRUSEL);
    expect(carruselTab).not.toHaveClass("active bg-gray-600 text-white");
  });
});
