import styled from "styled-components";
import React from "react";
import {ReactComponent as BurgerClosedIcon} from '../../assets/burger.svg'

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: flex-start;
  background-color: ${(props)=> props.theme.colors.purple}; 
  margin: -0.6rem -0.5rem;
  padding: 0 1rem;
  color: ${(props)=> props.theme.colors.yellow};
  //width: 100%;
  height: 4rem;
  
  h1{
    //position: absolute;
    margin: auto;
    align-self: center;
  }
  
  & .burger-menu{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    float: left;
    cursor: pointer;
    height: 100%;
    width: 4rem;
    background-color: ${(props)=> props.theme.colors.turquoise};
  }
  
  svg {
    width: 4rem;
    height: 10rem;
    background-color: ${(props)=> props.theme.colors.yellow};

  }
  & .menu {
    width: 11%;
    height: 80vh;
    background-color: ${(props)=> props.theme.colors.turquoise};
  }

  & .hidden{
    display: none;
  }
  
  & .visible{
    display: inherit;
  }
  
  //svg {
  //  //display: none;
  //  width: 10rem; 
  //  height: 10rem;
  //}
    
`;


// const StyledBurgerBar = styled(Icon)