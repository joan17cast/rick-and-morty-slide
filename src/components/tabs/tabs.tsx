import { TabType } from "@/components/tabs";

interface TabsModel {
  name: TabType;
  icon: React.ReactNode;
}

interface TabsProps {
  tabList: TabsModel[];
  selectedTab: TabType;
  onChange: (tab: TabType) => void;
}

function tabStyle(active: boolean) {
  const defaultStyles =
    "flex flex-col justify-center items-center w-20 cursor-pointer gap-1 py-2 rounded-lg";
  return active
    ? `${defaultStyles} active bg-gray-600 text-white`
    : `${defaultStyles} hover:bg-gray-100 hover:text-gray-900`;
}

function Tabs({ tabList, selectedTab, onChange }: TabsProps) {
  return (
    <ul className="flex w-fit flex-wrap gap-1 rounded-md text-center text-sm font-medium text-gray-500 shadow-md">
      {tabList.map((tab) => (
        <li
          className={tabStyle(tab.name === selectedTab)}
          key={tab.name}
          onClick={() => onChange(tab.name)}
        >
          {tab.icon}
          {tab.name}
        </li>
      ))}
    </ul>
  );
}

export default Tabs;
