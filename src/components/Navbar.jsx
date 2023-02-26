import React, {useState} from 'react';
import {StyledNavbar} from "./styles/Navbar.styled.js";
import {ReactComponent as BurgerUnclickedIcon} from "../assets/burger.svg";
import {ReactComponent as BurgerClickedIcon} from "../assets/openburger.svg";

//todo
// [] will contain spotify
// [] login/logout (person icon)
// [] burger menu
// [] current window title name


const Navbar = () => {

    const [burger_class, setBurgerContents] = useState("burger-bar unclicked")
    const [menu_class, setMenuContents] = useState("menu hidden")
    const [isMenuClicked, setMenuClicked] = useState(false)

    const updateMenu = () => {
        if (!isMenuClicked){
            setBurgerContents("burger-bar clicked");
            setMenuContents("menu visible");
        }else {
            setBurgerContents("burger-bar unclicked");
            setMenuContents("menu hidden");
        }
        setMenuClicked(!isMenuClicked)
    }

    return (
        <StyledNavbar>
                <div className="burger-menu" onClick={updateMenu}>
                    {!isMenuClicked ?(
                        <BurgerUnclickedIcon />
                    ) : (
                        <BurgerClickedIcon />
                    )}
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                </div>
                <div className={menu_class}></div>
            <h1>🐥 ダッシュボード   🐥</h1>
        </StyledNavbar>
    );
}


export default Navbar;
