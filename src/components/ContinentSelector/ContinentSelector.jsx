import { Select } from "@mantine/core";
import { FcGlobe } from "react-icons/fc";
import { BiChevronDown } from "react-icons/bi";

const continents = [
  { value: "africa", label: "Africa" },
  { value: "americas", label: "America" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
];

const ContinentSelector = ({ selectedContinent, onContinentChange }) => {
  return (
    <Select
      placeholder="Filter by Region"
      data={continents}
      allowDeselect
      icon={<FcGlobe />}
      rightSection={<BiChevronDown />}
      value={selectedContinent}
      onChange={onContinentChange}
      classNames={{
        dropdown:
          "bg-white dark:bg-dark-blue-dm dark:border-very-dark-blue-dm shadow-xl",
        item: "dark:text-white",
        hovered: "dark:text-black",
        selected: "dark:text-black",
        wrapper: "shadow-md",
        input:
          "bg-white dark:bg-dark-blue-dm dark:text-white border-transparent py-6",
        rightSection: "pointer-events-none",
      }}
    />
  );
};

export default ContinentSelector;
