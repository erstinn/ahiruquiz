import React, { useState } from 'react';
import { StyledNavbar } from "../styles/Navbar.styled.js";
import { ReactComponent as BurgerUnclickedIcon } from "../assets/burger.svg";
import { ReactComponent as BurgerClickedIcon } from "../assets/openburger.svg";
import {
    Box, IconButton,
    InputBase, Typography,
    Select, MenuItem,
    FormControl,
    useTheme, useMediaQuery
} from '@mui/material';
import {
    Search,
    DarkMode, LightMode,
    Help, Menu, Close
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
// import { setMode, setLogout } from 'state';
import { useNavigate } from "react-router-dom";
import FlexBetween from "../components/FlexBetween.jsx";

// import {
//     createBrowserRouter,
//     RouterProvider,
//     Route,
//     Link,
// } from "react-router-dom";

//todo
// [] will contain spotify??
// [] login/logout (person icon/stuff) inside burger
// [] burger LIST
// [] hook for hover?

const Navbar = () => {

    const [burger_class, setBurgerContents] = useState("burger-bar unclicked")
    const [menu_class, setMenuContents] = useState("menu hidden")
    const [isMenuClicked, setMenuClicked] = useState(false)

    const dispatch = useDispatch(); //for dispatching actions
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);
    //todo good way to use media query inside of react instead of in css; may change tho
    const isNonMobileScreens = useMediaQuery('(min-width:1000px)') //hook of mui to determine if current screen is is below/higher than `min-width`

    //uncomment these to use mui theming :) + its palette
    // const theme = useTheme(); //if you wna use theming of mui
    //sample use:
    // const dark = theme.palette.neutral.dark;
    // const background = theme.palette.background.default;

    const username = `${user.username}`; //reason why i made it a var: conflicted if will do firstname + lastname
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

    // const hoverEffect = () =>{
    //     if (cardHovered){
    //         setCardHovered()
    //     }
    // }

    return (
        //if you wna use FlexBetween, enclose the whole thign in it instead of StyledNavbar
        // return <FlexBetween padding='1rem 6%' backgroundColor={alt}>
        <StyledNavbar>
            <div className="burger-menu" onClick={updateMenu}>
                {!isMenuClicked ?(
                    <BurgerUnclickedIcon />
                ) : (
                    <BurgerClickedIcon />
                )}
                {/*<Link to='/'> <li> ランダム小テスト </li></Link>*/}
                {/*<Link to='/'> <li> 習熟ランキング </li></Link>*/}
                {/*<Link to='/'> <li> 設定 </li></Link>*/}
                {/*<Link to='/'> <li> ログアウト </li></Link>*/}
                    {/*<div className={burger_class}>a</div>*/}
                {/*<div className={burger_class}></div>*/}
                {/*<div className={burger_class}></div>*/}
            </div>
            <div className={menu_class}></div>
            <h1>🐥 ダッシュボード   🐥</h1>
        </StyledNavbar>
    );
}


export default Navbar;
