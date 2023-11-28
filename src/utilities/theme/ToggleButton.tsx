// Toggle.tsx
import React, { useEffect, useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { useAppDispatch } from "../../hooks/appDispatch";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { updateTheme } from "../../redux/state/slices/configuration/configurationThunk";

const Toggle: React.FC = () => {
  const dispatch = useAppDispatch();
  const theme: any = localStorage.getItem("Theme");
  const themeDark = JSON.parse(theme);
  console.log("themeDark--", themeDark);

  const [themeClick, setThemeClick] = useState(themeDark);
  const [themeDarkLight, setThemeDarkLight] = useState<any>(null);
  const { theme: themeContext, toggleTheme } = useContext(ThemeContext);

  const newToggleTheme = () => {
    console.log("entra al newToggleTheme", !themeClick);
    setThemeClick(!themeClick);
    localStorage.setItem("Theme", JSON.stringify(!themeClick));
    toggleTheme(themeDark);
  };

  console.log("themeLoginthemeDark", themeDark);
  console.log("themeLoginthemeClick", themeClick);
  console.log("themeLoginthemeClickThemee", themeContext);

  useEffect(() => {
    toggleTheme(themeDark);
  }, [themeDark]);

  return (
    <button className="btn handleTheme" onClick={newToggleTheme}>
      {themeDark === true ? (
        <LightModeOutlinedIcon />
      ) : (
        <DarkModeOutlinedIcon />
      )}
      {/* {themeDark === true ? "Modo Claro" : "Modo Oscuro"} */}
    </button>
  );
};

export default Toggle;
