import React from "react";
import Dashboard from "./scenes/Dashboard.jsx";
import HamburgerMenu from "./scenes/HamburgerMenu.jsx";
// import Navbar from "./components/Navbar.jsx";
import QuizArea from "./scenes/QuizArea.jsx";
import Theme from "./styles/Theme.jsx";
import { useMemo } from 'react';
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material"; //good for css reset :)
import { createTheme } from "@mui/material";
import { themeSettings } from "./styles/Theme.jsx";

import { BrowserRouter, Navigate, Routes, Route} from "react-router-dom";
//todo may remove theme imports from mui dno which one
function App() {
    // const mode = useSelector((state) => state.mode); //todo [大事] this grabs the value you created in your `initialState`
    //
    // const theme = useMemo (() => createTheme(themeSettings(mode)), [mode]) //im assuming this changes based on mode
    //todo now do the above on Styled Components theming?
    // [] setup light/dark in Styled Components theming

    return (
        <Theme>
            <div className="App">
                {/*<BrowserRouter>*/}
                        <CssBaseline />
                {/*    <Routes>*/}
                {/*        <Route path='/' element={ <LoginPage /> } />*/}
                {/*        <Route path='/home' element={ <home /> } /> /!*will be like quizlet.com when not loggedin *!/*/}
                {/*        <Route path='/dashboard/:userId' element={ <Dashboard /> } />*/}
                {/*        /!*<Route path='/setranks/:userId' element={ <Shuujuku /> } />*!/*/}

                {/*    </Routes>*/}
                {/*</BrowserRouter>*/}
                <HamburgerMenu />
                <Dashboard />
                <QuizArea />
            </div>
        </Theme>
    )
}

export default App
