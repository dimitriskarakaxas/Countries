import { Input } from "@mantine/core";
import { AiOutlineSearch } from "react-icons/ai";

const InputSearch = () => {
  return (
    <div className="mb-10">
      <Input
        placeholder="Search for a country..."
        classNames={{
          wrapper: "shadow-lg",
          input:
            "bg-white dark:bg-dark-blue-dm dark:text-white py-6 pl-14 border-transparent",
          icon: "text-xl ml-4 dark:text-white",
        }}
        icon={<AiOutlineSearch />}
      />
    </div>
  );
};

export default InputSearch;
