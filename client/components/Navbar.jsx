import React, {useState} from 'react';
import {StyledNavbar} from "../styles/Navbar.styled.js";
import {ReactComponent as BurgerUnclickedIcon} from "../assets/burger.svg";
import {ReactComponent as BurgerClickedIcon} from "../assets/openburger.svg";
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
