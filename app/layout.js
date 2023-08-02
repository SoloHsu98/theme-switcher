"use client";
/** @jsxImportSource @emotion/react */

import { css, ThemeProvider } from "@emotion/react";
import { createContext, useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Button from "@/components/Buttons";

const themes = {
  primary: {
    colors: {
      primary: "#0070f3",
      secondary: "#34d399",
      text: "#ffffff",
      button: "#fbbf24",
      background: "#99b7da",
      secondaryBg: "#000000",
    },
  },
  secondary: {
    colors: {
      primary: "#34d399",
      secondary: "#0070f3",
      text: "#fbbf24",
      button: "#34d399",
      background: "#000000",
      secondaryBg: "#0070f3",
    },
  },
  text: {
    colors: {
      primary: "#333",
      secondary: "#0070f3",
      text: "#34d399",
      button: "#fbbf24",
      background: "#bd6666",
    },
  },
  button: {
    colors: {
      primary: "#fbbf24",
      secondary: "#0070f3",
      text: "#333",
      button: "#34d399",
      background: "#9f1212",
    },
  },
};
export const ThemeContext = createContext({
  theme: themes.primary,
  setSelectedTheme: () => {},
  themes: themes,
});

export default function RootLayout({ children }) {
  const buttonContainerStyle = css`
    margin-top: 20px;
  `;

  const [selectedTheme, setSelectedTheme] = useState(themes.primary);

  const contextValue = {
    theme: selectedTheme || themes.primary,
    setSelectedTheme: setSelectedTheme,
    themes: themes,
  };
  const mainContainer = css`
    background: ${contextValue.theme.colors.background};
    color: ${contextValue.theme.colors.text || "#000000"};
  `;

  return (
    <html lang="en">
      <ThemeContext.Provider value={contextValue}>
        <ThemeProvider theme={contextValue.theme}>
          <body css={mainContainer}>
            <Navbar />
            <Sidebar />
            <div css={buttonContainerStyle}>
              <Button label="Button 1" />
              <Button label="Button 2" />
              <Button label="Button 3" />
            </div>
            {children}
          </body>
        </ThemeProvider>
      </ThemeContext.Provider>
    </html>
  );
}
