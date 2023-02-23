import React, {useState} from 'react';
import {StyledNavbar} from "./styles/Navbar.styled.js";

//todo
// [] will contain spotify
// [] login/logout (person icon)
// [] burger menu
// [] current window title name


function Navbar(props) {

    const [burger_contents, setBurgerContents] = useState("burger-bar unclicked")
    const [menu_contents, setMenuContents] = useState("menu hidden")
    const [isMenuClicked, setMenuClicked] = useState(false)

    const updateMenu = () => {
        if (!isMenuClicked){
            setBurgerContents("burger-bar clicked")
            setMenuContents("menu visible")
        }else {
            setBurgerContents("burger-bar unclicked")
            setMenuContents("menu hidden")
        }
    }

    return (
        <StyledNavbar>
            <h1>🐥 ダッシュボード   🐥</h1>
            <nav>
                <div className={burger-menu}>
                    <div className={burger_contents} onClick={updateMenu}></div>
                    <div className={burger_contents} onClick={updateMenu}></div>
                    <div className={burger_contents} onClick={updateMenu}></div>

                </div>

                <div className={menu_contents}></div>
            </nav>
        </StyledNavbar>
    );
}

export default Navbar;