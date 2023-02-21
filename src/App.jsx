import React, {useEffect, useState} from "react";
import Dashboard from "./components/Dashboard.jsx";
import HamburgerMenu from "./components/HamburgerMenu.jsx";
// import Header from "./components/Header.jsx";
import QuizArea from "./components/QuizArea.jsx";
import Theme from "./components/styles/Theme.jsx";

function App() {
    return (
        <Theme>
            <div className="App">
                <HamburgerMenu />
                <Dashboard />
                <QuizArea />
            </div>
        </Theme>
    )
}

export default App
