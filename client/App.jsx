import React from "react";
import Dashboard from "./scenes/Dashboard";
import HamburgerMenu from "./components/HamburgerMenu";
// import Navbar from "./components/Navbar.jsx";
import QuizArea from "./scenes/QuizArea";
import Theme from "./styles/Theme";

import { BrowserRouter, Navigate, Routes, Route} from "react-router-dom";

function App() {
    return (
        <Theme>
            <div className="App">
                {/*<BrowserRouter>*/}
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
