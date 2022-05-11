import { TextInput } from "@mantine/core";
import { AiOutlineSearch } from "react-icons/ai";

const InputSearch = ({ enteredValue, onValueChange }) => {
  return (
    <TextInput
      aria-label="Search country input"
      placeholder="Search for a country..."
      classNames={{
        wrapper: "shadow-md",
        input:
          "bg-white dark:bg-dark-blue-dm dark:text-white py-6 pl-14 border-transparent",
        icon: "text-xl ml-4 dark:text-white",
      }}
      icon={<AiOutlineSearch />}
      value={enteredValue}
      onChange={(event) => onValueChange(event.target.value)}
    />
  );
};

export default InputSearch;
