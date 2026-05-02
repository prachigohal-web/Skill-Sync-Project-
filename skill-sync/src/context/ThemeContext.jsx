import { createContext, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);

  const theme = {
    bg: dark ? "#121212" : "#ffffff",
    text: dark ? "#ffffff" : "#000000",
    card: dark ? "#1e1e1e" : "#eeeeee"
  };

  return (
    <ThemeContext.Provider value={{ dark, setDark, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}