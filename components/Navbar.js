"use client";
/** @jsxImportSource @emotion/react */
import { ThemeContext } from "@/app/layout";
import { css } from "@emotion/react";
import Link from "next/link";
import { useContext } from "react";
// Import the ThemeContext

const Navbar = () => {
  const { theme } = useContext(ThemeContext); // Use the useContext hook to access the theme

  const navbarStyle = css`
    background-color: ${theme.colors.primary ||
    "#0070f3"}; // Use the theme's primary color
    padding: 10px;
    color: ${theme.colors.text || "#ffffff"}; // Use the theme's text color
    display: flex;
    justify-content: space-between;
    width: 100%;
  `;

  const linkStyle = css`
    color: ${theme.colors.text || "#ffffff"}; // Use the theme's text color
    text-decoration: none;
    margin-left: 20px;
  `;

  return (
    <nav css={navbarStyle}>
      <span>Logo</span>
      <div>
        <Link css={linkStyle} href="/">
          Home
        </Link>
        <Link css={linkStyle} href="/service">
          Service
        </Link>
        <Link css={linkStyle} href="/contact">
          Contact
        </Link>
        <Link css={linkStyle} href="/contact">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

{
  /* <nav css={navbarStyle}>
  <span onClick={onToggleSidebar}>Logo</span>
  <div>
    <Link css={linkStyle} href="/">
      Home
    </Link>
    <Link css={linkStyle} href="/service">
      Service
    </Link>
    <Link css={linkStyle} href="/contact">
      Contact
    </Link>
    <Link css={linkStyle} href="/contact">
      About
    </Link>
  </div>
</nav>; */
}
