// ThemeContext.tsx
import React, { createContext, useState } from "react";
import {
  ThemeType,
  lightTheme,
  darkTheme,
  darkLightTheme,
  lightThemeTitleModal,
  darkThemeTitleModal,
  lightThemeTitleTab,
  darkThemeTitleTab,
  lightButtonThemeDropdown,
  darkButtonThemeDropdown,
  lightFilterThemeDropdown,
  darkFilterThemeDropdown,
  lightBackNewFunnel,
  lightFilterFunnel,
  darkFilterFunnel,
  lightSidebarText,
  darkSidebarText,
  lightTable,
  darkTable,
} from "../../styled-components/Theme/themes";

interface ThemeContextProps {
  theme: ThemeType;
  themeDarkLight: ThemeType;
  themeTitleModal: ThemeType;
  themeTitleTab: ThemeType;
  themeButtonDropdown: ThemeType;
  themeFilterDropdown: ThemeType;
  themeBackNewFunnel: ThemeType;
  themeFilterFunnel: ThemeType;
  themeSliderText: ThemeType;
  themeTable: ThemeType;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: lightTheme,
  themeDarkLight: lightTheme,
  themeTitleModal: darkThemeTitleModal,
  themeTitleTab: lightThemeTitleTab,
  themeButtonDropdown: lightButtonThemeDropdown,
  themeFilterDropdown: lightTheme,
  themeBackNewFunnel: lightTheme,
  themeFilterFunnel: lightTheme,
  themeSliderText: lightSidebarText,
  themeTable: lightTable,
  toggleTheme: () => {},
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const themeLocalStorage: any = localStorage.getItem("Theme");
  const themeDark = JSON.parse(themeLocalStorage);

  console.log("themeLoginContext", themeLocalStorage);
  console.log("themeLoginthemeDarkContext", themeDark);

  const [theme, setTheme] = useState<ThemeType>(lightTheme);
  const [themeDarkLight, setThemeDarkLight] = useState<ThemeType>(lightTheme);
  const [themeTitleModal, setThemeTitleModal] =
    useState<ThemeType>(darkThemeTitleModal);
  const [themeTitleTab, setThemeTitleTab] =
    useState<ThemeType>(lightThemeTitleTab);
  const [themeButtonDropdown, setThemeButtonDropdown] = useState<ThemeType>(
    lightButtonThemeDropdown
  );

  const [themeFilterDropdown, setThemeFilterDropdown] = useState<ThemeType>(
    lightFilterThemeDropdown
  );

  const [themeBackNewFunnel, setThemeBackNewFunnel] =
    useState<ThemeType>(lightBackNewFunnel);

  const [themeFilterFunnel, setThemeFilterFunnel] =
    useState<ThemeType>(lightFilterFunnel);

  const [themeSliderText, setThemeSliderText] =
    useState<ThemeType>(lightSidebarText);

  const [themeTable, setThemeTable] = useState<ThemeType>(lightTable);

  /////////////////////////////////////////////////////////////////

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme || themeDark === true ? darkTheme : lightTheme
    );
    setThemeDarkLight((prevTheme) =>
      prevTheme === lightTheme || themeDark === true
        ? darkLightTheme
        : lightTheme
    );
    setThemeTitleModal((prevTheme) =>
      prevTheme === darkThemeTitleModal
        ? lightThemeTitleModal
        : darkThemeTitleModal
    );
    setThemeTitleTab((prevTheme) =>
      prevTheme === lightThemeTitleTab || themeDark === true
        ? darkThemeTitleTab
        : lightThemeTitleTab
    );
    setThemeButtonDropdown((prevTheme) =>
      prevTheme === lightButtonThemeDropdown || themeDark === true
        ? darkButtonThemeDropdown
        : lightButtonThemeDropdown
    );
    setThemeFilterDropdown((prevTheme) =>
      prevTheme === lightFilterThemeDropdown || themeDark === true
        ? darkFilterThemeDropdown
        : lightFilterThemeDropdown
    );
    setThemeBackNewFunnel((prevTheme) =>
      prevTheme === lightBackNewFunnel || themeDark === true
        ? darkTheme
        : lightBackNewFunnel
    );
    setThemeFilterFunnel((prevTheme) =>
      prevTheme === lightFilterFunnel || themeDark === true
        ? darkFilterFunnel
        : lightFilterFunnel
    );
    setThemeSliderText((prevTheme) =>
      prevTheme === lightSidebarText || themeDark === true
        ? darkSidebarText
        : lightSidebarText
    );
    setThemeTable((prevTheme) =>
      prevTheme === lightTable || themeDark === true ? darkTable : lightTable
    );
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeDarkLight,
        themeTitleModal,
        themeTitleTab,
        themeButtonDropdown,
        themeFilterDropdown,
        themeBackNewFunnel,
        themeFilterFunnel,
        themeSliderText,
        themeTable,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
