"use client";

/** @jsxImportSource @emotion/react */

// components/Sidebar.js
import { css } from "@emotion/react";
import Link from "next/link";
import { ThemeContext } from "@/app/layout";
import { useContext } from "react";
const Sidebar = () => {
  const { theme } = useContext(ThemeContext); // Use the useContext hook to access the theme

  const sidebarStyle = css`
    background-color: ${theme.colors.background ||
    "#f0f0f0"}; // Use the theme's background color
    padding: 20px;
    width: 200px;
    /* height: 100vh; // Set the sidebar to take full height of the viewport */
  `;

  const linkStyle = css`
    color: ${theme.colors.text || "#000000"}; // Use the theme's text color
    text-decoration: none;
    display: block;
    margin-bottom: 10px;
  `;

  return (
    <div css={sidebarStyle}>
      <Link href="/category">
        <a css={linkStyle}>Category</a>
      </Link>
      <Link href="/profile">
        <a css={linkStyle}>Profile</a>
      </Link>
      <Link href="/setting">
        <a css={linkStyle}>Setting</a>
      </Link>
    </div>
  );
};

export default Sidebar;
