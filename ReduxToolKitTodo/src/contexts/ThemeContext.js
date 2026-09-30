import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => { },
    lightTheme: () => { }
})


export const ThemeContextsProvider = ThemeContext.Provider

export default function useThemeMode() {
    return useContext(ThemeContext);
}