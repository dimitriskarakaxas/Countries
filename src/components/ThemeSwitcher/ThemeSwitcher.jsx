import { useState } from "react";

import { DarkModeSwitch } from "react-toggle-dark-mode";
import useThemes from "../../hooks/useThemes";

const ThemeSwitcher = () => {
  const [colorTheme, setTheme] = useThemes();
  const [isLightMode, setIsLightMode] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleTheme = (checked) => {
    setTheme(colorTheme);
    setIsLightMode(checked);
  };

  return (
    <button className="flex items-center overflow-hidden relative pl-8">
      <DarkModeSwitch
        checked={isLightMode}
        onChange={toggleTheme}
        className="absolute w-[250px] -left-[107px] h-[250px] -bottom-[113px] p-[116px]"
      />
      <span className="font-semibold">
        {!isLightMode ? "Light Mode" : "Dark Mode"}
      </span>
    </button>
  );
};

export default ThemeSwitcher;
