import React from 'react';
import {createGlobalStyle, ThemeProvider} from "styled-components";

const theme = {
    dark : {
        bg: "#3d435b",
        card: '#2F343F',
        font: "#F0E3BB",
        nav: "#D4B256",
        extra1: "#8F79A8",
        extra2: "#afd5ad",
        tag1: '#286983',
        tag2: "#EA9D34",
        tag3: "#C38895",
    },
    light : {
        bg: "#D8D3CF",
        card: 'white',
        font: "#4F4541",
        nav: "#F0E3BB",
        extra1: "#EDDFDC",
        extra2: "#CAD2C7",
        tag1: "#C1E9C6",
        tag2: "#D4B256",
        tag3: "#EEA9A1",
    },
    fontFamily: ['M PLUS Rounded 1c', 'Arial', 'sans-serif'].join(","),
    fontSizes: {
        xs: 'calc(12px + 0.5vw)',
        s: 'calc(12px + 0.8vw)',
        m: 'calc(10px + 1vw);',
        l: 'calc(9px + 7vw)'
    },
    fontWeights: {
        light: 300,
        normal: 400,
        bold: 700
    },
    screenSizes:{
        sm: "400px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: '1920px',
    }
};
export function Theme ({ children }) {
    return <ThemeProvider theme={theme}> {children} </ThemeProvider>;
}

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 100%; //ensures fontsize on ur site matches 100% of default fontsize set on browser
    box-sizing: border-box; //e.g. adding padding to 300px box, final width is still 300 regardless of adding paddings
  }

  *, *::before *::after {
    box-sizing: inherit; //inherits box-sizing under \`html\` selector
    font-family: ${(props) => props.theme.fontFamily}; //dno if good here
  }
  
  h1 {
    font-weight: ${(props) => props.theme.fontWeights.bold};
  }
  
  h2, h3 {
    font-weight: ${(props) => props.theme.fontWeights.normal};
    margin-top: 0; //browsers by default add margin top and bottom; can either remove on, depending on ur pref.
  }
  
  p {
    font-weight: ${(props) => props.theme.fontWeights.normal};
  }


  a, a:visited, a:active {
    text-decoration: none; //removes line that are added to links by default
  }
`

//todo may remove this but im assuming i might use them for mui icons :)
//     return{
//         //setting up default colors for UI themes:
//         palette: {
//             mode: mode,
//             ...(mode === 'dark' ? { //esp for dark/light themes
//                 primary:{
//                     dark: theme.colors['black'],
//                     main: theme.colors['mustard'],
//                     light: theme.colors['darkBlue'],
//                 },
//                 neutral:{
//                     dark: theme.colors['purple'],
//                     main: theme.colors['darkPink'],
//                     light: theme.colors['yellow'],
//                 },
//                 background:{
//                     default: theme.colors['darkBg'],
//                     alt: theme.colors['black']
//                 }
//             } : {
//                 primary:{
//                     dark: theme.colors['black'],
//                     main: theme.colors['yellow'],
//                     light: theme.colors['turquoise'],
//                 },
//                 neutral:{
//                     dark: theme.colors['purple'],
//                     main: theme.colors['pink'],
//                     light: theme.colors['yellow'],
//                 },
//                 background:{
//                     default: theme.colors['lightBg'],
//                     alt: theme.colors['lightPink']
//                 },
//             }),
//         },
//         typography:{
//             fontFamily: ["Rubik", "sans-serif"].join(","),
//             fontSize: 12,
//         }
//     }
// }
//
