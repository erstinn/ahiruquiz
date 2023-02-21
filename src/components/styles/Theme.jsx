import React from 'react';
import {ThemeProvider} from "styled-components";

const lightTheme = {
    colors: {
        bg: "#FAF4ED",
        editButton: "#4F4541",
        blue: "#276882",
        lightBlue: "#9FA8A6",
        yellow: "#E99C33",
        purple: "#8F79A8",
        lightPink: "#D6817D",
        pink: "#C68086",
        turquoise: "#56949F",
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
    }
};
export default function Theme ({ children }) {
    return <ThemeProvider theme={lightTheme}> {children} </ThemeProvider>;
}


