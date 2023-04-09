import React, { createContext } from "react";
import { theme } from "./them";

type ThemeConProviderPrps = {
   children:React.ReactNode
}

export const ThemeCon = createContext(theme);

export const ThemeConProviders = ({children}:ThemeConProviderPrps) => {
     return (
                <ThemeCon.Provider value={theme}>
                    {children}
                </ThemeCon.Provider>
        )
   
}