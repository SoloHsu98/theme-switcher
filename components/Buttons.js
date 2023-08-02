// components/Buttons.js
/** @jsxImportSource @emotion/react */
import { ThemeContext } from "@/app/layout";
import { useContext } from "react";
import { css } from "@emotion/react";

const Button = ({ label }) => {
  const { theme } = useContext(ThemeContext); // Access the theme from the context

  const buttonStyle = css`
    padding: 10px 20px;
    margin: 5px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    font-weight: bold;
    background-color: ${theme.colors.button || "#fbbf24"};
    color: "#000000";
  `;

  return <button css={buttonStyle}>{label}</button>;
};

export default Button;
