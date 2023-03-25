import React from "react";
import Dashboard from "./scenes/Dashboard.jsx";
import HamburgerMenu from "./components/HamburgerMenu.jsx";
// import Navbar from "./components/Navbar.jsx";
import QuizArea from "./scenes/QuizArea.jsx";
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
