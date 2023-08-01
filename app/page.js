"use client";
/** @jsxImportSource @emotion/react */
import Button from "@/components/Buttons";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

// import React, { useState } from "react";
// import { css } from "@emotion/react";
// import { ThemeProvider } from "@emotion/react";

// const dayTheme = {
//   color: "#37d8e6",
//   backgroundColor: "#ffdd00",
// };

// const nightTheme = {
//   color: "#2c3e50",
//   backgroundColor: "#bdc3c7",
// };
// const Page = () => {
//   const [isLight, setIsLight] = useState(false);
//   const [theme, setTheme] = useState(dayTheme);

//   const handleClick = () => {
//     const isDay = !isLight;
//     setIsLight(isDay);
//     setTheme(isDay ? dayTheme : nightTheme);
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <button onClick={handleClick} css={styles.testing({ theme })}>
//         Click here to change theme
//       </button>
//     </ThemeProvider>
//   );
// };

// export default Page;

// const styles = {
//   testing: ({ theme }) => css`
//     color: ${theme.color};
//     background-color: ${theme.backgroundColor};
//   `,
// };

// pages/index.js
import { css } from "@emotion/react";
import { useState } from "react";

const containerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home = () => {
  return (
    <div css={containerStyle}>
      This is home page
      <footer>{/* Footer content */}</footer>
    </div>
  );
};

export default Home;
