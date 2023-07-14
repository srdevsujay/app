// Toggle.tsx
import React, { useEffect, useContext, useState } from "react";
import { ThemeContext } from "./ThemeContext";
import { useAppDispatch } from "../../hooks/appDispatch";
import { updateTheme } from "../../redux/state/slices/configuration/configurationThunk";

const Toggle: React.FC = () => {
  const dispatch = useAppDispatch();
  const [themeClick, setThemeClick] = useState(false);
  const [themeDarkLight, setThemeDarkLight] = useState<any>(null);
  const { toggleTheme } = useContext(ThemeContext);

  const newToggleTheme = () => {
    // console.log("entra al newToggleTheme", !themeClick);
    setThemeClick(!themeClick);
    localStorage.setItem("Theme", JSON.stringify(!themeClick));
    toggleTheme();
  };

  const theme: any = localStorage.getItem("Theme");
  const themeDark = JSON.parse(theme);

  console.log(
    "entra al localStorage, acá aplicar lo del Auth",
    localStorage.getItem("Theme")
  );

  return (
    <button className="btn handleTheme d-none" onClick={newToggleTheme}>
      {themeDark === true ? "Modo Claro" : "Modo Oscuro"}
    </button>
  );
};

export default Toggle;
