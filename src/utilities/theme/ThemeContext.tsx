// ThemeContext.tsx
import React, { createContext, useEffect, useState } from "react";
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
  darkFilterFunnelColumns,
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
  themeFilterFunnelColumns: ThemeType;
  themeSliderText: ThemeType;
  themeTable: ThemeType;
  toggleTheme: (themeDark: boolean) => void;
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
  themeFilterFunnelColumns: lightFilterThemeDropdown,
  themeSliderText: lightSidebarText,
  themeTable: lightTable,
  toggleTheme: () => {},
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // const themeLocalStorage: any = localStorage.getItem("Theme");
  // const themeDark = JSON.parse(themeLocalStorage);
  const [themePersist, setThemePersist] = useState();

  // useEffect(() => {
  //   console.log("theme.back", theme.background === "#FFFFFF");
  // }, [themeDark]);

  // console.log("themeLoginContext", themeLocalStorage);
  // console.log("themeLoginthemeDarkContext", themeDark);
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

  const [themeFilterFunnelColumns, setThemeFilterFunnelColumns] =
    useState<ThemeType>(lightFilterThemeDropdown);

  const [themeSliderText, setThemeSliderText] =
    useState<ThemeType>(lightSidebarText);

  const [themeTable, setThemeTable] = useState<ThemeType>(lightTable);

  /////////////////////////////////////////////////////////////////

  const toggleTheme = (themeDark: any = false) => {
    console.log("toggleTheme...", themeDark);

    setTheme(() => (themeDark === true ? darkTheme : lightTheme));
    setThemeDarkLight(() => (themeDark === true ? darkLightTheme : lightTheme));
    setThemeTitleModal(() =>
      themeDark === true ? lightThemeTitleModal : darkThemeTitleModal
    );
    setThemeTitleTab(() =>
      themeDark === true ? darkThemeTitleTab : lightThemeTitleTab
    );
    setThemeButtonDropdown(() =>
      themeDark === true ? darkButtonThemeDropdown : lightButtonThemeDropdown
    );
    setThemeFilterDropdown(() =>
      themeDark === true ? darkFilterThemeDropdown : lightFilterThemeDropdown
    );
    setThemeBackNewFunnel(() =>
      themeDark === true ? darkTheme : lightBackNewFunnel
    );
    setThemeFilterFunnel(() =>
      themeDark === true ? darkFilterFunnel : lightFilterFunnel
    );

    setThemeFilterFunnelColumns(() =>
      themeDark === true ? darkFilterFunnelColumns : lightFilterThemeDropdown
    );

    setThemeSliderText(() =>
      themeDark === true ? darkSidebarText : lightSidebarText
    );
    setThemeTable(
      () => (themeDark === true ? darkTable : lightTable)
      // prevTheme === lightTable || themeDark === true ? darkTable : lightTable
    );
  };

  // useEffect(() => {
  //   if (themeDark === true && theme.background === "#FFFFFF") {
  //     console.log("entra al persist2");
  //     toggleTheme();
  //   }
  // }, [themeDark]);

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
        themeFilterFunnelColumns,
        themeSliderText,
        themeTable,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
