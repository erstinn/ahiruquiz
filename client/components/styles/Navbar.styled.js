import styled from "styled-components";
import React from "react";
import {ReactComponent as BurgerClosedIcon} from '../../assets/burger.svg'

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: flex-start;
  // background-color: ${(props)=> props.theme.colors.purple}; 
  background-color: #F0E9D6;
  margin: -0.6rem -0.5rem;
  padding: 0 1rem;
  color: ${(props)=> props.theme.colors.black};
  //width: 100%;
  height: 4rem;
  transition: transform 3s;
  
  
  h1{
    position: absolute;
    top: 1%;
    left: 50%;
    transform: translate(-50%, -50%);    
  }
  
  & .burger-menu{ //bar
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    float: left;
    cursor: pointer;
    height: 100%;
    width: 4rem;
  }
  
  svg {
    z-index: 2;
    width: 3rem;
    height: 7rem;
    background-color: ${props=> props.theme.colors.yellow};
  }
  & .menu {
    z-index: 1;
    width: 20%;
    height: 80vh;
    margin-top: 60px;
    position: fixed;
    // background-color: ${props=> props.theme.colors.yellow};
    background-color: #D1D6C8;
    margin-left: -1rem;
  }
  

  & .hidden{
    //display: none;
    transition: transform 1s;
    transform: translateX(-100%);
  }
  
  
  & .visible{
    display: inherit;
    transition: transform 1s;
    & .svg {
      background-color: #fff;
    }
  }

  a{
    color: ${props => props.theme.colors.black};
  }
  
`;


// const StyledBurgerBar = styled(Icon)