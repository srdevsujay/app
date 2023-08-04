// Theme.ts
export const lightTheme = {
  background: "#FFFFFF",
  text: "#333",
  border: "1px solid #000",
};

export const darkTheme = {
  background: "#0D0D0D",
  text: "#DDDDDD",
  border: "1px solid #DDD",
};

export const darkLightTheme = {
  background: "#161616",
  text: "#FFFFFF",
};

export const lightThemeTitleModal = {
  background: "#FFFFFF",
  text: "#333",
};

export const darkThemeTitleModal = {
  background: "#0D0D0D",
  text: "#030229",
};

export const lightThemeTitleTab = {
  background: "#FFFFFF",
  text: "#fff",
};

export const darkThemeTitleTab = {
  background: "#0D0D0D",
  text: "#FFFFFF !important",
};

export const lightButtonThemeDropdown = {
  background: "#FFFFFF",
  text: "#fff",
};

export const darkButtonThemeDropdown = {
  background: "#0D0D0D",
  text: "#FFFFFF",
};

export const lightFilterThemeDropdown = {
  background: "rgb(243, 250, 254)",
  text: "rgb(16, 156, 241)",
};

export const darkFilterThemeDropdown = {
  background: "#161616",
  text: "rgb(16, 156, 241)",
};

export const lightBackNewFunnel = {
  background: "#f3f4f6",
  text: "rgb(16, 156, 241)",
};

export const lightFilterFunnel = {
  background: "#fff",
  text: "rgb(16, 156, 241)",
};

export const darkFilterFunnel = {
  background: "#0D0D0D",
  text: "rgb(16, 156, 241)",
};

export const lightSidebarText = {
  background: "#fff",
  text: "#3997ff",
};

export const darkSidebarText = {
  background: "#0D0D0D",
  text: "#6F6C99",
};

export const lightTable = {
  background: "#FFFFFF",
  text: "#464646",
  border: "1px solid #000",
};

export const darkTable = {
  background: "#0D0D0D",
  text: "#6F6C99",
  border: "1px solid #000",
};

export type ThemeType =
  | typeof lightTheme
  | typeof darkTheme
  | typeof darkLightTheme
  | typeof lightThemeTitleModal
  | typeof darkThemeTitleModal
  | typeof lightThemeTitleTab
  | typeof darkThemeTitleTab
  | typeof lightButtonThemeDropdown
  | typeof darkButtonThemeDropdown
  | typeof lightFilterThemeDropdown
  | typeof darkFilterThemeDropdown
  | typeof lightBackNewFunnel
  | typeof lightFilterFunnel
  | typeof darkFilterFunnel
  | typeof lightSidebarText
  | typeof darkSidebarText
  | typeof lightTable
  | typeof darkTable;
