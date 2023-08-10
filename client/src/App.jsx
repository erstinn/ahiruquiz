import React from "react";
import Dashboard from "./scenes/Dashboard.jsx";
import HamburgerMenu from "./scenes/HamburgerMenu.jsx";
// import Navbar from "./components/Navbar.jsx";
import QuizArea from "./scenes/QuizArea.jsx";
import {Theme, GlobalStyle} from "./styles/Theme.jsx";
// import { useMemo } from 'react';
// import { useSelector } from "react-redux";
// import { CssBaseline} from "@mui/material"; //good for css reset :)
// import { createTheme } from "@mui/material";
// import { themeSettings } from "./styles/Theme.jsx";
import { BrowserRouter, Navigate, Routes, Route} from "react-router-dom";
//todo may remove theme imports from mui dno which one


function App() {
    // const mode = useSelector((state) => state.mode); //todo [大事] this grabs the value you created in your `initialState`
    // const theme = useMemo (() => createTheme(themeSettings(mode)), [mode]) //im assuming this changes based on mode
    //todo now do the above on Styled Components theming?
    // [] setup light/dark in Styled Components theming
    return (
        <Theme light> //todo implement after select button
        {/*<Theme> //todo implement after select button*/}
        {/*    <GlobalStyle />*/}
            <div className="App">
                {/*        <CssBaseline />*/}
                <BrowserRouter>
                    <Routes>
                {/*        TODO <Route path='/' element={ <LoginPage /> } />*/}
                {/*        <Route path='/dashboard/:userId' element={ <Dashboard /> } />*/}
                        <Route path='/dashboard/' element={ <Dashboard /> } />
                    </Routes>
                </BrowserRouter>
                {/*<HamburgerMenu currentTheme="lightTheme"/>*/}

                {/*<Dashboard light/>*/}
                {/*<QuizArea currentTheme="lightTheme"/>*/}
            </div>
        </Theme>
    )
}

export default App
