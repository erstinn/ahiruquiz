import React from 'react';
import {ThemeProvider} from "styled-components";

const theme = {
    colors: {
        lightBg: "#D8D3CF",
        darkBg: "#3d435b",
        black: "#4F4541",
        blue: "#66B2F1",
        lightBlue: "#CAD2C7",
        yellow: "#fbd988",
        mustard: "#EA9D34",
        darkBlue: '#286983',
        darkPink: "#D7827E",
        purple: "#8F79A8",
        lightPink: "#F2DDDB",
        pink: "#EEA9A1",
        turquoise: "#C5E1DD",
        testColor : "#8F79A8",
        easyTagColor: "", //turq
        mediumTagColor: "", //yel
        hardTagColor: "", //pink
    },
    fonts: ['add'],
    fontSizes: {
        xs: '0.8rem',
        s: '1.0rem',
        m: '1.5rem',
        l: '3rem'
    },
    fontWeights: {
        light: 100,
        normal: 200,
        bold: 300
    },
    screenSizes:{
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: '1920px',
    }
};
export default function Theme ({ children }) {
    return <ThemeProvider theme={theme}> {children} </ThemeProvider>;
}

//todo may remove this but im assuming i might use them for mui icons :)
export const themeSettings = (mode) => {
    return{
        //setting up default colors for UI themes:
        pallete: {
            mode: mode,
            ...(mode === 'dark' ? { //esp for dark/light themes
                primary:{
                    dark: theme.colors['black'],
                    main: theme.colors['mustard'],
                    light: theme.colors['darkBlue'],
                },
                neutral:{
                    dark: theme.colors['purple'],
                    main: theme.colors['darkPink'],
                    light: theme.colors['yellow'],
                },
                background:{
                    default: theme.colors['darkBg'],
                    alt: theme.colors['black']
                }
            } : {
                primary:{
                    dark: theme.colors['black'],
                    main: theme.colors['yellow'],
                    light: theme.colors['turquoise'],
                },
                neutral:{
                    dark: theme.colors['purple'],
                    main: theme.colors['pink'],
                    light: theme.colors['yellow'],
                },
                background:{
                    default: theme.colors['lightBg'],
                    alt: theme.colors['lightPink']
                },
            }),
        },
        typography:{
            fontFamily: ["Rubik", "sans-serif"].join(","),
            fontSize: 12,
        }
    }
}

