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
  toggleTheme: () => {},
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
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

  /////////////////////////////////////////////////////////////////

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === lightTheme ? darkTheme : lightTheme
    );
    setThemeDarkLight((prevTheme) =>
      prevTheme === lightTheme ? darkLightTheme : lightTheme
    );
    setThemeTitleModal((prevTheme) =>
      prevTheme === darkThemeTitleModal
        ? lightThemeTitleModal
        : darkThemeTitleModal
    );
    setThemeTitleTab((prevTheme) =>
      prevTheme === lightThemeTitleTab ? darkThemeTitleTab : lightThemeTitleTab
    );
    setThemeButtonDropdown((prevTheme) =>
      prevTheme === lightButtonThemeDropdown
        ? darkButtonThemeDropdown
        : lightButtonThemeDropdown
    );
    setThemeFilterDropdown((prevTheme) =>
      prevTheme === lightFilterThemeDropdown
        ? darkFilterThemeDropdown
        : lightFilterThemeDropdown
    );
    setThemeBackNewFunnel((prevTheme) =>
      prevTheme === lightBackNewFunnel ? darkTheme : lightBackNewFunnel
    );
    setThemeFilterFunnel((prevTheme) =>
      prevTheme === lightFilterFunnel ? darkFilterFunnel : lightFilterFunnel
    );
    setThemeSliderText((prevTheme) =>
      prevTheme === lightSidebarText ? darkSidebarText : lightSidebarText
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
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
