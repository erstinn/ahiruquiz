// import { useState } from 'react'
import React from "react";
import Dashboard from "./components/Dashboard.jsx";
import HamburgerMenu from "./components/HamburgerMenu.jsx";
import Navbar from "./components/Navbar.jsx";
import QuizArea from "./components/QuizArea.jsx";

function App() {
    const [count, setCount] = useState(0);
    return (
        <div className="App">
            <Dashboard />
            <HamburgerMenu />
            <Navbar />
            <QuizArea />
        </div>
    )
}

export default App
