import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2">
      {theme === "dark" ? (
        <button className="dark:text-white" onClick={() => setTheme("light")}>
          light
        </button>
      ) : (
        <button className="dark:text-white" onClick={() => setTheme("dark")}>
          dark
        </button>
      )}
    </div>
  );
};

export default Toggle;
