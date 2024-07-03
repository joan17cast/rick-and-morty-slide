import { useState } from "react";
import { TabType } from "@/components/tabs";
import Tabs from "@/components/tabs/tabs";
import { useGetAllCharacters } from "@/persistence/character.persistence";
import { tabsData } from "@/utils/staticData";

function Home() {
  const [tabSelected, setTabSelected] = useState<TabType>(TabType.CARRUSEL);
  const { data } = useGetAllCharacters();
  console.log(data);
  return (
    <div className="flex w-full justify-center p-2">
      <Tabs
        tabList={tabsData}
        selectedTab={tabSelected}
        onChange={(e) => setTabSelected(e)}
      />
    </div>
  );
}

export default Home;
