// Toggle.tsx
import React, { useEffect, useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { useAppDispatch } from "../../hooks/appDispatch";
import { updateTheme } from "../../redux/state/slices/configuration/configurationThunk";

const Toggle: React.FC = () => {
  const dispatch = useAppDispatch();
  const theme: any = localStorage.getItem("Theme");
  const themeDark = JSON.parse(theme);
  const [themeClick, setThemeClick] = useState(themeDark);
  const [themeDarkLight, setThemeDarkLight] = useState<any>(null);
  const { toggleTheme } = useContext(ThemeContext);

  const newToggleTheme = () => {
    // console.log("entra al newToggleTheme", !themeClick);
    setThemeClick(!themeClick);
    localStorage.setItem("Theme", JSON.stringify(!themeClick));
    toggleTheme();
  };

  console.log("themeLogin", theme);
  console.log("themeLoginthemeDark", themeDark);
  console.log("themeLoginthemeClick", themeClick);

  useEffect(() => {
    toggleTheme();
  }, [themeDark]);

  return (
    <button className="btn handleTheme d-none" onClick={newToggleTheme}>
      {themeDark === true ? "Modo Claro" : "Modo Oscuro"}
    </button>
  );
};

export default Toggle;
