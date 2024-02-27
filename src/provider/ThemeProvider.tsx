import React, { useContext, useMemo, useState } from 'react';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface ThemeProviderProps {
  children: JSX.Element;
}

interface IThemeContext {
  theme: Theme;
  setTeme?: React.Dispatch<React.SetStateAction<Theme>>;
}

const ThemeContext = React.createContext<IThemeContext | undefined>(undefined);

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw Error(
      'useThemeContext must be used inside of a ThemeProvider, otherwise it will not function correctly.',
    );
  }
  return context;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState(Theme.LIGHT);

  const contextData = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme],
  );

  return (
    <ThemeContext.Provider value={contextData}>
      {children}
    </ThemeContext.Provider>
  );
}
