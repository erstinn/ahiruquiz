import React from 'react';
import {ThemeProvider} from "styled-components";

const lightTheme = {
    colors: {
        bg: "#D8D3CF",
        black: "#4F4541",
        blue: "#66B2F1",
        lightBlue: "#CAD2C7",
        yellow: "#fbd988",
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
    return <ThemeProvider theme={lightTheme}> {children} </ThemeProvider>;
}


