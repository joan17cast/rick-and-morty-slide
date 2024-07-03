import { useState } from "react";
import ImageSlider from "@/components/slider/imageSlider";
import { TabType } from "@/components/tabs";
import Tabs from "@/components/tabs/tabs";
import { useGetAllCharacters } from "@/persistence/character.persistence";
import { tabsData } from "@/utils/staticData";

function Home() {
  const [tabSelected, setTabSelected] = useState<TabType>(TabType.CARRUSEL);
  const { data, status } = useGetAllCharacters();

  if (status === "pending") return <div>Loading...</div>;
  if (status === "error") return <div>Error</div>;
  console.log(data);
  return (
    <div className="flex w-full flex-col items-center justify-center p-2">
      <Tabs
        tabList={tabsData}
        selectedTab={tabSelected}
        onChange={(e) => setTabSelected(e)}
      />
      <ImageSlider listOfImages={data.results} />
    </div>
  );
}

export default Home;
