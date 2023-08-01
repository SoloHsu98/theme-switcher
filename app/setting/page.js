"use client";
/** @jsxImportSource @emotion/react */
import { useState, useContext } from "react";
import { ThemeProvider, css } from "@emotion/react";
import { ThemeContext } from "../layout";
// Import the ThemeContext from Layout

const settingContainerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const buttonStyle = css`
  padding: 10px 20px;
  margin: 5px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
`;

const colorPickerContainerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
`;
const colorPickerStyle = css`
  margin: 5px;
`;
const Setting = () => {
  const { setSelectedTheme, theme, themes } = useContext(ThemeContext); // Use the useContext hook to access the setSelectedTheme function

  const handleThemeChange = (selectedTheme) => {
    setSelectedTheme(themes[selectedTheme]);
  };
  const handleTextColorChange = (event) => {
    setSelectedTheme((prevTheme) => ({
      ...prevTheme,
      colors: { ...prevTheme.colors, text: event.target.value },
    }));
  };

  const handleButtonColorChange = (event) => {
    console.log("theme", theme);
    console.log("event.target.value", event.target.value);

    setSelectedTheme((prevTheme) => ({
      ...prevTheme,
      colors: { ...prevTheme.colors, button: event.target.value },
    }));
  };
  return (
    <div css={settingContainerStyle}>
      <h1>Choose Theme</h1>
      <button
        css={[buttonStyle, { backgroundColor: "#0070f3" }]}
        onClick={() => handleThemeChange("primary")}
      >
        Primary
      </button>
      <button
        css={[buttonStyle, { backgroundColor: "#34d399" }]}
        onClick={() => handleThemeChange("secondary")}
      >
        Secondary
      </button>
      <div css={colorPickerContainerStyle}>
        <label>Text Color:</label>
        <input
          type="color"
          css={colorPickerStyle}
          value={theme.colors.text}
          onChange={handleTextColorChange}
        />
      </div>

      {/* Button Color Picker */}
      <div css={colorPickerContainerStyle}>
        <label>Button Color:</label>
        <input
          type="color"
          css={colorPickerStyle}
          value={theme.colors.button}
          onChange={handleButtonColorChange}
        />
      </div>
    </div>
  );
};

export default Setting;
